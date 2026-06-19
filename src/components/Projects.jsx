import React from 'react';

// Added a 'theme' property to each project to generate colorful placeholder blocks
const myProjects = [
  {
    title: 'Legal AI MVP',
    category: 'Backend / AI Infrastructure',
    description: 'FastAPI and PostgreSQL platform for structured case management and AI summarization workflows.',
    theme: 'from-orange-400 to-amber-500', // Warm orange vibe
    link: '#', 
  },
  {
    title: 'Smart Hostel Management',
    category: 'Full-Stack Web App',
    description: 'React and Node.js room allocation module supporting multi-hostel student accommodation.',
    theme: 'from-blue-500 to-cyan-400', // Cool blue vibe
    link: '#',
  },
  {
    title: 'Electrothon 8.0 Portal',
    category: 'Frontend Development',
    description: 'Official web portal facilitating registrations for 2,000+ national hackathon participants.',
    theme: 'from-indigo-500 to-purple-500', // Purple vibe
    link: '#',
  },
  {
    title: 'Team SPEC Official Website',
    category: 'Frontend Architecture',
    description: 'Developed and maintained the digital presence for the campus technical society.',
    theme: 'from-emerald-400 to-teal-500', // Green vibe
    link: '#',
  },
  {
    title: 'Electrothon 7.0 Portal',
    category: 'Frontend Development',
    description: 'Optimized frontend architecture and UI components for the previous national hackathon iteration.',
    theme: 'from-rose-400 to-red-500', // Red/Pink vibe
    link: '#',
  },
  {
    title: 'LexiSonic',
    category: 'Software Application',
    description: 'An innovative software project currently in active development.',
    theme: 'from-slate-700 to-slate-800', // Dark contrast vibe
    link: '#',
  }
];

export default function Projects() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      
      {/* Section Header */}
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          {/* We added that angled blue "SELECTED" tag from your reference! */}
          <span className="inline-block bg-[#284fa2] text-white text-sm font-bold px-3 py-1 -rotate-3 rounded-sm mb-2 shadow-sm">
            SELECTED
          </span>
          <h3 className="text-5xl font-extrabold text-[#3d3630]">Projects</h3>
        </div>
      </div>

      {/* Projects Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {myProjects.map((project, index) => (
          
          /* Project Card Wrapper */
          <a 
            key={index}
            href={project.link}
            className="group flex flex-col cursor-pointer"
          >
            {/* The "Image" Block - Big, chunky rounded corners */}
            <div className={`w-full aspect-[4/3] rounded-3xl bg-gradient-to-br ${project.theme} mb-4 shadow-md group-hover:-translate-y-2 group-hover:shadow-xl transition-all duration-300 flex items-center justify-center p-8 relative overflow-hidden`}>
              
              {/* Fake logo/text placeholder for inside the colorful block */}
              <h4 className="text-3xl font-bold text-white text-center drop-shadow-md relative z-10">
                {project.title}
              </h4>
              
              {/* A subtle overlay to make it look premium */}
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* The Text Block below the image */}
            <div className="px-2">
              <h4 className="text-xl font-bold text-[#3d3630] group-hover:text-orange-500 transition-colors">
                {project.title}
              </h4>
              <p className="text-sm font-medium text-[#8c8276] mt-1">
                {project.category}
              </p>
            </div>
          </a>

        ))}
      </div>

    </div>
  );
}