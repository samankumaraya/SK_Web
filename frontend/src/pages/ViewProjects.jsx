import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ViewProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/projects");
        setProjects(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (loading) return <p>Loading projects...</p>;

  return (
    <div><section
      style={{
        backgroundImage: "url('/images/Background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <Header/>
      <div className="p-6">
       
        <h1 className="text-4xl font-extrabold text-center mb-8 text-green-600">
          All Projects
        </h1>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project._id}
              className="border rounded-lg p-4 bg-white shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-gray-600">{project.shortDescription}</p>

              <div className="mt-2 flex flex-wrap gap-2">
                {project.technologies?.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-200 text-blue-800 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.images && project.images.length > 0 && (
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="mt-2 w-full h-40 object-cover rounded"
                />
              )}

             
              <div className="mt-4 flex gap-2">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                  >
                    Live
                  </a>
                )}
                {project.repoLink && (
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                  >
                    Repo
                  </a>
                )}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700"
                >
                  View
                </button>
              </div>
            </div>
          ))}
        </div>

        
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full p-6 relative overflow-y-auto max-h-[90vh]">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4  text-gray-600 hover:text-gray-900 font-bold text-2xl"
              >
                &times;
              </button>

              <h2 className="text-3xl font-bold mb-4">
                {selectedProject.title}
              </h2>
              <p className="text-gray-700 mb-2">
                <strong>Short Description:</strong>{" "}
                {selectedProject.shortDescription}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Detailed Description:</strong>{" "}
                {selectedProject.detailedDescription}
              </p>
              <p className="mb-2">
                <strong>Technologies:</strong>{" "}
                {selectedProject.technologies?.join(", ")}
              </p>
              <p className="mb-2">
                <strong>Project Type:</strong> {selectedProject.projectType}
              </p>
              <p className="mb-2">
                <strong>Role:</strong> {selectedProject.role}
              </p>
              <p className="mb-2">
                <strong>Team Size:</strong> {selectedProject.teamSize}
              </p>
              <p className="mb-2">
                <strong>Status:</strong> {selectedProject.status}
              </p>
              <p className="mb-2">
                <strong>Category:</strong> {selectedProject.category}
              </p>
              <p className="mb-2">
                <strong>Skills:</strong> {selectedProject.skills?.join(", ")}
              </p>
              <p className="mb-2">
                <strong>Start Date:</strong>{" "}
                {selectedProject.startDate
                  ? new Date(selectedProject.startDate).toLocaleDateString()
                  : "N/A"}
              </p>
              <p className="mb-2">
                <strong>End Date:</strong>{" "}
                {selectedProject.endDate
                  ? new Date(selectedProject.endDate).toLocaleDateString()
                  : "N/A"}
              </p>

             
              <div className="mt-4 flex gap-3 flex-wrap">
                {selectedProject.liveLink && (
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                  >
                    Live
                  </a>
                )}
                {selectedProject.repoLink && (
                  <a
                    href={selectedProject.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                  >
                    Repo
                  </a>
                )}
                {selectedProject.videoLink && (
                  <a
                    href={selectedProject.videoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                  >
                    Video
                  </a>
                )}
              </div>

              
              {selectedProject.images && selectedProject.images.length > 0 && (
                <div className="mt-4 flex gap-2 overflow-x-auto py-2">
                  {selectedProject.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`img-${i}`}
                      className="w-48 h-48 object-cover rounded flex-shrink-0"
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
    <Footer/>
    </div>
  );
};

export default ViewProjects;
