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
  {
    id: 30,
    name: "Shivam",
    status: "All-rounder",
  },
  {
    id: 40,
    name: "Tilak",
    status: "Batsman",
  },
  {
    id: 50,
    name: "Surya",
    status: "Captain",
  },
];

app.get("/user/:id", (req, res) => {
  const userId = Number(req.params.id);
  const queryFields = req.query.fields;

  const user = users.find((u) => u.id === userId);

  if (!user) {
    return res.status(400).json({ message: "Invalid Id" });
  }

  const splitFeilds = queryFields.split(",");

  const filtered = {};

  splitFeilds.forEach((f) => {
    if (user[f] !== undefined) {
      return (filtered[f] = user[f]);
    }
  });
  res.json(filtered);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
