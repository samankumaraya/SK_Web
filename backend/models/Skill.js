import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  percentage: { type: Number, required: true },
  yearsOfExperience: { type: Number, required: true },
  imagePath: { type: String, required: true }, 
}, { timestamps: true });

export default mongoose.model("Skill", skillSchema);
