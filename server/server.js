const express = require("express");
const app = express();
const http = require("http").Server(app);
const cors = require("cors");

require("dotenv").config();
const connectDB = require("./connection");

http.listen(4000, function () {
    console.log("Server is running on Port 4000 ");
  });