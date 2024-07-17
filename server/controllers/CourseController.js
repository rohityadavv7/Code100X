const Course = require("../models/Course")

exports.createCourse = async(req,res) => {
    try{
        const {courseName,description,instructor,courseType} = req.body;

        if(!courseName || !courseType || !description || !instructor){
            return res.status(401).json(
                { message: 'Please provide all required fields!' }
            );
        }

        //check if course already exists or not
        const checkCourse = await Course.findOne({courseName})

        if(checkCourse){
            return res.status(401).json(
                { message: 'Course already exists!' }
            );
        }

        const NewCourse = await Course.create({courseName,description, courseType,instructor})

        return res.status(200).json({
            success:true,
            message:"Course created successfully",
            NewCourse
        })
    }catch(error){
        console.error(error);
        res.status(500).json(
            { message: 'Could not create course, Try again later!' }
        );
    }
}

exports.getAllCourses = async(req,res) => {
    try{
        console.log("in all courses")
        const allCourses = await Course.find({}).populate("instructor")

        // console.log("all courses", allCourses)

        return res.status(200).json({
            success:true,
            message:"All courses fetched successfully",
            allCourses
        })

    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Could not fetch all courses"
        })
    }
}

exports.getSelectedCourse = async(req,res) => {
    try{
        // console.log(req)

        console.log("body-> ", req.body)
        const {id} = req.body;

        console.log("id in backend-> ", id);

        //get Course details
        const courseDetails = await Course.findById({_id:id})
        console.log("course in backend->",courseDetails)
        
        if(!courseDetails){
            return res.status(401).json(
                { message: 'Course not found!' }
            );
        }

        return res.status(200).json({
            success:true,
            message:"Course details fetched successfully",
            courseDetails
        })

    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Could get selected course details"
        })
    }
}