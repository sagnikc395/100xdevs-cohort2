import express from "express";
import { createClient } from "redis";

const app = express();
app.use(express.json());

const client = createClient();
client.connect();

app.post("/submit", async (req, res) => {
  const { problemId, userId, code, lang } = req.body;

  try {
    await client.lPush(
      "submission",
      JSON.stringify({ problemId, userId, code, lang })
    );
    res.status(200).json({
      message: "Submission Received!",
    });
  } catch (e) {
    res.status(500).json({
      message: "Submission Failed!",
    });
  }
});
async function startServer() {
  try {
    await client.connect();
    console.log("Connected to Redis");

    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  } catch (error) {
    console.error("Failed to connect to Redis", error);
  }
}

startServer();
