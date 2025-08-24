import express from "express";
import multer from "multer";
import path from "path";
import Skill from "../models/Skill.js";

const router = express.Router();


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/images"); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); 
  },
});

const upload = multer({ storage });

// @route POST /api/skills
// @desc Add new skill
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { name, percentage, yearsOfExperience } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Image is required" });
    }

    const newSkill = new Skill({
      name,
      percentage,
      yearsOfExperience,
      imagePath: `/uploads/images/${req.file.filename}`,
    });

    await newSkill.save();
    res.status(201).json(newSkill);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route GET /api/skills
// @desc Get all skills
router.get("/", async (req, res) => {
  try {
    const skills = await Skill.find();
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route DELETE /api/skills/:id
// @desc Delete skill
router.delete("/:id", async (req, res) => {
  try {
    const skill = await Skill.findByIdAndDelete(req.params.id);
    if (!skill) return res.status(404).json({ message: "Skill not found" });

    res.json({ message: "Skill deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
