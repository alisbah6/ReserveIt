
const mongoose = require("mongoose");

//user schema
const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    username:{type:String,required:true},
    password:{type:String,required:true},
    confirmpassword:{type:String,required:true},
});

//feedback schema
const feedbackSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    msg:{type:String,required:true},
})
const User=mongoose.model('USER',userSchema);
const Feedback=mongoose.model('FEED',feedbackSchema);

module.exports=User;
module.exports=Feedback;
