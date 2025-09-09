import React, { useState } from "react";
import axios from "axios";

const SkillForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    percentage: "",
    yearsOfExperience: "",
    image: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("percentage", formData.percentage);
    data.append("yearsOfExperience", formData.yearsOfExperience);
    data.append("image", formData.image);

    try {
      const res = await axios.post("http://localhost:5000/api/skills", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Skill Saved Successfully!");
      setFormData({
        name: "",
        percentage: "",
        yearsOfExperience: "",
        image: null,
      });
      console.log(res.data);
    } catch (error) {
      console.error(error);
      alert("Error saving skill");
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center">
      
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/bav.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

 
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0"></div>

      <div className="relative z-10 max-w-lg w-full bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Add Skill
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Skill</label>
            <input
              type="text"
              name="name"
              placeholder="e.g. React JS"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Percentage</label>
            <div className="flex items-center space-x-3">
              <span className="w-12 text-right font-semibold text-gray-700">
                {formData.percentage || 0}%
              </span>
              <input
                type="range"
                name="percentage"
                min="0"
                max="100"
                step="1"
                value={formData.percentage}
                onChange={handleChange}
                className="w-full accent-blue-600"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Upload Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleFileChange}
              required
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Years of Experience
            </label>
            <input
              type="number"
              name="yearsOfExperience"
              placeholder="e.g. 3"
              value={formData.yearsOfExperience}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="text-right">
            <button
              type="submit"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SkillForm;
