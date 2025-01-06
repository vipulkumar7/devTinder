const mongoose = require("mongoose");
const express = require("express");

const app = express();

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://vipul15kumar:RDSatria06@redmart.w5oga8l.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
