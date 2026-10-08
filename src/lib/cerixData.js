import { IMAGES, IMAGE_ALT } from "./siteImages";

// Re-exports from siteImages
export { IMAGES, IMAGE_ALT };
export const SITE_IMAGES = IMAGES;

// Safe Mock Client & DB setup
const safeAuth = {
  isAuthenticated: async () => false,
  me: async () => null,
  getUser: async () => null,
  useMe: () => ({ data: null, isLoading: false, error: null }),
  useUser: () => ({ data: null, isLoading: false, error: null }),
  useAuth: () => ({ user: null, isAuthenticated: false, isLoading: false }),
  login: async () => {},
  logout: async () => {},
  redirectToLogin: () => {},
  getToken: async () => null,
  getAccessToken: async () => null,
};

const safeDb = new Proxy({}, {
  get: (target, prop) => {
    if (prop === "auth") return safeAuth;
    if (prop === "entities") {
      return new Proxy({}, {
        get: (_, entityName) => new Proxy({}, {
          get: (_, method) => {
            if (typeof method === "string" && method.startsWith("use")) {
              return () => ({ data: [], isLoading: false, error: null, refetch: () => {} });
            }
            return async () => [];
          }
        })
      });
    }
    if (prop === "integrations") {
      return new Proxy({}, {
        get: () => new Proxy({}, {
          get: () => async () => ({ file_url: "" })
        })
      });
    }
    return async () => [];
  }
});

// Database & Client exports
export const db = globalThis.__B44_DB__ || safeDb;
export const base44 = db;
export const cerixData = db;

// Auth helper exports
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

// CRUD & Storage exports
export const UploadFile = async () => ({ file_url: "" });
export const uploadFile = UploadFile;
export const create = async () => ({});
export const update = async () => ({});
export const remove = async () => ({});
export const filter = async () => [];
export const get = async () => null;

// Media & Image URLs
const BASE = "https://media.db.com/images/public/6aba6a983679dc865cd49028";

export const JURISDICTION_IMAGES = {
  Singapore: BASE + "/4fb635d66_generated_image.png",
  Mauritius: BASE + "/c702afe32_generated_image.png",
  Malta: BASE + "/af0251812_generated_image.png",
  Belize: BASE + "/67d34f288_generated_image.png",
  BVI: BASE + "/a41cf467e_generated_image.png",
  "Cayman Islands": BASE + "/8c7cbb52d_generated_image.png",
  UAE: BASE + "/74dac129a_generated_image.png",
  Cyprus: BASE + "/74c24440a_generated_image.png",
  Seychelles: BASE + "/0db6f1bdf_generated_image.png",
  "St. Kitts & Nevis": BASE + "/492099dd5_generated_image.png"
};

// Insights & Articles Data (Fixes Insights.jsx)
export const INSIGHT_CATEGORIES = [
  "All",
  "Regulatory & Tax",
  "Fund Structuring",
  "Cross-Border Corporate",
  "Asset Protection"
];

export const CATEGORIES = INSIGHT_CATEGORIES;
export const BLOG_CATEGORIES = INSIGHT_CATEGORIES;

export const INSIGHTS = [
  {
    id: "1",
    slug: "navigating-economic-substance-2026",
    title: "Navigating Economic Substance Regulations Across IFCs",
    excerpt: "Key compliance updates for holding entities and fund managers operating across Mauritius, Cayman Islands, and UAE.",
    category: "Regulatory & Tax",
    date: "Oct 2026",
    readTime: "5 min read",
    author: "Cerix Advisory Team",
    image: JURISDICTION_IMAGES.Singapore
  },
  {
    id: "2",
    slug: "structuring-alternative-investment-funds-singapore-vcc",
    title: "Structuring AIFs via the Singapore Variable Capital Company (VCC)",
    excerpt: "Why regional fund managers are choosing the VCC umbrella structure for multi-sub-fund flexibility and tax neutrality.",
    category: "Fund Structuring",
    date: "Sep 2026",
    readTime: "7 min read",
    author: "Cerix Advisory Team",
    image: JURISDICTION_IMAGES.Mauritius
  }
];

export const ARTICLES = INSIGHTS;
export const BLOG_POSTS = INSIGHTS;
export const POSTS = INSIGHTS;

