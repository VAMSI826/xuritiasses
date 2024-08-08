import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import userRoute from "./route/user.route.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

dotenv.config();

const PORT = process.env.PORT || 8000;
const URI = process.env.MongoDBURI;
const KEY = process.env.JWT_SECRET;

try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to MongoDB");
} catch (error) {
  console.log("Error:", error);
}

app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(` sever is listening on port ${PORT}`);
});
