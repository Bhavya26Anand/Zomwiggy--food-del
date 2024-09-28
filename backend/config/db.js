import mongoose  from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://bhavya26anand:Honeybetu123@cluster0.vj2wo.mongodb.net/project').then(()=> console.log("DB Connected"));
}