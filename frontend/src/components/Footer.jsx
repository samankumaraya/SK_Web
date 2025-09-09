import React from "react";
import { Facebook, Instagram, Linkedin, Twitter, ArrowUp, Youtube } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#2a374a] text-center py-10 relative">
      <h2 className="text-2xl font-bold text-white">Saman Kumara</h2>
      <p className="mt-2 text-[#cbd5e1] italic max-w-xl mx-auto">
        Thank you for visiting my web
      </p>

      <div className="flex justify-center space-x-4 mt-6">
        <a
          href="https://twitter.com"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600 transition"
        >
          <Twitter size={18} />
        </a>
        <a
          href="https://web.facebook.com/saman.kumara.777029"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600 transition"
        >
          <Facebook size={18} />
        </a>
        <a
          href="https://www.instagram.com/kumara9476/"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600 transition"
        >
          <Instagram size={18} />
        </a>
        <a
          href="https://wa.me/+94766199583"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 text-white hover:bg-green-600 transition"
        >
          <FaWhatsapp size={18} />
        </a>
        <a
          href="https://www.linkedin.com/in/s-kumara-80304a229/"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 text-white hover:bg-blue-800 transition"
        >
          <Linkedin size={18} />
        </a>
        <a
          href="https://youtube.com"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-600 transition"
        >
          <Youtube size={18} />
        </a>
      </div>

      <div className="border-t border-gray-600 my-6 max-w-3xl mx-auto"></div>

      <p className="text-[#cbd5e1]">
        Copyright{" "}
        <strong className="text-white">Saman Kumara</strong> All Rights Reserved
      </p>
      <p className="text-sm text-[#94a3b8] mt-1">
        Designed by{" "}
        <a href="#" className="text-blue-400 hover:underline">
          Saman
        </a>{" "}
        Distributed by{" "}
        <a href="#" className="text-blue-400 hover:underline">
          S.Kumara
        </a>
      </p>

      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
