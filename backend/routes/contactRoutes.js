import express from "express";
import nodemailer from "nodemailer";
import Message from "../models/Message.js";

const router = express.Router();


router.post("/", async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    
    const newMessage = new Message({ name, email, subject, message });
    await newMessage.save();

    
    const transporter = nodemailer.createTransport({
      service: "gmail", 
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact: ${subject || "No subject"}`,
      text: `
        You have a new message from your portfolio contact form:

        👤 Name: ${name}
        📧 Email: ${email}
        📝 Subject: ${subject || "N/A"}
        💬 Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: "Message sent & saved successfully!" });
  } catch (error) {
    console.error("❌ Error:", error);
    res.status(500).json({ success: false, message: "Failed to send message." });
  }
});

export default router;
