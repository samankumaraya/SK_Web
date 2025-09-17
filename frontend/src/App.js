
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
import AdminViewEducation from "./Admin/AdminViewEducation";
import AdminViewProjects from "./Admin/AdminViewProjects";
import AdminViewExperiences from "./Admin/AdminViewExperiences";
import AdminViewSkills from "./Admin/AdminViewSkills";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NewHomePage from "./pages/NewHome";

import GalleryUpload from "./Admin/GalleryUpload";
import GalleryView from "./pages/GalleryView";
import AdminGalleryView from "./Admin/AdminGalleryView";
import ReviewPage from "./pages/ReviewPage";

import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <Router>
     
      <Routes>
        <Route path="/" element={<NewHomePage />} />
      {/*   <Route path="/edu" element={<EducationForm />} />
          <Route path="/exp" element={<ExperienceForm />} />
          <Route path="/ski" element={<SkillForm />} />
          <Route path="/pro" element={<AddProjectForm />} />*/}
          <Route path="/con" element={<Contact />} />
          <Route path="/abo" element={<About />} />
          <Route path="/vpro" element={<ViewProjects />} />
          <Route path="/vedu" element={<ViewEducation />} />
          <Route path="/vexp" element={<ViewExperience />} />
          <Route path="/vski" element={<ViewSkills />} />
          <Route path="/vgal" element={<GalleryView />} />
          <Route path="/vrev" element={<ReviewPage />} />

        {/*  <Route path="/advp" element={<AdminViewProjects />} />
          <Route path="/adve" element={<AdminViewEducation />} />
          <Route path="/advex" element={<AdminViewExperiences />} />  
          <Route path="/advs" element={<AdminViewSkills />} /> 
           <Route path="/ahome" element={<AdminHome />} />
           <Route path="/agal" element={<GalleryUpload />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="admin/dashboard" element={<AdminDashboard />} />
          <Route path="/advg" element={<AdminGalleryView />} /> */}
           <Route path="/header" element={<Header />} />
           <Route path="/footer" element={<Footer />} /> 
           <Route path="/nhome" element={<NewHomePage />} />
          
           


      </Routes>
    </Router>
  );
}

export default App;
