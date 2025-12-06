import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";



const register =async(req,res)=>{
    try{
        const {name ,email,password}=req.body;
        const existingUser=await User.findOne({where :{ email }});
        if (existingUser) return res.status(400).json({message:"Email already exists"});


        
        const user =await User.create({ name, email ,password});

        const token=jwt.sign({ id: user.id}, process.env.JWT_SECRET,{expiresIn:"7d"});

        res.status(201).json({ user:{ id:user.id, name:user.name, email:user.email}, token})
    }catch(err){
        res.status(500).json({message: err.message})
    }
}
export default register;