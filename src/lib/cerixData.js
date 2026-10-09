const imgMap = {
  whyCerix: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
  corporate: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
  setup: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
  licensing: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1600&auto=format&fit=crop",
  banking: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1600&auto=format&fit=crop",
  trusts: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1600&auto=format&fit=crop",
  migration: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1600&auto=format&fit=crop",
  expansion: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
  funds: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1600&auto=format&fit=crop",
  insights: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop"
};

export const IMAGES = imgMap;
export const SITE_IMAGES = imgMap;

const safeAuth = {
  isAuthenticated: async function() { return false; },
  me: async function() { return null; },
  getUser: async function() { return null; },
  useMe: function() { return { data: null, isLoading: false, error: null }; },
  useUser: function() { return { data: null, isLoading: false, error: null }; },
  useAuth: function() { return { user: null, isAuthenticated: false, isLoading: false }; }
};

const safeDb = { auth: safeAuth, entities: {}, integrations: {} };

export const db = safeDb;
export const base44 = safeDb;
export const cerixData = safeDb;

export const WHO_WE_ADVISE = [
  {
    id: "01",
    num: "01",
    title: "Multinational Corporations & Holding Groups",
    name: "Multinational Corporations & Holding Groups",
    category: "Corporates",
    description: "Cross-border corporate groups requiring multi-jurisdictional holding, operational, and tax-efficient structures.",
    image: imgMap.corporate
  },
  {
    id: "02",
    num: "02",
    title: "Asset Managers & Investment Funds",
    name: "Asset Managers & Investment Funds",
    category: "Financial Institutions",
    description: "Emerging and established investment managers establishing private equity, venture capital, or hedge fund vehicles.",
    image: imgMap.funds
  },
  {
    id: "03",
    num: "03",
    title: "Family Offices & HNWIs",
    name: "Family Offices & HNWIs",
    category: "Private Wealth",
    description: "Ultra-high-net-worth families seeking succession planning, foundation setups, and global wealth preservation.",
    image: imgMap.trusts
  },
  {
    id: "04",
    num: "04",
    title: "High-Growth Tech & Scale-ups",
    name: "High-Growth Tech & Scale-ups",
    category: "Ventures",
    description: "Expanding technology businesses establishing regional headquarters, IP holding entities, and global banking.",
    image: imgMap.expansion
  }
];

export const CLIENT_CATEGORIES = WHO_WE_ADVISE;
export const CLIENT_TYPES = WHO_WE_ADVISE;
export const TARGET_AUDIENCE = WHO_WE_ADVISE;

