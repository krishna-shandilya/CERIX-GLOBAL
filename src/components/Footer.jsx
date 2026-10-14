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
      <div className="relative mx-auto max-w-[1500px] px-6 lg:px-12 py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Logo variant="light" showTagline />
            <p className="mt-10 font-serif text-3xl lg:text-4xl leading-[1.1] text-parchment/90 max-w-md text-balance">
              Global Business &amp; Corporate Structuring
            </p>
            <p className="mt-6 font-sans text-sm text-parchment/55 max-w-sm leading-relaxed">
              Strategic international advisory for businesses, investors and families navigating global structures, jurisdictions and opportunity.
            </p>
            <div className="mt-10 flex items-center gap-5">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 border border-parchment/20 flex items-center justify-center text-parchment/65 hover:border-olive-soft hover:text-olive-soft transition-colors duration-400"
              >
                <Linkedin size={16} strokeWidth={1.5} />
              </a>
              <a
                href="mailto:info@cerixglobal.com"
                aria-label="Email"
                className="w-11 h-11 border border-parchment/20 flex items-center justify-center text-parchment/65 hover:border-olive-soft hover:text-olive-soft transition-colors duration-400"
              >
                <Mail size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3 lg:col-start-7">
            <p className="eyebrow text-terracotta-soft mb-7">Navigation</p>
            <ul className="space-y-4">
              {NAV.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="font-sans text-sm text-parchment/65 hover:text-olive-soft transition-colors duration-300">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + contact */}
          <div className="lg:col-span-3">
            <p className="eyebrow text-terracotta-soft mb-7">Legal</p>
            <ul className="space-y-4 mb-10">
              {LEGAL.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="font-sans text-sm text-parchment/65 hover:text-olive-soft transition-colors duration-300">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="eyebrow text-terracotta-soft mb-4">Contact</p>
            <p className="font-sans text-sm text-parchment/65 leading-relaxed">
              Cerix Global Consulting<br />
              Bengaluru, India<br />
              <a href="mailto:info@cerixglobal.com" className="text-parchment hover:text-olive-soft transition-colors duration-300 underline-offset-4 hover:underline">
                info@cerixglobal.com
              </a>
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-20 pt-10 border-t border-parchment/10">
          <p className="font-sans text-xs text-parchment/40 leading-relaxed max-w-4xl">
            Cerix Global provides consulting and coordination services. Specific legal, tax, regulatory, immigration and investment matters may require advice from appropriately qualified professionals in the relevant jurisdiction. Jurisdiction suitability depends on individual circumstances and applicable laws.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="font-sans text-xs text-parchment/35">© {new Date().getFullYear()} Cerix Global. All rights reserved.</p>
            <p className="font-mono text-[0.6rem] tracking-[0.25em] text-parchment/25 uppercase">12° 58′ N · 77° 35′ E</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
