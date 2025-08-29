import React, { useEffect, useState } from "react";
import axios from "axios";
import EditProjectModal from "./EditProjectModal";

const ViewProjectModal = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
      <div className="bg-white p-6 rounded-lg w-full max-w-4xl max-h-screen overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 font-bold text-2xl"
        >
          &times;
        </button>
        <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
        <p className="mb-2"><strong>Short Description:</strong> {project.shortDescription}</p>
        <p className="mb-2"><strong>Detailed Description:</strong> {project.detailedDescription}</p>
        <p className="mb-2"><strong>Technologies:</strong> {project.technologies?.join(", ")}</p>
        <p className="mb-2"><strong>Project Type:</strong> {project.projectType}</p>
        <p className="mb-2"><strong>Role:</strong> {project.role}</p>
        <p className="mb-2"><strong>Team Size:</strong> {project.teamSize}</p>
        <p className="mb-2"><strong>Status:</strong> {project.status}</p>
        <p className="mb-2"><strong>Category:</strong> {project.category}</p>
        <p className="mb-2"><strong>Skills:</strong> {project.skills?.join(", ")}</p>
        <p className="mb-2"><strong>Start Date:</strong> {project.startDate ? new Date(project.startDate).toLocaleDateString() : "N/A"}</p>
        <p className="mb-2"><strong>End Date:</strong> {project.endDate ? new Date(project.endDate).toLocaleDateString() : "N/A"}</p>
        <div className="mt-4 flex gap-2 flex-wrap">
          {project.liveLink && <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">Live</a>}
          {project.repoLink && <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">Repo</a>}
          {project.videoLink && <a href={project.videoLink} target="_blank" rel="noopener noreferrer" className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">Video</a>}
        </div>
        {project.images?.length > 0 && (
          <div className="mt-4 flex gap-2 overflow-x-auto py-2">
            {project.images.map((img, i) => (
              <img key={i} src={img} alt={`img-${i}`} className="w-48 h-48 object-cover rounded flex-shrink-0" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const AdminViewProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [viewProject, setViewProject] = useState(null);

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

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      try {
        await axios.delete(`http://localhost:5000/api/projects/${id}`);
        fetchProjects();
      } catch (err) {
        console.error(err);
        alert("Error deleting project");
      }
    }
  };

  if (loading) return <p>Loading projects...</p>;

  return (
    <section className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-green-600">All Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project._id} className="border rounded-lg p-4 bg-white shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-gray-600">{project.shortDescription}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.technologies?.map((tech, i) => (
                <span key={i} className="bg-blue-200 text-blue-800 px-2 py-1 rounded">{tech}</span>
              ))}
            </div>
            {project.images?.length > 0 && (
              <img src={project.images[0]} alt={project.title} className="mt-2 w-full h-40 object-cover rounded" />
            )}
            <div className="mt-4 flex gap-2 flex-wrap">
              <button onClick={() => setViewProject(project)} className="bg-gray-600 text-white px-3 py-1 rounded hover:bg-gray-700">View</button>
              <button onClick={() => setSelectedProject(project)} className="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700">Edit</button>
              <button onClick={() => handleDelete(project._id)} className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">Delete</button>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <EditProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onUpdated={fetchProjects}
        />
      )}

      {viewProject && (
        <ViewProjectModal
          project={viewProject}
          onClose={() => setViewProject(null)}
        />
      )}
    </section>
  );
};

export default AdminViewProjects;
