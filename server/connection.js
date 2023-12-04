// import {mongoose } from 'mongoose';
const mongoose = require('mongoose');
const http = require("http");
const URL = "mongodb+srv://alisbahhina:XLIBbcIE0dsWDsSp@cluster0.rd3md3x.mongodb.net/";

async function connetDb(){

    try {
        
        await mongoose.connect(URL);
        console.log("connected to database");

    } catch (error) {
        console.log(error);
    }

    // http.listen(4000, function () {
    //     console.log("Server is running on Port 4000 ");
    //   });
}


// export default connetDb;


connetDb();