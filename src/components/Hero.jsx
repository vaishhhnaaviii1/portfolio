import React from 'react';

export default function Hero() {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12">
      
      {/* Left Column: Text Content (Occupies 7/12 columns on large screens) */}
      <div className="lg:col-span-7 space-y-6 text-left">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium bg-teal-500/10 text-teal-400 rounded-full border border-teal-500/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
          </span>
          Available for new opportunities
        </div>

        {/* Main Headings */}
        <div className="space-y-2">
          <p className="text-sm tracking-widest font-mono text-teal-400 uppercase">
            Hi, my name is
          </p>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Vaishnavi Sharma.
          </h1>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-400">
            I build interactive web solutions.
          </h2>
        </div>

        {/* Descriptive Copy Block */}
        <p className="max-w-xl text-base sm:text-lg text-slate-400 leading-relaxed">
          I am a web developer specializing in building clean, high-performance digital experiences. 
          Currently focused on designing modular interfaces, optimizing frontend performance, and turning complex structural architectures into smooth, accessible layouts.
        </p>

        {/* Call to Actions */}
        <div className="pt-4 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="px-6 py-3 text-sm font-medium text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-lg shadow-lg shadow-teal-500/10 transition-all duration-200 hover:-translate-y-0.5"
          >
            View My Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 text-sm font-medium text-slate-300 bg-slate-900 hover:bg-slate-800 rounded-lg border border-slate-800 transition-all duration-200 hover:-translate-y-0.5"
          >
            Let's Talk
          </a>
        </div>

      </div>

      {/* Right Column: Visual Graphic Block (Occupies 5/12 columns on large screens) */}
      <div className="lg:col-span-5 flex justify-center lg:justify-end">
        <div className="relative w-72 h-72 sm:w-80 sm:h-80 group">
          
          {/* Decorative Backdrop Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-teal-500 to-indigo-500 rounded-2xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-300"></div>
          
          {/* Main Visual Skeleton Box */}
          <div className="relative w-full h-full bg-slate-900 border border-slate-800 rounded-2xl flex flex-col p-4 font-mono text-xs text-slate-500 shadow-2xl">
            {/* Top Window Bar Mac-style */}
            <div className="flex gap-1.5 pb-4 border-b border-slate-800/60">
              <span className="w-3 h-3 rounded-full bg-slate-800"></span>
              <span className="w-3 h-3 rounded-full bg-slate-800"></span>
              <span className="w-3 h-3 rounded-full bg-slate-800"></span>
            </div>
            
            {/* Code-vibe graphic lines */}
            <div className="flex-1 pt-4 space-y-3">
              <div className="h-3 w-1/3 bg-teal-500/20 rounded"></div>
              <div className="h-3 w-2/3 bg-slate-800 rounded"></div>
              <div className="h-3 w-1/2 bg-slate-800 rounded"></div>
              <div className="h-3 w-3/4 bg-indigo-500/10 rounded"></div>
              <div className="h-3 w-2/5 bg-slate-800 rounded"></div>
              <div className="h-3 w-11/12 bg-slate-800 rounded"></div>
            </div>

            <div className="text-right text-[10px] text-teal-500/40">
              // layout_v4.ready
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}