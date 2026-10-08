import { IMAGES, IMAGE_ALT } from "./siteImages";

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

export const db = globalThis.__B44_DB__ || safeDb;
export const base44 = db;
export const cerixData = db;

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

export const UploadFile = async () => ({ file_url: "" });
export const uploadFile = UploadFile;
export const create = async () => ({});
export const update = async () => ({});
export const remove = async () => ({});
export const filter = async () => [];
export const get = async () => null;

// High Resolution Image Assets
const IMAGES_MAP = {
  corporate: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
  setup: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=1600&auto=format&fit=crop",
  licensing: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1600&auto=format&fit=crop",
  banking: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=1600&auto=format&fit=crop",
  trusts: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop",
  migration: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1600&auto=format&fit=crop",
  expansion: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
  tax: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1600&auto=format&fit=crop",
  funds: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
  compliance: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
  wealth: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop"
};

const DEFAULT_ARRAY = [
  "Cross-Border Structure Architecture",
  "Regulatory & Tax Compliance Alignment",
  "Institutional Governance Frameworks",
  "Substance & Operational Directorship"
];

// Complete Expertise / Services Registry
export const SERVICES = [
  {
    id: "01",
    num: "01",
    slug: "corporate-structuring",
    title: "International Corporate Structuring",
    name: "International Corporate Structuring",
    category: "Corporate Advisory",
    description: "Cross-border corporate architecture designed around commercial, operational and strategic objectives.",
    overview: "We design cross-border corporate architectures that align holding, operating and investment entities with commercial objectives, regulatory realities and long-term strategic intent — balancing substance, governance and operational efficiency.",
    image: IMAGES_MAP.corporate,
    heroImage: IMAGES_MAP.corporate,
    bgImage: IMAGES_MAP.corporate,
    features: DEFAULT_ARRAY,
    deliverables: DEFAULT_ARRAY,
    capabilities: DEFAULT_ARRAY,
    highlights: DEFAULT_ARRAY,
    subServices: DEFAULT_ARRAY,
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
    image: IMAGES_MAP.setup,
    heroImage: IMAGES_MAP.setup,
    bgImage: IMAGES_MAP.setup,
    features: DEFAULT_ARRAY,
    deliverables: DEFAULT_ARRAY,
    capabilities: DEFAULT_ARRAY,
    highlights: DEFAULT_ARRAY,
    subServices: DEFAULT_ARRAY,
    sections: [
      {
        title: "Multi-Jurisdiction Entity Registration",
        description: "Direct incorporation across Singapore VCC, Mauritius GBL, Cayman LLCs, and UAE Free Zones."
      }
    ]
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
    image: IMAGES_MAP.licensing,
    heroImage: IMAGES_MAP.licensing,
    bgImage: IMAGES_MAP.licensing,
    features: DEFAULT_ARRAY,
    deliverables: DEFAULT_ARRAY,
    capabilities: DEFAULT_ARRAY,
    highlights: DEFAULT_ARRAY,
    subServices: DEFAULT_ARRAY,
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
    image: IMAGES_MAP.banking,
    heroImage: IMAGES_MAP.banking,
    bgImage: IMAGES_MAP.banking,
    features: DEFAULT_ARRAY,
    deliverables: DEFAULT_ARRAY,
    capabilities: DEFAULT_ARRAY,
    highlights: DEFAULT_ARRAY,
    subServices: DEFAULT_ARRAY,
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
    image: IMAGES_MAP.trusts,
    heroImage: IMAGES_MAP.trusts,
    bgImage: IMAGES_MAP.trusts,
    features: DEFAULT_ARRAY,
    deliverables: DEFAULT_ARRAY,
    capabilities: DEFAULT_ARRAY,
    highlights: DEFAULT_ARRAY,
    subServices: DEFAULT_ARRAY,
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
    image: IMAGES_MAP.migration,
    heroImage: IMAGES_MAP.migration,
    bgImage: IMAGES_MAP.migration,
    features: DEFAULT_ARRAY,
    deliverables: DEFAULT_ARRAY,
    capabilities: DEFAULT_ARRAY,
    highlights: DEFAULT_ARRAY,
    subServices: DEFAULT_ARRAY,
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
    image: IMAGES_MAP.expansion,
    heroImage: IMAGES_MAP.expansion,
    bgImage: IMAGES_MAP.expansion,
    features: DEFAULT_ARRAY,
    deliverables: DEFAULT_ARRAY,
    capabilities: DEFAULT_ARRAY,
    highlights: DEFAULT_ARRAY,
    subServices: DEFAULT_ARRAY,
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
    image: IMAGES_MAP.tax,
    heroImage: IMAGES_MAP.tax,
    bgImage: IMAGES_MAP.tax,
    features: DEFAULT_ARRAY,
    deliverables: DEFAULT_ARRAY,
    capabilities: DEFAULT_ARRAY,
    highlights: DEFAULT_ARRAY,
    subServices: DEFAULT_ARRAY,
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
    image: IMAGES_MAP.funds,
    heroImage: IMAGES_MAP.funds,
    bgImage: IMAGES_MAP.funds,
    features: DEFAULT_ARRAY,
    deliverables: DEFAULT_ARRAY,
    capabilities: DEFAULT_ARRAY,
    highlights: DEFAULT_ARRAY,
    subServices: DEFAULT_ARRAY,
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
    image: IMAGES_MAP.compliance,
    heroImage: IMAGES_MAP.compliance,
    bgImage: IMAGES_MAP.compliance,
    features: DEFAULT_ARRAY,
    deliverables: DEFAULT_ARRAY,
    capabilities: DEFAULT_ARRAY,
    highlights: DEFAULT_ARRAY,
    subServices: DEFAULT_ARRAY,
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
    image: IMAGES_MAP.wealth,
    heroImage: IMAGES_MAP.wealth,
    bgImage: IMAGES_MAP.wealth,
    features: DEFAULT_ARRAY,
    deliverables: DEFAULT_ARRAY,
    capabilities: DEFAULT_ARRAY,
    highlights: DEFAULT_ARRAY,
    subServices: DEFAULT_ARRAY,
    sections: []
  }
];

