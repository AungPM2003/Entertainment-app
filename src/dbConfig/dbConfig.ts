import mongoose from "mongoose";

export async function connect(){
    try{
        mongoose.connect(process.env.MONGO_URL!)
        const connection = mongoose.connection;
        connection.on('connected',() => {
            console.log("Your database is successfully connected")
        })
        connection.on('error',(error) => {
            console.log("Your connection is having a problem",error.message)
        })
    }catch(error){
        console.log(error)
    }
}