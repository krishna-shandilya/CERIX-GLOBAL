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

  // Make the header dark green on Home and Expertise pages
  const isDarkHeader = location.pathname === '/' || location.pathname === '/expertise';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isDarkHeader 
        ? 'bg-[#142B20] text-white border-b border-white/10' 
        : 'bg-[#FDFBF7] text-[#1A1A1A] border-b border-[#E5E0D8]'
    } ${scrolled ? 'shadow-md py-4' : 'py-6'}`}>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="font-serif text-lg tracking-wider uppercase flex items-center gap-2">
          <span className="font-bold">Cerix Global</span>
          <span className="text-[#C86D51] tracking-widest text-xs">•••</span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden lg:flex items-center space-x-8 text-xs font-mono uppercase tracking-wider">
          <Link to="/expertise" className="hover:text-[#C86D51] transition-colors">Expertise</Link>
          <Link to="/global-reach" className="hover:text-[#C86D51] transition-colors">Global Reach</Link>
          <Link to="/approach" className="hover:text-[#C86D51] transition-colors">Approach</Link>
          <Link to="/insights" className="hover:text-[#C86D51] transition-colors">Insights</Link>
          <Link to="/about" className="hover:text-[#C86D51] transition-colors">About</Link>
          <Link to="/contact" className="hover:text-[#C86D51] transition-colors">Contact</Link>
        </nav>

        {/* Action Button */}
        <div>
          <Link
            to="/contact"
            className="rounded-full bg-[#8B3A2B] text-white hover:bg-[#722F21] px-6 py-3 text-xs font-mono uppercase tracking-wider transition-all shadow-sm"
          >
            Start a Conversation
          </Link>
        </div>

      </div>
    </header>
  );
}
