const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    gender:{
        type:String,
        required:true,
    },
    profileImage:{
        type:String
    },
    DOB:{
        type:String,
        
    },
    contact:{
        type:Number
    },
    address:{
        type:String
    }
    
})

module.exports = mongoose.model("Profile", profileSchema);