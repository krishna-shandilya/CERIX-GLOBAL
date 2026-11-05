import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail } from 'lucide-react';
import BrandEmblem from './BrandEmblem';

export default function Footer() {
  return (
    <footer className="w-full bg-[#050C09] text-white pt-16 pb-10 px-6 md:px-12 lg:px-24 border-t border-white/10 select-none">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-white/10">
        
        {/* Brand & Mission Column */}
        <div className="lg:col-span-5 space-y-6">
          
          <Link to="/" className="inline-flex items-center gap-5 group focus-visible:ring-2 focus-visible:ring-[#C5A059] outline-none rounded-lg p-1">
            <div className="relative w-14 h-14 shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <BrandEmblem />
            </div>

            <div className="flex flex-col justify-center">
              <span className="font-serif text-xl tracking-wider text-white group-hover:text-[#C5A059] transition-colors duration-300 leading-none mb-1.5">
                CERIX GLOBAL
              </span>
              <span className="text-[10px] tracking-[0.25em] text-gray-400 uppercase font-light leading-none">
                ONE. WORLD.
              </span>
            </div>
          </Link>

          <h3 className="text-2xl md:text-3xl font-serif text-white/90 leading-tight pt-2">
            Cross-Border Entity Architecture &<br />Wealth Advisory
          </h3>

          <p className="text-sm text-gray-400 leading-relaxed max-w-sm font-light">
            Strategic international advisory for enterprises, private investment funds, and family offices navigating multi-jurisdictional holding structures and operational substance.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3 pt-2">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer"
              className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#C5A059] hover:bg-[#C5A059]/10 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#C5A059] outline-none"
              aria-label="Cerix Global on LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href="mailto:info@cerixglobal.com" 
              className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#C5A059] hover:bg-[#C5A059]/10 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#C5A059] outline-none"
              aria-label="Email Cerix Global Inquiries"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Navigation Column */}
        <div className="lg:col-span-3 space-y-4">
          <span className="text-xs font-semibold tracking-widest text-[#C5A059] uppercase block mb-4 font-mono">
            Navigation
          </span>
          <ul className="space-y-3 text-sm text-gray-300 font-light">
            <li><Link to="/services" className="hover:text-[#C5A059] transition-colors focus-visible:text-[#C5A059] outline-none">Expertise & Services</Link></li>
            <li><Link to="/global-reach" className="hover:text-[#C5A059] transition-colors focus-visible:text-[#C5A059] outline-none">Global Corridors</Link></li>
            <li><Link to="/approach" className="hover:text-[#C5A059] transition-colors focus-visible:text-[#C5A059] outline-none">Strategic Approach</Link></li>
            <li><Link to="/insights" className="hover:text-[#C5A059] transition-colors focus-visible:text-[#C5A059] outline-none">Intelligence & Insights</Link></li>
            <li><Link to="/about" className="hover:text-[#C5A059] transition-colors focus-visible:text-[#C5A059] outline-none">About Cerix Global</Link></li>
            <li><Link to="/contact" className="hover:text-[#C5A059] transition-colors focus-visible:text-[#C5A059] outline-none">Confidential Intake</Link></li>
          </ul>
        </div>

        {/* Legal & Contact Column */}
        <div className="lg:col-span-4 space-y-8">
          <div>
            <span className="text-xs font-semibold tracking-widest text-[#C5A059] uppercase block mb-4 font-mono">
              Governance & Policies
            </span>
            <ul className="space-y-3 text-sm text-gray-300 font-light">
              <li><Link to="/privacy" className="hover:text-[#C5A059] transition-colors focus-visible:text-[#C5A059] outline-none">Privacy & Data Governance</Link></li>
              <li><Link to="/terms" className="hover:text-[#C5A059] transition-colors focus-visible:text-[#C5A059] outline-none">Terms of Engagement</Link></li>
              <li><Link to="/disclaimer" className="hover:text-[#C5A059] transition-colors focus-visible:text-[#C5A059] outline-none">Regulatory Disclaimer</Link></li>
            </ul>
          </div>

          <div>
            <span className="text-xs font-semibold tracking-widest text-[#C5A059] uppercase block mb-2 font-mono">
              Advisory Desk
            </span>
            <p className="text-sm text-gray-300 font-medium">Cerix Global Consulting</p>
            <p className="text-sm text-gray-400 font-light">Bengaluru, India</p>
            <a 
              href="mailto:info@cerixglobal.com" 
              className="text-sm text-[#C5A059] hover:underline mt-1 inline-block font-mono focus-visible:ring-2 focus-visible:ring-[#C5A059] outline-none"
            >
              info@cerixglobal.com
            </a>
          </div>
        </div>

      </div>

      {/* Premium Advisory Scope Disclosure */}
      <div className="max-w-7xl mx-auto pt-8 pb-4">
        <p className="text-xs text-gray-400 font-light leading-relaxed">
          <span className="text-[11px] font-mono font-semibold tracking-widest uppercase text-[#C5A059] mr-2">
            Advisory Scope & Independence:
          </span> 
          Cerix Global operates as an independent cross-border structuring advisor and strategic intermediary. To maintain absolute objectivity, we do not directly provide statutory corporate administration, trust services, or fund administration. All regulated execution, local directorships, and compliance mandates are coordinated seamlessly through our curated network of authorized, locally licensed counterparties.
        </p>
      </div>

      {/* Copyright Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-mono">
        <span>© {new Date().getFullYear()} Cerix Global. All rights reserved.</span>
        <div className="flex items-center gap-4 text-[10px] text-gray-500">
          <span>Bengaluru · Mauritius · Singapore · DIFC</span>
          <span className="text-gray-600">12° 58' N · 77° 35' E</span>
        </div>
      </div>
    </footer>
  );
}
