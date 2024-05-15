const express = require("express");
const { login, signup,reset_password,feedback,Allfeedbacks,booking,Allrecords,sendOTP,verifyOTP} = require("../controllers/usercontroller");
const router = express.Router();

router.route("/login").get(login);
router.route("/signup").post(signup);
router.route("/reset_password").post(reset_password);
router.route('/feedback').post(feedback);
router.route('/feedbacks').get(Allfeedbacks);
router.route('/booking').post(booking);
router.route('/Allrecords').get(Allrecords);
router.post('/send', sendOTP);
router.post('/verify', verifyOTP);

module.exports = router;