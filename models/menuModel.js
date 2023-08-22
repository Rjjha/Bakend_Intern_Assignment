const mongoose = require("mongoose");

const MenuSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim : true
    },
    type:{
        type:String,
    },
    price:{
        type:Number,
    },
    description:{
        type:String,
    },
    photo:{
        type:String,
    },
    cloudinary_id: {
        type:String,
    }
},{timestamps:true});

module.exports = mongoose.model("Menu",MenuSchema);