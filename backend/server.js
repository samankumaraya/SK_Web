import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";


import educationRoutes from "./routes/educationRoutes.js";

const app = express();


app.use(cors());
app.use(express.json()); 

const PORT = process.env.PORT || 5000;
const uri = process.env.MONGO_URI;

if (!uri) {
  console.error("❌ MONGO_URI is not defined in .env");
  process.exit(1);
}


mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });


app.use("/api/education", educationRoutes);


app.get("/", (req, res) => {
  res.send("🚀 Backend API is running...");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
