import { PrismaClient } from "@prisma/client";
import express from "express";

const app = express();
app.use(express.json());

const client = new PrismaClient();

for (let i = 0; i < 100; i++) {
  console.log(i);
}

app.get("/", (req, res) => {
  res.json({
    message: "Healthy server",
  });
});

app.post("/", async (req, res) => {
  await client.user.create({
    data: {
      email: req.body.email,
      name: req.body.name,
    },
  });

  res.json({
    message: "Done signing up!",
  });
});

app.listen(3000);
