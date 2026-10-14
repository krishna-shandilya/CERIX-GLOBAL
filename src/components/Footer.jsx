import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Mail } from "lucide-react";
import Logo from "./Logo";

const NAV = [
  { label: "Expertise", to: "/expertise" },
  { label: "Global Reach", to: "/global-reach" },
  { label: "Approach", to: "/approach" },
  { label: "Insights", to: "/insights" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const LEGAL = [
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms", to: "/terms" },
  { label: "Disclaimer", to: "/disclaimer" },
];

export default function Footer() {
  return (
    <footer className="bg-obsidian text-parchment relative overflow-hidden" data-theme="dark">
      <div className="coord-grid absolute inset-0 opacity-20" />
      <div className="relative mx-auto max-w-[1500px] px-6 lg:px-12 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-12">
          {/* Brand & Animated Logo */}
          <div className="lg:col-span-5">
            <Logo variant="light" showTagline />
            <p className="mt-8 font-serif text-2xl lg:text-3xl leading-[1.15] text-parchment/90 max-w-md text-balance">
              Global Business &amp; Corporate Structuring
            </p>
            <p className="mt-4 font-sans text-sm text-parchment/55 max-w-sm leading-relaxed font-light">
              Strategic international advisory for businesses, investors and families navigating global structures, jurisdictions and opportunity.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full border border-parchment/20 flex items-center justify-center text-parchment/65 hover:border-[#C86D51] hover:text-[#C86D51] transition-colors duration-300"
              >
                <Linkedin size={15} strokeWidth={1.5} />
              </a>
              <a
                href="mailto:info@cerixglobal.com"
                aria-label="Email"
                className="w-10 h-10 rounded-full border border-parchment/20 flex items-center justify-center text-parchment/65 hover:border-[#C86D51] hover:text-[#C86D51] transition-colors duration-300"
              >
                <Mail size={15} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 lg:col-start-7">
            <p className="eyebrow text-[#C86D51] mb-6">Navigation</p>
            <ul className="space-y-3">
              {NAV.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="font-sans text-sm text-parchment/65 hover:text-white transition-colors duration-300">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Contact */}
          <div className="lg:col-span-3">
            <p className="eyebrow text-[#C86D51] mb-6">Legal</p>
            <ul className="space-y-3 mb-8">
              {LEGAL.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="font-sans text-sm text-parchment/65 hover:text-white transition-colors duration-300">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="eyebrow text-[#C86D51] mb-3">Contact</p>
            <p className="font-sans text-sm text-parchment/65 leading-relaxed font-light">
              Cerix Global Consulting<br />
              Bengaluru, India<br />
              <a href="mailto:info@cerixglobal.com" className="text-parchment hover:text-[#C86D51] transition-colors duration-300 underline-offset-4 hover:underline">
                info@cerixglobal.com
              </a>
            </p>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="mt-16 pt-8 border-t border-parchment/10">
          <p className="font-sans text-xs text-parchment/40 leading-relaxed max-w-4xl font-light">
            Cerix Global provides consulting and coordination services. Specific legal, tax, regulatory, immigration and investment matters may require advice from appropriately qualified professionals in the relevant jurisdiction.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="font-sans text-xs text-parchment/35">© {new Date().getFullYear()} Cerix Global. All rights reserved.</p>
            <p className="font-mono text-[0.6rem] tracking-[0.25em] text-parchment/25 uppercase">12° 58′ N · 77° 35′ E</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
