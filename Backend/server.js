import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import router from "./Routers/auth.routes.js";


const app = express();
dotenv.config()

const PORT = process.env.PORT || 8000;
const MONGODB_URL = process.env.MONGODB_URL;


app.use(express.json())
app.use(cookieParser())
app.use("/api/auth", router)


mongoose
    .connect(MONGODB_URL)
    .then(() => {
        app.listen(PORT, () => {
            console.log(
                `connected : ${PORT}`
            );
        })
    } 
    )
    .catch((error) => {
        console.log(`error ${error}`);
    })
