import React, { useState } from "react";
import axios from "axios";

const ExperienceForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    employmentType: "",
    company: "",
    isCurrent: false,
    startDate: "",
    endDate: "",
    location: "",
    locationType: "",
    description: "",
    jobSource: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/experience", formData);
      alert("✅ Experience Saved Successfully!");
      setFormData({
        title: "",
        employmentType: "",
        company: "",
        isCurrent: false,
        startDate: "",
        endDate: "",
        location: "",
        locationType: "",
        description: "",
        jobSource: "",
      });
      console.log("Saved Experience:", res.data);
    } catch (err) {
      console.error("❌ Error saving experience:", err);
      alert("Error saving experience");
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

     
      <form
        onSubmit={handleSubmit}
        className="relative z-10 max-w-4xl w-full p-8 bg-white shadow-lg rounded-2xl overflow-y-auto"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
          Add Work Experience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Job Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full mt-1 border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
                placeholder="Software Engineer"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Employment Type</label>
              <select
                name="employmentType"
                value={formData.employmentType}
                onChange={handleChange}
                className="w-full mt-1 border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select</option>
                <option>Full-Time</option>
                <option>Part Time</option>
                <option>Self-employed</option>
                <option>Freelance</option>
                <option>Contract</option>
                <option>Internship</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium">Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full mt-1 border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
                placeholder="ABC Pvt Ltd"
                required
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="isCurrent"
                checked={formData.isCurrent}
                onChange={handleChange}
              />
              <label>I am currently working in this role</label>
            </div>

            <div>
              <label className="block text-sm font-medium">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full mt-1 border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
                placeholder="Colombo, Sri Lanka"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="w-full mt-1 border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">End Date</label>
                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  className="w-full mt-1 border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
                  disabled={formData.isCurrent}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium">Location Type</label>
              <select
                name="locationType"
                value={formData.locationType}
                onChange={handleChange}
                className="w-full mt-1 border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select</option>
                <option>On-Site</option>
                <option>Hybrid</option>
                <option>Remote</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full mt-1 border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
                rows="4"
                placeholder="Describe your role..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Where did you find this job?</label>
              <select
                name="jobSource"
                value={formData.jobSource}
                onChange={handleChange}
                className="w-full mt-1 border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select</option>
                <option>LinkedIn</option>
                <option>Company Website</option>
                <option>Other Job Sites</option>
                <option>Referral</option>
                <option>Contacted by Recruiter</option>
                <option>Staffing agency</option>
                <option>Other</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-6 text-right">
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-700 transition-all duration-200"
          >
            Save Experience
          </button>
        </div>
      </form>
    </section>
  );
};

export default ExperienceForm;
