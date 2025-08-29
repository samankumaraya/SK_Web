import React, { useEffect, useState } from "react";
import axios from "axios";
import EditEducationModal from "./EditEducationModal"; // Create a separate modal component

const AdminViewEducation = () => {
  const [educations, setEducations] = useState([]);
  const [selectedEducation, setSelectedEducation] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  useEffect(() => {
    fetchEducations();
  }, []);

  const fetchEducations = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/education");
      setEducations(res.data);
    } catch (error) {
      console.error("Failed to fetch education:", error);
    }
  };

  const handleView = (education) => {
    setSelectedEducation(education);
    setIsViewModalOpen(true);
  };

  const handleEdit = (education) => {
    setSelectedEducation(education);
    setIsEditModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this education entry?")) {
      try {
        await axios.delete(`http://localhost:5000/api/education/${id}`);
        fetchEducations();
      } catch (error) {
        console.error("Failed to delete education:", error);
      }
    }
  };

  const closeViewModal = () => {
    setIsViewModalOpen(false);
    setSelectedEducation(null);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedEducation(null);
  };

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
      <div className="p-6">
        <h1 className="text-5xl text-green-600 font-bold mb-4 text-center">Education</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {educations.map((edu) => (
            <div
              key={edu._id}
              className="border p-4 bg-white rounded shadow flex justify-between items-center"
            >
              <div>
                <h2 className="font-semibold">{edu.school}</h2>
                <p>{edu.fieldOfStudy}</p>
                <p>
                  {new Date(edu.startDate).toLocaleDateString()} -{" "}
                  {edu.endDate ? new Date(edu.endDate).toLocaleDateString() : "Present"}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => handleView(edu)}
                  className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                >
                  View
                </button>
                <button
                  onClick={() => handleEdit(edu)}
                  className="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(edu._id)}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        
        {isViewModalOpen && selectedEducation && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-4">
            <div className="bg-white rounded-xl p-6 w-full max-w-md relative text-center shadow-lg">
              <button
                onClick={closeViewModal}
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 font-bold text-2xl"
              >
                &times;
              </button>

              <h2 className="text-2xl font-bold mb-4">{selectedEducation.school}</h2>
              <div className="space-y-2 text-left">
                <p><strong>Degree:</strong> {selectedEducation.degree}</p>
                <p><strong>Field of Study:</strong> {selectedEducation.fieldOfStudy}</p>
                <p>
                  <strong>Duration:</strong>{" "}
                  {new Date(selectedEducation.startDate).toLocaleDateString()} -{" "}
                  {selectedEducation.endDate
                    ? new Date(selectedEducation.endDate).toLocaleDateString()
                    : "Present"}
                </p>
                {selectedEducation.grade && <p><strong>Grade:</strong> {selectedEducation.grade}</p>}
                {selectedEducation.activities && <p><strong>Activities:</strong> {selectedEducation.activities}</p>}
                {selectedEducation.description && <p><strong>Description:</strong> {selectedEducation.description}</p>}
              </div>
            </div>
          </div>
        )}

        
        {isEditModalOpen && selectedEducation && (
          <EditEducationModal
            education={selectedEducation}
            onClose={closeEditModal}
            onUpdated={fetchEducations}
          />
        )}
      </div>
    </section>
  );
};

export default AdminViewEducation;
