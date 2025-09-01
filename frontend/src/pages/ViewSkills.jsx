
import React, { useEffect, useState } from "react";
import axios from "axios";


const ViewSkills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
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

    fetchSkills();
  }, []);

  if (loading) return <p className="text-center mt-10 text-gray-500">Loading skills...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

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
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-green-500 h-3 rounded-full"
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div></section>
    
    </div>
  );
};

export default ViewSkills;
