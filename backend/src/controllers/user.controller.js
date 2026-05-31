import asyncHandler from "./../utils/asyncHandlers.js";
import User from "../models/model.user.js";
import bcrypt from "bcryptjs";
import apiResponse from "../utils/apiResponse.js";

const createUser = asyncHandler(async(req, res)=>{
    const {userID, name, email, password} =req.body;
    
    try{
        const existingUser = await User.findOne({email});
        if(!existingUser){
        // hash password using bcryptjs
        const saltRounds =10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);
        // create user document
        const newUser = new User({userID, name, email, password:hash});
        console.log(newUser);
        // save user document to database and handle success and error cases
        await newUser.save();
        }else{
            res.json({
                success:false,
                message:"user Add"
            });
        }

    }catch(error){
        console.log(error);
    }
    //console.log( name, email, password);


    res.status(200).json({
        success:true,
        message:"user created successfully by controllers"
    })
})

const getAllUsers = (req, res)=>{
    res.status(200).json(
        new apiResponse(200, "users fetched successfully")
    )

}

export {createUser, getAllUsers};