import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    email:{
        type:String,
        required:[true,"Please provide your email"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"Please provide your password"]
    },
    createdAt:Date
})

const User = mongoose.models.users || mongoose.model("users",userSchema)
export default User
