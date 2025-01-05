const express = require("express");
const { adminAuth, userAuth } = require("./middlewares/auth");
// const db = require("./config/database");
const app = express();

app.get("/user", userAuth, (req, res) => {
  res.send("User data sent");
});

app.get("/admin/getAllData", adminAuth, (req, res) => {
  res.send("All data sent");
});

app.get("/admin/deleteUser", adminAuth, (req, res) => {
  res.send("Deleted a user");
});

app.listen(5000, () => {
  console.log("Server is listening at PORT: 5000");
});
