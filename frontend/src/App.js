import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EducationForm from "./pages/EducationForm";
import ExperienceForm from "./pages/ExperienceForm";
import SkillForm from "./pages/SkillForm";
import AddProjectForm from "./pages/AddProjectForm";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ViewProjects from "./pages/ViewProjects";
import ViewEducation from "./pages/ViewEducation";
import ViewExperience from "./pages/ViewExperiences";
import ViewSkills from "./pages/ViewSkills";

function App() {
  return (
    <Router>
      {/* All routes must be inside <Router> */}
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
            <Route path="/vskills" element={<ViewSkills/>} />
      </Routes>
    </Router>
  );
}

export default App;
