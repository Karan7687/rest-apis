const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello APIS");
});

const users = [
  {
    id: 10,
    name: "Sanju",
    status: "Batsman",
  },
  {
    id: 20,
    name: "Bumrah",
    status: "Bowler",
  },
];
app.get("/user/:id", (req, res) => {
  const userId = Number(req.params.id);

  const user = users.find((u) => u.id === userId);

  res.json(user);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
