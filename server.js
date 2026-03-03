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

app.use((req, res, next) => {
  const time = new Date().toLocaleTimeString();
  console.log(`[${req.method}] ${req.url} at ${time}`);
  next();
});

function validateId(req, res, next) {
  const userId = Number(req.params.id);

  if (isNaN(userId)) {
    return res.status(400).json({ message: "Id must be a Number" });
  }

  req.userId = userId;
  next();
}

function checkExist(req, res, next) {
  const user = users.find((u) => {
    return u.id === req.userId;
  });

  if (!user) {
    return res.status(400).json({ message: "User Not Foound" });
  }

  req.user = user;
  next();
}

app.get("/user/:id", validateId, checkExist, (req, res) => {
  res.json(req.user);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

/**{
  params   → from URL
  query    → from ?key=value
  body     → from POST data
  headers  → from request metadata
  method   → HTTP method
  url      → full URL
} */
