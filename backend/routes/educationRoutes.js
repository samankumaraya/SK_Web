import express from "express";
import Education from "../models/Education.js";

const router = express.Router();


router.post("/", async (req, res) => {
  try {
    const education = new Education(req.body);
    await education.save();
    res.status(201).json({ message: "Education saved successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to save education" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedEducation = await Education.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedEducation) {
      return res.status(404).json({ error: "Education not found" });
    }
    res.json({ message: "Education updated successfully!", updatedEducation });
  } catch (error) {
    res.status(500).json({ error: "Failed to update education" });
  }
});


router.delete("/:id", async (req, res) => {
  try {
    const deletedEducation = await Education.findByIdAndDelete(req.params.id);
    if (!deletedEducation) {
      return res.status(404).json({ error: "Education not found" });
    }
    res.json({ message: "Education deleted successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete education" });
  }
});

router.get("/", async (req, res) => {
  try {
    const educationList = await Education.find();
    res.json(educationList);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch education records" });
  }
});

export default router;
