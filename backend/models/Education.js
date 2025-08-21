import mongoose from "mongoose";

const educationSchema = new mongoose.Schema({
  school: { type: String, required: true },
  degree: { type: String, required: true },
  fieldOfStudy: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
  grade: { type: String },
  activities: { type: String },
  description: { type: String }
}, { timestamps: true });

export default mongoose.model("Education", educationSchema);
