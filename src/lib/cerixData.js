const imgMap = {
  corporate: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
  setup: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
  licensing: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=1600&auto=format&fit=crop",
  banking: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1600&auto=format&fit=crop",
  trusts: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1600&auto=format&fit=crop",
  migration: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1600&auto=format&fit=crop",
  expansion: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
  tax: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1600&auto=format&fit=crop",
  funds: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1600&auto=format&fit=crop",
  compliance: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=1600&auto=format&fit=crop",
  wealth: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop"
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
    bgImage: imgMap.corporate
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
    bgImage: imgMap.funds
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
    bgImage: imgMap.wealth
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
    bgImage: imgMap.expansion
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
    title: "Asian Financial & Holding Hub",
    description: "Premier global financial center with extensive double taxation treaties and stable regulatory framework.",
    image: imgMap.corporate,
    highlights: ["17% Corporate Tax Rate", "Over 90 Tax Treaties", "No Capital Gains Tax"]
  },
  {
    id: "mauritius",
    slug: "mauritius",
    name: "Mauritius",
    region: "Africa & Asia Gateway",
    title: "International Financial Centre",
    description: "Preferred platform for cross-border investments into Africa and Asia, offering tax efficiency.",
    image: imgMap.setup,
    highlights: ["Partial Exemption Regime", "No Withholding Taxes", "Extensive DTAA Network"]
  },
  {
    id: "cayman-islands",
    slug: "cayman-islands",
    name: "Cayman Islands",
    region: "Americas & Caribbean",
    title: "Global Investment Fund Hub",
    description: "The world's leading domicile for alternative investment funds and private equity vehicles.",
    image: imgMap.licensing,
    highlights: ["Tax-Neutral Jurisdiction", "Flexible Fund Structures", "Global Recognition"]
  },
  {
    id: "uae",
    slug: "uae",
    name: "UAE (DIFC / ADGM)",
    region: "Middle East",
    title: "Middle East Financial Heartland",
    description: "Common-law financial free zones offering 100% foreign ownership and zero personal tax.",
    image: imgMap.banking,
    highlights: ["0% Personal Income Tax", "100% Foreign Ownership", "Common Law System"]
  }
];

export const JURISDICTION_LIST = JURISDICTIONS;
export const LOCATIONS = JURISDICTIONS;

export function getServiceBySlug(slug) {
  for (var i = 0; i < SERVICES.length; i++) {
    if (SERVICES[i].slug === slug) {
      return SERVICES[i];
    }
  }
  return SERVICES[0];
}

export function getJurisdictionBySlug(slug) {
  for (var i = 0; i < JURISDICTIONS.length; i++) {
    if (JURISDICTIONS[i].slug === slug) {
      return JURISDICTIONS[i];
    }
  }
  return JURISDICTIONS[0];
}

export default safeDb;
