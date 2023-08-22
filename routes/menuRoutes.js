const express = require("express");
const {createItemController,allItemsController} = require("../controller/menuController");
const upload = require("../utils/multer");

const router = express.Router();

//upload product
router.post("/createItem",upload.single("photo"),createItemController);

//get all products
router.get("/all-items",allItemsController);

module.exports = router;