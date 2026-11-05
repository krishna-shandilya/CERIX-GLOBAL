import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, X, Globe, Briefcase, Shield, Landmark } from "lucide-react";
import { WHO_WE_ADVISE, IMAGES } from "@/lib/cerixData";
import MotionText from "@/components/MotionText";
import { motion, AnimatePresence } from "framer-motion";

// We map the extra modal details and icons to your existing WHO_WE_ADVISE array by index
const ENHANCED_DETAILS = [
  {
    icon: Globe,
    details: {
      mandate: 'Architecting tax-efficient, scalable corporate structures for cross-border expansion, intellectual property centralization, and pre-IPO readiness.',
      focus: [
        'Intellectual Property (IP) Holding Company Setup',
        'Regional HQ Structuring (Singapore / UAE)',
        'Cross-Border Profit Repatriation Strategies',
        'ESOP & Founder Equity Structuring'
      ],
      structures: 'PTE LTD (SG), FZCO (UAE), GBC (Mauritius)'
    }
  },
  {
    icon: Briefcase,
    details: {
      mandate: 'Establishing robust, compliant fund architectures tailored for global capital raising, distinct asset classes, and specific investor jurisdictions.',
      focus: [
        'VCC / GP-LP Structuring (Singapore)',
        'Exempted Limited Partnerships (Cayman Islands)',
        'Fund Manager Licensing & Compliance Support',
        'Master-Feeder Fund Architecture'
      ],
      structures: 'VCC (SG), ELP (Cayman), PCC (Mauritius)'
    }
  },
  {
    icon: Shield,
    details: {
      mandate: 'Creating impenetrable, multi-generational wealth preservation structures protecting absolute privacy and facilitating seamless succession.',
      focus: [
        'Single & Multi-Family Office (SFO/MFO) Setup',
        'Discretionary Trust Formation',
        'Private Wealth Foundations',
        'Golden Visa & Residency by Investment (UAE/SG)'
      ],
      structures: 'Trusts (SG/Cook Islands), Foundations (UAE)'
    }
  },
  {
    icon: Landmark,
    details: {
      mandate: 'Navigating complex regulatory environments to secure operational licenses for fintechs, brokerages, and international trading houses.',
      focus: [
        'Financial Services Licensing (FSC / MAS / DFSA)',
        'Multi-Currency Treasury & Payment Centers',
        'Broker-Dealer Setup',
        'Global Trade Finance Structuring'
      ],
      structures: 'Regulated Entities (DIFC, SG, MU)'
    }
  }
];

