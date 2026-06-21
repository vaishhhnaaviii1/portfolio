import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    role: "Executive Member (Organizer)",
    organization: "Team SPEC | Electrothon 8.0",
    date: "August 2024 - Present",
    description: "Spearheaded the organization of Electrothon 8.0 (March 2026), a premier hackathon officially powered by Major League Hacking (MLH) and Gemini. Managed technical operations, website development, and event coordination.",
    tags: ["Leadership", "Event Management", "Web Dev"]
  },
  {
    id: 2,
    role: "Technical Volunteer (Organizer)",
    organization: "Team SPEC | Electrothon 7.0",
    date: "August 2024 - April 2025",
    description: "Contributed to the successful execution of Electrothon 7.0, an MLH-powered hackathon. Assisted in technical logistics, managed participant interactions, and helped ensure a seamless experience for hackers.",
    tags: ["Operations", "Community Support"]
  },
  {
    id: 3,
    role: "Scholar",
    organization: "SheFi",
    date: "2024 - Present",
    description: "Selected for the SheFi program, engaging with a global community focused on Web3, decentralized finance, and frontier technologies to bridge the gender gap in tech.",
    tags: ["Web3", "Blockchain", "Community"]
  },
  {
    id: 4,
    role: "Cohort Member",
    organization: "Developer Sarthi | Batch 0",
    date: "2024 - Present",
    description: "Part of the inaugural Batch 0 cohort, participating in intensive technical skill development, mentorship, and community-driven learning initiatives.",
    tags: ["Mentorship", "Software Development", "Cohort"]
  },
  {
    id: 5,
    role: "Campus Ambassador",
    organization: "GirlScript Summer of Code (GSSoC)",
    date: "May 2024 - August 2024",
    description: "Represented GSSoC on campus, evangelizing open-source software development. Guided peers through the contribution process and facilitated increased student participation in the global program.",
    tags: ["Open Source", "Advocacy", "Mentorship"]
  }
];

const Experience = () => {
  return (
    <div className="w-full">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#3d3630]">
          Experience
        </h2>
        <div className="w-20 h-2 bg-[#f97316] rounded-full mt-4"></div>
      </div>

      <div className="relative border-l-4 border-[#e6d5c3] ml-4 md:ml-6 space-y-12">
        {experiences.map((exp, index) => (
          <motion.div 
            key={exp.id}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative pl-8 md:pl-12"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[14px] top-1 h-6 w-6 rounded-full bg-[#f97316] border-4 border-[#f4ebe1]"></div>

            {/* Content Card */}
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-[#e6d5c3] hover:shadow-md transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-[#3d3630]">{exp.role}</h3>
                  <p className="text-lg font-medium text-[#f97316] mt-1">{exp.organization}</p>
                </div>
                <span className="mt-2 md:mt-0 inline-block px-4 py-1.5 bg-[#f4ebe1] text-[#3d3630] text-sm font-semibold rounded-full w-fit">
                  {exp.date}
                </span>
              </div>
              
              <p className="text-[#6b5f54] leading-relaxed mb-6 text-lg">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-white border border-[#e6d5c3] text-[#8c7a6b] text-sm font-medium rounded-xl"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;