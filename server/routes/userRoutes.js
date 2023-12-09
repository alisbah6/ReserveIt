const express = require("express");
const { login, signup, welcome,feedback,submission } = require("../controllers/usercontroller");
const router = express.Router();

router.route("/login").get(login);
router.route("/signup").post(signup);
router.route('/welcome').get(welcome);
router.route('/feedback').post(feedback);
router.route('/submission').post(submission)

module.exports = router;