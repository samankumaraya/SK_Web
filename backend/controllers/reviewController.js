import Review from "../models/Review.js";
import nodemailer from "nodemailer";

export const createReview = async (req, res) => {
  try {
    const { email, name, stars, message } = req.body;

    if (!email || !name || !stars || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

   
    const review = new Review({ email, name, stars, message });
    await review.save();

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
      subject: `New Review from ${name}`,
      html: `
        <h3>New Review Submitted</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Rating:</strong> ${"★".repeat(stars)}${"☆".repeat(5 - stars)}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) console.error("Failed to send email:", err);
      else console.log("Email sent:", info.response);
    });

    res.status(201).json(review);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

export const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
