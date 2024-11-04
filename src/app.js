const express = require("express");

const app = express();

// app.use("/route", rH, [rH2, rH3], rH4, rH5)

app.use(
  "/user",
  (req, res, next) => {
    console.log("Handling the route user 1 !!");
    next();
  },
  (req, res, next) => {
    console.log("Handling the route user 2 !!");
    // res.send("2nd Response");
    next();
  },
  (req, res, next) => {
    console.log("Handling the route user 3 !!");
    // res.send("3rd Response");
    next();
  },
  (req, res, next) => {
    console.log("Handling the route user 4 !!");
    // res.send("4th Response");
    next();
  },
  (req, res, next) => {
    console.log("Handling the route user 5 !!");
    res.send("5th Response");
  }
);

app.listen(5000, () => {
  console.log("Server is listening at PORT: 5000");
});
