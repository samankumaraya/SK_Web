import React from "react";
import { useNavigate } from "react-router-dom";
import {
  BookOpen,
  Briefcase,
  Code,
  GraduationCap,
  LayoutDashboard,
  PlusCircle,
  FolderOpen,
} from "lucide-react";

const AdminHome = () => {
  const navigate = useNavigate();

  const menuItems = [
    { name: "Add Project", path: "/admin/add-project", icon: <PlusCircle /> },
    { name: "Add Education", path: "/admin/add-education", icon: <PlusCircle /> },
    { name: "Add Skill", path: "/admin/add-skill", icon: <PlusCircle /> },
    { name: "Add Experience", path: "/admin/add-experience", icon: <PlusCircle /> },

    { name: "All Projects", path: "/admin/projects", icon: <FolderOpen /> },
    { name: "All Educations", path: "/admin/educations", icon: <FolderOpen /> },
    { name: "All Skills", path: "/admin/skills", icon: <FolderOpen /> },
    { name: "All Experience", path: "/admin/experiences", icon: <FolderOpen /> },
    { name: "All Charts", path: "/admin/charts", icon: <FolderOpen /> },
  ];

  return (
    <section
      className="min-h-screen bg-gray-100 flex flex-col items-center justify-start py-10 px-4"
    >
      
      <div className="flex items-center gap-3 mb-8">
        <LayoutDashboard className="w-10 h-10 text-indigo-600" />
        <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
      </div>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full">
        {menuItems.map((item, i) => (
          <div
            key={i}
            onClick={() => navigate(item.path)}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 flex flex-col items-center justify-center cursor-pointer transition group"
          >
            <div className="p-4 bg-indigo-100 rounded-full mb-4 group-hover:bg-indigo-600 group-hover:text-white transition">
              {item.icon}
            </div>
            <h2 className="text-lg font-semibold text-gray-700 group-hover:text-indigo-600">
              {item.name}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdminHome;