export const SERVICES = [
  {
    id: "01",
    num: "01",
    slug: "corporate-structuring",
    title: "International Corporate Structuring",
    category: "Corporate Advisory",
    description: "Cross-border corporate architecture designed around commercial, operational and strategic objectives.",
    overview: "We design cross-border corporate architectures that align holding, operating and investment entities with commercial objectives, regulatory realities and long-term strategic intent.",
    image: imgMap.corporate,
    typicalConsiderations: [
      { num: "01", title: "Holding-company jurisdiction and intermediate entities" },
      { num: "02", title: "Substance, economic presence and governance requirements" },
      { num: "03", title: "Intra-group flows, funding and treasury architecture" }
    ],
    theApproach: "We begin with the commercial objective, map the structural options across relevant jurisdictions, and design an architecture that is coherent, defensible and operationally practical.",
    whoItsFor: "Multinational groups, holding companies, investment platforms and businesses with cross-border operations.",
    relatedJurisdictions: ["UAE", "Singapore", "Cyprus", "Mauritius", "Malta"],
    faqs: [
      { question: "Is corporate structuring the same as tax planning?", answer: "No. Corporate structuring is primarily about commercial and operational architecture." }
    ]
  },
  {
    id: "02",
    num: "02",
    slug: "company-incorporation",
    title: "Company Incorporation & Business Setup",
    category: "Entity Setup",
    description: "International company formation and end-to-end establishment support across selected jurisdictions.",
    overview: "We support the formation and establishment of companies across selected jurisdictions — from initial entity selection through registration and operational readiness.",
    image: imgMap.setup,
    typicalConsiderations: [
      { num: "01", title: "Entity type and jurisdiction selection" },
      { num: "02", title: "Registered office, directors and company secretary" }
    ],
    theApproach: "We coordinate the full establishment process — engaging local registered agents and partners where required.",
    whoItsFor: "Founders, businesses and investors establishing a new legal entity in an international jurisdiction.",
    relatedJurisdictions: ["UAE", "Singapore", "Mauritius", "Seychelles"],
    faqs: []
  },
  {
    id: "03",
    num: "03",
    slug: "international-licensing",
    title: "International Licensing",
    category: "Regulatory",
    description: "Advisory around regulated and specialist business licences, including investment, financial, securities, and fund managers.",
    overview: "We advise on and coordinate regulatory licensing processes for financial, investment, digital-asset and specialized commercial activities.",
    image: imgMap.licensing,
    typicalConsiderations: [],
    theApproach: "We assess the licensing regime against the business activity and coordinate with local counsel.",
    whoItsFor: "Financial institutions, fintechs, investment managers and commercial enterprises.",
    relatedJurisdictions: ["Mauritius", "Seychelles", "Cayman"],
    faqs: []
  },
  {
    id: "04",
    num: "04",
    slug: "banking-financial-infrastructure",
    title: "Banking & Financial Infrastructure",
    category: "Banking Support",
    description: "Support in navigating banking relationships and financial infrastructure requirements globally.",
    overview: "We assist businesses and private clients in navigating international banking relationships, preparing institutional compliance files, and establishing treasury infrastructure.",
    image: imgMap.banking,
    typicalConsiderations: [],
    theApproach: "We prepare documentation and compliance files required by financial institutions.",
    whoItsFor: "Businesses and individuals establishing or restructuring international banking relationships.",
    relatedJurisdictions: ["UAE", "Singapore", "Mauritius"],
    faqs: []
  },
  {
    id: "05",
    num: "05",
    slug: "trusts-foundations",
    title: "Trusts & Foundations",
    category: "Private Wealth",
    description: "International trust and foundation structuring for asset protection, estate planning, and private governance.",
    overview: "We advise on and coordinate the establishment of international trusts, foundations and private wealth vehicles.",
    image: imgMap.trusts,
    typicalConsiderations: [],
    theApproach: "We begin with family objectives and coordinate establishment with qualified trustees.",
    whoItsFor: "Families, principals and private clients considering succession and asset protection.",
    relatedJurisdictions: ["Mauritius", "Cyprus", "Malta"],
    faqs: []
  },
  {
    id: "06",
    num: "06",
    slug: "investment-migration",
    title: "Investment Migration Advisory",
    category: "Mobility",
    description: "Advisory for internationally mobile business leaders and families on residency and citizenship programs.",
    overview: "We advise internationally mobile individuals and families on investment migration programmes.",
    image: imgMap.migration,
    typicalConsiderations: [],
    theApproach: "We help families clarify objectives and coordinate applications with licensed agents.",
    whoItsFor: "Individuals and families seeking alternative residency or citizenship through investment.",
    relatedJurisdictions: ["Cyprus", "Malta", "UAE"],
    faqs: []
  },
  {
    id: "07",
    num: "07",
    slug: "international-expansion",
    title: "International Expansion",
    category: "Cross-Border",
    description: "Helping businesses evaluate new jurisdictions and launch operations across foreign markets.",
    overview: "We help businesses evaluate jurisdictions, establish structures and move toward operational readiness.",
    image: imgMap.expansion,
    typicalConsiderations: [],
    theApproach: "We assess market and jurisdiction against the business objective.",
    whoItsFor: "Businesses planning to enter a new jurisdiction.",
    relatedJurisdictions: ["UAE", "Singapore", "Malta"],
    faqs: []
  },
  {
    id: "08",
    num: "08",
    slug: "fund-solutions",
    title: "Alternative Fund Advisory & Structuring",
    category: "Funds",
    description: "Structuring private equity, venture capital, and hedge funds across global hubs.",
    overview: "We advise on and coordinate the structuring, formation and regulatory setup of alternative investment funds.",
    image: imgMap.funds,
    typicalConsiderations: [],
    theApproach: "We design fund architecture and coordinate setup with local counsel.",
    whoItsFor: "Asset managers, fund sponsors, and institutional investors.",
    relatedJurisdictions: ["Mauritius", "Cayman Islands", "BVI"],
    faqs: []
  }
];

