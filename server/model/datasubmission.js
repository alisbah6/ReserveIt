const mongoose = require("mongoose");

const submissionSchema=new mongoose.Schema({
    Restraunt:{type:String,required:true},
    BranchName:{type:String,required:true},
    UserEmail:{type:String,required:true},
    Seat:{type:String,required:true},
    item:{type:String,required:true},
    time:{type:String,required:true},
    date:{type:String,required:true},
    contact:{type:String,required:true},
});

const Submission=mongoose.model('SUBMIT',submissionSchema);

module.exports=Submission;