// Jurisdictions Data
export const JURISDICTIONS = [
  {
    id: "singapore",
    slug: "singapore",
    name: "Singapore",
    region: "Asia-Pacific",
    title: "Asian Financial & Holding Hub",
    description: "Premier global financial center with extensive double taxation treaties, stable regulatory framework, and strategic access to Asian markets.",
    image: JURISDICTION_IMAGES.Singapore,
    highlights: ["17% Corporate Tax Rate", "Over 90 Tax Treaties", "No Capital Gains Tax", "Strong IP Protection"]
  },
  {
    id: "mauritius",
    slug: "mauritius",
    name: "Mauritius",
    region: "Africa & Asia Gateway",
    title: "International Financial Centre",
    description: "Preferred platform for cross-border investments into Africa and India, offering robust fund structures and tax efficiency.",
    image: JURISDICTION_IMAGES.Mauritius,
    highlights: ["Partial Exemption Regime", "No Withholding Taxes", "Extensive DTAA Network", "OECD Compliant"]
  },
  {
    id: "cayman-islands",
    slug: "cayman-islands",
    name: "Cayman Islands",
    region: "Americas & Caribbean",
    title: "Global Investment Fund Hub",
    description: "The world's leading domicile for alternative investment funds, private equity, and structured finance vehicles.",
    image: JURISDICTION_IMAGES["Cayman Islands"],
    highlights: ["Tax-Neutral Jurisdiction", "Flexible Fund Structures", "Recognized by Global Regulators", "Sophisticated Legal Infrastructure"]
  },
  {
    id: "uae",
    slug: "uae",
    name: "UAE (DIFC / ADGM)",
    region: "Middle East",
    title: "Middle East Financial Heartland",
    description: "Common-law financial free zones offering 100% foreign ownership, zero personal tax, and strategic positioning between East and West.",
    image: JURISDICTION_IMAGES.UAE,
    highlights: ["0% Personal Income Tax", "100% Foreign Ownership", "Common Law Legal System", "Independent Courts"]
  },
  {
    id: "bvi",
    slug: "bvi",
    name: "BVI",
    region: "Americas & Caribbean",
    title: "International Business Companies",
    description: "The global benchmark for international corporate vehicles, joint ventures, and asset protection holding structures.",
    image: JURISDICTION_IMAGES.BVI,
    highlights: ["Simple Maintenance", "Worldwide Acceptance", "Confidentiality & Security", "Flexible Capital Structure"]
  },
  {
    id: "malta",
    slug: "malta",
    name: "Malta",
    region: "Europe",
    title: "European Union Advisory Gateway",
    description: "Full EU member state offering attractive tax refund systems, passporting rights, and comprehensive financial regulation.",
    image: JURISDICTION_IMAGES.Malta,
    highlights: ["EU Passporting Rights", "Effective Tax Refund System", "Robust Regulatory Oversight", "Fintech & Gaming Friendly"]
  },
  {
    id: "cyprus",
    slug: "cyprus",
    name: "Cyprus",
    region: "Europe & Middle East",
    title: "EU Holding & IP Destination",
    description: "Strategic EU entry point with competitive corporate tax rates, IP box regime, and extensive international tax agreements.",
    image: JURISDICTION_IMAGES.Cyprus,
    highlights: ["12.5% Corporate Tax", "IP Box Regime", "No Tax on Dividends", "EU Regulatory Standards"]
  },
  {
    id: "seychelles",
    slug: "seychelles",
    name: "Seychelles",
    region: "Indian Ocean",
    title: "International Business & Asset Protection",
    description: "Cost-effective corporate structuring solution for international trade, licensing, and asset holding.",
    image: JURISDICTION_IMAGES.Seychelles,
    highlights: ["Fast Incorporation", "High Privacy Standards", "No Minimum Capital Requirement", "Competitive Fees"]
  },
  {
    id: "belize",
    slug: "belize",
    name: "Belize",
    region: "Americas",
    title: "Offshore Corporate Vehicles",
    description: "Flexible, privacy-oriented international company structures tailored for global commerce and asset protection.",
    image: JURISDICTION_IMAGES.Belize,
    highlights: ["Fast Registration", "Full Exemption from Local Taxes", "No Public Director Registry", "Strong Legal Framework"]
  },
  {
    id: "st-kitts-nevis",
    slug: "st-kitts-nevis",
    name: "St. Kitts & Nevis",
    region: "Caribbean",
    title: "Asset Protection & Trust Domicile",
    description: "Renowned globally for powerful asset protection trusts, foundation legislation, and corporate privacy.",
    image: JURISDICTION_IMAGES["St. Kitts & Nevis"],
    highlights: ["Premier Asset Protection", "LLC & Trust Laws", "Complete Financial Privacy", "No Local Tax Obligations"]
  }
];

