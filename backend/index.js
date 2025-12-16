const express = require("express");
const db = require("./db");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Bùi Mai Trâm Anh - DH52200319</h1>");
});

app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});