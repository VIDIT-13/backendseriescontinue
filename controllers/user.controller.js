import asynchandler from "../utils/asynchandler.js";
import ApiError from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import uploadonCloudinay from "../utils/cloudinary.js";
import Apiresponse from "../utils/Apiresponse.js";

const register = asynchandler(async (req, res) => {
    // Extract user details from the request body
    const { username, email, fullName, password } = req.body;

    console.log('email ->', email);

    // Validate that all required fields are provided
    if ([fullName, username, email, password].some((el) => !el || el.trim() === "")) {
        throw new ApiError("All fields are required", 400);
    }

    // TODO: Add logic to check if the user already exists in the database
    // TODO: Add logic to handle avatar and cover image uploads (if required)

    // For now, respond with a success message
    res.status(200).json({
        success: true,
        message: "User registered successfully",
    });
    const existeduser=User.findOne({
        $or: [
            { username: username },
            { email: email }
        ]
    })
    if (existeduser) {
        throw new ApiError("User already exists", 409);
    }
    const avatarlocalpath=req.files?.avatar[0]?.path;
    const coverimagelocalpath=req.files?.avatar[0]?.path;
    if(!avatarlocalpath){
        throw new ApiError("Please upload avatar", 400);
    }

    const avatar=await uploadonCloudinay(avatarlocalpath)
    const coverimage=await uploadonCloudinay(coverimagelocalpath)
    if(!avatar ){
        throw new ApiError("Image upload failed", 500);
    }
    const user=await User.create({
        username:username.tolowercase(),
        email,
        fullName,
        password,
        avatar:avatar.url,
        coverimage:coverimage?.url || "",

    })
    const createduser=await User.findById(user._id).select("-password -refreshTokens");
    if(!createduser){
        throw new ApiError("Something went wrong while registering user", 500);
    }
    return res.status(201).json({
        success:true,
        message:"User registered successfully",
        data:createduser,
    })
});

export { register };