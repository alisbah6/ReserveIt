const mongoose = require("mongoose");

const URL =
  "mongodb+srv://alisbahhina:XLIBbcIE0dsWDsSp@cluster0.rd3md3x.mongodb.net/";

async function connetDb() {
  return mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

module.exports = connetDb;
