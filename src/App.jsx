import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber'; // Added useFrame here
import { Environment } from '@react-three/drei'; // Removed OrbitControls, we don't need it now

// Import our 2D UI Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

// --- The Scroll-Animated 3D Component ---
function PlaceholderCube() {
  const meshRef = useRef();

  // useFrame runs 60 times per second (like a video game loop)
  useFrame((state) => {
    // 1. Calculate the exact scroll percentage (from 0.0 at top to 1.0 at bottom)
    const scrollY = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollProgress = scrollY / maxScroll || 0;

    if (meshRef.current) {
      // 2. Animate the Object: Spin the cube based on how far we scrolled
      // Math.PI * 4 means it will do exactly 2 full spins by the time you hit the footer
      meshRef.current.rotation.y = scrollProgress * Math.PI * 4;
      meshRef.current.rotation.x = scrollProgress * Math.PI * 2;
    }

    // 3. Animate the Camera: Move the camera down smoothly as you scroll
    // It starts at height 2, and moves down to height -2 by the end
    state.camera.position.y = 2 - (scrollProgress * 4);
    
    // Force the camera to always look at the center of the scene, no matter where it moves
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#2dd4bf" emissive="#0f766e" />
    </mesh>
  );
}

// --- Main Application ---
function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 font-sans antialiased scroll-smooth">
      
      {/* =========================================
          LAYER 1: The 3D World (Fixed Background)
          ========================================= */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
          {/* Lighting so we can see the 3D objects */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} />
          <Environment preset="city" /> {/* Gives realistic reflections */}
          
          {/* The Object itself */}
          <PlaceholderCube />
          
          {/* OrbitControls let you click and drag to look around the 3D scene (useful for testing) */}
        </Canvas>
      </div>

      {/* =========================================
          LAYER 2: The 2D Content (Scrolls Over Top)
          ========================================= */}
      {/* Notice we added 'relative z-10 pointer-events-auto' so it sits above the canvas */}
      <div className="relative z-10 pointer-events-auto">
        <Navbar />

        <main className="mx-auto max-w-5xl px-6 lg:px-8">
          
          {/* Section 1: Main Page */}
          <section id="home" className="min-h-screen flex items-center justify-center pt-20 border-b border-white/10">
            <Hero />
          </section>

          {/* Section 2: Languages I Know */}
          <section id="languages" className="py-24 sm:py-32 border-b border-white/10">
            <Skills />
          </section>

          {/* Section 3: My Projects */}
          <section id="projects" className="py-24 sm:py-32 border-b border-white/10">
            <Projects />
          </section>

          {/* Section 4: Experience */}
          <section id="experience" className="py-24 sm:py-32 border-b border-white/10">
            <Experience />
          </section>

          {/* Section 5: Achievements */}
          <section id="achievements" className="py-24 sm:py-32 border-b border-white/10">
            <Achievements />
          </section>

          {/* Section 6: Contact */}
          <section id="contact" className="min-h-screen flex items-center justify-center py-24 sm:py-32">
            <Contact />
          </section>

        </main>
      </div>

    </div>
  );
}

export default App;