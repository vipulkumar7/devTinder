const jwt = require("jsonwebtoken");
const User = require("../models/user");
require("dotenv").config();

const userAuth = async (req, res, next) => {
  try {
    const JWT_KEY = process.env.JWT_KEY;
    // Read the token from req cookies
    const { token } = req.cookies;
    if (!token) {
      throw new Error("Invalid Token");
    }

    const { _id } = await jwt.verify(token, JWT_KEY);
    const user = await User.findById(_id);
    if (!user) {
      throw new Error("User not found");
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(400).send("ERROR : " + error.message);
  }
};

module.exports = {
  userAuth,
};
