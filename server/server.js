const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config({path: './config.env' }); 
const bodyParser = require('body-parser');



app.use(cors());
app.use(bodyParser());


const connectDB = require("./connection");




const userRoutes = require('./routes/userRoutes');

app.use('/user' , userRoutes);


const PORT = 3500;

app.listen(PORT , async () => {
  try{
    await connectDB();
    console.log(`server running on port ${PORT}`);
    
  }catch(err){
    console.log("something went wrong ");
    process.exit(1);
  }
})