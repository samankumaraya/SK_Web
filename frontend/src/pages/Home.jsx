
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-gray-900 to-black text-white">
      <h1 className="text-5xl font-extrabold text-green-400 mb-6">
        Welcome to My Home Page
      </h1>
      <p className="text-lg text-gray-300 max-w-xl text-center mb-8">
        If you are seeing this styled text and gradient background, Tailwind CSS is working
        perfectly in your React project.
      </p>
      <button className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300 shadow-lg">
        Get Started
      </button>
    </div>
  );
}
