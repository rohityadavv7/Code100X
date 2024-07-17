const express = require("express");
const router = express.Router();

const{Signup,Login} = require("../controllers/UserController");

router.post("/login", Login);
router.post("/signup", Signup);
// router.post("")

module.exports =  router;