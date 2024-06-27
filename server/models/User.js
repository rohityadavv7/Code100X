const mongoose = require("mongoose");
const { Schema } = require("zod");

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
    },
    lastName:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
        required:true
    },
    additionalDetails:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Profile",
    }
},{timestamps:true})

module.exports = mongoose.model("User",userSchema);