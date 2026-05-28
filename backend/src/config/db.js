import mongoose from "mongoose";
const dbName ="appDB";

const connnectDB = async()=>{
    try{
        await mongoose.connect(`${process.env.MONGO_URI}/${dbName}`,);
        console.log("MongoDB Connected");

    }catch(error){
        console.log("Error connecting to MongoDB",error);
        process.exit(1);
    }
}

export default connnectDB;