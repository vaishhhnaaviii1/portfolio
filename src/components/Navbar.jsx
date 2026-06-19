import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', id: '#home' },
    { name: 'Languages', id: '#languages' },
    { name: 'Projects', id: '#projects' },
    { name: 'Experience', id: '#experience' },
    { name: 'Achievements', id: '#achievements' },
    { name: 'Contact', id: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo / Brand Initial */}
        <a href="#home" className="text-xl font-bold tracking-wider text-teal-400 hover:text-teal-300 transition-colors">
          PORTFOLIO.
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.id}
              className="text-sm font-medium text-slate-300 hover:text-teal-400 transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-300 hover:text-teal-400 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            {isOpen ? (
              <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z" />
            ) : (
              <path fillRule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-900 transition-all duration-300">
          <div className="px-6 pt-2 pb-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.id}
                onClick={() => setIsOpen(false)}
                className="block text-base font-medium text-slate-300 hover:text-teal-400 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}