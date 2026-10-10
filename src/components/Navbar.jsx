import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#142B20] text-white border-b border-white/10 ${
      scrolled ? 'py-4 shadow-lg' : 'py-6'
    }`}>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">
        
        {/* Logo with Dotted Icon & Terracotta Dots */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-5 h-5 border border-[#C86D51]/50 grid grid-cols-3 gap-0.5 p-0.5 rounded-sm">
            <div className="bg-[#C86D51] w-full h-full"></div>
            <div className="bg-[#C86D51]/70 w-full h-full"></div>
            <div className="bg-[#C86D51]/40 w-full h-full"></div>
            <div className="bg-[#C86D51]/70 w-full h-full"></div>
            <div className="bg-[#C86D51] w-full h-full"></div>
            <div className="bg-[#C86D51]/70 w-full h-full"></div>
          </div>
          <span className="font-serif text-lg tracking-wider uppercase font-normal text-white flex items-center gap-1.5">
            Cerix Global <span className="text-[#C86D51] tracking-widest text-xs">•••</span>
          </span>
        </Link>

        {/* Frosted Glass Pill Navigation Toolbar */}
        <nav className="hidden lg:flex items-center space-x-1 bg-white/5 backdrop-blur-md border border-white/10 px-6 py-2 rounded-full text-xs font-mono uppercase tracking-wider">
          <Link to="/expertise" className="px-3 py-1.5 hover:text-[#C86D51] transition-colors">Expertise</Link>
          <Link to="/global-reach" className="px-3 py-1.5 hover:text-[#C86D51] transition-colors">Global Reach</Link>
          <Link to="/approach" className="px-3 py-1.5 hover:text-[#C86D51] transition-colors">Approach</Link>
          <Link to="/insights" className="px-3 py-1.5 hover:text-[#C86D51] transition-colors">Insights</Link>
          <Link to="/about" className="px-3 py-1.5 hover:text-[#C86D51] transition-colors">About</Link>
          <Link to="/contact" className="px-3 py-1.5 hover:text-[#C86D51] transition-colors">Contact</Link>
        </nav>

        {/* Action Button */}
        <div>
          <Link
            to="/contact"
            className="rounded-full bg-[#8B3A2B] text-white hover:bg-[#722F21] px-6 py-3 text-xs font-mono uppercase tracking-wider transition-all shadow-sm border border-white/10"
          >
            Start a Conversation
          </Link>
        </div>

      </div>
    </header>
  );
}
