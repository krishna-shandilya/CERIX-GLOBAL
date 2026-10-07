import React from "react";
import { MessageSquare, Mail, ArrowRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-forest text-ivory py-16 sm:py-24 px-6 sm:px-10 lg:px-20 rounded-[32px] my-6 max-w-[1500px] mx-auto">
      <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
        <p className="eyebrow text-terracotta-on-dark-small mb-4">Get In Touch</p>
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-6">
          Start a Conversation
        </h2>
        <p className="font-sans text-lg sm:text-xl text-ivory/80 leading-relaxed font-light">
          Strategic international advisory for businesses, investors and families navigating global structures, jurisdictions and opportunity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
        {/* WhatsApp Direct Link Card */}
        <div className="bg-white/5 border border-ivory/15 rounded-2xl p-8 flex flex-col justify-between hover:border-ivory/30 transition-all duration-300">
          <div>
            <div className="w-12 h-12 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center mb-6">
              <MessageSquare size={24} />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl mb-3">WhatsApp Chat</h3>
            <p className="text-ivory/70 text-sm leading-relaxed mb-8 font-light">
              Connect directly with our advisory team on WhatsApp for instant inquiries and meeting scheduling.
            </p>
          </div>
          <a
            href="https://wa.me/919731709711?text=Hello%20Cerix%20Global%2C%20I%20would%20like%20to%20get%20in%20touch."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-between w-full bg-[#25D366] text-slate-950 font-sans text-xs sm:text-sm uppercase tracking-[0.14em] font-semibold py-4 px-6 rounded-full hover:bg-[#20bd5a] transition-colors duration-300"
          >
            <span>Chat +91 97317 09711</span>
            <ArrowRight size={18} />
          </a>
        </div>

        {/* Email Direct Link Card */}
        <div className="bg-white/5 border border-ivory/15 rounded-2xl p-8 flex flex-col justify-between hover:border-ivory/30 transition-all duration-300">
          <div>
            <div className="w-12 h-12 rounded-full bg-ivory/10 text-ivory flex items-center justify-center mb-6">
              <Mail size={24} />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl mb-3">Email Advisory</h3>
            <p className="text-ivory/70 text-sm leading-relaxed mb-8 font-light">
              Send your detailed proposal, structuring brief, or inquiry directly to our corporate inbox.
            </p>
          </div>
          <a
            href="mailto:info@cerixglobal.com?subject=Inquiry%20from%20Website"
            className="inline-flex items-center justify-between w-full bg-ivory text-forest font-sans text-xs sm:text-sm uppercase tracking-[0.14em] font-semibold py-4 px-6 rounded-full hover:bg-parchment transition-colors duration-300"
          >
            <span>info@cerixglobal.com</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}