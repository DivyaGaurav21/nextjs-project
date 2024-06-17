import mongoose from "mongoose";

export const connectDatabase = async () => {

    console.log("***********************************************************************************************************************************************")
    try {
        const { connection } = await mongoose.connect("mongodb://127.0.0.1:27017/next-todo");


        // const { connection } = await mongoose.connect("mongodb+srv://divyagaurav1602045:Y3o21LEUqI42BgEM@cluster0.el0gy9i.mongodb.net/", {
        //     dbName: "next-todo"
        // });
        // Handle connection events
        connection.on('connected', () => {
            console.log("Connected to MongoDB");
        });

        connection.on('error', (err) => {
            console.error("MongoDB connection error:", err);
        });

        connection.on('disconnected', () => {
            console.log("Disconnected from MongoDB");
        });

    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

