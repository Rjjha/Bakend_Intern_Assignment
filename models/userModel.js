const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim : true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    profilePic:{
        type:String,
    },
    phone:{
        type:String,
    },
    password:{
        type:String,
        required:true
    },
    cloudinary_id: {
        type:String,
    }
},{timestamps:true});

module.exports = mongoose.model("User",UserSchema);