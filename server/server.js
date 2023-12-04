const express = require("express");
// import { express } from "express";
const app = express();
const cors = require("cors");

require("dotenv").config();
const connectDB = require("./connection");

