const mongoose =require("mongoose");

const seatSchema=new mongoose.Schema({
    seats:{type:Number,required:true}
});

const Seat=mongoose.model('SEAT',seatSchema);

module.exports=Seat;

