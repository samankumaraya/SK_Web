import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  stars: { type: Number, required: true, min: 1, max: 5 },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Review = mongoose.model("Review", reviewSchema);

export default Review;
