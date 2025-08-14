import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";

const app = express();

const PORT = process.env.PORT || 5000;
const uri = process.env.MONGO_URI;

if (!uri) {
  console.error("❌ MONGO_URI is not defined in .env");
  process.exit(1);
}

mongoose.connect(uri)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
