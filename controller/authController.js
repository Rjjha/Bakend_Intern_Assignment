const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const cloudinary = require("../utils/cloudinary");
const JWT = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const registerController = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    //validation
    if (!name) {
      return res.send({ message: "Name is required" });
    }
    if (!email) {
      return res.send({ message: "Email is required" });
    }
    if (!password) {
      return res.send({ message: "Password is required" });
    }
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.send({ message: "User is already Registered" });
    }
    let picture = "";
    if(req.file)
    {
      picture = await cloudinary.uploader.upload(req.file.path);
    }
    const hasedPassword = await bcrypt.hash(password, 10);
    const user = new userModel({
      name,
      email,
      phone,
      password: hasedPassword,
      profilePic: picture.secure_url || "",
      cloudinary_id: picture.public_id || "",
    });
    await user.save();
    const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "2d",
    });
    res.status(201).send({
      success: true,
      message: "Register Successfull",
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in registration",
      error,
    });
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      return res.send({ message: "Email is required" });
    }
    if (!password) {
      return res.send({ message: "Password is required" });
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registered",
      });
    }
    //comparing password
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid credentials",
      });
    }
    const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "2d",
    });
    res.status(201).send({
      success: true,
      message: "Login Successfull",
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Login",
      error,
    });
  }
};

module.exports = {registerController,loginController}
