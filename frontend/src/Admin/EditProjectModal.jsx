import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminHeader from "./compon/AdminHeader";
import Footer from "../components/Footer";

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

  if (!project) return null;

  return (
    <div>
      <AdminHeader/>
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
      <div className="bg-white p-6 rounded-lg w-full max-w-4xl max-h-screen overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Edit Project</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          
          <div>
            <label className="block font-semibold mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title || ""}
              onChange={handleChange}
              className="p-2 border rounded w-full"
              required
            />
          </div>

          
          <div>
            <label className="block font-semibold mb-1">Short Description</label>
            <input
              type="text"
              name="shortDescription"
              value={formData.shortDescription || ""}
              onChange={handleChange}
              className="p-2 border rounded w-full"
              required
            />
          </div>

          
          <div className="col-span-2">
            <label className="block font-semibold mb-1">Detailed Description</label>
            <textarea
              name="detailedDescription"
              value={formData.detailedDescription || ""}
              onChange={handleChange}
              className="p-2 border rounded w-full"
            />
          </div>

         
          <div>
            <label className="block font-semibold mb-1">Technologies (comma separated)</label>
            <input
              type="text"
              value={(formData.technologies || []).join(", ")}
              onChange={(e) => handleArrayChange(e, "technologies")}
              className="p-2 border rounded w-full"
            />
          </div>

         
          <div>
            <label className="block font-semibold mb-1">Project Type</label>
            <input
              type="text"
              name="projectType"
              value={formData.projectType || ""}
              onChange={handleChange}
              className="p-2 border rounded w-full"
            />
          </div>

          
          <div className="col-span-2">
            <label className="block font-semibold mb-1">Images</label>
            <input
              type="file"
              multiple
              onChange={handleImageChange}
              className="w-full"
            />
          </div>

          
          <div>
            <label className="block font-semibold mb-1">Video Demo Link</label>
            <input
              type="text"
              name="videoLink"
              value={formData.videoLink || ""}
              onChange={handleChange}
              className="p-2 border rounded w-full"
            />
          </div>

         
          <div>
            <label className="block font-semibold mb-1">Repository Link</label>
            <input
              type="text"
              name="repoLink"
              value={formData.repoLink || ""}
              onChange={handleChange}
              className="p-2 border rounded w-full"
            />
          </div>

          
          <div>
            <label className="block font-semibold mb-1">Live Demo Link</label>
            <input
              type="text"
              name="liveLink"
              value={formData.liveLink || ""}
              onChange={handleChange}
              className="p-2 border rounded w-full"
            />
          </div>

          
          <div>
            <label className="block font-semibold mb-1">Start Date</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate?.split("T")[0] || ""}
              onChange={handleChange}
              className="p-2 border rounded w-full"
            />
          </div>

         
          <div>
            <label className="block font-semibold mb-1">End Date</label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate?.split("T")[0] || ""}
              onChange={handleChange}
              className="p-2 border rounded w-full"
            />
          </div>

         
          <div>
            <label className="block font-semibold mb-1">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category || ""}
              onChange={handleChange}
              className="p-2 border rounded w-full"
            />
          </div>

          
          <div>
            <label className="block font-semibold mb-1">Skills (comma separated)</label>
            <input
              type="text"
              value={(formData.skills || []).join(", ")}
              onChange={(e) => handleArrayChange(e, "skills")}
              className="p-2 border rounded w-full"
            />
          </div>

          
          <div>
            <label className="block font-semibold mb-1">Status</label>
            <select
              name="status"
              value={formData.status || "Planned"}
              onChange={handleChange}
              className="p-2 border rounded w-full"
            >
              <option value="Completed">Completed</option>
              <option value="In-progress">In-progress</option>
              <option value="Planned">Planned</option>
            </select>
          </div>

        
          <div>
            <label className="block font-semibold mb-1">Role</label>
            <input
              type="text"
              name="role"
              value={formData.role || ""}
              onChange={handleChange}
              className="p-2 border rounded w-full"
            />
          </div>

          
          <div>
            <label className="block font-semibold mb-1">Team Size</label>
            <input
              type="number"
              name="teamSize"
              value={formData.teamSize || ""}
              onChange={handleChange}
              className="p-2 border rounded w-full"
            />
          </div>

          
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
    </div><Footer/></div>
  );
};

export default EditProjectModal;
