import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
dotenv.config();
import cors from "cors";
import userRouter from "./routes/user.route.js";
import listingRouter from "./routes/listing.route.js";
import bookingRouter from "./routes/booking.route.js";
let port = process.env.PORT || 6000;

let app = express();
app.use(
  cors({
    // origin: ["http://localhost:5173", "https://192.168.1.4:8080"], for local and change ip according yours
    origin: [
      "https://mehman-airbnb-repo-1.onrender.com",
      "http://localhost:5173",
      "http://localhost:5173",
    ],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/listing", listingRouter);
app.use("/api/booking", bookingRouter);

app.listen(port, () => {
  connectDb();
  console.log("server started on : ", port);
});