// Aliases for component imports
export const EXPERTISE_LIST = SERVICES;
export const SERVICE_LIST = SERVICES;
export const SOLUTIONS = SERVICES;
export const FEATURES = SERVICES;
export const CAPABILITIES = SERVICES;
export const PRACTICE_AREAS = SERVICES;
export const OFFERINGS = SERVICES;

// Jurisdictions Data
export const JURISDICTIONS = [
  {
    id: "singapore",
    slug: "singapore",
    name: "Singapore",
    region: "Asia-Pacific",
    title: "Asian Financial & Holding Hub",
    description: "Premier global financial center with extensive double taxation treaties and stable regulatory framework.",
    image: IMAGES_MAP.corporate,
    highlights: ["17% Corporate Tax Rate", "Over 90 Tax Treaties", "No Capital Gains Tax"]
  },
  {
    id: "mauritius",
    slug: "mauritius",
    name: "Mauritius",
    region: "Africa & Asia Gateway",
    title: "International Financial Centre",
    description: "Preferred platform for cross-border investments into Africa and Asia, offering tax efficiency.",
    image: IMAGES_MAP.setup,
    highlights: ["Partial Exemption Regime", "No Withholding Taxes", "Extensive DTAA Network"]
  },
  {
    id: "cayman-islands",
    slug: "cayman-islands",
    name: "Cayman Islands",
    region: "Americas & Caribbean",
    title: "Global Investment Fund Hub",
    description: "The world's leading domicile for alternative investment funds and private equity vehicles.",
    image: IMAGES_MAP.licensing,
    highlights: ["Tax-Neutral Jurisdiction", "Flexible Fund Structures", "Global Recognition"]
  },
  {
    id: "uae",
    slug: "uae",
    name: "UAE (DIFC / ADGM)",
    region: "Middle East",
    title: "Middle East Financial Heartland",
    description: "Common-law financial free zones offering 100% foreign ownership and zero personal tax.",
    image: IMAGES_MAP.banking,
    highlights: ["0% Personal Income Tax", "100% Foreign Ownership", "Common Law System"]
  }
];

export const JURISDICTION_LIST = JURISDICTIONS;
export const LOCATIONS = JURISDICTIONS;

// Helper lookup function to avoid undefined returns
export const getServiceBySlug = (slug) => {
  return SERVICES.find(s => s.slug === slug) || SERVICES[0];
};

export const getJurisdictionBySlug = (slug) => {
  return JURISDICTIONS.find(j => j.slug === slug) || JURISDICTIONS[0];
};

export default db;
