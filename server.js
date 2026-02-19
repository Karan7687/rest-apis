const express = require("express");

const app = express();

app.listen(3000, () => {
  console.log("Listening 3000 PORT");
});

app.get("/", (req, res) => {
  res.send("Hello Company");
});
