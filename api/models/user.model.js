import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    userName: {
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

const User = mongoose.Model('User', userSchema);

export default User;