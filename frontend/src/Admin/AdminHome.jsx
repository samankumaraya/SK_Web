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
    { name: "Add Project", path: "/pro", icon: <PlusCircle /> },
    { name: "Add Education", path: "/edu", icon: <PlusCircle /> },
    { name: "Add Skill", path: "/ski", icon: <PlusCircle /> },
    { name: "Add Experience", path: "/exp", icon: <PlusCircle /> },
    { name: "Add Gallery", path: "/", icon: <PlusCircle /> },
    { name: "Add Blogs", path: "/", icon: <PlusCircle /> },
    { name: "All Projects", path: "/advp", icon: <FolderOpen /> },
    { name: "All Educations", path: "/adve", icon: <FolderOpen /> },
    { name: "All Skills", path: "/advs", icon: <FolderOpen /> },
    { name: "All Experience", path: "/advex", icon: <FolderOpen /> },
    { name: "All Charts", path: "/admin", icon: <FolderOpen /> },
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-start py-10 px-4 overflow-hidden">
     
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/bav.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-0"></div>

      
      <div className="relative z-10 flex flex-col items-center justify-start w-full max-w-6xl">
        <div className="flex items-center gap-3 mb-8">
          <LayoutDashboard className="w-10 h-10 text-indigo-600" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Admin Dashboard
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full px-2">
          {menuItems.map((item, i) => (
            <div
              key={i}
              onClick={() => navigate(item.path)}
              className="bg-white/90 rounded-2xl shadow-md hover:shadow-xl p-6 flex flex-col items-center justify-center cursor-pointer transition group"
            >
              <div className="p-4 bg-indigo-100 rounded-full mb-4 group-hover:bg-indigo-600 group-hover:text-white transition">
                {item.icon}
              </div>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-700 group-hover:text-indigo-600 text-center">
                {item.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdminHome;
