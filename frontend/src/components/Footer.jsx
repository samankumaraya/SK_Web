import React from "react";
import { Facebook, Instagram, Linkedin, Twitter, ArrowUp } from "lucide-react";
import { FaSkype } from "react-icons/fa";

const Footer = () => {
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  return (
    <footer className="bg-gray-50 text-center py-10 relative">
      <h2 className="text-2xl font-bold text-gray-800">Saman Kumara</h2>
      <p className="mt-2 text-gray-600 italic max-w-xl mx-auto">
       Thank you for visiting my web
      </p>

      <div className="flex justify-center space-x-4 mt-6">
        <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition">
          <Twitter size={18} />
        </a>
        <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition">
          <Facebook size={18} />
        </a>
        <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition">
          <Instagram size={18} />
        </a>
        <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition">
          <FaSkype size={18} />
        </a>
        <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition">
          <Linkedin size={18} />
        </a>
      </div>

      <div className="border-t border-gray-200 my-6 max-w-3xl mx-auto"></div>

      <p className="text-gray-600">
        Copyright <strong className="text-gray-800">Saman Kumara</strong> All Rights Reserved
      </p>
      <p className="text-sm text-gray-500 mt-1">
        Designed by{" "}
        <a href="#" className="text-blue-600 hover:underline">
          Saman
        </a>{" "}
        Distributed by{" "}
        <a href="#" className="text-blue-600 hover:underline">
          S.Kumara
        </a>
      </p>

      
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
