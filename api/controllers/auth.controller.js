import User from "../models/user.model.js"

export const signup = async (req,res)=>{
    const {userName,email,password} = req.body
    const newUser = new User({userName,email,password})
    await newUser.save()
}
export const signin =(req,res)=>{
    
}