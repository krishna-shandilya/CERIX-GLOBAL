// High Resolution Image Assets matched to corporate services
const IMAGES_MAP = {
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

export const IMAGES = IMAGES_MAP;
export const IMAGE_ALT = {};
export const SITE_IMAGES = IMAGES_MAP;

// Safe Mock Auth & DB setup
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
  getAccessToken: async () => null
};

const safeDb = {
  auth: safeAuth,
  entities: {},
  integrations: {}
};

export const db = typeof window !== "undefined" && window.__B44_DB__ ? window.__B44_DB__ : safeDb;
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

const DEFAULT_ARRAY = [
  "Cross-Border Structure Architecture",
  "Regulatory & Tax Compliance Alignment",
  "Institutional Governance Frameworks",
  "Substance & Operational Directorship"
];

// Approach & Methodology Data
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

// Complete Services & Expertise Registry
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
