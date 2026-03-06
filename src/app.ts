import express from "express";
import mongoose from 'mongoose';
import bodyParser from "body-parser";
import dotenv from 'dotenv';
import userRoutes from "./routes/userRoutes.js"


dotenv.config()

const app=express()

app.use(express.json())

mongoose.connect(process.env.MONGO_URI as string). then(
    ()=>{
        console.log(" Connected to mongo 🔥🔥🔥")
    }
).catch((error)=>{
console.log("ERROR: ", error)
})


const port=process.env.PORT|| 3005

app.listen(port, ()=>{
console.log(`Server is running on port ${port}`)
});








app.use("/api", userRoutes);



