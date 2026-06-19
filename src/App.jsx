import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased scroll-smooth">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Single-Page Scroll Content */}
      <main className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8">
        
        {/* Section 1: Main Page */}
        <section id="home" className="min-h-screen flex items-center justify-center pt-20">
          <Hero />
        </section>

        {/* Section 2: Languages I Know */}
        <section id="languages" className="py-24 sm:py-32">
          <Skills />
        </section>

        {/* Section 3: My Projects */}
        <section id="projects" className="py-24 sm:py-32">
          <Projects />
        </section>

        {/* Section 4: Experience */}
        <section id="experience" className="py-24 sm:py-32">
          <Experience />
        </section>

        {/* Section 5: Achievements */}
        <section id="achievements" className="py-24 sm:py-32">
          <Achievements />
        </section>

        {/* Section 6: Contact */}
        <section id="contact" className="min-h-screen flex items-center justify-center py-24 sm:py-32">
          <Contact />
        </section>

      </main>
    </div>
  );
}

export default App;