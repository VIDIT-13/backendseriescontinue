import mongoose from "mongoose";
import { DB_name } from "../src/constant.js";

const connectDB = async () => { 
  try {
    const connection=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_name}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connected to MongoDB at ${connection.connection.host}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1) // Rethrow the error to stop execution
  }
}

export default connectDB;
// (async ()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_name}`, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         app.on('error', (error) => {                             