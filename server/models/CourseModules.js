const mongoose = require('mongoose');

const moduleSchema = new mongoose.Schema({
    order:{
        type:Number,
        required:true,
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
    },
    contentVideo:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Module', moduleSchema);