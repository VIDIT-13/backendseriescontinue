// require('dotenv').config({path: './.env'});
import dotenv from 'dotenv';
dotenv.config({ path: './.env' });
// import mongoose from 'mongoose';
// import { DB_name } from './constant';
import connectDB from '../db/index.js'; // Adjust the path to your connectDB function

connectDB();





// import express from 'express';

// const app=express()
// (async ()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_name}`, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         app.on('error', (error) => {
//             console.error('Error occurred:', error);
//             throw error; // Rethrow the error to stop execution
//         });
//         app.listen(process.env.PORT, () => {
//             console.log(`Server is running on port ${process.env.PORT}`); 
//         });
//         console.log('Connected to MongoDB');
//     }
//     catch (error) {
//         console.error('Error connecting to MongoDB:', error);
//         throw error; // Rethrow the error to stop execution
//     }
// })()//iffies immedaitealy invoked function expression