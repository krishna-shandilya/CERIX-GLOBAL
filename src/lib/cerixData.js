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
  { value: "\$10B+", label: "Assets Structured" },
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
    overview: "We design cross-border corporate architectures that align holding, operating and investment entities with commercial objectives, regulatory realities and long-term strategic intent — balancing substance, governance and operational efficiency.",
    whoItsFor: "Multinational groups, holding companies, investment platforms and businesses with cross-border operations seeking coherent, defensible structures.",
    typicalConsiderations: [
      { num: "01", title: "Holding-company jurisdiction and intermediate entities" },
      { num: "02", title: "Substance, economic presence and governance requirements" },
      { num: "03", title: "Intra-group flows, funding and treasury architecture" },
      { num: "04", title: "Succession and continuity planning across jurisdictions" }
    ],
    theApproach: "We begin with the commercial objective, map the structural options across relevant jurisdictions, and design an architecture that is coherent, defensible and operationally practical — coordinated with appropriate professional advice.",
    relatedJurisdictions: ["UAE", "Singapore", "Cyprus", "Mauritius", "Malta"],
    faqs: [
      {
        question: "Is corporate structuring the same as tax planning?",
        answer: "No. Corporate structuring is primarily about commercial and operational architecture. Tax outcomes are a consideration, but specific tax advice must come from qualified professionals in the relevant jurisdictions."
      },
      {
        question: "How long does a structuring engagement take?",
        answer: "It varies with complexity. A focused review may take several weeks; a full multi-jurisdiction architecture can take longer, particularly where local partners and registrations are involved."
      },
      {
        question: "Do you work with existing structures or only new ones?",
        answer: "Both. We frequently review and refine existing structures, and design new architectures for businesses at the point of international expansion."
      }
    ],
    image: imgMap.corporate,
    heroImage: imgMap.corporate,
    bgImage: imgMap.corporate,
    thumbnail: imgMap.corporate,
    features: defaultArr,
    deliverables: defaultArr,
    capabilities: defaultArr,
    highlights: defaultArr,
    subServices: defaultArr,
    sections: []
  },
  {
    id: "02",
    num: "02",
    slug: "company-incorporation",
    title: "Company Incorporation & Business Setup",
    name: "Company Incorporation & Business Setup",
    category: "Entity Setup",
    description: "International company formation and end-to-end establishment support across selected jurisdictions.",
    overview: "We support the formation and establishment of companies across selected jurisdictions — from initial entity selection through registration, statutory compliance and operational readiness.",
    whoItsFor: "Founders, businesses and investors establishing a new legal entity in an international jurisdiction.",
    typicalConsiderations: [
      { num: "01", title: "Entity type and jurisdiction selection" },
      { num: "02", title: "Registered office, directors and company secretary" },
      { num: "03", title: "Statutory filings and ongoing compliance" },
      { num: "04", title: "Banking and operational account setup" }
    ],
    theApproach: "We coordinate the full establishment process — engaging local registered agents and partners where required — so that the entity is properly constituted and operationally ready.",
    relatedJurisdictions: ["UAE", "Singapore", "Mauritius", "Seychelles", "Belize"],
    faqs: [
      {
        question: "Which jurisdictions do you incorporate in?",
        answer: "We work across a curated set of jurisdictions selected for their relevance to international business. Suitability depends entirely on the client's objectives."
      },
      {
        question: "Do you provide ongoing administration?",
        answer: "We coordinate registered office, compliance and administration support through local partners where the jurisdiction requires it."
      },
      {
        question: "Can you help with banking after incorporation?",
        answer: "Yes. We support introductions and the preparation required for banking relationships, though account opening remains at the discretion of the financial institution."
      }
    ],
    image: img
