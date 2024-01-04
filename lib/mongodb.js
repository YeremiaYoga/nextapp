import mongoose from "mongoose";

export const connectMongoDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("konek mongo");
    }
    catch(error){
        console.log("error konek", error)
    }
}