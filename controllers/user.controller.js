import asynchandler from "../utils/asynchandler.js";

const register = asynchandler(async (req, res) => {
    res.status(200).json({
        message: "User registered successfully",
        
    }); 
})
export {register};