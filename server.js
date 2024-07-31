import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRouter.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config.js"
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

const app=express();
const port=4000

//Middlewares
app.use(express.json());
app.use(cors());

//Database Connected
connectDB();

//API Endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads")); 
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);


app.get("/", (req, res)=>{
    res.send("Backend is ready!");
});

app.listen(port, ()=>{
    console.log(`Server is started on port http://localhost:${port}`);
})