const mongoose = require("mongoose");
const colors = require("colors");
 
const connectDB = async () =>{
      try {
         mongoose.connect(process.env.MONGO_URL)
        .then(() => console.log(`Database is connected at ${process.env.MONGO_URL}`.bgGreen.white)
        )
      } catch (error) {
        console.log(`Error Occured at mongodb ${error.msg}`.bgRed.white);
      }
};

module.exports = connectDB;