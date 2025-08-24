import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  shortDescription: { type: String, required: true },
  detailedDescription: { type: String },
  technologies: [{ type: String }],
  projectType: { type: String },
  images: [{
    type: String,
    get: (imgPath) => {
      
      const baseUrl = process.env.BASE_URL || "http://localhost:5000";
      return `${baseUrl}/${imgPath.replace(/\\/g, "/")}`;
    }
  }],
  videoLink: { type: String },
  repoLink: { type: String },
  liveLink: { type: String },
  startDate: { type: Date },
  endDate: { type: Date },
  category: { type: String },
  skills: [{ type: String }],
  status: { type: String, default: "Completed" },
  role: { type: String },
  teamSize: { type: Number },
}, { 
  timestamps: true,
  toJSON: { getters: true },  
  toObject: { getters: true }
});

export default mongoose.model("Project", projectSchema);
