const express = require("express");
const fetch = require("node-fetch");
const Anthropic = require("@anthropic-ai/sdk");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000; // Choose any available port

app.use(bodyParser.json());

// Add middleware to handle preflight requests
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") {
    // Respond to preflight requests immediately
    res.status(200).end();
  } else {
    next();
  }
});

// Define a route to proxy requests to the external API
app.use("/api", async (req, res) => {
  const { userStory } = req.body;
  // Here you can use the userStory data as needed

  try {
    // Forward the request to the external API
    const client = new Anthropic({
      apiKey:
        "",
      fetch: async (url, init) => {
        console.log("About to make a request", url, init);
        const response = await fetch(url, init);
        console.log("Got response", response);
        return response;
      },
    });
    const response = await client.messages.create({
      max_tokens: 1024,
      messages: [
        {
          role: "user",
          content: `${userStory} قم بإنشاء قصة صغيرة للأطفال، من السهل قراءتها وتركيز الذكريات على توليد شخصية وهمي وممتع للغاية استنادًا إلى هذا المحتوى :`,
        },
      ],
      model: "claude-3-opus-20240229",
    });
    // Add CORS headers to the response
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    // Forward the API response back to the frontend
    res.json(response);
  } catch (error) {
    console.error("Error proxying request:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Start the proxy server
app.listen(PORT, () => {
  console.log(`Proxy server is running on http://localhost:${PORT}`);
});
