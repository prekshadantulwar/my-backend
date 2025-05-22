import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";


const connectDB=async()=>{
    try{
        const connectionInstance=await mongoose.connect(`mongodb+srv://prekshadantulwar:preksha123@cluster0.boagei8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0}/videotube`);
        console.log(`\n MongoDB connected!! DB HOST: ${connectionInstance.connection.host}`)
    }catch(error){
        console.log("MONGODB connection error ",error);
        process.exit(1);
    }
}

export default connectDB