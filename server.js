const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("You are hired !");
});

//=============== dynamic route ================
//array os objects
const users = [
  { id: 1, topic: "array" },
  { id: 2, topic: "String" },
  { id: 3, topic: "Tree" },
  { id: 4, topic: "Graph" },
  { id: 5, topic: "DP" },
  { id: 6, topic: "LinkedList" },
  { id: 7, topic: "Stack" },
  { id: 8, topic: "Queue" },
];

//route defn
app.get("/users/:id", (req, res) => {
  const userId = Number(req.params.id);

  const user = users.find((u) => u.id === userId);
  //fetch according to id

  if (!user) {
    return res.status(400).json({ message: "Invalid Id" });
  }

  res.json(user);
});
app.listen(3000, () => {
  console.log("Listening to 3000");
});
