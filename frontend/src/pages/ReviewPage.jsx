import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ReviewPage = () => {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({
    email: "",
    name: "",
    stars: 0,
    message: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null); // For popup

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/reviews");
      setReviews(res.data);
    } catch (err) {
      console.error("Failed to fetch reviews", err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleStarClick = (num) => {
    setForm((prev) => ({
      ...prev,
      stars: num,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.name || !form.stars || !form.message) {
      setMessage("Please fill in all fields and select stars.");
      return;
    }

    setLoading(true);
    setMessage("");
    try {
      await axios.post("http://localhost:5000/api/reviews", form);
      setMessage("Review submitted successfully!");
      setForm({ email: "", name: "", stars: 0, message: "" });
      fetchReviews();
    } catch (err) {
      setMessage("Failed to submit review.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };


const renderStars = (count = form.stars) => {
  return [1, 2, 3, 4, 5].map((num) => (
    <span
      key={num}
      className={`text-3xl transition-colors ${
        num <= count ? "text-yellow-400" : "text-gray-300"
      }`}
      aria-label={`${num} star${num > 1 ? "s" : ""}`}
    >
      ★
    </span>
  ));
};



  return (
    <div className="relative min-h-screen overflow-hidden">
     
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/videos/bav.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Header />

      
      <br></br>
      <br></br>
      <div className="max-w-5xl mx-auto p-8 relative z-10">
       
        <form
          onSubmit={handleSubmit}
          className="mb-10 p-4 bg-white/90 backdrop-blur-md rounded-lg shadow-md w-full"
          noValidate
        >
          <br></br>
          <h2 className="text-2xl font-semibold mb-4 text-green-600 text-center">
            Leave a Review
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
            <div>
              <label
                className="block mb-1 font-medium text-gray-700"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

           
            <div>
              <label
                className="block mb-1 font-medium text-gray-700"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

           
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Rating
              </label>
              <div>{renderStars()}</div>
            </div>

           
            <div className="md:col-span-2">
              <label
                className="block mb-1 font-medium text-gray-700"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="3"
                value={form.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              ></textarea>
            </div>
          </div>

          {message && (
            <p
              className={`mt-4 text-center font-medium ${
                message.includes("success") ? "text-green-600" : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 mt-4 rounded-md text-white font-semibold transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Submitting..." : "Submit Review"}
          </button>
        </form>

       
       <div>
  <h2 className="text-2xl font-semibold mb-6 text-white text-center">
    All Reviews
  </h2>

  {reviews.length === 0 && (
    <p className="text-center text-gray-500">
      No reviews yet. Be the first to review!
    </p>
  )}
  <ul className="space-y-6">
    {reviews.map((review) => (
      <li
        key={review._id}
        className="p-4 border border-gray-200 rounded-md bg-white/90 backdrop-blur-sm shadow-sm"
      >
        <div className="flex items-center justify-between mb-2">
          <div>
            <p className="font-semibold text-gray-800">{review.name}</p>
            <p className="text-yellow-400">
              {"★".repeat(review.stars)}
              {"☆".repeat(5 - review.stars)}
            </p>
          </div>

         
          <button
            onClick={() => setSelectedReview(review)}
            className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            View
          </button>
        </div>

        <p className="text-gray-700 mb-2 line-clamp-2">{review.message}</p>
        <p className="text-xs text-gray-400">
          {new Date(review.createdAt).toLocaleDateString()}
        </p>
      </li>
    ))}
  </ul>
</div>

      </div>

    
      {selectedReview && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
            <button
              onClick={() => setSelectedReview(null)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl"
            >
              ✖
            </button>
            <h3 className="text-xl font-semibold mb-4 text-blue-600 text-center">
              Review Details
            </h3>
            <p>
              <span className="font-medium">Name:</span> {selectedReview.name}
            </p>
            <p>
              <span className="font-medium">Email:</span> {selectedReview.email}
            </p>
            <p>
              <span className="font-medium">Rating:</span>{" "}
              {renderStars(selectedReview.stars)}
            </p>
            <p>
              <span className="font-medium">Message:</span>{" "}
              {selectedReview.message}
            </p>
            <p className="text-sm text-gray-500 mt-2">
              {new Date(selectedReview.createdAt).toLocaleString()}
            </p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ReviewPage;
