import React from 'react';

export default function Hero() {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-start px-8 md:px-24 pt-20 overflow-hidden">
      
      <div className="max-w-3xl z-10">
        
        {/* Playful greeting tag */}
        <div className="inline-block bg-white text-[#3d3630] font-bold px-4 py-2 rounded-full mb-6 shadow-sm border border-[#e2d5c5]">
          👋 Hi there, I'm
        </div>

        {/* Massive Main Headline */}
        <h1 className="text-6xl md:text-8xl font-extrabold text-[#3d3630] tracking-tight leading-[1.1] mb-6">
          Vaishnavi <br/> 
          <span className="text-[#f97316]">Sharma.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-[#8c8276] font-medium mb-10 max-w-2xl leading-relaxed">
          I build intelligent AI pipelines, scalable web applications, and beautiful user experiences.
        </p>

        {/* Action Links */}
        <div className="flex gap-6 items-center">
          <a href="#projects" className="bg-[#3d3630] text-white font-bold py-4 px-8 rounded-full shadow-lg hover:-translate-y-1 transition-transform">
            View My Work
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-[#3d3630] font-bold hover:text-orange-500 transition-colors underline underline-offset-4 decoration-2">
            GitHub Profile
          </a>
        </div>

      </div>
    </section>
  );
}