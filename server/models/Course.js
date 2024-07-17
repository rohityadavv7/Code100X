const mongoose = require("mongoose")

const courseSchema = new mongoose.Schema({
    courseName:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    instructor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    //free or paid
    courseType:{
        type:String,
        required:true
    },
    module:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"CourseModule",
        default:{}
    }]
})

module.exports = mongoose.model("Course",courseSchema);