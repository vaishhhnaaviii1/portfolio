import React from 'react';

// Importing all your beautiful 2D UI Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

export default function App() {
  return (
    // The main wrapper with your warm light-mode background color
    <div className="bg-[#fdfbf7] text-[#333333] min-h-screen font-sans antialiased scroll-smooth">
      
      {/* All your components stacked cleanly. 
        Since each component handles its own layout, padding, and height, 
        we just need to list them out here!
      */}
      <Navbar />
      
      <main className="w-full">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>

    </div>
  );
}