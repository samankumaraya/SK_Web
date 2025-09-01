
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Home } from "lucide-react";
import About from "./About";
import ViewEducation from "./ViewEducation";
import ViewExperiences from "./ViewExperiences";
import ViewSkills from "./ViewSkills";
import ViewProjects from "./ViewProjects";
import Contact from "./Contact";

export default function NewHomePage() {

  return (
   <div>
     <Header/>
     <Home/>
     <About/>
     <ViewEducation/>
     <ViewExperiences/>
     <ViewSkills/>
     <ViewProjects/>
     <Contact/>
     <Footer/> 
   </div>
  );
}
