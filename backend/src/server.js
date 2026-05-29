import express from "express";
import mongoose from "mongoose";
import { Schema } from "mongoose";
import rout from "./routes/routes"
// create express app
const app = express();

// middleware to parse json and urlencoded data from request body 
app.use(express.json());
app.use(express.urlencoded());

// define routes for testing 
app.get('/', (req, res)=>{
    res.send("app is runing successfully !");

});



// define route to create user 
app.post("/api/users",(req, res)=>{
    // create user schema
    const userSchema = new Schema({
            name:String,
            email:String,
            password:String
        }, {timestamps:true});
    // create user model    
    const User = mongoose.model("User", userSchema);
    // create user document
    // get user data from request body
    const {name, email, password} = req.body;
    // save user document to database
    const user = new User({name,email,password});
    // save user document to database and handle success and error cases 
    user.save().then(()=>{
        res.send("user created successfully ! "+name)
    }).catch(err=>console.log("error userschema"));

});

export default app;