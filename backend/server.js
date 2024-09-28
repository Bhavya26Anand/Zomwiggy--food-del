 import express from "express"
 import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config.js'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"



 //app config
 const app = express() //initializing app using express package
 const port = process.env.PORT || 4000 //port no
 

 //middleware 
 app.use(express.json()) //parse request(frontend to backend) using json
 app.use(cors()) //acces backend from any frontend

 // db connection
 connectDB();

 //api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter);



 // slash endpoint ,when this is hit we will get msg api working
 app.get("/",(req,res)=>{
    res.send("API Working")

 }) //request data from server

 //run express server
 app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
 })

 // mongodb+srv://bhavya26anand:Honeybetu123@cluster0.vj2wo.mongodb.net/?