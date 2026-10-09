const imgMap = {
  whyCerix: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
  corporate: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
  setup: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
  licensing: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1600&auto=format&fit=crop",
  banking: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1600&auto=format&fit=crop",
  trusts: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1600&auto=format&fit=crop",
  migration: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1600&auto=format&fit=crop",
  expansion: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
  tax: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1600&auto=format&fit=crop",
  funds: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1600&auto=format&fit=crop",
  compliance: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop",
  wealth: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
  insights: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop"
};

export const IMAGES = imgMap;
export const IMAGE_ALT = {};
export const SITE_IMAGES = imgMap;

const safeAuth = {
  isAuthenticated: async function() { return false; },
  me: async function() { return null; },
  getUser: async function() { return null; },
  useMe: function() { return { data: null, isLoading: false, error: null }; },
  useUser: function() { return { data: null, isLoading: false, error: null }; },
  useAuth: function() { return { user: null, isAuthenticated: false, isLoading: false }; },
  login: async function() {},
  logout: async function() {},
  redirectToLogin: function() {},
  getToken: async function() { return null; },
  getAccessToken: async function() { return null; }
};

const safeDb = {
  auth: safeAuth,
  entities: {},
  integrations: {}
};

export const db = safeDb;
export const base44 = safeDb;
export const cerixData = safeDb;

export const isAuthenticated = safeAuth.isAuthenticated;
export const me = safeAuth.me;
export const getUser = safeAuth.getUser;
export const useMe = safeAuth.useMe;
export const useUser = safeAuth.useUser;
export const useAuth = safeAuth.useAuth;
export const login = safeAuth.login;
export const logout = safeAuth.logout;
export const redirectToLogin = safeAuth.redirectToLogin;
export const getToken = safeAuth.getToken;
export const getAccessToken = safeAuth.getAccessToken;

export const UploadFile = async function() { return { file_url: "" }; };
export const uploadFile = UploadFile;
export const create = async function() { return {}; };
export const update = async function() { return {}; };
export const remove = async function() { return {}; };
export const filter = async function() { return []; };
export const get = async function() { return null; };

const defaultArr = [
  "Cross-Border Structure Architecture",
  "Regulatory & Tax Compliance Alignment",
  "Institutional Governance Frameworks",
  "Substance & Operational Directorship"
];

export const WHO_WE_ADVISE = [
  {
    id: "01",
    num: "01",
    title: "Multinational Corporations & Holding Groups",
    name: "Multinational Corporations & Holding Groups",
    category: "Corporates",
    description: "Cross-border corporate groups requiring multi-jurisdictional holding, operational, and tax-efficient structures.",
    image: imgMap.corporate,
    heroImage: imgMap.corporate,
    bgImage: imgMap.corporate,
    thumbnail: imgMap.corporate
  },
  {
    id: "02",
    num: "02",
    title: "Asset Managers & Investment Funds",
    name: "Asset Managers & Investment Funds",
    category: "Financial Institutions",
    description: "Emerging and established investment managers establishing private equity, venture capital, or hedge fund vehicles.",
    image: imgMap.funds,
    heroImage: imgMap.funds,
    bgImage: imgMap.funds,
    thumbnail: imgMap.funds
  },
  {
    id: "03",
    num: "03",
    title: "Family Offices & HNW Is",
    name: "Family Offices & HNW Is",
    category: "Private Wealth",
    description: "Ultra-high-net-worth families seeking succession planning, foundation setups, and global wealth preservation.",
    image: imgMap.wealth,
    heroImage: imgMap.wealth,
    bgImage: imgMap.wealth,
    thumbnail: imgMap.wealth
  },
  {
    id: "04",
    num: "04",
    title: "High-Growth Tech & Scale-ups",
    name: "High-Growth Tech & Scale-ups",
    category: "Ventures",
    description: "Expanding technology businesses establishing regional headquarters, IP holding entities, and global banking.",
    image: imgMap.expansion,
    heroImage: imgMap.expansion,
    bgImage: imgMap.expansion,
    thumbnail: imgMap.expansion
  }
];

export const CLIENT_CATEGORIES = WHO_WE_ADVISE;
export const CLIENT_TYPES = WHO_WE_ADVISE;
export const TARGET_AUDIENCE = WHO_WE_ADVISE;

