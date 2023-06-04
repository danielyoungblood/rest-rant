require("dotenv").config();
const mongoose = require("mongoose");

try {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("connected successfully")
} catch (error) {
  console.log("could not connect - " + error);
}

module.exports.Place = require("./places");
module.exports.Comment = require("./comment");
