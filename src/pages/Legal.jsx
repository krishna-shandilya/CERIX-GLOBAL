import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Reveal from "@/components/Reveal";

const CONTENT = {
  privacy: {
    title: "Privacy Policy",
    updated: "Last updated: September 2026",
    sections: [
      { h: "Introduction", p: 'Cerix Global Consulting ("we", "us") respects the privacy of visitors to this website. This policy explains how we collect, use and protect personal information shared through this site.' },
      { h: "Information We Collect", p: "We collect information you provide directly — such as your name, company, email, phone and message — when you submit an enquiry through our contact form. We may also collect standard technical information such as browser type and pages visited." },
      { h: "How We Use Information", p: "We use the information you provide to respond to your enquiry, to understand the nature of your requirements, and to coordinate with our professional network where relevant. We do not sell or rent your personal information." },
      { h: "Data Retention", p: "We retain enquiry information for as long as necessary to respond to and follow up on your request, and thereafter in accordance with applicable data-protection requirements." },
      { h: "Your Rights", p: "Depending on your jurisdiction, you may have rights to access, correct or request deletion of your personal information. To exercise these rights, contact us at info@cerixglobal.com." },
      { h: "Contact", p: "Questions about this policy can be directed to info@cerixglobal.com." },
    ],
  },
  terms: {
    title: "Terms of Use",
    updated: "Last updated: September 2026",
    sections: [
      { h: "Acceptance of Terms", p: "By accessing this website you agree to these terms of use. If you do not agree, please do not use the website." },
      { h: "Information Not Advice", p: "The content of this website is provided for general informational purposes only. It does not constitute legal, tax, regulatory, immigration or investment advice, and should not be relied upon as such. Specific advice must be obtained from appropriately qualified professionals in the relevant jurisdiction." },
      { h: "No Warranty", p: "While we strive to keep information accurate and current, we make no warranties, express or implied, about the completeness or accuracy of the content. Jurisdictional frameworks change, and information may become outdated." },
      { h: "No Solicitation", p: "Nothing on this website constitutes an offer, a solicitation, or a recommendation to enter into any transaction or programme. Any decision to act is yours, taken with appropriate professional advice." },
      { h: "External Links", p: "This website may contain links to third-party sites. We are not responsible for the content or practices of those sites." },
      { h: "Governing Law", p: "These terms are governed by the laws applicable to Cerix Global Consulting's place of operation, without regard to conflict-of-laws principles." },
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    updated: "Last updated: September 2026",
    sections: [
      { h: "Nature of Services", p: "Cerix Global provides consulting and coordination services. Specific legal, tax, regulatory, immigration and investment matters may require advice from appropriately qualified professionals in the relevant jurisdiction." },
      { h: "No Guarantee of Outcomes", p: "Decisions regarding licensing, banking, residency, citizenship and regulatory approvals rest with the relevant authorities and institutions. Cerix Global does not guarantee any particular outcome from an application or engagement." },
      { h: "Jurisdiction Suitability", p: "Jurisdiction suitability depends on individual circumstances and applicable laws. References to jurisdictions on this website are factual and exploratory, not recommendations. No jurisdiction is inherently suitable or unsuitable in the abstract." },
      { h: "No Tax Advice", p: "Cerix Global does not provide tax advice. Tax outcomes depend on individual circumstances and require advice from qualified tax professionals in the relevant jurisdictions." },
      { h: "Investment Migration", p: "Investment migration programmes are operated by licensed agents and regulated authorities. Cerix Global provides advisory and coordination only and does not operate such programmes directly." },
      { h: "Accuracy of Information", p: "Information on this website is provided in good faith but may not reflect the most current legal or regulatory position. Always confirm with qualified professionals before acting." },
    ],
  },
};

export default function Legal() {
  const { type } = useParams();
  const doc = CONTENT[type] || CONTENT.privacy;

  return (
    <div className="pt-28">
      <section data-theme="light" className="relative bg-ivory text-obsidian py-20 lg:py-28 overflow-hidden">
        <div className="coord-grid-light absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
          <Link to="/" className="inline-flex items-center gap-2 text-obsidian/60 hover:text-obsidian font-sans text-xs tracking-[0.12em] uppercase mb-6 transition-colors">
            <ArrowLeft size={14} strokeWidth={1.5} /> Home
          </Link>
          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="font-serif text-4xl lg:text-6xl text-obsidian">
            {doc.title}
          </motion.h1>
          <p className="mt-4 font-mono text-[0.65rem] tracking-[0.15em] text-obsidian/45 uppercase">{doc.updated}</p>
        </div>
      </section>

      <section className="bg-parchment py-20 lg:py-28">
        <div className="mx-auto max-w-[820px] px-6 lg:px-12">
          {doc.sections.map((s, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <div className="py-7 border-b border-obsidian/10 last:border-0">
                <h2 className="font-serif text-2xl text-obsidian mb-3">{s.h}</h2>
                <p className="font-sans text-base text-obsidian/65 leading-relaxed">{s.p}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}