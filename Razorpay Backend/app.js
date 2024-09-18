import express from "express";
import { config } from "dotenv";
import paymentRoute from "./routes/paymentRoutes.js";
import cors from "cors";
import morgan from "morgan";
config({ path: "./config/config.env" });

export const app = express();

app.use(cors(
  {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  }

));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'))//for the https  request for the server

//here the code for the calling the router in the middleware 
app.use("/api", paymentRoute);

app.get("/api/getkey", (req, res) =>
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
);
