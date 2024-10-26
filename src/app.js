const express = require("express");

const app = express();

app.use('/test', (req, res) => {
  res.send("Hello world from serverddd");
});

app.listen(3000, () => {
  console.log("Server is listening at PORT: 3000");
});
