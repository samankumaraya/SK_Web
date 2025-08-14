import React from "react";
import { useNavigate } from "react-router-dom";

const phases = [
  { label: "About", color: "#4F80FF", path: "/about" },
  { label: "Projects", color: "#F2C94C", path: "/projects" },
  { label: "Skills", color: "#F2994A", path: "/skills" },
  { label: "Experience", color: "#EB5757", path: "/Experience" },
  { label: "Education", color: "#6FCF97", path: "/Education" },
  { label: "Contact", color: "#27AE60", path: "/Contact" },
];

const radius = 190;
const center = 255;
const sliceAngle = (2 * Math.PI) / phases.length;

function getCoordinates(angle, r) {
  return {
    x: center + r * Math.cos(angle),
    y: center + r * Math.sin(angle),
  };
}

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen bg-[#2b2b2b] flex items-center justify-center overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-4 md:px-12">
       
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 md:w-1/3">
          <img
            src="/your-profile.png" 
            alt="Saman Kumara"
            className="w-48 h-48 rounded-full object-cover border-4 border-sky-400"
          />
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Hi, I’m <span className="text-sky-400">Saman Kumara</span>
          </h1>
          <p className="text-md md:text-lg text-gray-300">
            Software Engineer | Full-Stack Developer | QA Engineer
          </p>
        </div>

      
        <div className="relative md:w-1/2 mt-10 md:mt-0">
          <svg width="710" height="710" viewBox="60 0 510 510">

            {phases.map((phase, index) => {
              const startAngle = index * sliceAngle - Math.PI / 2;
              const endAngle = (index + 1) * sliceAngle - Math.PI / 2;
              const largeArc = sliceAngle > Math.PI ? 1 : 0;

              const { x: x1, y: y1 } = getCoordinates(startAngle, radius);
              const { x: x2, y: y2 } = getCoordinates(endAngle, radius);
              const path = `
                M ${center} ${center}
                L ${x1} ${y1}
                A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}
                Z
              `;

              const midAngle = startAngle + sliceAngle / 2;
              const labelX = center + (radius / 1.5) * Math.cos(midAngle);
              const labelY = center + (radius / 1.5) * Math.sin(midAngle);

              return (
                <g key={index} onClick={() => navigate(phase.path)} className="cursor-pointer">
                  <path d={path} fill={phase.color} stroke="#2b2b2b" strokeWidth="2" />
                  <text
                    x={labelX}
                    y={labelY}
                    textAnchor="middle"
                    alignmentBaseline="middle"
                    fontSize="10"
                    fill="#000"
                    fontWeight="bold"
                  >
                    {phase.label}
                  </text>
                </g>
              );
            })}
            <circle cx={center} cy={center} r="60" fill="#FFFFFF" />
            <text
              x={center}
              y={center}
              textAnchor="middle"
              alignmentBaseline="middle"
              fontSize="16"
              fontWeight="bold"
              fill="#000"
            >
              Hello!
            </text>
          </svg>

         
          <div className="absolute top-1/2 -right-16 transform -translate-y-1/2 flex flex-col gap-3">
            {[
              { icon: "linkedin", url: "https://linkedin.com" },
              { icon: "whatsapp", url: "https://wa.me/xxxxxxxx" },
              { icon: "facebook", url: "https://facebook.com" },
              { icon: "instagram", url: "https://instagram.com" },
              { icon: "youtube", url: "https://youtube.com" },
              { icon: "twitter", url: "https://twitter.com" },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <img
                  src={`/icons/${item.icon}.png`} 
                  alt={item.icon}
                  className="w-6 h-6"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