export const JURISDICTION_LIST = JURISDICTIONS;
export const LOCATIONS = JURISDICTIONS;

// Services & Offerings Data
export const SERVICES = [
  {
    slug: "corporate-structuring",
    title: "International Corporate Structuring",
    description: "End-to-end setup and optimization of holding companies, subsidiaries, and cross-border corporate vehicles.",
    icon: "Building2",
    features: ["Cross-Border Tax Alignment", "Substance Compliance", "Multi-Jurisdictional Entities", "Governance Frameworks"]
  },
  {
    slug: "fund-solutions",
    title: "Alternative Fund Advisory & Structuring",
    description: "Comprehensive advisory for establishing and maintaining regulated private equity, hedge, and private credit funds.",
    icon: "Briefcase",
    features: ["Fund Formation & Domiciliation", "Regulatory Licensing", "Administrator Workflows", "NAV Calculation Oversight"]
  },
  {
    slug: "regulatory-compliance",
    title: "Regulatory Compliance & Substance",
    description: "Ensuring ongoing compliance with FATCA, CRS, Economic Substance, and international anti-money laundering standards.",
    icon: "ShieldCheck",
    features: ["Economic Substance Audits", "FATCA & CRS Reporting", "AML/KYC Compliance Systems", "Director & Secretarial Oversight"]
  },
  {
    slug: "asset-protection",
    title: "Asset Protection & Private Wealth",
    description: "Structuring international trusts, foundations, and family office vehicles to safeguard global assets across generations.",
    icon: "Lock",
    features: ["International Trust Creation", "Family Office Advisory", "Succession Planning", "Cross-Border Wealth Protection"]
  }
];

export const SERVICE_LIST = SERVICES;
export const SOLUTIONS = SERVICES;
export const FEATURES = SERVICES;
export const CAPABILITIES = SERVICES;
export const PRACTICE_AREAS = SERVICES;
export const OFFERINGS = SERVICES;

// Advisory / Client Segment Data
export const WHO_WE_ADVISE = [
  {
    id: "funds",
    title: "Alternative Investment Funds",
    description: "Private equity, hedge funds, and venture capital managers structuring multi-jurisdictional funds and SPVs.",
    icon: "TrendingUp"
  },
  {
    id: "corporates",
    title: "Multinational Enterprises",
    description: "Cross-border corporate groups optimizing holding structures, intellectual property, and international operations.",
    icon: "Building"
  },
  {
    id: "family-offices",
    title: "Private Wealth & Family Offices",
    description: "High-net-worth individuals and single/multi-family offices securing long-term wealth and succession planning.",
    icon: "Shield"
  },
  {
    id: "fintech",
    title: "Fintech & Digital Asset Firms",
    description: "Innovative tech protocols and trading platforms establishing compliant legal frameworks in global free zones.",
    icon: "Cpu"
  }
];

export const WHO_WE_SERVE = WHO_WE_ADVISE;
export const CLIENT_TYPES = WHO_WE_ADVISE;
export const CLIENTS = WHO_WE_ADVISE;
export const TARGET_AUDIENCE = WHO_WE_ADVISE;
export const AUDIENCE = WHO_WE_ADVISE;
export const INDUSTRIES = WHO_WE_ADVISE;

// Process & Approach Data
export const APPROACH_STAGES = [
  {
    step: "01",
    title: "Strategic Diagnosis",
    description: "In-depth analysis of existing corporate frameworks, tax exposure, and international expansion goals."
  },
  {
    step: "02",
    title: "Jurisdiction Selection",
    description: "Evaluating regulatory environments, treaty networks, and substance rules to pinpoint the optimal domicile."
  },
  {
    step: "03",
    title: "Structure Implementation",
    description: "Execution of entity incorporation, licensing applications, banking setup, and governance protocols."
  },
  {
    step: "04",
    title: "Ongoing Compliance",
    description: "Continuous monitoring of regulatory shifts, substance maintenance, annual filings, and reporting."
  }
];

