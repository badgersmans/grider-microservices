const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { randomBytes } = require("crypto");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", async (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;

  posts[id] = {
    id,
    title,
  };

  const response = await fetch("http://localhost:4005/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      type: "PostCreated",
      data: {
        id,
        title,
      },
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to emit post event: ${response.status}`);
  }

  res.status(201).send(posts[id]);
});

app.listen(4000, () => {
  console.log("Listening on 4000");
});
