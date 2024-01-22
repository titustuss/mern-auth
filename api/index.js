import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import userRouter from "./routes/user.route.js"
import authRouter from "./routes/auth.route.js"

const app = express()
dotenv.config()

mongoose.connect(process.env.MONGO).then(()=>{
  console.log("connected to mongoDB")
}).catch((error)=>{
  console.log(error)
})

app.use('/api/user', userRouter)
app.use("/api/auth", authRouter)


app.listen(4000, ()=>{
  console.log("server running on port 4000")
})