import express from "express";
import Admin from "../models/Admin.js";
import jwt from "jsonwebtoken";
import verifyAdmin from "../middleware/verifyAdmin.js";

const router = express.Router();


router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const admin = await Admin.findOne({ username });
  if (!admin) return res.status(400).json({ error: "Invalid credentials" });

  const isMatch = await admin.comparePassword(password);
  if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

  const token = jwt.sign({ id: admin._id, username: admin.username }, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
});


router.get("/dashboard", verifyAdmin, (req, res) => {
  res.json({ message: `Welcome ${req.admin.username} to admin dashboard` });
});

export default router;
