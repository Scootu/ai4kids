import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ChatWithAi from "./components/ChatWithAi.tsx";
import HomePage from "./components/HomePage.tsx";

const route = createBrowserRouter([
  {
    path: "/ai4kids",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "story",
        element: <ChatWithAi />,
        action: async ({ request }) => {
          const formData = await request.formData();
          const userStory = formData.get("userStory");
          // Assuming this code is in your React component
          console.log(userStory);

          const response = await fetch(
            "http://localhost:3000/api/v1/messages",
            {
              method: "POST", // or 'GET', 'PUT', etc.
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ userStory: userStory }), // Send userStory in the request body
            }
          );
          if (response.ok) {
            const data = await response.json();
            return data.content[0].text;
          } else {
            console.error("Failed to fetch data:", response.statusText);
            return null; // Or handle error as needed
          }
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);
