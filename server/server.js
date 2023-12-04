const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./connection");

const PORT = 3500;

app.listen(PORT, async () => {
  try {
    await connectDB();
    console.log(`server running on port ${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
