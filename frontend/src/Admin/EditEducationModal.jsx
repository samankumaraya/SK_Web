import React, { useState, useEffect } from "react";
import axios from "axios";

const EditEducationModal = ({ education, onClose, onUpdated }) => {
  const [formData, setFormData] = useState({
    school: "",
    degree: "",
    fieldOfStudy: "",
    startDate: "",
    endDate: "",
    grade: "",
    activities: "",
    description: "",
  });

  useEffect(() => {
    if (education) {
      setFormData({
        school: education.school || "",
        degree: education.degree || "",
        fieldOfStudy: education.fieldOfStudy || "",
        startDate: education.startDate ? new Date(education.startDate).toISOString().slice(0, 10) : "",
        endDate: education.endDate ? new Date(education.endDate).toISOString().slice(0, 10) : "",
        grade: education.grade || "",
        activities: education.activities || "",
        description: education.description || "",
      });
    }
  }, [education]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/education/${education._id}`, formData);
      alert("Education updated successfully!");
      onUpdated();
      onClose();
    } catch (err) {
      console.error(err);
      alert("Failed to update education");
    }
  };

  if (!education) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
      <div className="bg-white p-6 rounded-lg w-full max-w-3xl max-h-screen overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">Edit Education</h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div>
            <label className="block font-semibold mb-1">School</label>
            <input
              type="text"
              name="school"
              value={formData.school}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Degree</label>
            <input
              type="text"
              name="degree"
              value={formData.degree}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Field of Study</label>
            <input
              type="text"
              name="fieldOfStudy"
              value={formData.fieldOfStudy}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Grade</label>
            <input
              type="text"
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Start Date</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">End Date</label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Activities</label>
            <input
              type="text"
              name="activities"
              value={formData.activities}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>
          {/* Full width textarea for description */}
          <div className="md:col-span-2">
            <label className="block font-semibold mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>
          <div className="md:col-span-2 flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEducationModal;
