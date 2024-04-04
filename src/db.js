// Intalar MongoDB

 import mongoose from "mongoose";
 import { MONGO_URI } from "./config.js";
 import { PORT } from "./config.js";

 

 export const connectDB = async () => {
     try {
         await mongoose.connect(MONGO_URI); //mongodb://localhost:27017
         console.log(`DB CONNECTED ${PORT}`)
     } catch (error) {
         console.log(error)
     } 
 } 
 

// import mongoose from "mongoose";


// export const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URL); //mongodb://localhost:27017
//         console.log("DB IS CONNECT")
//     } catch (error) {
        
//     }
// }