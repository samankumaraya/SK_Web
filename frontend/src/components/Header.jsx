import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom"; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); 

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/abo" },
    { name: "Skills", href: "/vski" },
    { name: "Education", href: "/vedu" },
    { name: "Projects", href: "/vpro" },
    { name: "Experience", href: "/vexp" },
    { name: "Blogs", href: "/blo" },
    { name: "Gallery", href: "/gal" },
    { name: "Contact", href: "/con" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 shadow-md backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          SAMAN KUMARA
        </Link>

        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`relative font-medium transition
                  ${isActive ? "text-indigo-600 after:w-full" : "text-gray-700 after:w-1/2"}
                  after:content-[''] after:absolute after:left-1/4 after:bottom-0
                  after:h-[2px] after:bg-indigo-600
                  after:scale-x-0 hover:after:scale-x-100
                  after:origin-center after:transition-transform after:duration-300`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col space-y-4 px-6 py-4">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-medium transition ${isActive ? "text-indigo-600" : "text-gray-700"} hover:text-indigo-600`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