export const STATS = [
  { value: "$10B+", label: "Assets Structured" },
  { value: "15+", label: "Global Financial Hubs" },
  { value: "100%", label: "Regulatory Compliance Rate" },
  { value: "250+", label: "Institutional Clients" }
];

export const APPROACH_STAGES = [
  {
    number: "01",
    stage: "Stage 01",
    title: "Strategic Discovery & Analysis",
    heading: "Strategic Discovery & Analysis",
    description: "In-depth review of business models, tax residency, entity structures, and cross-border strategic goals.",
    details: "We conduct preliminary jurisdictional analysis and evaluate legal, compliance, and operational requirements."
  },
  {
    number: "02",
    stage: "Stage 02",
    title: "Jurisdictional & Structural Design",
    heading: "Jurisdictional & Structural Design",
    description: "Tailored architecture balancing tax optimization, regulatory compliance, operational efficiency, and governance.",
    details: "Designing optimal holding company, fund, trust, or operational entity structures across suitable global financial centers."
  },
  {
    number: "03",
    stage: "Stage 03",
    title: "Implementation & Licensing",
    heading: "Implementation & Licensing",
    description: "End-to-end execution of company formation, regulatory licensing, banking setup, and corporate secretarial onboarding.",
    details: "Coordinating with local regulators, financial authorities, and corporate service partners for seamless deployment."
  },
  {
    number: "04",
    stage: "Stage 04",
    title: "Ongoing Substance & Compliance",
    heading: "Ongoing Substance & Compliance",
    description: "Long-term operational support, economic substance fulfillment, regulatory reporting, and board governance.",
    details: "Ensuring continued compliance with FATCA, CRS, local tax filings, and institutional substance criteria."
  }
];

export const PROCESS_STEPS = APPROACH_STAGES;
export const STAGES = APPROACH_STAGES;
export const METHODOLOGY = APPROACH_STAGES;
export const APPROACH = APPROACH_STAGES;

