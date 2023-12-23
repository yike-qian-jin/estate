import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_URI);
        console.log(`mongo db connected ${conn.connection.host}`)
    } catch (error) {
        console.error(error)

    }
}

export default connectDB 