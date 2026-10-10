import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu whenever route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#142B20] text-white ${
      scrolled ? 'py-4 shadow-xl border-b border-white/10' : 'py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">
        
        {/* Exact Logo from Brand Asset */}
        <Link to="/" className="flex items-center gap-3">
          {/* Precise Dotted Matrix Icon */}
          <div className="grid grid-cols-5 gap-0.5 w-6 h-6 items-center justify-center">
            <div className="w-1 h-1 bg-[#D4AF97] rounded-[1px] col-start-3"></div>
            <div className="w-1 h-1 bg-[#D4AF97] rounded-[1px] col-start-2 row-start-2"></div>
            <div className="w-1 h-1 bg-[#C86D51] rounded-[1px] col-start-3 row-start-2"></div>
            <div className="w-1 h-1 bg-[#D4AF97] rounded-[1px] col-start-4 row-start-2"></div>
            <div className="w-1 h-1 bg-[#D4AF97] rounded-[1px] col-start-1 row-start-3"></div>
            <div className="w-1 h-1 bg-[#C86D51] rounded-[1px] col-start-2 row-start-3"></div>
            <div className="w-1 h-1 bg-[#A04020] rounded-[1px] col-start-3 row-start-3"></div>
            <div className="w-1 h-1 bg-[#C86D51] rounded-[1px] col-start-4 row-start-3"></div>
            <div className="w-1 h-1 bg-[#D4AF97] rounded-[1px] col-start-5 row-start-3"></div>
            <div className="w-1 h-1 bg-[#D4AF97] rounded-[1px] col-start-2 row-start-4"></div>
            <div className="w-1 h-1 bg-[#C86D51] rounded-[1px] col-start-3 row-start-4"></div>
            <div className="w-1 h-1 bg-[#D4AF97] rounded-[1px] col-start-4 row-start-4"></div>
            <div className="w-1 h-1 bg-[#D4AF97] rounded-[1px] col-start-3 row-start-5"></div>
          </div>
          
          <span className="font-serif text-lg tracking-wider uppercase font-normal text-white flex items-center gap-1.5">
            <span>CERIX</span> <span className="text-[#C86D51]">GLOBAL</span>
            <span className="flex items-center gap-1 ml-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A3A099]"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C86D51]"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#A04020]"></span>
            </span>
          </span>
        </Link>

        {/* Desktop Frosted Glass Pill Navigation Toolbar */}
        <nav className="hidden lg:flex items-center space-x-1 bg-white/5 backdrop-blur-md border border-white/10 px-6 py-2 rounded-full text-xs font-mono uppercase tracking-wider">
          <Link to="/expertise" className="px-3 py-1.5 hover:text-[#C86D51] transition-colors">Expertise</Link>
          <Link to="/global-reach" className="px-3 py-1.5 hover:text-[#C86D51] transition-colors">Global Reach</Link>
          <Link to="/approach" className="px-3 py-1.5 hover:text-[#C86D51] transition-colors">Approach</Link>
          <Link to="/insights" className="px-3 py-1.5 hover:text-[#C86D51] transition-colors">Insights</Link>
          <Link to="/about" className="px-3 py-1.5 hover:text-[#C86D51] transition-colors">About</Link>
          <Link to="/contact" className="px-3 py-1.5 hover:text-[#C86D51] transition-colors">Contact</Link>
        </nav>

        {/* Desktop Action Button */}
        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="rounded-full bg-[#8B3A2B] text-white hover:bg-[#722F21] px-6 py-3 text-xs font-mono uppercase tracking-wider transition-all shadow-sm border border-white/10"
          >
            Start a Conversation
          </Link>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white p-2 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

      </div>

      {/* Mobile Collapsible Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#142B20] border-b border-white/10 px-6 py-6 space-y-4 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col space-y-3 font-mono text-xs uppercase tracking-wider">
            <Link to="/expertise" className="py-2 hover:text-[#C86D51] transition-colors border-b border-white/5">Expertise</Link>
            <Link to="/global-reach" className="py-2 hover:text-[#C86D51] transition-colors border-b border-white/5">Global Reach</Link>
            <Link to="/approach" className="py-2 hover:text-[#C86D51] transition-colors border-b border-white/5">Approach</Link>
            <Link to="/insights" className="py-2 hover:text-[#C86D51] transition-colors border-b border-white/5">Insights</Link>
            <Link to="/about" className="py-2 hover:text-[#C86D51] transition-colors border-b border-white/5">About</Link>
            <Link to="/contact" className="py-2 hover:text-[#C86D51] transition-colors border-b border-white/5">Contact</Link>
          </div>
          <div className="pt-2">
            <Link
              to="/contact"
              className="block text-center rounded-full bg-[#8B3A2B] text-white py-3 text-xs font-mono uppercase tracking-wider shadow-sm"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
