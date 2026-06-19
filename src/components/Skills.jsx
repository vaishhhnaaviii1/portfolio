import React from 'react';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['C++', 'Python', 'JavaScript', 'SQL'],
    icon: '💻'
  },
  {
    title: 'Frameworks',
    skills: ['React.js', 'Node.js', 'Tailwind CSS', 'FastAPI'],
    icon: '⚡'
  },
  {
    title: 'Tools & DBs',
    skills: ['Git/GitHub', 'PostgreSQL', 'MySQL', 'Postman'],
    icon: '🛠️'
  }
];

export default function Skills() {
  return (
    <section id="skills" className="w-full max-w-5xl mx-auto px-4 py-24">
      
      {/* Section Header */}
      <div className="mb-12">
        <span className="inline-block bg-[#f97316] text-white text-sm font-bold px-3 py-1 rotate-2 rounded-sm mb-2 shadow-sm">
          TECH STACK
        </span>
        <h3 className="text-5xl font-extrabold text-[#3d3630]">Skills & Tools</h3>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          
          /* Clean White Card */
          <div 
            key={index} 
            className="bg-white rounded-3xl p-8 shadow-sm border border-[#f0e4d4] hover:shadow-lg transition-shadow duration-300"
          >
            <div className="text-4xl mb-4">{category.icon}</div>
            <h4 className="text-xl font-bold text-[#3d3630] mb-6">
              {category.title}
            </h4>
            
            {/* Playful Skill Pills */}
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span 
                  key={skillIndex} 
                  className="px-4 py-2 text-sm font-bold bg-[#f4ebe1] text-[#63594f] rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        ))}
      </div>

    </section>
  );
}