import React, { useState, useEffect } from "react";
import axios from "axios";

const EditProjectModal = ({ project, onClose, onUpdated }) => {
  const [formData, setFormData] = useState({
    ...project,
    technologies: project?.technologies || [],
    skills: project?.skills || [],
    images: project?.images || [],
  });

  useEffect(() => {
    setFormData({
      ...project,
      technologies: project?.technologies || [],
      skills: project?.skills || [],
      images: project?.images || [],
    });
  }, [project]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleArrayChange = (e, field) => {
    const values = e.target.value.split(",").map((v) => v.trim()).filter(Boolean);
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
        if (key === "images" && formData.images[0] instanceof File) {
          [...formData.images].forEach((file) => data.append("images", file));
        } else if (Array.isArray(formData[key])) {
          data.append(key, JSON.stringify(formData[key]));
        } else {
          data.append(key, formData[key] || "");
        }
      }

      await axios.put(
        `http://localhost:5000/api/projects/${project._id}`,
        data,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      alert("Project updated successfully!");
      onUpdated();
      onClose();
    } catch (err) {
      console.error(err);
      alert("Error updating project");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
      <div className="bg-white p-6 rounded-lg w-full max-w-4xl max-h-screen overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Edit Project</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="title"
            value={formData.title || ""}
            onChange={handleChange}
            placeholder="Project Name"
            className="p-2 border rounded"
            required
          />
          <input
            type="text"
            name="shortDescription"
            value={formData.shortDescription || ""}
            onChange={handleChange}
            placeholder="Short Description"
            className="p-2 border rounded"
            required
          />
          <textarea
            name="detailedDescription"
            value={formData.detailedDescription || ""}
            onChange={handleChange}
            placeholder="Detailed Description"
            className="col-span-2 p-2 border rounded"
          />
          <input
            type="text"
            value={(formData.technologies || []).join(", ")}
            onChange={(e) => handleArrayChange(e, "technologies")}
            placeholder="Technologies (comma separated)"
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="projectType"
            value={formData.projectType || ""}
            onChange={handleChange}
            placeholder="Project Type"
            className="p-2 border rounded"
          />
          <input
            type="file"
            multiple
            onChange={handleImageChange}
            className="col-span-2"
          />
          <input
            type="text"
            name="videoLink"
            value={formData.videoLink || ""}
            onChange={handleChange}
            placeholder="Video Demo Link"
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="repoLink"
            value={formData.repoLink || ""}
            onChange={handleChange}
            placeholder="Repository Link"
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="liveLink"
            value={formData.liveLink || ""}
            onChange={handleChange}
            placeholder="Live Demo Link"
            className="p-2 border rounded"
          />
          <input
            type="date"
            name="startDate"
            value={formData.startDate?.split("T")[0] || ""}
            onChange={handleChange}
            className="p-2 border rounded"
          />
          <input
            type="date"
            name="endDate"
            value={formData.endDate?.split("T")[0] || ""}
            onChange={handleChange}
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="category"
            value={formData.category || ""}
            onChange={handleChange}
            placeholder="Category"
            className="p-2 border rounded"
          />
          <input
            type="text"
            value={(formData.skills || []).join(", ")}
            onChange={(e) => handleArrayChange(e, "skills")}
            placeholder="Skills (comma separated)"
            className="p-2 border rounded"
          />
          <select
            name="status"
            value={formData.status || "Planned"}
            onChange={handleChange}
            className="p-2 border rounded"
          >
            <option value="Completed">Completed</option>
            <option value="In-progress">In-progress</option>
            <option value="Planned">Planned</option>
          </select>
          <input
            type="text"
            name="role"
            value={formData.role || ""}
            onChange={handleChange}
            placeholder="Role"
            className="p-2 border rounded"
          />
          <input
            type="number"
            name="teamSize"
            value={formData.teamSize || ""}
            onChange={handleChange}
            placeholder="Team Size"
            className="p-2 border rounded"
          />
          <div className="col-span-2 flex justify-end space-x-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProjectModal;
