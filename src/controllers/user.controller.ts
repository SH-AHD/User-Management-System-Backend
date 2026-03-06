import {Request, Response} from "express"
import { User } from "../models/User.js";
import mongoose from "mongoose";

export const create= async(req:Request , res:Response)=>{
    try{
    const { email } = req.body;

const userExist= await User.findOne({email});
if(userExist){
    return res.status(400).json({message:"User already exists, please sign in."});

}else{
    const newUser= new User(req.body);
    const createdUser= await newUser.save();
    res.status(201).json(createdUser);
}
    }catch(error){
            res.status(500).json({
                 message: "Internal Server Error",
            error
               });

    }
}


export const getAllUsers= async(req:Request , res:Response)=>{
try{

const userData=await User.find();
if(!userData||userData.length===0){
    return res.status(404).json({message: "No users Found"})
}
return res.status(200).json(userData);
}catch(error){
 res.status(500).json({
                   message: "Internal Server Error",
            error
               });

}
}

export const getUserById=async(req:Request, res:Response)=>{
try{
const id=req.params.id as string;
if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid ID format" });
        }
const userExist=await User.findById(id);
if(!userExist){

 return res.status(404).json({message: "User Not Found"})
}
return res.status(200).json(userExist);

}catch(error){
 res.status(500).json({
                  message: "Internal Server Error",
            error
               });

}

}



export const updatetUserData=async(req:Request, res:Response)=>{
try{
const id=req.params.id as string;
if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid ID format" });
        }
const userExist=await User.findById(id);
if(!userExist){

 return res.status(404).json({message: "User Not Found"})
}
const updatetUserData=await User.findByIdAndUpdate(id,req.body,{new:true});
return res.status(200).json(updatetUserData);

}catch(error){
 res.status(500).json({
                  message: "Internal Server Error",
            error
               });

}

}



export const deleteUser=async(req:Request, res:Response)=>{
try{
const id=req.params.id as string;
if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid ID format" });
        }
const userExist=await User.findById(id);
if(!userExist){
 return res.status(404).json({message: "User Not Found"})
}
const deletedUser=await User.findByIdAndDelete(id);
return res.status(200).json({ 
    message: "User Deleted Successfully", 
    data: deletedUser 
});
}catch(error){
 res.status(500).json({
                 message:"Internal Server Error",
            error
               });

}

}

