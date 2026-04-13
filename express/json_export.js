const express = require("express");
const app = express();

// import JSON
const data = require("./data.json");

app.get("/", (req, res) => {
  res.json(data);
});

app.listen(3000);