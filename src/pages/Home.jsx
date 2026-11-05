import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '@/components/home/Hero';
import WhatWeDo from '@/components/home/WhatWeDo';
import WhoWeAdvise from '@/components/home/WhoWeAdvise';
import GlobalReachCarousel from '@/components/GlobalReachCarousel';
import Approach from '@/components/home/Approach';
import WhyCerix from '@/components/home/WhyCerix';
import FAQSection from '@/components/home/FAQSection';
import ContactSection from '@/components/home/ContactSection';

export default function Home() {
  const structuredSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FinancialService",
        "@id": "https://www.cerixglobal.com/#organization",
        "name": "Cerix Global",
        "url": "https://www.cerixglobal.com/",
        "logo": "https://www.cerixglobal.com/assets/logo.png",
        "description": "Elite international corporate structuring, cross-border holding architectures, investment funds, and family office wealth advisory.",
        "priceRange": "$$$$",
        "areaServed": [
          { "@type": "Country", "name": "Mauritius" },
          { "@type": "Country", "name": "Singapore" },
          { "@type": "Country", "name": "Cayman Islands" },
          { "@type": "Country", "name": "United Arab Emirates" },
          { "@type": "Country", "name": "British Virgin Islands" },
          { "@type": "Country", "name": "Switzerland" }
        ],
        "knowsAbout": [
          "Cross-Border Corporate Structuring",
          "Variable Capital Company (VCC) Setup",
          "Mauritius Global Business Company (GBC)",
          "Section 13O / 13U Family Office Tax Exemption",
          "RBI Overseas Direct Investment (ODI) Compliance",
          "Private Investment Funds and SPCs"
        ]
      }
    ]
  };

  return (
    <main className="bg-[#FDFBF7] min-h-screen relative">
      <Helmet>
        <title>Cerix Global | Elite Cross-Border Corporate Structuring & Wealth Advisory</title>
        <meta 
          name="description" 
          content="Architecting resilient cross-border entity structures, private investment funds, and institutional governance frameworks across Mauritius, Singapore, Cayman Islands, and the UAE." 
        />
        <meta name="geo.region" content="MU" />
        <meta name="geo.placename" content="Mauritius" />
        <link rel="canonical" href="https://www.cerixglobal.com/" />
        <script type="application/ld+json">
          {JSON.stringify(structuredSchema)}
        </script>
      </Helmet>

      <Hero />
      <WhatWeDo />
      <WhoWeAdvise />
      <GlobalReachCarousel />
      <Approach />
      <WhyCerix />
      <FAQSection />
      <ContactSection />
    </main>
  );
}
