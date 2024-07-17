const mongoose = require("mongoose");
const { Schema } = require("zod");

const userSchema = new mongoose.Schema({
    id:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required:true
    },
    account_Type:{
        type:String,
        required: true,
        default:"Student"
    }
},{timestamps:true})

module.exports = mongoose.model("User",userSchema);