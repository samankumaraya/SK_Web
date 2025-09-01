import React, { useState } from "react";
import axios from "axios";


const AddProjectForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    shortDescription: "",
    detailedDescription: "",
    technologies: [],
    projectType: "",
    images: [],
    videoLink: "",
    repoLink: "",
    liveLink: "",
    startDate: "",
    endDate: "",
    category: "",
    skills: [],
    status: "Completed",
    role: "",
    teamSize: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleArrayChange = (e, field) => {
    const values = e.target.value.split(",").map((v) => v.trim());
    setFormData((prev) => ({ ...prev, [field]: values }));
  };

  const handleImageChange = (e) => {
    setFormData((prev) => ({ ...prev, images: [...e.target.files] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      for (let key in formData) {
        if (key === "images") {
          formData.images.forEach((file) => data.append("images", file));
        } else if (Array.isArray(formData[key])) {
          data.append(key, JSON.stringify(formData[key]));
        } else {
          data.append(key, formData[key]);
        }
      }

      await axios.post("http://localhost:5000/api/projects", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Project added successfully!");
      setFormData({
        title: "",
        shortDescription: "",
        detailedDescription: "",
        technologies: [],
        projectType: "",
        images: [],
        videoLink: "",
        repoLink: "",
        liveLink: "",
        startDate: "",
        endDate: "",
        category: "",
        skills: [],
        status: "Completed",
        role: "",
        teamSize: ""
      });
    } catch (err) {
      console.error(err);
      alert("Error adding project");
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

      <div className="relative z-10 max-w-6xl w-full bg-white p-6 rounded-lg shadow-lg overflow-y-auto">
        <h2 className="text-4xl text-blue-500 font-bold mb-4 text-center">Add Project</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="title"
            placeholder="Project Name"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />

          <input
            type="text"
            name="shortDescription"
            placeholder="Short Description"
            value={formData.shortDescription}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />

          <textarea
            name="detailedDescription"
            placeholder="Detailed Description"
            value={formData.detailedDescription}
            onChange={handleChange}
            className="w-full p-2 border rounded col-span-2"
          />

          <input
            type="text"
            placeholder="Technologies Used (comma separated)"
            value={formData.technologies.join(", ")}
            onChange={(e) => handleArrayChange(e, "technologies")}
            className="w-full p-2 border rounded"
          />

          <input
            type="text"
            name="projectType"
            placeholder="Project Type (Web/Mobile/Desktop)"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />

          <input
            type="file"
            multiple
            onChange={handleImageChange}
            className="w-full"
          />

          <input
            type="text"
            name="videoLink"
            placeholder="Video Demo Link"
            value={formData.videoLink}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />

          <input
            type="text"
            name="repoLink"
            placeholder="Repository Link"
            value={formData.repoLink}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />

          <input
            type="text"
            name="liveLink"
            placeholder="Live Demo Link"
            value={formData.liveLink}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />

          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />

          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />

          <input
            type="text"
            name="category"
            placeholder="Category / Domain"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />

          <input
            type="text"
            placeholder="Skills Highlighted (comma separated)"
            value={formData.skills.join(", ")}
            onChange={(e) => handleArrayChange(e, "skills")}
            className="w-full p-2 border rounded"
          />

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="Completed">Completed</option>
            <option value="In-progress">In-progress</option>
            <option value="Planned">Planned</option>
          </select>

          <input
            type="text"
            name="role"
            placeholder="Your Role"
            value={formData.role}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />

          <input
            type="number"
            name="teamSize"
            placeholder="Team Size"
            value={formData.teamSize}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />

          <button
            type="submit"
            className="col-span-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Save
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddProjectForm;
