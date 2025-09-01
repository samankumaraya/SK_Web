import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        
        <a href="/" className="text-2xl font-bold text-indigo-600">
          SAMAN KUMARA
        </a>

    
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
           <a
  key={item.name}
  href={item.href}
  className="relative text-gray-700 hover:text-indigo-600 transition font-medium 
             after:content-[''] after:absolute after:left-1/4 after:bottom-0 
             after:w-1/2 after:h-[2px] after:bg-indigo-600 
             after:scale-x-0 hover:after:scale-x-100 
             after:origin-center after:transition-transform after:duration-300"
>
  {item.name}
</a>

          ))}
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
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-indigo-600 transition font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
