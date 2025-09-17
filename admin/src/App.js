
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import EducationForm from "./Admin/EducationForm";
import ExperienceForm from "./Admin/ExperienceForm";
import SkillForm from "./Admin/SkillForm";
import AddProjectForm from "./Admin/AddProjectForm";

import AdminHome from "./Admin/AdminHome";
import AdminViewEducation from "./Admin/AdminViewEducation";
import AdminViewProjects from "./Admin/AdminViewProjects";
import AdminViewExperiences from "./Admin/AdminViewExperiences";
import AdminViewSkills from "./Admin/AdminViewSkills";


import GalleryUpload from "./Admin/GalleryUpload";

import AdminGalleryView from "./Admin/AdminGalleryView";


import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <Router>
     
      <Routes>
         <Route path="/" element={<AdminLogin />} />
         <Route path="/edu" element={<EducationForm />} />
          <Route path="/exp" element={<ExperienceForm />} />
          <Route path="/ski" element={<SkillForm />} />
          <Route path="/pro" element={<AddProjectForm />} />

          <Route path="/advp" element={<AdminViewProjects />} />
          <Route path="/adve" element={<AdminViewEducation />} />
          <Route path="/advex" element={<AdminViewExperiences />} />  
          <Route path="/advs" element={<AdminViewSkills />} /> 
          <Route path="/advg" element={<AdminGalleryView />} /> 
           <Route path="/ahome" element={<AdminHome />} />
           <Route path="/agal" element={<GalleryUpload />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="admin/dashboard" element={<AdminDashboard />} />
           


      </Routes>
    </Router>
  );
}

export default App;