export const SERVICES = [
  {
    id: "01",
    num: "01",
    slug: "corporate-structuring",
    title: "International Corporate Structuring",
    name: "International Corporate Structuring",
    category: "Corporate Advisory",
    description: "Cross-border corporate architecture designed around commercial, operational and strategic objectives.",
    overview: "We design cross-border corporate architectures that align holding, operating and investment entities with commercial objectives, regulatory realities and long-term strategic intent.",
    image: imgMap.corporate,
    heroImage: imgMap.corporate,
    bgImage: imgMap.corporate,
    thumbnail: imgMap.corporate,
    features: defaultArr,
    deliverables: defaultArr,
    capabilities: defaultArr,
    highlights: defaultArr,
    subServices: defaultArr,
    sections: [
      {
        title: "Holding Company Architectures",
        description: "Designing holding structures across Singapore, Mauritius, Cayman, and UAE to optimize dividend flows and equity retention."
      },
      {
        title: "Operational Substance & Governance",
        description: "Implementing local directorship, physical office footprints, and active management protocols to comply with economic substance rules."
      }
    ]
  },
  {
    id: "02",
    num: "02",
    slug: "company-incorporation",
    title: "Company Incorporation & Business Setup",
    name: "Company Incorporation & Business Setup",
    category: "Entity Setup",
    description: "International company formation and end-to-end establishment support across selected jurisdictions.",
    overview: "End-to-end entity setup and statutory incorporation across major offshore and onshore hubs, ensuring seamless legal standing and operational readiness.",
    image: imgMap.setup,
    heroImage: imgMap.setup,
    bgImage: imgMap.setup,
    thumbnail: imgMap.setup,
    features: defaultArr,
    deliverables: defaultArr,
    capabilities: defaultArr,
    highlights: defaultArr,
    subServices: defaultArr,
    sections: []
  },
  {
    id: "03",
    num: "03",
    slug: "international-licensing",
    title: "International Licensing",
    name: "International Licensing",
    category: "Regulatory",
    description: "Advisory around regulated and specialist business licences, including investment, financial, securities, and fund managers.",
    overview: "Navigating complex financial service licensing, investment advisor authorizations, and regulatory approvals with global authorities.",
    image: imgMap.licensing,
    heroImage: imgMap.licensing,
    bgImage: imgMap.licensing,
    thumbnail: imgMap.licensing,
    features: defaultArr,
    deliverables: defaultArr,
    capabilities: defaultArr,
    highlights: defaultArr,
    subServices: defaultArr,
    sections: []
  },
  {
    id: "04",
    num: "04",
    slug: "banking-financial-infrastructure",
    title: "Banking & Financial Infrastructure",
    name: "Banking & Financial Infrastructure",
    category: "Banking Support",
    description: "Support in navigating banking relationships and financial infrastructure requirements globally.",
    overview: "Establishing corporate banking, multi-currency treasury accounts, and institutional payment channels for global corporate groups.",
    image: imgMap.banking,
    heroImage: imgMap.banking,
    bgImage: imgMap.banking,
    thumbnail: imgMap.banking,
    features: defaultArr,
    deliverables: defaultArr,
    capabilities: defaultArr,
    highlights: defaultArr,
    subServices: defaultArr,
    sections: []
  },
  {
    id: "05",
    num: "05",
    slug: "trusts-foundations",
    title: "Trusts & Foundations",
    name: "Trusts & Foundations",
    category: "Private Wealth",
    description: "International trust and foundation structuring for asset protection, estate planning, and private governance.",
    overview: "Tailored private asset protection frameworks and generational estate structures engineered across top trust jurisdictions.",
    image: imgMap.trusts,
    heroImage: imgMap.trusts,
    bgImage: imgMap.trusts,
    thumbnail: imgMap.trusts,
    features: defaultArr,
    deliverables: defaultArr,
    capabilities: defaultArr,
    highlights: defaultArr,
    subServices: defaultArr,
    sections: []
  },
  {
    id: "06",
    num: "06",
    slug: "investment-migration",
    title: "Investment Migration Advisory",
    name: "Investment Migration Advisory",
    category: "Mobility",
    description: "Advisory for internationally mobile business leaders and families on residency and citizenship programs.",
    overview: "Strategic residency and citizenship planning through qualified business investment and real estate programs.",
    image: imgMap.migration,
    heroImage: imgMap.migration,
    bgImage: imgMap.migration,
    thumbnail: imgMap.migration,
    features: defaultArr,
    deliverables: defaultArr,
    capabilities: defaultArr,
    highlights: defaultArr,
    subServices: defaultArr,
    sections: []
  },
  {
    id: "07",
    num: "07",
    slug: "international-expansion",
    title: "International Expansion",
    name: "International Expansion",
    category: "Cross-Border",
    description: "Helping businesses evaluate new jurisdictions and launch operations across foreign markets.",
    overview: "Guiding mid-market enterprises and tech firms through geographic expansion, local compliance, and cross-border JV setups.",
    image: imgMap.expansion,
    heroImage: imgMap.expansion,
    bgImage: imgMap.expansion,
    thumbnail: imgMap.expansion,
    features: defaultArr,
    deliverables: defaultArr,
    capabilities: defaultArr,
    highlights: defaultArr,
    subServices: defaultArr,
    sections: []
  },
  {
    id: "08",
    num: "08",
    slug: "tax-efficient-structuring",
    title: "Tax-Efficient Structuring",
    name: "Tax-Efficient Structuring",
    category: "Tax Advisory",
    description: "Strategic structuring considerations designed with appropriate professional and jurisdictional advice.",
    overview: "Designing tax-neutral holding architectures and optimizing cross-border capital distributions under international DTAAs.",
    image: imgMap.tax,
    heroImage: imgMap.tax,
    bgImage: imgMap.tax,
    thumbnail: imgMap.tax,
    features: defaultArr,
    deliverables: defaultArr,
    capabilities: defaultArr,
    highlights: defaultArr,
    subServices: defaultArr,
    sections: []
  },
  {
    id: "09",
    num: "09",
    slug: "fund-solutions",
    title: "Alternative Fund Advisory & Structuring",
    name: "Alternative Fund Advisory & Structuring",
    category: "Funds",
    description: "Structuring private equity, venture capital, and hedge funds across global hubs.",
    overview: "Turnkey fund formation and fund administration workflows for alternative asset managers.",
    image: imgMap.funds,
    heroImage: imgMap.funds,
    bgImage: imgMap.funds,
    thumbnail: imgMap.funds,
    features: defaultArr,
    deliverables: defaultArr,
    capabilities: defaultArr,
    highlights: defaultArr,
    subServices: defaultArr,
    sections: []
  },
  {
    id: "10",
    num: "10",
    slug: "regulatory-compliance",
    title: "Regulatory Compliance & Substance",
    name: "Regulatory Compliance & Substance",
    category: "Compliance",
    description: "Ensuring ongoing compliance with FATCA, CRS, and Economic Substance laws.",
    overview: "Continuous regulatory reporting, corporate secretarial management, and substance audit defense.",
    image: imgMap.compliance,
    heroImage: imgMap.compliance,
    bgImage: imgMap.compliance,
    thumbnail: imgMap.compliance,
    features: defaultArr,
    deliverables: defaultArr,
    capabilities: defaultArr,
    highlights: defaultArr,
    subServices: defaultArr,
    sections: []
  },
  {
    id: "11",
    num: "11",
    slug: "asset-protection",
    title: "Asset Protection & Private Wealth",
    name: "Asset Protection & Private Wealth",
    category: "Private Wealth",
    description: "Safeguarding institutional and family assets through robust cross-border legal structures.",
    overview: "Comprehensive private wealth preservation and succession planning solutions.",
    image: imgMap.wealth,
    heroImage: imgMap.wealth,
    bgImage: imgMap.wealth,
    thumbnail: imgMap.wealth,
    features: defaultArr,
    deliverables: defaultArr,
    capabilities: defaultArr,
    highlights: defaultArr,
    subServices: defaultArr,
    sections: []
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
    title: "Singapore",
    subtitle: "Asian Financial & Holding Hub",
    description: "A globally recognised financial centre for holding structures, regional headquarters and treasury operations.",
    coordinates: "1° 21' N  103° 49' E",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1600&auto=format&fit=crop",
    highlights: ["17% Corporate Tax Rate", "Over 90 Tax Treaties", "No Capital Gains Tax"]
  },
  {
    id: "mauritius",
    slug: "mauritius",
    name: "Mauritius",
    region: "Africa & Asia Gateway",
    title: "Mauritius",
    subtitle: "International Financial Centre",
    description: "A treaty-network jurisdiction used for holding, investment and trust structures with global fund credentials.",
    coordinates: "20° 10' S  57° 31' E",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
    highlights: ["Partial Exemption Regime", "No Withholding Taxes", "Extensive DTAA Network"]
  },
  {
    id: "malta",
    slug: "malta",
    name: "Malta",
    region: "Europe",
    title: "Malta",
    subtitle: "EU Financial & Licensing Hub",
    description: "An EU jurisdiction offering holding structures, licensing frameworks and cross-border trading advantages.",
    coordinates: "35° 56' N  14° 22' E",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop", // Modern commercial downtown skyline
    highlights: ["EU Passporting Rights", "Effective Tax Refund System", "Robust Regulatory Oversight"]
  },
  {
    id: "belize",
    slug: "belize",
    name: "Belize",
    region: "Americas",
    title: "Belize",
    subtitle: "International Business Companies",
    description: "An international business company jurisdiction used for holding structures.",
    coordinates: "17° 15' N  88° 46' W",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1600&auto=format&fit=crop", // Modern commercial financial center downtown
    highlights: ["Fast Registration", "Full Exemption from Local Taxes", "Asset Protection"]
  },
  {
    id: "bvi",
    slug: "bvi",
    name: "BVI",
    region: "Americas & Caribbean",
    title: "BVI",
    subtitle: "Global Corporate Structuring Hub",
    description: "A well-established jurisdiction for holding structures, investment funds and international business companies.",
    coordinates: "18° 25' N  64° 37' W",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",
    highlights: ["Simple Maintenance", "Worldwide Acceptance", "Confidentiality & Security"]
  },
  {
    id: "cayman-islands",
    slug: "cayman-islands",
    name: "Cayman Islands",
    region: "Americas & Caribbean",
    title: "Cayman Islands",
    subtitle: "Global Investment Fund Hub",
    description: "A leading jurisdiction for investment funds, structured finance and corporate vehicles with an increasingly formal transparency framework.",
    coordinates: "19° 18' N  81° 14' W",
    image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=1600&auto=format&fit=crop",
    highlights: ["Tax-Neutral Jurisdiction", "Flexible Fund Structures", "Recognized by Global Regulators"]
  },
  {
    id: "uae",
    slug: "uae",
    name: "UAE",
    region: "Middle East",
    title: "UAE",
    subtitle: "Middle East Financial Heartland",
    description: "A major international hub for corporate structuring, licensing and regional operations, with free-zone and mainland frameworks.",
    coordinates: "24° 28' N  54° 22' E",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop",
    highlights: ["0% Personal Income Tax", "100% Foreign Ownership", "Common Law System"]
  },
  {
    id: "cyprus",
    slug: "cyprus",
    name: "Cyprus",
    region: "Europe & Middle East",
    title: "Cyprus",
    subtitle: "EU Holding & IP Destination",
    description: "An EU jurisdiction with a broad treaty network, used for holding, trading and shipping structures.",
    coordinates: "35° 10' N  33° 25' E",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1600&auto=format&fit=crop",
    highlights: ["12.5% Corporate Tax", "IP Box Regime", "EU Regulatory Standards"]
  },
  {
    id: "seychelles",
    slug: "seychelles",
    name: "Seychelles",
    region: "Indian Ocean",
    title: "Seychelles",
    subtitle: "International Business & Asset Protection",
    description: "An international business company jurisdiction used for holding and trading structures.",
    coordinates: "4° 40' S  55° 28' E",
    image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?q=80&w=1600&auto=format&fit=crop",
    highlights: ["High Privacy Standards", "Fast Incorporation", "Competitive Fees"]
  },
  {
    id: "st-kitts-nevis",
    slug: "st-kitts-nevis",
    name: "St. Kitts & Nevis",
    region: "Caribbean",
    title: "St. Kitts & Nevis",
    subtitle: "Asset Protection & Trust Domicile",
    description: "A jurisdiction with established trust and investment migration frameworks.",
    coordinates: "17° 21' N  62° 47' W",
    image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=1600&auto=format&fit=crop",
    highlights: ["Premier Asset Protection", "LLC & Trust Laws", "Complete Financial Privacy"]
  }
];

