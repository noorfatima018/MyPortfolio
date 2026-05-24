"use client";

import React, { useState, useEffect } from "react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Simple active section tracker
      const sections = ["hero", "about", "tech", "services", "projects", "contact"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "glass-panel py-4" : "py-6 bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="#hero" className="font-serif font-bold text-xl tracking-wider text-white">
          N<span className="text-brand-purple">.</span>F
        </a>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {["About", "Tech", "Services", "Projects", "Contact"].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className={`transition-colors hover:text-brand-purple-light ${activeSection === item.toLowerCase() ? "text-brand-purple" : "text-gray-300"}`}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
