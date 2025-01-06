const express = require("express");
const connectDB = require("./config/database");
const UserModel = require("./models/user");
const app = express();

app.use(express.json());

app.post("/signup", async (req, res) => {
  const { firstName, lastName, emailId, password } = req.body;
  const user = new UserModel({
    firstName,
    lastName,
    emailId,
    password,
  });
  try {
    await user.save();
    res.send("User added successfully");
  } catch (error) {
    res.status(400).send("Error saving the user" + error.message);
  }
});

connectDB()
  .then(() => {
    console.log("Database connected successfully");
    app.listen(5000, () => {
      console.log("Server is listening at PORT: 5000");
    });
  })
  .catch((err) => {
    console.log("Database not connected!");
  });
