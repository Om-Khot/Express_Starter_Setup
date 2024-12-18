import mongoose from "mongoose";
import { MONGO_URL } from "./serverConfig.js";
async function connectDB(){
    try {
        await mongoose.connect(MONGO_URL);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("Fail to connect DB");
        console.log(error);
    }    
}

export default connectDB;