export const JURISDICTION_LIST = JURISDICTIONS;
export const LOCATIONS = JURISDICTIONS;

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
    heading: "Navigating Economic Substance & Multi-Jurisdictional Compliance",
    excerpt: "Essential requirements and operational benchmarks for corporate structures across Singapore, Mauritius, and Cayman Islands.",
    summary: "Essential requirements and operational benchmarks for corporate structures across Singapore, Mauritius, and Cayman Islands.",
    description: "An overview of international economic substance laws, directorship expectations, and nexus verification for holding companies.",
    content: "International regulatory bodies continue to increase scrutiny on cross-border corporate entity substance. Operating entities and holding structures must demonstrate local management control, physical presence, and adequate operational expenditures.",
    category: "Regulatory & Compliance",
    date: "October 2026",
    publishedAt: "2026-10-01",
    readTime: "6 min read",
    author: "Cerix Advisory Team",
    image: imgMap.compliance,
    heroImage: imgMap.compliance,
    bgImage: imgMap.compliance
  },
  {
    id: "02",
    slug: "structuring-alternative-investment-funds",
    title: "Structuring Alternative Investment Funds Across Emerging Hubs",
    heading: "Structuring Alternative Investment Funds Across Emerging Hubs",
    excerpt: "A comparative evaluation of fund vehicles across Mauritius, Cayman Islands, and UAE (ADGM) for private equity and venture capital.",
    summary: "A comparative evaluation of fund vehicles across Mauritius, Cayman Islands, and UAE (ADGM) for private equity and venture capital.",
    description: "Key trade-offs between speed-to-market, regulatory oversight, investor familiarity, and double tax agreements.",
    content: "Selecting the optimal domicile for private capital funds requires balancing investor jurisdiction requirements, licensing timeframes, and double taxation treaty benefits.",
    category: "Fund Advisory",
    date: "September 2026",
    publishedAt: "2026-09-15",
    readTime: "8 min read",
    author: "Cerix Funds Advisory",
    image: imgMap.funds,
    heroImage: imgMap.funds,
    bgImage: imgMap.funds
  },
  {
    id: "03",
    slug: "family-office-governance-frameworks",
    title: "Next-Generation Family Office Governance & Wealth Succession",
    heading: "Next-Generation Family Office Governance & Wealth Succession",
    excerpt: "Integrating international trusts, foundations, and corporate holding vehicles for long-term multi-generational preservation.",
    summary: "Integrating international trusts, foundations, and corporate holding vehicles for long-term multi-generational preservation.",
    description: "Designing succession governance protocols and private trust structures across top-tier international financial centers.",
    content: "Modern wealth structuring requires clear governance protocols, family constitutions, and robust trust/foundation legal structures capable of navigating global asset protection requirements.",
    category: "Private Wealth",
    date: "September 2026",
    publishedAt: "2026-09-01",
    readTime: "5 min read",
    author: "Cerix Private Client Group",
    image: imgMap.wealth,
    heroImage: imgMap.wealth,
    bgImage: imgMap.wealth
  }
];

