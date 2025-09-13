import express from "express";
import upload from "../middleware/upload.js";
import * as galleryController from "../controllers/galleryController.js";

const router = express.Router();


router.post("/upload", upload.single("image"), galleryController.uploadImage);


router.get("/", galleryController.getImages);


router.delete("/:id", galleryController.deleteImage);


export default router;
