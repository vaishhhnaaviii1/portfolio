import React from 'react';

// We create an array of your skills so it is easy to update later!
const mySkills = [
  { category: 'Frontend Development', items: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3'] },
  { category: 'Styling & UI', items: ['Tailwind CSS', 'Framer Motion', 'Responsive Grid/Flexbox'] },
  { category: 'Advanced Mathematics', items: ['Linear Algebra', 'Real Analysis', 'Fourier Transforms', 'Game Theory'] },
  { category: 'Tools & Version Control', items: ['Git', 'GitHub', 'Vite', 'VS Code'] },
];

export default function Skills() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      
      {/* Section Header */}
      <div className="mb-12">
        <h2 className="text-sm tracking-widest font-mono text-teal-400 uppercase mb-2">
          // 02. My Toolkit
        </h2>
        <h3 className="text-4xl font-bold text-white">Languages & Skills</h3>
      </div>

      {/* Skills Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mySkills.map((skillGroup, index) => (
          
          /* Interactive Skill Card */
          <div 
            key={index}
            className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-teal-500/30 transition-colors duration-300"
          >
            {/* Subtle Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
            
            <h4 className="text-lg font-semibold text-slate-200 mb-4 border-b border-slate-800 pb-2">
              {skillGroup.category}
            </h4>
            
            <ul className="grid grid-cols-2 gap-3">
              {skillGroup.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-center text-sm text-slate-400 font-mono">
                  {/* Custom Arrow Bullet */}
                  <svg className="w-3 h-3 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </div>
  );
}