const express = require("express");
const bodyParser = require("body-parser");

const postEvent = (port, event) => {
  fetch(`http://localhost:${port}/events`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(event),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const app = express();
app.use(bodyParser.json());

app.post("/events", (req, res) => {
  const event = req.body;

  postEvent(4000, event);
  postEvent(4001, event);
  postEvent(4002, event);

  res.send({ status: "OK" });
});

app.listen(4005, () => {
  console.log("Listening on 4005");
});
