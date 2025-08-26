import React from "react";
import checkIcon from "../assets/icons/check.png";

const About = () => {
  const birthday = new Date("2000-08-01");

  const calculateAge = (dob) => {
    const diff = Date.now() - dob.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  const age = calculateAge(birthday);

  return (
    <section id="about" className="min-h-screen flex items-center bg-white py-10 md:py-16">
      <div className="max-w-5xl mx-auto px-4 w-full">
        
       
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-3">About</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-base md:text-lg text-gray-600">
            A dedicated software engineer passionate about building impactful digital solutions.
          </p>
        </div>

       
        <div className="grid md:grid-cols-2 gap-8 items-center">
          
         
          <div className="flex justify-center md:justify-start">
            <img
              src="/your-profile.png" 
              alt="Profile"
              className="rounded-lg shadow-lg w-56 md:w-80 object-cover"
            />
          </div>

          
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-3">
              Full Stack Software Engineer
            </h3>
            <p className="text-base md:text-lg text-gray-700 mb-6 italic">
              Turning ideas into efficient and user-friendly digital solutions. Continuously learning and exploring new technologies.
            </p>

           
           <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm md:text-base text-gray-800">
  <p className="flex items-center gap-2">
    <img src={checkIcon} alt="check" className="w-4 h-4" />
    <span className="font-semibold">Birthday:</span> 1 August 2000
  </p>

  <p className="flex items-center gap-2">
    <img src={checkIcon} alt="check" className="w-4 h-4" />
    <span className="font-semibold">Age:</span> {age}
  </p>

  <p className="flex items-center gap-2">
    <img src={checkIcon} alt="check" className="w-4 h-4" />
    <span className="font-semibold">Website:</span>{" "}
    <a href="http://www.example.com" className="text-blue-600 hover:underline">
      www.example.com
    </a>
  </p>

  <p className="flex items-center gap-2">
    <img src={checkIcon} alt="check" className="w-4 h-4" />
    <span className="font-semibold">Degree:</span> Bachelor
  </p>

  <p className="flex items-center gap-2">
    <img src={checkIcon} alt="check" className="w-4 h-4" />
    <span className="font-semibold">Phone:</span> +94 76 6199 583
  </p>

  <p className="flex items-center gap-2">
    <img src={checkIcon} alt="check" className="w-4 h-4" />
    <span className="font-semibold">Email:</span>{" "}
    <a href="mailto:samankumaraya1@gmail.com" className="text-blue-600 hover:underline">
      samankumaraya1@gmail.com
    </a>
  </p>

  <p className="flex items-center gap-2">
    <img src={checkIcon} alt="check" className="w-4 h-4" />
    <span className="font-semibold">City:</span> Kiribathgoda, Sri Lanka
  </p>

  <p className="flex items-center gap-2">
    <img src={checkIcon} alt="check" className="w-4 h-4" />
    <span className="font-semibold">Freelance:</span> Available
  </p>
</div>


            <p className="mt-6 text-base md:text-lg text-gray-700">
              I am a passionate software engineer who loves turning ideas into efficient and user-friendly digital solutions. I specialize in Full Stack, constantly learning and exploring new technologies to build impactful software.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
