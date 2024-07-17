
const User = require("../models/User");
require("dotenv").config()

const clerkApiKey = process.env.CLERK_SECRET_KEY; // Replace with your Clerk API key
const clerkApiBaseUrl = process.env.clerkApiBaseUrl; // Clerk API base URL

exports.Signup = async(req,res)=> {
    try{
        console.log("hi")
        const {account_Type,userId,email} = req.body;
        console.log("Backend-> ", account_Type, userId, email);

        if(!account_Type || !userId || !email){
            return res.status(403).json({
                success:false,
                message:"Details missing!"
            })
        }

        //check if user already exists
        const checkUser = await User.findOne({email});

        if(checkUser){
            return res.status(403).json({
                success:false,
                message:"User already exists!"
            })
        }

        const newUser = await User.create({
            id:userId,
            account_Type,
            email
        })


        return res.status(200).json({
            succes:true,
            message:"user created succesfullly!",
            newUser
        })



    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Couldn't login!, please try again Later..."
        })
    }
}

exports.Login = async(req,res) => {
    try{
        console.log("in login")
        const {email} = req.body;

        if(!email){
            return res.status(403).json({
                success:false,
                message:"Email missing!"
            })
        }

        const checkUser = await User.findOne({email})

        if(!checkUser){
            return res.status(403).json({
                success:false,
                message:"User not found!"
            })
        }

        return res.status(200).json({
            success:true,
            message:"User logged in successfully!",
            user: checkUser
        })
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Couldn't login!, please try again Later..."
        })
    }
}