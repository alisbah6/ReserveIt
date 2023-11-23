import {mongoose } from 'mongoose';

const URL = "mongodb+srv://alisbahhina:XLIBbcIE0dsWDsSp@cluster0.rd3md3x.mongodb.net/";

async function connetDb(){

    try {
        
        await mongoose.connect(URL);
        console.log("connected to database");

    } catch (error) {
        console.log(error);
    }

}


export default connetDb;


connetDb();