import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () =>{
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGOBD_DB}/ ${DB_NAME}`);
    console.log(`\n Mongodb connected!! host: ${connectionInstance.connection.host}`);
    
  } catch (error) {
    console.log("Mongodb failed to connect!!", error);
    process.exit(1);

  }
}

export default connectDB;