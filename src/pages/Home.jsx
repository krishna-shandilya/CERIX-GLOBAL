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
        "description": "Elite international cross-border corporate structuring, holding architectures, alternative investment funds, and family office wealth advisory.",
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
        <meta name="geo.region" content="MU;SG;AE;IN" />
        <meta name="geo.placename" content="International Financial Corridors" />
        <link rel="canonical" href="https://www.cerixglobal.com/" />
        <script type="application/ld+json">
          {JSON.stringify(structuredSchema)}
        </script>
      </Helmet>

      {/* 1. Hero & Value Architecture */}
      <Hero />

      {/* 2. Practice Areas & Advisory Offerings */}
      <WhatWeDo />

      {/* 3. Target Institutional Segments */}
      <WhoWeAdvise />

      {/* 4. Global Corridors 3D / Scroll-Snap Carousel */}
      <GlobalReachCarousel />

      {/* 5. Execution Approach & Methodology */}
      <Approach />

      {/* 6. Why Cerix Global (Rendered once with 16+ years stat) */}
      <WhyCerix />

      {/* 7. Institutional FAQ Matrix */}
      <FAQSection />

      {/* 8. Conversion Intake Gateway */}
      <ContactSection />
    </main>
  );
}
