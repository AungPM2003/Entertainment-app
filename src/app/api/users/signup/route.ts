import { NextRequest, NextResponse } from "next/server";
import { connect } from "../../../../dbConfig/dbConfig";
import User from "../../../../models/userModel";
connect();
export async function POST(request:NextRequest){
    try{
        const reqBody = await request.json();
        const {email,password,repeatPassword} = reqBody;
        //check if user exists
        const user = await User.findOne({email});
        if(user){
            return NextResponse.json({
                error:"Email already exists"
            },{
                status:400
            })
        }
        const newUser = new User({
            email,
            password,
        });
        const savedUser = await newUser.save();
        return NextResponse.json({
            message:"User created successfully",
            success:true,
            savedUser
        })
    }catch(error:any){
        return NextResponse.json({
            error:error.message           
        },{status:500})
    }
}