const express = require("express");
const router = express.Router();

const{Signup} = require("../controllers/UserController");

// router.post("/login", Login);
router.post("/signup", Signup);