import Review from "../models/Review.js";


export const createReview = async (req, res) => {
  try {
    const { email, name, stars, message } = req.body;

    if (!email || !name || !stars || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const review = new Review({
      email,
      name,
      stars,
      message,
    });

    await review.save();
    res.status(201).json(review);
  } catch (err) {
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