export const ARTICLES = INSIGHTS;
export const BLOG_POSTS = INSIGHTS;
export const NEWS = INSIGHTS;
export const RESOURCES = INSIGHTS;
export const PUBLICATIONS = INSIGHTS;

export const TESTIMONIALS = [
  {
    quote: "Cerix Global delivered exceptional clarity and precision when restructuring our cross-border investment holding framework.",
    author: "Managing Director",
    company: "Swiss Alternative Asset Management Firm",
    role: "Chief Executive Officer"
  },
  {
    quote: "Their team handled our fund setup and regulatory licensing seamlessly across multiple jurisdictions.",
    author: "General Partner",
    company: "Pan-Asian Venture Capital Fund",
    role: "Founding Partner"
  }
];

export const REVIEWS = TESTIMONIALS;
export const CASE_STUDIES = INSIGHTS;
export const STORIES = INSIGHTS;

export const FAQS = [
  {
    question: "Which jurisdiction is right for my holding entity?",
    answer: "The choice depends on your operating countries, treaty network requirements, tax efficiency targets, and investor preferences."
  },
  {
    question: "How long does company setup and licensing take?",
    answer: "Standard company incorporation typically takes 3 to 10 business days depending on jurisdiction, while regulatory licensing spans 4 to 12 weeks."
  }
];

