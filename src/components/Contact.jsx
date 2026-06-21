import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 relative z-10">
      
      {/* Section Header */}
      <div className="mb-16 text-center">
        <span className="inline-block bg-[#f97316] text-white text-sm font-bold px-4 py-1.5 rounded-full mb-4 shadow-sm">
          WHAT'S NEXT?
        </span>
        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-[#333333]">
          Let's Work Together
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start bg-white rounded-[3rem] p-8 md:p-12 shadow-sm border border-[#e6d5c3]">
        
        {/* Left Side: Contact Info */}
        <div className="flex flex-col h-full justify-between">
          <div>
            <h3 className="text-3xl font-bold text-[#333333] mb-4">
              Get in Touch
            </h3>
            <p className="text-[#6b5f54] leading-relaxed mb-8 text-lg">
              Whether you have a question about my work, want to collaborate on a hackathon, or just want to say hi, my inbox is always open.
            </p>
            
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-[#f4ebe1] rounded-2xl flex items-center justify-center text-xl group-hover:bg-[#f97316] group-hover:text-white transition-colors duration-300">
                  ✉️
                </div>
                <div>
                  <p className="text-sm font-bold text-[#8c7a6b] uppercase tracking-wider">Email</p>
                  <a href="mailto:vaishhhnavil3s@gmail.com" className="text-lg font-bold text-[#333333] hover:text-[#f97316] transition-colors">
                    vaishhhnavil3s@gmail.com
                  </a>
                </div>
              </div>
              
              {/* Location */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-[#f4ebe1] rounded-2xl flex items-center justify-center text-xl group-hover:bg-[#f97316] group-hover:text-white transition-colors duration-300">
                  📍
                </div>
                <div>
                  <p className="text-sm font-bold text-[#8c7a6b] uppercase tracking-wider">Location</p>
                  <p className="text-lg font-bold text-[#333333]">Himachal Pradesh, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-12 pt-8 border-t border-[#f4ebe1] flex gap-4">
            {['LinkedIn', 'GitHub', 'LeetCode'].map((platform, i) => (
              <a 
                key={i}
                href="#" 
                className="px-6 py-2.5 bg-[#f4ebe1] text-[#333333] font-bold rounded-full hover:bg-[#333333] hover:text-white transition-colors duration-300"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>

        {/* Right Side: The Form */}
        <div className="bg-[#fdfbf7] p-8 rounded-3xl border border-[#e6d5c3]">
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-bold text-[#333333] ml-2">Name</label>
              <input 
                type="text" 
                id="name" 
                placeholder="John Doe"
                className="w-full px-6 py-4 rounded-2xl bg-white border border-[#e6d5c3] focus:outline-none focus:ring-2 focus:ring-[#f97316]/50 focus:border-[#f97316] transition-all text-[#333333] placeholder:text-[#b5a898]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-bold text-[#333333] ml-2">Email</label>
              <input 
                type="email" 
                id="email" 
                placeholder="john@example.com"
                className="w-full px-6 py-4 rounded-2xl bg-white border border-[#e6d5c3] focus:outline-none focus:ring-2 focus:ring-[#f97316]/50 focus:border-[#f97316] transition-all text-[#333333] placeholder:text-[#b5a898]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-bold text-[#333333] ml-2">Message</label>
              <textarea 
                id="message" 
                rows="4" 
                placeholder="Hi Vaishnavi, I'd love to chat about..."
                className="w-full px-6 py-4 rounded-2xl bg-white border border-[#e6d5c3] focus:outline-none focus:ring-2 focus:ring-[#f97316]/50 focus:border-[#f97316] transition-all text-[#333333] placeholder:text-[#b5a898] resize-none"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="mt-2 w-full bg-[#f97316] hover:bg-[#ea580c] text-white font-bold py-4 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              Send Message 🚀
            </button>
            
          </form>
        </div>

      </div>
    </div>
  );
}