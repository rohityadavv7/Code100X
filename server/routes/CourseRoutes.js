const express = require("express")
const router = express.Router()

const {createCourse,getAllCourses, getSelectedCourse} = require("../controllers/CourseController")

router.get("/getAllCourses", getAllCourses);
router.post("/createCourse", createCourse);
router.post("/getSelectedCourse", getSelectedCourse)

module.exports =  router