export const FAQ = FAQS;
export const QUESTIONS = FAQS;

export const COMPANY_INFO = {
  name: "Cerix Global",
  legalName: "Cerix Global Advisory Services",
  email: "contact@cerixglobal.com",
  phone: "+44 20 7946 0912",
  address: "International Financial Centre, Global Headquarters",
  tagline: "Cross-Border Corporate & Fund Advisory"
};

export const CONTACT_INFO = COMPANY_INFO;
export const SITE_CONFIG = COMPANY_INFO;

const universalSafeHandler = {
  get(target, prop) {
    if (prop === Symbol.iterator || prop === 'constructor' || prop === 'then' || prop === 'toJSON' || prop === 'length') {
      return target[prop];
    }
    if (prop === 'split') {
      return function(separator, limit) {
        const str = typeof target === 'string' ? target : String(target || "");
        return str.split(separator, limit);
      };
    }
    if (prop in target) {
      const val = target[prop];
      if (val === undefined || val === null) {
        return (prop === 'features' || prop === 'highlights' || prop === 'sections' || prop === 'subServices' || prop === 'capabilities' || prop === 'deliverables' || prop === 'categories') ? [] : "";
      }
      if (typeof val === 'object' && val !== null) {
        if (Array.isArray(val)) {
          return val.map(item => (typeof item === 'object' && item !== null ? new Proxy(item, universalSafeHandler) : item));
        }
        return new Proxy(val, universalSafeHandler);
      }
      return val;
    }
    if (prop === 'features' || prop === 'highlights' || prop === 'sections' || prop === 'subServices' || prop === 'capabilities' || prop === 'deliverables' || prop === 'categories') {
      return [];
    }
    return "";
  }
};

export function getServiceBySlug(slug) {
  for (var i = 0; i < SERVICES.length; i++) {
    if (SERVICES[i].slug === slug) {
      return new Proxy(SERVICES[i], universalSafeHandler);
    }
  }
  return new Proxy(SERVICES[0], universalSafeHandler);
}

export function getJurisdictionBySlug(slug) {
  for (var i = 0; JURISDICTIONS && i < JURISDICTIONS.length; i++) {
    if (JURISDICTIONS[i].slug === slug) {
      return new Proxy(JURISDICTIONS[i], universalSafeHandler);
    }
  }
  return new Proxy(JURISDICTIONS[0], universalSafeHandler);
}

export function getInsightBySlug(slug) {
  for (var i = 0; INSIGHTS && INSIGHTS.length && i < INSIGHTS.length; i++) {
    if (INSIGHTS[i].slug === slug) {
      return new Proxy(INSIGHTS[i], universalSafeHandler);
    }
  }
  return new Proxy(INSIGHTS[0], universalSafeHandler);
}

export default safeDb;