export default function WhoWeAdvise() {
  const [activeModal, setActiveModal] = useState(null);
  // Default to the first card being expanded on desktop load
  const [hoveredIndex, setHoveredIndex] = useState(0); 

  // Merge your original data with the new modal details
  const PROFILES = WHO_WE_ADVISE.map((item, index) => ({
    ...item,
    icon: ENHANCED_DETAILS[index]?.icon || Globe,
    details: ENHANCED_DETAILS[index]?.details || ENHANCED_DETAILS[0].details,
  }));

  const openModal = (profile) => {
    setActiveModal(profile);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="relative bg-[#07130E] text-white py-32 lg:py-48 overflow-hidden">
      {/* Subtle Ambient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#07130E] via-[#07130E]/95 to-[#07130E]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#C5A059]/5 to-transparent blur-3xl opacity-50" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-6 lg:px-12">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#C5A059]" />
            <span className="text-xs font-mono tracking-[0.35em] text-[#C5A059] uppercase">
              Who We Advise
            </span>
            <div className="h-px w-24 bg-gradient-to-r from-[#C5A059]/40 to-transparent" />
          </motion.div>

          <MotionText
            text="Built for those who operate across borders."
            as="h2"
            className="font-serif text-[2.8rem] sm:text-6xl lg:text-[4.5rem] leading-[1.05] text-white text-balance"
          />
        </div>

        {/* The Cinematic Accordion (Performance Optimised Flex Layout) */}
        <div className="flex flex-col lg:flex-row w-full h-[800px] lg:h-[600px] gap-4">
          {PROFILES.map((c, i) => {
            const isActive = hoveredIndex === i;
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5% 0px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                onMouseEnter={() => setHoveredIndex(i)}
                onClick={() => openModal(c)}
                className={`relative group overflow-hidden rounded-3xl cursor-pointer border transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-2xl
                  ${isActive 
                    ? 'lg:flex-[3.5] flex-[3.5] border-[#C5A059]/40' 
                    : 'lg:flex-[1] flex-[1] border-white/10 hover:border-white/20'
                  }
                `}
              >
                {/* Background Image (Sourced directly from your WHO_WE_ADVISE data) */}
                <img
                  src={c.image}
                  alt={c.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] ease-out
                    ${isActive ? 'scale-105 opacity-90' : 'scale-100 opacity-40 grayscale-[30%] group-hover:opacity-60'}
                  `}
                />
                
                {/* Gradient Overlays for readability */}
                <div className={`absolute inset-0 transition-opacity duration-700
                  ${isActive 
                    ? 'bg-gradient-to-t from-[#050C09] via-[#050C09]/60 to-transparent' 
                    : 'bg-gradient-to-t from-[#050C09] to-[#050C09]/40'
                  }`} 
                />

                {/* Content Container */}
                <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
                  
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 mb-6 shrink-0
                    ${isActive ? 'bg-[#C5A059] text-[#07130E]' : 'bg-white/10 text-white backdrop-blur-sm'}
                  `}>
                    <c.icon className="w-5 h-5" />
                  </div>

                  {/* Title */}
                  <h3 className={`font-serif text-white transition-all duration-700 whitespace-pre-wrap
                    ${isActive ? 'text-2xl lg:text-3xl mb-4 leading-tight' : 'text-lg lg:text-xl mb-0 opacity-70'}
                  `}>
                    {c.title}
                  </h3>

                  {/* Expanding Content (Only visible when active) */}
                  <div 
                    className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden flex flex-col
                      ${isActive ? 'max-h-64 opacity-100 translate-y-0' : 'max-h-0 opacity-0 translate-y-4'}
                    `}
                  >
                    <p className="font-sans text-sm text-gray-300 font-light leading-relaxed mb-6 max-w-md">
                      {c.desc || c.description}
                    </p>
                    
                    <div className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.15em] uppercase text-[#C5A059] font-semibold w-fit">
                      <span>View Advisory Scope</span>
                      <ArrowRight size={14} />
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Detailed Frosted Glass Modal */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#07130E]/80 backdrop-blur-md cursor-pointer"
              onClick={closeModal}
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-2xl bg-[#0B1D16]/95 backdrop-blur-2xl border border-[#C5A059]/30 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              <div className="flex items-center justify-between p-6 sm:p-8 border-b border-white/5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#C5A059]/10 rounded-lg flex items-center justify-center border border-[#C5A059]/30 shrink-0">
                    <activeModal.icon className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl text-white">
                    {activeModal.title}
                  </h3>
                </div>
                <button 
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10 outline-none shrink-0 ml-4"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar space-y-8">
                <div>
                  <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C5A059] mb-3">
                    Strategic Mandate
                  </h4>
                  <p className="text-sm sm:text-base text-[#D4CFC4] font-light leading-relaxed">
                    {activeModal.details.mandate}
                  </p>
                </div>

                <div>
                  <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C5A059] mb-4">
                    Execution Focus
                  </h4>
                  <ul className="space-y-3">
                    {activeModal.details.focus.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059] mt-2 shrink-0" />
                        <span className="text-sm text-white font-light leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em] shrink-0">
                    Typical Vehicles
                  </span>
                  <span className="text-sm text-[#C5A059] font-medium">
                    {activeModal.details.structures}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 border-t border-white/5 bg-black/20 flex justify-end">
                <Link 
                  to="/contact"
                  onClick={closeModal}
                  className="inline-flex items-center gap-2 bg-[#C5A059] text-[#07130E] px-6 py-3.5 rounded-xl text-xs font-bold font-mono uppercase tracking-wider hover:bg-[#b5924d] transition-all hover:-translate-y-0.5 shadow-lg outline-none"
                >
                  Initiate Advisory Mandate
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