export const EXPERTISE_LIST = SERVICES;
export const SERVICE_LIST = SERVICES;
export const SOLUTIONS = SERVICES;
export const FEATURES = SERVICES;
export const CAPABILITIES = SERVICES;
export const PRACTICE_AREAS = SERVICES;
export const OFFERINGS = SERVICES;

export const JURISDICTIONS = [
  {
    id: "singapore",
    slug: "singapore",
    name: "Singapore",
    region: "Asia-Pacific",
    subtitle: "Asian Financial & Holding Hub",
    description: "A globally recognised financial centre for holding structures, regional headquarters and treasury operations.",
    coordinates: "1° 21' N  103° 49' E",
    highlights: ["17% Corporate Tax Rate", "Over 90 Tax Treaties", "No Capital Gains Tax"]
  },
  {
    id: "mauritius",
    slug: "mauritius",
    name: "Mauritius",
    region: "Africa & Asia Gateway",
    subtitle: "International Financial Centre",
    description: "A treaty-network jurisdiction used for holding, investment and trust structures with global fund credentials.",
    coordinates: "20° 10' S  57° 31' E",
    highlights: ["Partial Exemption Regime", "No Withholding Taxes", "Extensive DTAA Network"]
  },
  {
    id: "malta",
    slug: "malta",
    name: "Malta",
    region: "Europe",
    subtitle: "EU Financial & Licensing Hub",
    description: "An EU jurisdiction offering holding structures, licensing frameworks and cross-border trading advantages.",
    coordinates: "35° 56' N  14° 22' E",
    highlights: ["EU Passporting Rights", "Effective Tax Refund System", "Robust Regulatory Oversight"]
  },
  {
    id: "belize",
    slug: "belize",
    name: "Belize",
    region: "Americas",
    subtitle: "International Business Companies",
    description: "An international business company jurisdiction used for holding structures.",
    coordinates: "17° 15' N  88° 46' W",
    highlights: ["Fast Registration", "Full Exemption from Local Taxes", "Asset Protection"]
  },
  {
    id: "bvi",
    slug: "bvi",
    name: "BVI",
    region: "Americas & Caribbean",
    subtitle: "Global Corporate Structuring Hub",
    description: "A well-established jurisdiction for holding structures, investment funds and international business companies.",
    coordinates: "18° 25' N  64° 37' W",
    highlights: ["Simple Maintenance", "Worldwide Acceptance", "Confidentiality & Security"]
  },
  {
    id: "cayman-islands",
    slug: "cayman-islands",
    name: "Cayman Islands",
    region: "Americas & Caribbean",
    subtitle: "Global Investment Fund Hub",
    description: "A leading jurisdiction for investment funds, structured finance and corporate vehicles.",
    coordinates: "19° 18' N  81° 14' W",
    highlights: ["Tax-Neutral Jurisdiction", "Flexible Fund Structures", "Recognized by Global Regulators"]
  },
  {
    id: "uae",
    slug: "uae",
    name: "UAE",
    region: "Middle East",
    subtitle: "Middle East Financial Heartland",
    description: "A major international hub for corporate structuring, licensing and regional operations.",
    coordinates: "24° 28' N  54° 22' E",
    highlights: ["0% Personal Income Tax", "100% Foreign Ownership", "Common Law System"]
  },
  {
    id: "cyprus",
    slug: "cyprus",
    name: "Cyprus",
    region: "Europe & Middle East",
    subtitle: "EU Holding & IP Destination",
    description: "An EU jurisdiction with a broad treaty network, used for holding, trading and shipping structures.",
    coordinates: "35° 10' N  33° 25' E",
    highlights: ["12.5% Corporate Tax", "IP Box Regime", "EU Regulatory Standards"]
  },
  {
    id: "seychelles",
    slug: "seychelles",
    name: "Seychelles",
    region: "Indian Ocean",
    subtitle: "International Business & Asset Protection",
    description: "An international business company jurisdiction used for holding and trading structures.",
    coordinates: "4° 40' S  55° 28' E",
    highlights: ["High Privacy Standards", "Fast Incorporation", "Competitive Fees"]
  },
  {
    id: "st-kitts-nevis",
    slug: "st-kitts-nevis",
    name: "St. Kitts & Nevis",
    region: "Caribbean",
    subtitle: "Asset Protection & Trust Domicile",
    description: "A jurisdiction with established trust and investment migration frameworks.",
    coordinates: "17° 21' N  62° 47' W",
    highlights: ["Premier Asset Protection", "LLC & Trust Laws", "Complete Financial Privacy"]
  }
];

