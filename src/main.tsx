import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ChatWithAi from "./components/ChatWithAi.tsx";
import HomePage from "./components/HomePage.tsx";
import Anthropic from "@anthropic-ai/sdk";
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

          const anthropic = new Anthropic({
            apiKey:
              "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", // defaults to process.env["ANTHROPIC_API_KEY"]
          });

          const msg = await anthropic.messages
            .create({
              model: "claude-3-opus-20240229",
              max_tokens: 1024,
              messages: [
                {
                  role: "user",
                  content: `Generate a storie for kids with the following content :${userStory}`,
                },
              ],
            })
            .catch(async (err) => {
              if (err instanceof Anthropic.APIError) {
                console.log(err.status); // 400
                console.log(err.name); // BadRequestError
                console.log(err.headers); // {server: 'nginx', ...}
              } else {
                throw err;
              }
            });
          return msg || null;
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
