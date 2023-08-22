const menuModel = require("../models/menuModel");
const cloudinary = require("../utils/cloudinary");
const dotenv = require("dotenv");
dotenv.config();

const createItemController =async(req,res) =>{
    try {
        const {name,type,price,description} = req.body;

        if(!name)
        {
            return res.send({message:"Item Name is required"});
        }
        let picture =""
        if(req.file)
        {
            picture = await cloudinary.uploader.upload(req.file.path);
        }
        const item = new menuModel({
            ...req.body,
            photo: picture.secure_url || "",
            cloudinary_id: picture.public_id || "",
          });
          await item.save();
          return res.status(201).send({
            success: true,
            message: "Item added successfully",
            item,
          })
        
    } catch (error) {
      console.log(error);
      res.status(500).send({
      success: false,
      message: "Error in creating-items",
      error,
    });
    }
}

//all items
const allItemsController = async(req,res) =>{
    try {
     const items = await menuModel.find({});
     return res.status(201).send({
        success: true,
        message: "all items",
        items,
      })
        
    } catch (error) {
        console.log(error);
      res.status(500).send({
      success: false,
      message: "Error in getting-items",
      error,
    });
    }
}

module.exports = {createItemController,allItemsController};