export const APPROACH = APPROACH_STAGES;
export const PROCESS = APPROACH_STAGES;
export const METHODOLOGY = APPROACH_STAGES;
export const STEPS = APPROACH_STAGES;

// Metrics & Stats Data
export const STATS = [
  { value: "10+", label: "Global Domiciles" },
  { value: "$2.5B+", label: "Assets Structured" },
  { value: "99.8%", label: "Compliance Rate" },
  { value: "15+", label: "Years Experience" }
];

export const STATISTICS = STATS;
export const METRICS = STATS;
export const NUMBERS = STATS;
export const HIGHLIGHTS = STATS;

// FAQ Data
export const FAQS = [
  {
    question: "Which jurisdiction is right for my holding company or investment fund?",
    answer: "Selecting the right jurisdiction depends on your target investor base, tax treaty requirements, operational substance capabilities, and target markets. We conduct a tailored assessment to recommend the most efficient domicile."
  },
  {
    question: "How do Economic Substance requirements impact offshore entities?",
    answer: "Most international financial centers require relevant entities to demonstrate adequate physical presence, local employees, and core income-generating activities. We help structure and maintain substance to ensure full compliance."
  },
  {
    question: "Can Cerix Global assist with bank account opening and corporate administration?",
    answer: "Yes, we handle complete corporate administration, secretarial services, director appointments, and assist with institutional banking relationships in major financial hubs."
  }
];

export const FAQ = FAQS;
export const QUESTIONS = FAQS;

// Testimonials Data
export const TESTIMONIALS = [
  {
    quote: "Cerix Global's expertise in cross-border fund structuring saved us months of regulatory friction across Mauritius and the Cayman Islands.",
    author: "Managing Partner",
    company: "Asia-Pacific PE Fund"
  },
  {
    quote: "Their guidance on economic substance compliance and corporate governance across DIFC and Singapore was flawless.",
    author: "Chief Legal Officer",
    company: "Global Holding Group"
  }
];

export const REVIEWS = TESTIMONIALS;
export const CASE_STUDIES = TESTIMONIALS;
export const STORIES = TESTIMONIALS;

// Hero Data
export const HERO_CONTENT = {
  title: "Precision Cross-Border Structuring & Global Advisory",
  subtitle: "Structuring international funds, corporate entities, and private wealth vehicles across premier financial jurisdictions.",
  ctaPrimary: "Explore Jurisdictions",
  ctaSecondary: "Schedule Consultation"
};

export const HERO = HERO_CONTENT;
export const HERO_DATA = HERO_CONTENT;

// Navigation Data
export const NAV_ITEMS = [
  { name: "Services", href: "#services" },
  { name: "Jurisdictions", href: "#jurisdictions" },
  { name: "Approach", href: "#approach" },
  { name: "Who We Advise", href: "#advisory" },
  { name: "Contact", href: "#contact" }
];

export const NAV_LINKS = NAV_ITEMS;
export const FOOTER_LINKS = NAV_ITEMS;
export const NAVIGATION = NAV_ITEMS;
export const MENU_ITEMS = NAV_ITEMS;

// Company Info Data
export const COMPANY_INFO = {
  name: "Cerix Global",
  tagline: "International Corporate Advisory & Structuring",
  email: "contact@cerixglobal.com",
  phone: "+1 (800) 555-CERIX",
  address: "International Financial Centre, Level 14, Gateway Tower"
};

export const SITE_CONFIG = COMPANY_INFO;
export const CONTACT_INFO = COMPANY_INFO;
export const COMPANY_DETAILS = COMPANY_INFO;
export const FOOTER_CONTENT = COMPANY_INFO;

export const VALUES = [
  { title: "Precision", description: "Meticulous legal and tax compliance across all jurisdictions." },
  { title: "Integrity", description: "Unwavering commitment to international standards and ethics." },
  { title: "Agility", description: "Rapid execution in dynamic regulatory landscapes." }
];

export const CORE_VALUES = VALUES;
export const TEAM = [];
export const LEADERSHIP = TEAM;

export default db;
