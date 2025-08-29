import React from "react";
import { useNavigate } from "react-router-dom";

const phases = [
  { label: "About", color: "#4F80FF", path: "/abo" },
  { label: "Projects", color: "#F2C94C", path: "/vpro" },
  { label: "Skills", color: "#F2994A", path: "/vski" },
  { label: "Experience", color: "#EB5757", path: "/vexp" },
  { label: "Education", color: "#6FCF97", path: "/vedu" },
  { label: "Contact", color: "#27AE60", path: "/con" },
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
    <div className="w-screen h-screen bg-white/40 flex items-center justify-center overflow-hidden px-4">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-8">
        
        <div className="flex flex-col items-center text-center gap-6 md:w-2/5">
  <img
  src="/your-profile.png"
  alt="Saman Kumara"
  className="w-80 h-80 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] object-contain"
/>

  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
    Hi, I’m <span className="text-sky-400">Saman Kumara</span>
  </h1>
  <p className="text-base sm:text-lg md:text-xl text-gray-700">
    Software Engineer | Full-Stack Developer | QA Engineer
  </p>
</div>




        
        <div className="relative flex flex-col items-center md:items-start md:w-1/2">
          <svg
            viewBox="60 60 400 400"
            className="w-[90vw] max-w-[500px] h-auto"
          >
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
                <g
                  key={index}
                  onClick={() => navigate(phase.path)}
                  className="cursor-pointer hover:opacity-80 transition"
                >
                  <path
                    d={path}
                    fill={phase.color}
                    stroke="#2b2b2b"
                    strokeWidth="2"
                  />
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

         
          <div className="flex md:flex-col gap-3 mt-4 md:mt-0 md:absolute md:top-1/2 md:-right-16 md:-translate-y-1/2">
            {[
              { icon: "linkedin", url: "https://www.linkedin.com/in/s-kumara-80304a229/" },
              { icon: "whatsapp", url: "https://wa.me/+94766199583" },
              { icon: "facebook", url: "https://web.facebook.com/saman.kumara.777029" },
              { icon: "instagram", url: "https://www.instagram.com/kumara9476/" },
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
