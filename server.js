import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
const app = express();
dotenv.config();

mongoose.set("strictQuery", true); //Mongoose will throw an error if you try to query a field that doesn't exist in the DB Schema

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};

app.use("/api/users", userRoute);

app.listen(8800, () => {
  connect();
  console.log("Backend server is running");
});
