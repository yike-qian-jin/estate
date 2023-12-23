import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";


dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());


(async () => {
    try {
        await connectDB();
        app.listen(3000, () => {
            console.log("running on port 3000")
        })
    } catch (error) {
        console.error("error connecting to db : ", error)
    }
})();

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal server error";
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})

