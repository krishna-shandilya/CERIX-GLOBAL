// Single source of truth for every imagery slot on the Cerix Global site.
// All photos are licensed Pexels stock (each URL verified HTTP 200), architectural
// or documentary, natural light, no people posing, no hotels/resorts/beaches/yachts/jets/money.
// Every slot below is a unique photo — none repeats across the site.

const px = (id, w = 1600) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const SITE_IMAGES = {
  // Hero
  hero: { url: px(38436993, 2400), alt: "Singapore Marina Bay financial district at twilight" },

  // Expertise / Services (01–08)
  svcCorporateStructuring: { url: px(35528869), alt: "Modern glass-and-steel headquarters facade with a geometric diamond pattern" },
  svcCompanyIncorporation: { url: px(38173519), alt: "Contemporary urban office architecture against a clear blue sky" },
  svcLicensing: { url: px(14212986), alt: "Neoclassical courthouse entrance with prominent columns" },
  svcBanking: { url: px(32613903), alt: "Abstract reflections on a modern glass building facade" },
  svcTrusts: { url: px(32820477), alt: "Long arched stone corridor with classical columns" },
  svcInvestmentMigration: { url: px(33407836), alt: "Bright modern airport terminal with a moving walkway under a skylight" },
  svcExpansion: { url: px(32399289), alt: "Container cranes at a busy international port at dusk" },
  taxStructuring: { url: px(28753363), alt: "Abstract geometric spiral staircase inside a modern building" },

  // Home editorial sections
  whyCerix: { url: px(39555618), alt: "Modern geometric glass building facade with reflective windows" },
  about: { url: px(36135045), alt: "Historic stone architecture with an ornate detailed facade" },
  wwaEnterprises: { url: px(32229751), alt: "Skyscrapers of a financial district illuminated at night" },
  wwaEntrepreneurs: { url: px(39863285), alt: "Modern atrium with a glass roof and natural light" },
  wwaInvestors: { url: px(27529573), alt: "Arcade of stone columns and arches in a historic courtyard" },
  wwaFamilies: { url: px(34945089), alt: "Historic stone building with pillars and steps under a clear sky" },

  // Editorial insight imagery (themed, distinct from service imagery)
  corporateStructuring: { url: px(34667145), alt: "Modern geometric glass building facade" },
  architecture: { url: px(242133), alt: "Aerial view of modern city buildings" },
  globalScale: { url: px(941459), alt: "Aerial view of city skyscrapers at night" },
  expansion: { url: px(593840), alt: "City buildings seen from above at night" },
  banking: { url: px(14521825), alt: "City street framed by trees at night" },
  licensing: { url: px(36482021), alt: "Upward view of a historic stone building facade" },
  trusts: { url: px(32356135), alt: "Modern office atrium with glass and steel architecture" },
  investmentMigration: { url: px(9712396), alt: "Modern architectural interior with a staircase and sharp shadows" },

  // Legacy keys retained for any sub-page references
  whoWeAdvise: { url: px(5464539), alt: "Architectural windows with geometric reflections" },
  approachDetail: { url: px(8569166), alt: "City skyline silhouetted against a warm sunset sky" },
};

// Backward-compatible flat URL map (existing code consumes IMAGES.<key> as strings)
export const IMAGES = Object.fromEntries(
  Object.entries(SITE_IMAGES).map(([k, v]) => [k, v.url])
);

// Alt-text map (consumed via IMAGE_ALT.<key>)
export const IMAGE_ALT = Object.fromEntries(
  Object.entries(SITE_IMAGES).map(([k, v]) => [k, v.alt])
);