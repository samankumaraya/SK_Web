
import Experience from "../models/Experience.js";

//  Add new experience
// @route POST /api/experiences
export const addExperience = async (req, res) => {
  try {
    const experience = new Experience(req.body);
    const savedExperience = await experience.save();
    res.status(201).json(savedExperience);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//  Get all experiences

export const getExperiences = async (req, res) => {
  try {
    const experiences = await Experience.find().sort({ createdAt: -1 });
    res.json(experiences);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  Get single experience
// @route GET /api/experiences/:id
export const getExperienceById = async (req, res) => {
  try {
    const experience = await Experience.findById(req.params.id);
    if (!experience) return res.status(404).json({ message: "Experience not found" });
    res.json(experience);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update experience
// @route PUT /api/experiences/:id
export const updateExperience = async (req, res) => {
  try {
    const updatedExperience = await Experience.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedExperience) return res.status(404).json({ message: "Experience not found" });
    res.json(updatedExperience);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//  Delete experience
// @route DELETE /api/experiences/:id
export const deleteExperience = async (req, res) => {
  try {
    const deletedExperience = await Experience.findByIdAndDelete(req.params.id);
    if (!deletedExperience) return res.status(404).json({ message: "Experience not found" });
    res.json({ message: "Experience removed" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
