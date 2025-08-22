
import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  employmentType: { type: String, required: true },
  company: { type: String, required: true },
  isCurrent: { type: Boolean, default: false },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
  location: String,
  locationType: String,
  description: String,
  jobSource: String,
}, { timestamps: true });

export default mongoose.model("Experience", experienceSchema);
