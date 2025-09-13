import React from "react";
import { useNavigate } from "react-router-dom";
import HomeHeader from "../components/HomeHeader";
import Footer from "../components/Footer";
import aboutIcon from "../assets/icons/about.png";
import contactIcon from "../assets/icons/contact.png";
import skillsIcon from "../assets/icons/skills.png";
import experienceIcon from "../assets/icons/experience.png";
import educationIcon from "../assets/icons/education.png";
import projectsIcon from "../assets/icons/projects.png";
import starIcon from "../assets/icons/star.png";


const NewHome = () => {
  const navigate = useNavigate();

  const handleClick = (section) => {
    const routes = {
      ABOUT: "/abo",
      CONTACT: "/con",
      SKILLS: "/vski",
      EXPERIENCE: "/vexp",
      EDUCATION: "/vedu",
      PROJECTS: "/vpro",
    };

    const path = routes[section] || "/";
    navigate(path);
  };

  const BoxButton = ({ icon, label, positionClasses = "" }) => (
    <button
      onClick={() => handleClick(label)}
      className={`w-48 h-48 bg-gray-100 flex flex-col items-center justify-center shadow-lg rounded-lg border-2 border-black hover:bg-gray-200 transition ${positionClasses}`}
    >
      <img src={icon} alt={label} className="w-20 h-20 mb-2" />
      <p className="text-base font-semibold">{label}</p>
    </button>
  );

  return (
    <div>
      <HomeHeader />

      <section className="min-h-screen w-full flex flex-col items-center justify-center bg-white relative overflow-hidden">
        <div className="text-center mb-10"></div>

        <div className="relative w-full max-w-6xl h-[600px] md:flex hidden items-center justify-center">
          
          <div className="flex flex-col items-center text-center">
           <br></br> <h1 className="text-3xl md:text-5xl font-bold">
              Hi, I’m <span className="text-blue-500">Saman Kumara</span>
            </h1>

            <p className="text-gray-700 text-sm md:text-lg">
              Software Engineer | Full-Stack Developer | QA Engineer
            </p>

       
            <div className="w-85 h-85 m-0 p-0 rounded-lg overflow-hidden shadow-lg">
              <img
                src="/your-profile.png"
                alt="Saman Kumara"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

{/* Social Media Icons */}
<div className="hidden md:flex flex-col items-center gap-4 fixed right-4 top-1/2 transform -translate-y-1/2 z-50">
  <a href="https://www.linkedin.com/in/s-kumara-80304a229/" target="_blank" rel="noopener noreferrer">
    <img src="/icons/linkedin.png" alt="LinkedIn" className="w-8 h-8" />
  </a>
  <a href="https://wa.me/+94766199583" target="_blank" rel="noopener noreferrer">
    <img src="/icons/whatsapp.png" alt="WhatsApp" className="w-8 h-8" />
  </a>
  <a href="https://web.facebook.com/saman.kumara.777029" target="_blank" rel="noopener noreferrer">
    <img src="/icons/facebook.png" alt="Facebook" className="w-8 h-8" />
  </a>
  <a href="https://www.instagram.com/kumara9476/" target="_blank" rel="noopener noreferrer">
    <img src="/icons/instagram.png" alt="Instagram" className="w-8 h-8" />
  </a>
  <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
    <img src="/icons/youtube.png" alt="YouTube" className="w-8 h-8" />
  </a>
  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
    <img src="/icons/twitter.png" alt="Twitter" className="w-8 h-8" />
  </a>
</div>

   
<button
  onClick={() => navigate("/vrev")}
  className="fixed bottom-4 left-4 z-50 text-white p-3 rounded-full shadow-lg transition-transform duration-200 transform hover:scale-150"
>
  <img src={starIcon} alt="Star" className="w-6 h-6" />
</button>




         <BoxButton icon={aboutIcon} label="ABOUT" positionClasses="absolute top-0 left-10" />
<BoxButton icon={contactIcon} label="CONTACT" positionClasses="absolute top-0 right-10" />
<BoxButton icon={skillsIcon} label="SKILLS" positionClasses="absolute top-1/2 left-0 -translate-y-1/2" />
<BoxButton icon={experienceIcon} label="EXPERIENCE" positionClasses="absolute top-1/2 right-0 -translate-y-1/2" />
<BoxButton icon={educationIcon} label="EDUCATION" positionClasses="absolute bottom-0 left-10" />
<BoxButton icon={projectsIcon} label="PROJECTS" positionClasses="absolute bottom-0 right-10" />
        </div>

     
        <div className="md:hidden flex flex-col items-center gap-4 px-4 py-6">
        <br></br> <br></br> <h1 className="text-3xl font-bold text-center">
            Hi, I’m <span className="text-blue-500">Saman Kumara</span>
          </h1>
          <p className="text-gray-700 text-sm text-center">
            Software Engineer | Full-Stack Developer | QA Engineer
          </p>
          <div className="w-64 h-64 rounded-lg overflow-hidden ">
            <img
              src="/your-profile.png"
              alt="Saman Kumara"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6">
           <BoxButton icon={aboutIcon} label="ABOUT" />
<BoxButton icon={contactIcon} label="CONTACT" />
<BoxButton icon={skillsIcon} label="SKILLS" />
<BoxButton icon={experienceIcon} label="EXPERIENCE" />
<BoxButton icon={educationIcon} label="EDUCATION" />
<BoxButton icon={projectsIcon} label="PROJECTS" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewHome;