export const JURISDICTION_LIST = JURISDICTIONS;
export const LOCATIONS = JURISDICTIONS;

export const APPROACH_STAGES = [
  {
    number: "01",
    title: "Strategic Discovery & Analysis",
    description: "In-depth review of business models, tax residency, entity structures, and cross-border strategic goals.",
    details: "We conduct preliminary jurisdictional analysis and evaluate legal, compliance, and operational requirements."
  },
  {
    number: "02",
    title: "Jurisdictional & Structural Design",
    description: "Tailored architecture balancing tax optimization, regulatory compliance, operational efficiency, and governance.",
    details: "Designing optimal holding company, fund, trust, or operational entity structures across suitable global financial centers."
  },
  {
    number: "03",
    title: "Implementation & Licensing",
    description: "End-to-end execution of company formation, regulatory licensing, banking setup, and corporate secretarial onboarding.",
    details: "Coordinating with local regulators, financial authorities, and corporate service partners for seamless deployment."
  },
  {
    number: "04",
    title: "Ongoing Substance & Compliance",
    description: "Long-term operational support, economic substance fulfillment, regulatory reporting, and board governance.",
    details: "Ensuring continued compliance with FATCA, CRS, local tax filings, and institutional substance criteria."
  }
];

export const PROCESS_STEPS = APPROACH_STAGES;
export const STAGES = APPROACH_STAGES;
export const METHODOLOGY = APPROACH_STAGES;
export const APPROACH = APPROACH_STAGES;

export const INSIGHT_CATEGORIES = [
  "All",
  "Regulatory & Compliance",
  "Corporate Structuring",
  "Private Wealth",
  "Fund Advisory",
  "Investment Migration"
];

export const CATEGORIES = INSIGHT_CATEGORIES;
export const ARTICLE_CATEGORIES = INSIGHT_CATEGORIES;

export const INSIGHTS = [
  {
    id: "01",
    slug: "navigating-economic-substance-2026",
    title: "Navigating Economic Substance & Multi-Jurisdictional Compliance",
    excerpt: "Essential requirements and operational benchmarks for corporate structures across Singapore, Mauritius, and Cayman Islands.",
    category: "Regulatory & Compliance",
    date: "October 2026",
    readTime: "6 min read",
    image: imgMap.insights
  },
  {
    id: "02",
    slug: "structuring-alternative-investment-funds",
    title: "Structuring Alternative Investment Funds Across Emerging Hubs",
    excerpt: "A comparative evaluation of fund vehicles across Mauritius, Cayman Islands, and UAE (ADGM) for private equity and venture capital.",
    category: "Fund Advisory",
    date: "September 2026",
    readTime: "8 min read",
    image: imgMap.funds
  },
  {
    id: "03",
    slug: "family-office-governance-frameworks",
    title: "Next-Generation Family Office Governance & Wealth Succession",
    excerpt: "Integrating international trusts, foundations, and corporate holding vehicles for long-term multi-generational preservation.",
    category: "Private Wealth",
    date: "September 2026",
    readTime: "5 min read",
    image: imgMap.trusts
  }
];

export const ARTICLES = INSIGHTS;
export const BLOG_POSTS = INSIGHTS;
export const NEWS = INSIGHTS;
export const RESOURCES = INSIGHTS;
export const PUBLICATIONS = INSIGHTS;

export function getServiceBySlug(slug) { return SERVICES.find(s => s.slug === slug) || SERVICES[0]; }
export function getJurisdictionBySlug(slug) { return JURISDICTIONS.find(j => j.slug === slug) || JURISDICTIONS[0]; }
export function getInsightBySlug(slug) { return INSIGHTS.find(i => i.slug === slug) || INSIGHTS[0]; }

export default safeDb;
