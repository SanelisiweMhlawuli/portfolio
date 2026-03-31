"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Certificates", id: "certificates" },
    { name: "Contact", id: "contact" },
  ];

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -100;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }

    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-black/60 backdrop-blur-md text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">

        {/* Logo */}
        <button
          onClick={() => handleScroll("home")}
          className="text-lg font-semibold tracking-wide hover:text-[#519CAB] transition"
        >
          SANELISIWE MHLAWULI
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-sm tracking-wide">
          {navLinks.map((link, index) => (
            <li key={index} className="relative group">
              <button
                onClick={() => handleScroll(link.id)}
                className="transition duration-300 group-hover:text-[#519CAB]"
              >
                {link.name}
              </button>

              {/* 🔥 Animated underline */}
              <span
                className="
                absolute left-0 -bottom-1 h-[2px] w-0 
                bg-[#519CAB] 
                transition-all duration-300 
                group-hover:w-full
                "
              />
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 px-6 pb-6">
          <ul className="flex flex-col gap-6 text-sm tracking-wide">
            {navLinks.map((link, index) => (
              <li key={index}>
  <button
    onClick={() => handleScroll(link.id)}
    className="
      w-full text-left py-2 px-2 rounded-md
      transition duration-200
      active:scale-95
      active:bg-[#519CAB]/20
    "
  >
    {link.name}
  </button>

                {/* Mobile underline */}
                <div className="h-[1px] w-0 bg-[#519CAB] transition-all duration-300 group-hover:w-full"></div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}