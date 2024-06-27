const Profile = require("../models/Profile");
const User = require("../models/User");
require("dotenv").config()

const clerkApiKey = process.env.CLERK_SECRET_KEY; // Replace with your Clerk API key
const clerkApiBaseUrl = process.env.clerkApiBaseUrl; // Clerk API base URL

exports.Signup = async(req,res)=> {
    try{
        console.log("hi")
        const {checked,sessionToken} = req.body;
        console.log(req.body)
        console.log("Backend-> ", checked, sessionToken);

        // if(!firstName || !lastName || !emailAddress){
        //     return res.status(400).json({
        //         success:false,
        //         message:"Please fill all the fields"
        //     })
        // }

        // let hashedPassword;
        // if(password){
        //     hashedPassword = await bcrypt.hash(password,10);
        // }
        // else{
        //     let temppassword = "123",
        //     hashedPassword = await bcyrpt.hash(temppassword,10);
        // }

        // const userDetails = await User.findOne({emailAddress});

        // if(userDetails){
        //     return res.status(401).json({
        //         success:false,
        //         message:"User already reggistered!"
        //     })
        // }

        // const details = await Profile.create({
        //     gender:null,
        //     profileImage:null,
        //     address:null,
        //     DOB:null,
        //     contact:null
        // });

        // const newUser = await User.create({
        //     email:emailAddress,
        //     password:hashedPassword,
        //     firstName:firstName,
        //     lastName:lastName,
        //     additionalDetails:details._id,
        // })

        return res.status(200).json({
            succes:true,
            message:"user created succesfullly!",
            // newUser
        })



    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Couldn't login!, please try again Later..."
        })
    }
}