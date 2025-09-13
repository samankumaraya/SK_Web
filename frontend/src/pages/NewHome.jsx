import React from "react";
import { useNavigate } from "react-router-dom";
import HomeHeader from "../components/HomeHeader";
import Footer from "../components/Footer";

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

          <BoxButton icon="/icons/about.png" label="ABOUT" positionClasses="absolute top-0 left-10" />
          <BoxButton icon="/icons/contact.png" label="CONTACT" positionClasses="absolute top-0 right-10" />
          <BoxButton icon="/icons/skills.png" label="SKILLS" positionClasses="absolute top-1/2 left-0 -translate-y-1/2" />
          <BoxButton icon="/icons/experience.png" label="EXPERIENCE" positionClasses="absolute top-1/2 right-0 -translate-y-1/2" />
          <BoxButton icon="/icons/education.png" label="EDUCATION" positionClasses="absolute bottom-0 left-10" />
          <BoxButton icon="/icons/projects.png" label="PROJECTS" positionClasses="absolute bottom-0 right-10" />
        </div>

     
        <div className="md:hidden flex flex-col items-center gap-4 px-4 py-6">

            Hi, I’m <span className="text-blue-500">Saman Kumara</span>
          </h1>
          <p className="text-gray-700 text-sm text-center">
            Software Engineer | Full-Stack Developer | QA Engineer
          </p>

            <img
              src="/your-profile.png"
              alt="Saman Kumara"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <BoxButton icon="/icons/about.png" label="ABOUT" />
            <BoxButton icon="/icons/contact.png" label="CONTACT" />
            <BoxButton icon="/icons/skills.png" label="SKILLS" />
            <BoxButton icon="/icons/experience.png" label="EXPERIENCE" />
            <BoxButton icon="/icons/education.png" label="EDUCATION" />
            <BoxButton icon="/icons/projects.png" label="PROJECTS" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewHome;
