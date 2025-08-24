
import express from "express";
import {
  addExperience,
  getExperiences,
  getExperienceById,
  updateExperience,
  deleteExperience,
} from "../controllers/experienceController.js";

const router = express.Router();

router.post("/", addExperience);
router.get("/", getExperiences);
router.get("/:id", getExperienceById);
router.put("/:id", updateExperience);
router.delete("/:id", deleteExperience);

export default router;
