import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminViewSkills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editingSkill, setEditingSkill] = useState(null); // track skill being edited
  const [formData, setFormData] = useState({
    name: "",
    percentage: "",
    yearsOfExperience: "",
    image: null,
  });

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/skills");
      setSkills(res.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch skills");
      setLoading(false);
    }
  };

  
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this skill?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/skills/${id}`);
      setSkills(skills.filter((s) => s._id !== id));
    } catch (err) {
      alert("Failed to delete skill");
    }
  };

  
  const handleEdit = (skill) => {
    setEditingSkill(skill);
    setFormData({
      name: skill.name,
      percentage: skill.percentage,
      yearsOfExperience: skill.yearsOfExperience,
      image: null,
    });
  };

  
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  
  const handleSave = async () => {
    const data = new FormData();
    data.append("name", formData.name);
    data.append("percentage", formData.percentage);
    data.append("yearsOfExperience", formData.yearsOfExperience);
    if (formData.image) data.append("image", formData.image);

    try {
      const res = await axios.put(
        `http://localhost:5000/api/skills/${editingSkill._id}`,
        data,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setSkills(
        skills.map((s) => (s._id === editingSkill._id ? res.data : s))
      );
      setEditingSkill(null); 
    } catch (err) {
      alert("Failed to update skill");
    }
  };

  if (loading) return <p className="text-center mt-10 text-gray-500">Loading skills...</p>;
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
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill._id}
              className="bg-white rounded-lg shadow-lg p-5 flex flex-col items-center transform transition hover:-translate-y-2"
            >
              <img
                src={`http://localhost:5000${skill.imagePath}`}
                alt={skill.name}
                className="w-20 h-20 rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <p className="text-gray-600 mb-1">Experience: {skill.yearsOfExperience} years</p>
              <p className="text-gray-600 mb-3">Proficiency: {skill.percentage}%</p>
              <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
                <div
                  className="bg-green-500 h-3 rounded-full"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
              
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(skill)}
                  className="px-3 py-1 bg-blue-500 text-white rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(skill._id)}
                  className="px-3 py-1 bg-red-500 text-white rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

     
      {editingSkill && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-bold mb-4">Edit Skill</h3>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Skill Name"
              className="w-full border p-2 mb-3 rounded"
            />
            <input
              type="number"
              name="percentage"
              value={formData.percentage}
              onChange={handleChange}
              placeholder="Proficiency (%)"
              className="w-full border p-2 mb-3 rounded"
            />
            <input
              type="number"
              name="yearsOfExperience"
              value={formData.yearsOfExperience}
              onChange={handleChange}
              placeholder="Years of Experience"
              className="w-full border p-2 mb-3 rounded"
            />
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="mb-3"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setEditingSkill(null)}
                className="px-4 py-2 bg-gray-400 text-white rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-green-500 text-white rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AdminViewSkills;
