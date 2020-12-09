const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.status(200).send("First get");
});

app.post("/body", (req, res) => {
  const insideBody = req.body.body;
  res.status(200).send(`First post: ${insideBody}`);
});

module.exports = app;
