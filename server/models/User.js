const mongoose = require("mongoose");
const { Schema } = require("zod");

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    additionalDetails:{
        type:Schema.Types.ObjectId,
        ref:"AdditionalDetails",
    }
},{timestamps:true})

module.exports = mongoose.model("User",userSchema);