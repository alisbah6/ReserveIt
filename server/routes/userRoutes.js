const express = require("express");
const { login, signup,feedback,Allfeedbacks,submission,Allrecords} = require("../controllers/usercontroller");
const router = express.Router();

router.route("/login").get(login);
router.route("/signup").post(signup);
router.route('/feedback').post(feedback);
router.route('/feedbacks').get(Allfeedbacks);
router.route('/submission').post(submission)
router.route('/Allrecords').get(Allrecords);

module.exports = router;