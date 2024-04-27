const User = require("../model/userSchema");
const Feedback = require("../model/feedbackSchema");
const Submission = require("../model/datasubmission");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

/*  function to login:

status:
200: user found , returns the data of the current user,
400: for bad request , if email or password is missing,
401: unauthorized: if the email and paswword does not match

*/

const login = async (req, res) => {
    try {
        const { email, password } = req.query;

        //validating if the email and the password exist.
        if (!email) {
            return res.status(400).json({ message: "email is required" });
        }

        if (!password) {
            return res.status(400).json({ message: "password is required" });
        }

        // finding user for the given email.
        const user = await User.findOne({ email: email });

        if (!user) {
            return res.status(401).json({ message: "no user found for this email" });
        }
        //comparing the password
        const isMatched = await bcrypt.compare(password, user.password);
        //generating token
        // token=jwt.sign(user,secretKey,{expiresIn:'1h'},(err,token)=>{
        //     res.json(token)
        // }); 
        // token = user.generateAuthToken();
        // console.log(token);
        // res.cookie("jwtoken", token, {
        //     expires: new Date(Date.now() + 25892000000),
        //     httpOnly: true
        // });
        if (!isMatched) {
            return res.status(401).json({ message: "incorrect Password" });
        }
        const token=jwt.sign({email:user.email,id:user.id},"test",{expiresIn:"1h"});
    res.status(200).json({result:user,token})
        return res.status(200).json(user);       
    }
    catch (err) {
        console.log(err);
        return res.status(500);
    }
};

reset_password = async (req, res) => {
    const { email, password, confirm_password } = req.body;

    try {
        if (!email) {
            return res.status(400).json({ message: "email is required" });
        }
        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        if (!password || !confirm_password) {
            return res.status(400).json({ message: "Both password and confirm password are required" });
        }

        // Checking if new password and confirm password match
        if (password !== confirm_password) {
            return res.status(400).json({ message: "Passwords don't match" });
        }

        // Hash the new password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Update user's password in the database
        await User.updateOne({ email }, { password: hashedPassword });

        // Respond with success message
        res.status(200).json({ message: 'Password reset successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}


/* function to sign up for a new customer

@param:
    name: string,
    email: string,
    password: string,

status:

    400: bad request , if any of the param is missing,
    409: if there is already a user with the email or the rollNo.\
    500: internal server error.
*/

const signup = async (req, res) => {
    try {
        const { name, email, username, password, confirmpassword } = req.body;

        //validating the user data.
        if (!name) {
            return res.status(400).json({ message: "name is required" });
        }

        if (!password) {
            return res.status(400).json({ message: "password is required" });
        }

        if (!email) {
            return res.status(400).json({ message: "email is required" });
        }
        if (!username) {
            return res.status(400).json({ message: "username is required" });
        }
        if (!confirmpassword) {
            return res.status(400).json({ message: "confirm password is required" });
        }

        //   checking for any duplicate email
        const duplicateEmail = await User.findOne({ emailID: email });
        if (duplicateEmail) {
            return res
                .status(401)
                .json({ message: "This email has been already used" });
        }

        const encryptedPassword = await bcrypt.hash(password, 10);

        // checking password
        if (password != confirmpassword) {
            return res
                .status(400)
                .json({ message: "Password doesn't match" });
        }

        const newUser = await User.create({
            name,
            username,
            email: email,
            password: encryptedPassword,
            confirmpassword: encryptedPassword,
        });

        if (newUser) {
            return res.status(201).json(newUser);
        }
    } catch (err) {
        console.log(err);
        return res.status(500);
    }

};
const feedback = async (req, res) => {
    try {
        const { name, email, msg } = req.body;

        //validating the user data.
        if (!name) {
            return res.status(400).json({ message: "name is required" });
        }
        if (!email) {
            return res.status(400).json({ message: "email is required" });
        }
        if (!msg) {
            return res.status(400).json({ message: "message is required" });
        }

        const newUserFeedback = await Feedback.create({
            name,
            email: email,
            msg,
        });

        if (newUserFeedback) {
            return res.status(201).json(newUserFeedback);
        }
    } catch (err) {
        console.log(err);
        return res.status(500);
    }
};
//getting feedback from database
const Allfeedbacks=async(req,res)=>{
    try {
        const feedbackResponses = await Feedback.find();
        res.status(200).json(feedbackResponses);
    } catch (error) {
        console.error("Error fetching feedback responses:", error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
//posting data to database
const submission = async (req, res) => {
    try {
        const { OrderId,Restraunt,BranchName,UserEmail, Seat, item,time,date,contact } = req.body;

        //validating the user data.
        if (!OrderId) {
            return res.status(400).json({ message: "auto generated" });
        }
        if (!Restraunt) {
            return res.status(400).json({ message: "select restraunt" });
        }
        if (!BranchName) {
            return res.status(400).json({ message: "select branch" });
        }
        if (!UserEmail) {
            return res.status(400).json({ message: "email is required" });
        }
        if (!Seat) {
            return res.status(400).json({ message: "seat is required" });
        }
        if (!item) {
            return res.status(400).json({ message: "items are required" });
        }
        if (!time) {
            return res.status(400).json({ message: "time is required" });
        }
        if (!date) {
            return res.status(400).json({ message: "date are required" });
        }
        if (!contact) {
            return res.status(400).json({ message: "contact are required" });
        }

        const newReservation = await Submission.create({
            OrderId,
            Restraunt,
            BranchName,
            UserEmail,
            Seat,
            item,
            time,
            date,
            contact,
        });

        if (newReservation) {
            return res.status(201).json(newReservation);
        }
    } catch (err) {
        console.log(err);
        return res.status(500);
    }
};
//getting submits from database
const Allrecords=async(req,res)=>{
    try {
        const RecordResponses = await Submission.find();
        res.status(200).json(RecordResponses);
    } catch (error) {
        console.error("Error fetching record responses:", error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    login,
    signup,
    reset_password,
    feedback,
    Allfeedbacks,
    submission,
    Allrecords
};