import React from 'react';
import { motion } from 'framer-motion';
import LetterGlitch from './LetterGlitch'; // <--- Naya background import kiya

export default function Hero() {
  
  // Typewriter effect setup for Framer Motion
  const textToType = "Frontend Developer & Tech Enthusiast.";
  const sentence = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { delay: 0.5, staggerChildren: 0.08 } }
  };
  const letter = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden px-6 pt-20 bg-[#fdfbf7]">
      
      {/* =========================================
          CRAZY LETTER GLITCH BACKGROUND
          ========================================= */}
      <LetterGlitch />

      {/* =========================================
          MAIN CONTENT (Left & Right Split)
          ========================================= */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 pointer-events-none">
        
        {/* LEFT SIDE: Texts & Animations */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left pointer-events-auto">
          
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block py-1.5 px-5 rounded-full bg-white border border-[#e6d5c3] text-[#333333] font-bold tracking-wider mb-6 shadow-sm">
              Hey there! Welcome to my space ✨
            </span>
          </motion.div>

          {/* Gradient Text */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-4"
          >
            I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f97316] via-orange-400 to-yellow-500 animate-gradient-x">
              Vaishnavi
            </span>
          </motion.h1>

          {/* Typewriter Text */}
          <motion.h2 
            variants={sentence} initial="hidden" animate="visible" 
            className="text-2xl md:text-3xl font-medium text-[#6b5f54] h-12 mb-8 flex"
          >
            {textToType.split("").map((char, index) => (
              <motion.span key={char + "-" + index} variants={letter}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
            <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="ml-1 w-1 bg-[#f97316]">
              |
            </motion.span>
          </motion.h2>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.5 }} className="flex gap-4">
             <a href="#projects" className="px-8 py-4 bg-[#333333] text-white rounded-full font-bold text-lg hover:bg-black hover:scale-105 transition-all shadow-lg">
                See My Work
             </a>
          </motion.div>
        </div>

        {/* RIGHT SIDE: Bitmoji in a Circle */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end relative pointer-events-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
            className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border-8 border-white shadow-2xl bg-gradient-to-b from-orange-100 to-orange-50 flex items-center justify-center overflow-visible"
          >
            <motion.div 
              animate={{ rotate: [0, 20, -10, 20, -10, 20, 0] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              className="absolute -top-6 -right-6 text-7xl md:text-8xl drop-shadow-xl z-20 origin-bottom-right"
            >
              👋
            </motion.div>

            {/* Your Bitmoji Image */}
            <div className="w-full h-full rounded-full overflow-hidden bg-white">
              <img 
                src="/bitmoji.avif" 
                alt="Vaishnavi's Avatar" 
                // Yahan maine scale-125 (zoom) aur translate-y-6 (downward shift) add kiya hai
                className="w-full h-full object-cover transform scale-125 translate-y-6 hover:scale-[1.35] transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}