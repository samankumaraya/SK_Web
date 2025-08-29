import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import Project from "../models/Project.js";

const router = express.Router();


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    
    const projectTitle = req.body.title || "default_project";

    
    const folderName = projectTitle.replace(/\s+/g, "_");

    const dir = path.join("uploads/images", folderName);

   
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    cb(null, dir);
  },
  filename: (req, file, cb) => {
    
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({ storage });


router.post("/", upload.array("images"), async (req, res) => {
  try {
    const data = req.body;

    
    const technologies = data.technologies ? JSON.parse(data.technologies) : [];
    const skills = data.skills ? JSON.parse(data.skills) : [];

    
    const images = req.files
      ? req.files.map((file) => file.path.replace(/\\/g, "/")) 
      : [];

    const newProject = new Project({
      ...data,
      technologies,
      skills,
      images,
      teamSize: data.teamSize ? Number(data.teamSize) : undefined,
    });

    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});



router.put("/:id", upload.array("images"), async (req, res) => {
  try {
    const data = req.body;

    const technologies = data.technologies ? JSON.parse(data.technologies) : [];
    const skills = data.skills ? JSON.parse(data.skills) : [];

    const images = req.files?.length
      ? req.files.map((file) => file.path.replace(/\\/g, "/"))
      : undefined;

    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      {
        ...data,
        technologies,
        skills,
        ...(images && { images }),
        teamSize: data.teamSize ? Number(data.teamSize) : undefined,
      },
      { new: true }
    );

    if (!updatedProject) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.json(updatedProject);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.delete("/:id", async (req, res) => {
  try {
    const deletedProject = await Project.findByIdAndDelete(req.params.id);
    if (!deletedProject) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.json({ message: "Project deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



router.get("/", async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;
