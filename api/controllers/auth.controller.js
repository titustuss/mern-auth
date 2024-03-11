import User from "../models/user.model.js"
import bcryptjs from "bcryptjs"
import  jwt  from "jsonwebtoken"

export const signup = async (req,res,next)=>{
    try {
        // console.log(req.body)
        const {username,email,password} = req.body
        
        if (!username || !email || !password) {
            return res.status(400).json({ success: false, message: 'Missing required fields' });
        }
        const hashedPassword = bcryptjs.hashSync(password,10);
        const newUser = new User({username,email,password:hashedPassword});
        await newUser.save();
        console.log("user signed up")
        res.status(201).json({ message: "user created successfully"});
    } catch (error) {
        next(error)
    }
} 

export const signin = async (req,res,next)=>{
    // console.log(req.body)
     const {email,password} = req.body;
    try {
        const validUser = await User.findOne({email});
        if(!validUser) return res.status(401).json({message : "invalid credentials"})
        const validPassword = bcryptjs.compareSync(password,validUser.password)
        if(!validPassword) return res.status(401).json({message : "wrong credentials"})
        const token = jwt.sign({id:validUser._id}, process.env.JWT_SECRET)
        const {password:hashedPassword,...user} = validUser._doc
        res.cookie("access_token", token, {httpOnly:true}).status(200).json(user)
        // console.log(validUser)
        } catch (error) {
        next(error)
    }
}