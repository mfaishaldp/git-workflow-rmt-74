//! ini dari feat - b
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/register", (req, res) => {
  res.send("Hello Register!");
});
app.get("/login", (req, res) => {
  res.send("Hello Login!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
