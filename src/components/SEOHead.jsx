import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEOHead({
  title = "Cerix Global | Cross-Border Corporate Structuring & Wealth Advisory",
  description = "Independent cross-border advisory firm designing international holding architectures, private funds, and operational substance across Mauritius, Singapore, Cayman Islands, and UAE.",
  canonicalUrl = "https://www.cerixglobal.com",
  type = "website",
  ogImage = "https://www.cerixglobal.com/assets/og-cerix.jpg"
}) {
  const fullTitle = title.includes("Cerix Global") ? title : `${title} | Cerix Global`;

  return (
    <Helmet>
      {/* Primary HTML Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Cerix Global" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Geographic / Jurisdiction Meta */}
      <meta name="geo.region" content="MU;SG;AE;IN" />
      <meta name="geo.placename" content="International Financial Corridors" />
    </Helmet>
  );
}
