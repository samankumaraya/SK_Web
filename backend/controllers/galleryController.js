
import fs from "fs";
import path from "path";
import Gallery from "../models/Gallery.js";


export const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const newImage = new Gallery({
      filename: req.file.filename,
      originalName: req.file.originalname
    });

    await newImage.save();
    res.status(201).json(newImage);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const getImages = async (req, res) => {
  try {
    const images = await Gallery.find().sort({ createdAt: -1 });
    res.status(200).json(images);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteImage = async (req, res) => {
  try {
    const image = await Gallery.findById(req.params.id);
    if (!image) return res.status(404).json({ message: "Image not found" });

    const filePath = path.join(process.cwd(), "uploads/images/Gallery", image.filename);
    await fs.promises.unlink(filePath).catch(err => console.error("Error deleting file:", err));

   
    await Gallery.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "Image deleted successfully", id: req.params.id });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};