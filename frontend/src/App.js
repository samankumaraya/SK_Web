import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EducationForm from "./Admin/EducationForm";
import ExperienceForm from "./Admin/ExperienceForm";
import SkillForm from "./Admin/SkillForm";
import AddProjectForm from "./Admin/AddProjectForm";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ViewProjects from "./pages/ViewProjects";
import ViewEducation from "./pages/ViewEducation";
import ViewExperience from "./pages/ViewExperiences";
import ViewSkills from "./pages/ViewSkills";
import AdminHome from "./Admin/AdminHome";

function App() {
  return (
    <Router>
     
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/education" element={<EducationForm />} />
          <Route path="/experience" element={<ExperienceForm />} />
          <Route path="/skills" element={<SkillForm />} />
          <Route path="/project" element={<AddProjectForm />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/vprojects" element={<ViewProjects />} />
          <Route path="/veducation" element={<ViewEducation />} />
           <Route path="/vexperience" element={<ViewExperience />} />
            <Route path="/admin" element={<AdminHome/>} />
      </Routes>
    </Router>
  );
}

export default App;
