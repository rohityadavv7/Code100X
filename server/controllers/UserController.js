const Profile = require("../models/Profile");
const User = require("../models/User");

exports.Signup = async(req,res)=> {
    try{
        const {firstName, lastName,email} = req.body;

        if(!firstName || !lastName || !email){
            return res.status(400).json({
                success:false,
                message:"Please fill all the fields"
            })
        }

        let hashedPassword;
        if(password){
            hashedPassword = await bcrypt.hash(password,10);
        }
        else{
            let password = "123",
            hashedPassword = await bcyrpt.hash(password,10);
        }

        const userDetails = await User.findOne({email});

        if(userDetails){
            return res.status(401).json({
                success:false,
                message:"User already reggistered!"
            })
        }

        const details = await Profile.create({
            gender:null,
            profileImage:null,
            address:null,
            DOB:null,
            contact:null
        });

        const newUser = await User.create({
            email:email,
            password:hashedPassword,
            firstName:firstName,
            lastName:lastName,
            additionalDetails:details._id,
        })



    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Couldn't login!, please try again Later..."
        })
    }
}