import React from 'react';
import { motion } from 'framer-motion';

const achievements = [
  {
    id: 1,
    title: "Best All-Girls Team Award",
    event: "Electrothon 7.0 (MLH Hackathon)",
    description: "Secured the top spot for technical innovation in decentralized systems among 100+ national participating teams.",
    icon: "🏆",
    badge: "bg-orange-100 text-orange-700 border-orange-200"
  },
  {
    id: 2,
    title: "District Level 1st Position",
    event: "National Children's Science Congress",
    description: "Achieved 1st position for scientific innovation and selected to represent at the State Level Exhibition hosted at IIT Mandi.",
    icon: "🔬",
    badge: "bg-blue-100 text-blue-700 border-blue-200"
  }
];

export default function Achievements() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      
      {/* Section Header */}
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#333333]">
          Achievements
        </h2>
        <div className="w-20 h-2 bg-[#f97316] rounded-full mt-4 mx-auto md:mx-0"></div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {achievements.map((item, index) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-[#e6d5c3] hover:shadow-md transition-all duration-300 group"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <span className={`text-xs font-bold px-3 py-1 rounded-full border ${item.badge}`}>
                {item.event}
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-[#333333] mb-3">
              {item.title}
            </h3>
            
            <p className="text-[#6b5f54] leading-relaxed font-medium">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>

    </div>
  );
}