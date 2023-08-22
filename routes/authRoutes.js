const express = require("express");
const {registerController,loginController} = require("../controller/authController");
const upload = require("../utils/multer");

const router = express.Router();

//register
router.post("/register",upload.single("profilePic"),registerController);

//login
router.post("/login",loginController);

module.exports = router;