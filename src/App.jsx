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

// --- The Scroll-Animated 3D Component with Section Awareness ---
function PlaceholderCube() {
  const meshRef = useRef();

  useFrame((state) => {
    const scrollY = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollProgress = scrollY / maxScroll || 0;

    if (meshRef.current) {
      // =========================================================
      // 1. THE VISIBILITY TIMELINE
      // =========================================================
      
      // Home Section (Top of page) -> Show & Spin
      if (scrollProgress >= 0 && scrollProgress < 0.16) {
        meshRef.current.visible = true;
        meshRef.current.position.set(0, 0, 0); // Center stage
        meshRef.current.rotation.y = scrollProgress * Math.PI * 4;
      } 
      
      // Skills Section -> Show & "Robo Scan" movement (panning left/right)
      else if (scrollProgress >= 0.16 && scrollProgress < 0.33) {
        meshRef.current.visible = true;
        // Shift slightly to the side to clear space for text, and do a quick back-and-forth scan
        meshRef.current.position.x = Math.sin(scrollProgress * 20) * 1.5; 
        meshRef.current.position.y = 0;
      } 
      
      // Projects, Experience, & Achievements Sections -> HIDE COMPLETELY
      else if (scrollProgress >= 0.33 && scrollProgress < 0.83) {
        meshRef.current.visible = false; 
      } 
      
      // Contact Section -> Show again for the finale
      else if (scrollProgress >= 0.83) {
        meshRef.current.visible = true;
        meshRef.current.position.set(0, -1, 0); // Drop it slightly lower or adjust position
        meshRef.current.rotation.y = scrollProgress * Math.PI * 2;
      }
    }

    // =========================================================
    // 2. CAMERA MOVEMENTS
    // =========================================================
    // Keep the camera panning smoothly behind the scenes
    state.camera.position.y = 2 - (scrollProgress * 4);
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#f97316" />
    </mesh>
  );
}

// --- Main Application ---
function App() {
  return (
    <div className="relative min-h-screen bg-[#f4ebe1] text-[#3d3630] font-sans antialiased scroll-smooth">
      
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