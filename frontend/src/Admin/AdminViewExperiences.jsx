import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminViewExperiences = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedExperience, setSelectedExperience] = useState(null);

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

  
  const closeModal = () => setSelectedExperience(null);

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
 
    <div className="max-w-5xl mx-auto px-4 py-8 ">
      <h2 className="text-5xl font-bold text-center mb-8 text-green-600 ">All Experiences</h2>

      {experiences.length === 0 ? (
        <p className="text-center text-gray-500">No experiences found.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {experiences.map((exp) => (
            <div key={exp._id} className="bg-white shadow-md rounded-lg p-6 border border-gray-100 hover:shadow-lg transition-shadow flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {exp.title} <span className="text-gray-500">@ {exp.company}</span>
                </h3>
                <p className="text-sm text-gray-600 mb-1">
                  <span className="font-medium">Employment Type:</span> {exp.employmentType}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  <span className="font-medium">Location:</span> {exp.location || '—'}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  <span className="font-medium">Start:</span> {new Date(exp.startDate).toLocaleDateString()}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  <span className="font-medium">End:</span>{" "}
                  {exp.isCurrent ? (
                    <span className="text-green-600 font-semibold">Present</span>
                  ) : (
                    exp.endDate ? new Date(exp.endDate).toLocaleDateString() : "—"
                  )}
                </p>
              </div>

              <button
                onClick={() => setSelectedExperience(exp)}
                className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
              >
                View
              </button>
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
              <p><span className="font-semibold">Employment Type:</span> {selectedExperience.employmentType}</p>
              <p><span className="font-semibold">Company:</span> {selectedExperience.company}</p>
              <p><span className="font-semibold">Start Date:</span> {new Date(selectedExperience.startDate).toLocaleDateString()}</p>
              <p><span className="font-semibold">End Date:</span> {selectedExperience.isCurrent ? 'Present' : (selectedExperience.endDate ? new Date(selectedExperience.endDate).toLocaleDateString() : '—')}</p>
              <p><span className="font-semibold">Location:</span> {selectedExperience.location || '—'}</p>
              <p><span className="font-semibold">Location Type:</span> {selectedExperience.locationType || '—'}</p>
              <p><span className="font-semibold">Description:</span> {selectedExperience.description || '—'}</p>
              <p><span className="font-semibold">Job Source:</span> {selectedExperience.jobSource || '—'}</p>
            </div>
          </div>
        </div>
      )}
    </div>
    </section>
  );
};

export default AdminViewExperiences;
