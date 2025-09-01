import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminViewExperiences = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [editExperience, setEditExperience] = useState(null);

  
  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/experience");
        setExperiences(response.data);
      } catch (err) {
        setError("Failed to fetch experiences.");
      } finally {
        setLoading(false);
      }
    };
    fetchExperiences();
  }, []);

 
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this experience?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/experience/${id}`);
      setExperiences(experiences.filter((exp) => exp._id !== id));
    } catch (err) {
      alert("Failed to delete experience.");
    }
  };

  
  const handleEditChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditExperience((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:5000/api/experience/${editExperience._id}`,
        editExperience
      );
      setExperiences(
        experiences.map((exp) => (exp._id === editExperience._id ? response.data : exp))
      );
      setEditExperience(null);
    } catch (err) {
      alert("Failed to update experience.");
    }
  };

  const closeModal = () => {
    setSelectedExperience(null);
    setEditExperience(null);
  };

  if (loading) return <p className="text-center mt-10 text-blue-500">Loading experiences...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <section
      style={{
        backgroundImage: "url('/images/Background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h2 className="text-5xl font-bold text-center mb-8 text-green-600">All Experiences</h2>

        {experiences.length === 0 ? (
          <p className="text-center text-gray-500">No experiences found.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {experiences.map((exp) => (
              <div
                key={exp._id}
                className="bg-white shadow-md rounded-lg p-6 border border-gray-100 hover:shadow-lg transition-shadow flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {exp.title} <span className="text-gray-500">@ {exp.company}</span>
                  </h3>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-medium">Employment Type:</span> {exp.employmentType}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-medium">Location:</span> {exp.location || "—"}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-medium">Start:</span> {new Date(exp.startDate).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-medium">End:</span>{" "}
                    {exp.isCurrent ? <span className="text-green-600 font-semibold">Present</span> : exp.endDate ? new Date(exp.endDate).toLocaleDateString() : "—"}
                  </p>
                </div>

                <div className="mt-4 flex gap-2">
                  <button
                    onClick={() => setSelectedExperience(exp)}
                    className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition flex-1"
                  >
                    View
                  </button>
                  <button
                    onClick={() => setEditExperience(exp)}
                    className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition flex-1"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(exp._id)}
                    className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition flex-1"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        
        {selectedExperience && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={closeModal}
          >
            <div
              className="bg-white rounded-lg max-w-lg w-full p-6 relative shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl font-bold"
                aria-label="Close modal"
              >
                &times;
              </button>

              <h3 className="text-2xl font-bold mb-4 text-gray-800">{selectedExperience.title}</h3>

              <div className="space-y-2 text-gray-700">
                <p>
                  <span className="font-semibold">Employment Type:</span> {selectedExperience.employmentType}
                </p>
                <p>
                  <span className="font-semibold">Company:</span> {selectedExperience.company}
                </p>
                <p>
                  <span className="font-semibold">Start Date:</span> {new Date(selectedExperience.startDate).toLocaleDateString()}
                </p>
                <p>
                  <span className="font-semibold">End Date:</span>{" "}
                  {selectedExperience.isCurrent ? "Present" : selectedExperience.endDate ? new Date(selectedExperience.endDate).toLocaleDateString() : "—"}
                </p>
                <p>
                  <span className="font-semibold">Location:</span> {selectedExperience.location || "—"}
                </p>
                <p>
                  <span className="font-semibold">Location Type:</span> {selectedExperience.locationType || "—"}
                </p>
                <p>
                  <span className="font-semibold">Description:</span> {selectedExperience.description || "—"}
                </p>
                <p>
                  <span className="font-semibold">Job Source:</span> {selectedExperience.jobSource || "—"}
                </p>
              </div>
            </div>
          </div>
        )}

       
{editExperience && (
  <div
    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    onClick={closeModal}
  >
    <div
      className="bg-white rounded-lg max-w-3xl w-full p-6 relative shadow-lg"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={closeModal}
        className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl font-bold"
        aria-label="Close modal"
      >
        &times;
      </button>

      <h3 className="text-2xl font-bold mb-4 text-gray-800">Edit Experience</h3>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleEditSubmit}>
        <div>
          <label className="block font-semibold mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={editExperience.title}
            onChange={handleEditChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Employment Type</label>
          <input
            type="text"
            name="employmentType"
            value={editExperience.employmentType}
            onChange={handleEditChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Company</label>
          <input
            type="text"
            name="company"
            value={editExperience.company}
            onChange={handleEditChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Location</label>
          <input
            type="text"
            name="location"
            value={editExperience.location || ""}
            onChange={handleEditChange}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        <div>
    <label className="block font-semibold mb-1">Location Type</label>
    <select
      name="locationType"
      value={editExperience.locationType || ""}
      onChange={handleEditChange}
      className="w-full border border-gray-300 p-2 rounded"
    >
      <option value="">Select</option>
      <option value="On-Site">On-Site</option>
      <option value="Hybrid">Hybrid</option>
      <option value="Remote">Remote</option>
    </select>
  </div>

        <div>
          <label className="block font-semibold mb-1">Start Date</label>
          <input
            type="date"
            name="startDate"
            value={
              editExperience.startDate
                ? new Date(editExperience.startDate).toISOString().split("T")[0]
                : ""
            }
            onChange={handleEditChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">End Date</label>
          <input
            type="date"
            name="endDate"
            value={
              editExperience.endDate
                ? new Date(editExperience.endDate).toISOString().split("T")[0]
                : ""
            }
            onChange={handleEditChange}
            className="w-full border border-gray-300 p-2 rounded"
            disabled={editExperience.isCurrent}
          />
        </div>

        <div className="flex items-center gap-2 mt-2">
          <input
            type="checkbox"
            name="isCurrent"
            checked={editExperience.isCurrent || false}
            onChange={handleEditChange}
          />
          <label className="font-semibold">Currently Working</label>
        </div>

        <div className="md:col-span-2">
          <label className="block font-semibold mb-1">Description</label>
          <textarea
            name="description"
            value={editExperience.description || ""}
            onChange={handleEditChange}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        <div className="md:col-span-2">
    <label className="block font-semibold mb-1">Job Source</label>
    <select
      name="jobSource"
      value={editExperience.jobSource || ""}
      onChange={handleEditChange}
      className="w-full border border-gray-300 p-2 rounded"
    >
      <option value="">Select</option>
      <option value="LinkedIn">LinkedIn</option>
      <option value="Company Website">Company Website</option>
      <option value="Other Job Sites">Other Job Sites</option>
      <option value="Referral">Referral</option>
      <option value="Contacted by Recruiter">Contacted by Recruiter</option>
      <option value="Staffing agency">Staffing agency</option>
      <option value="Other">Other</option>
    </select>
  </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition w-full"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  </div>
)}

      </div>
    </section>
  );
};

export default AdminViewExperiences;
