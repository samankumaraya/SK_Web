import React from "react";
import checkIcon from "../assets/icons/check.png";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  const birthday = new Date("2000-08-01");

  const calculateAge = (dob) => {
    const diff = Date.now() - dob.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  const age = calculateAge(birthday);

  const infoItems = [
    { label: "Birthday", value: "1 August 2000" },
    { label: "Age", value: age },
    { label: "Website", value: "www.example.com", link: "http://www.example.com" },
    { label: "Degree", value: "Bachelor" },
    { label: "Phone", value: "+94 76 6199 583" },
    { label: "Email", value: "samankumaraya1@gmail.com", link: "mailto:samankumaraya1@gmail.com" },
    { label: "City", value: "Kiribathgoda, Sri Lanka" },
    { label: "Freelance", value: "Available" },
  ];

  return (
    <div>
      <Header/>
      <section
        id="about"
        className="flex flex-col items-center py-12 md:py-24 relative overflow-hidden"
      >
       
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/bav.mp4" type="video/mp4" />
           
            Your browser does not support the video tag.
          </video>
          
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="max-w-6xl w-full px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-10 md:p-16">
            
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 text-gray-800">
                About Me
              </h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-4 rounded-full"></div>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                A dedicated software engineer passionate about building impactful digital solutions and delivering user-friendly experiences.
              </p>
            </div>

           
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
              
              <div className="flex justify-center md:justify-start">
                <img
                  src="/your-profile.png"
                  alt="Profile"
                  className="rounded-xl shadow-xl w-48 sm:w-64 md:w-80 object-cover border-4 border-gray-200"
                />
              </div>

              
              <div className="space-y-6">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
                  Full Stack Software Engineer
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 italic">
                  Turning ideas into efficient and user-friendly digital solutions. Continuously learning and exploring new technologies.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-gray-800 text-sm sm:text-base md:text-base">
                  {infoItems.map((item, idx) => (
                    <p
                      key={idx}
                      className="flex flex-wrap items-center gap-2 bg-gray-50 rounded-lg px-3 sm:px-4 py-2 hover:bg-gray-100 transition break-words"
                    >
                      <img src={checkIcon} alt="check" className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" />
                      <span className="font-semibold flex-shrink-0">{item.label}:</span>
                      {item.link ? (
                        <a href={item.link} className="text-blue-600 hover:underline break-all">
                          {item.value}
                        </a>
                      ) : (
                        <span className="break-all">{item.value}</span>
                      )}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default About;