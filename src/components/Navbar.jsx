import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center transition-all duration-300">
      
      {/* Logo Placeholder */}
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="w-8 h-8 bg-[#3d3630] rounded-md flex items-center justify-center text-white font-bold text-xl">
          V
        </div>
        <span className="font-extrabold text-xl tracking-tight text-[#3d3630] hidden sm:block">
          Vaishnavi
        </span>
      </div>

      {/* Pill-shaped Center Menu (matches reference image!) */}
      <div className="hidden md:flex bg-[#e8dcc8] rounded-full px-8 py-2.5 gap-8 font-bold text-xs tracking-wider text-[#3d3630] shadow-sm">
        <a href="#about" className="hover:text-orange-500 transition-colors">ABOUT</a>
        <a href="#projects" className="text-orange-600">PROJECTS</a>
        <a href="#skills" className="hover:text-orange-500 transition-colors">SKILLS</a>
      </div>

      {/* Orange Action Button */}
      <button className="bg-[#f97316] hover:bg-[#ea580c] text-white font-bold py-2.5 px-6 rounded-full text-sm shadow-md transition-transform hover:-translate-y-0.5">
        GET IN TOUCH
      </button>
      
    </nav>
  );
}