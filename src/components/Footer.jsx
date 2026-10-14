import React from 'react';
import { Link } from 'react-router-dom';
import BrandEmblem from './BrandEmblem';

export default function Footer() {
  return (
    <footer className="w-full bg-[#050C09] text-white pt-16 pb-8 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-white/10">
        
        {/* Brand & Mission Column */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Brand Logo with BrandEmblem component */}
          <Link to="/" className="inline-flex flex-col gap-1 group">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 text-[#C5A059] group-hover:scale-110 transition-transform duration-300">
                <BrandEmblem />
              </div>
              <span className="font-serif text-xl tracking-wider text-white group-hover:text-[#C5A059] transition-colors duration-300">
                CERIX GLOBAL
              </span>
            </div>
            <span className="text-xs tracking-[0.25em] text-gray-400 uppercase font-light pl-11">
              ONE. WORLD.
            </span>
          </Link>

          <h3 className="text-2xl md:text-3xl font-serif text-white/90 leading-tight pt-2">
            Global Business &<br />Corporate Structuring
          </h3>

          <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
            Strategic international advisory for businesses, investors, and families navigating global structures, jurisdictions, and opportunity.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3 pt-2">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer"
              className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-xs text-gray-300 hover:text-white hover:border-[#C5A059] hover:bg-[#C5A059]/10 transition-all duration-300"
              aria-label="LinkedIn"
            >
              in
            </a>
            <a 
              href="mailto:info@cerixglobal.com" 
              className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-xs text-gray-300 hover:text-white hover:border-[#C5A059] hover:bg-[#C5A059]/10 transition-all duration-300"
              aria-label="Email"
            >
              ✉
            </a>
          </div>
        </div>

        {/* Navigation Column */}
        <div className="lg:col-span-3 space-y-4">
          <span className="text-xs font-semibold tracking-widest text-[#C5A059] uppercase block mb-4">
            Navigation
          </span>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><Link to="/services" className="hover:text-[#C5A059] transition-colors">Expertise</Link></li>
            <li><Link to="/jurisdictions" className="hover:text-[#C5A059] transition-colors">Global Reach</Link></li>
            <li><Link to="/approach" className="hover:text-[#C5A059] transition-colors">Approach</Link></li>
            <li><Link to="/insights" className="hover:text-[#C5A059] transition-colors">Insights</Link></li>
            <li><Link to="/about" className="hover:text-[#C5A059] transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-[#C5A059] transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Legal & Contact Column */}
        <div className="lg:col-span-4 space-y-8">
          <div>
            <span className="text-xs font-semibold tracking-widest text-[#C5A059] uppercase block mb-4">
              Legal
            </span>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/privacy" className="hover:text-[#C5A059] transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-[#C5A059] transition-colors">Terms</Link></li>
              <li><Link to="/disclaimer" className="hover:text-[#C5A059] transition-colors">Disclaimer</Link></li>
            </ul>
          </div>

          <div>
            <span className="text-xs font-semibold tracking-widest text-[#C5A059] uppercase block mb-2">
              Contact
            </span>
            <p className="text-sm text-gray-300">Cerix Global Consulting</p>
            <p className="text-sm text-gray-400">Bengaluru, India</p>
            <a href="mailto:info@cerixglobal.com" className="text-sm text-[#C5A059] hover:underline mt-1 block">
              info@cerixglobal.com
            </a>
          </div>
        </div>

      </div>

      {/* Legal Disclaimer & Copyright Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-gray-500">
        <p className="max-w-3xl leading-relaxed">
          Cerix Global provides consulting and coordination services. Specific legal, tax, regulatory, immigration and investment matters may require advice from appropriately qualified professionals in the relevant jurisdiction.
        </p>
        <div className="flex items-center gap-6 shrink-0">
          <span>© 2026 Cerix Global. All rights reserved.</span>
          <span className="text-[10px] tracking-widest text-gray-600 font-mono">12° 58' N · 77° 35' E</span>
        </div>
      </div>
    </footer>
  );
}
