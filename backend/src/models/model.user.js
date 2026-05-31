import mongoose from "mongoose";

// create user schema

const userSchema = new mongoose.Schema({
    userID:{
        type:Number
    },
    name:{
        type:String
    },
    email:String,
    password:String
},{timestamps:true
});

// create user model 
const User = mongoose.model("User", userSchema);
export default User;