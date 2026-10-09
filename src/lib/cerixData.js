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
    overview: "We advise on and coordinate regulatory licensing processes for financial, investment, digital-asset and specialized commercial activities across international jurisdictions.",
    whoItsFor: "Financial institutions, fintechs, investment managers and commercial enterprises seeking regulated status in recognized international hubs.",
    typicalConsiderations: [
      { num: "01", title: "Licence type, scope of permitted activity and regulatory framework" },
      { num: "02", title: "Substance, capital and physical presence requirements" },
      { num: "03", title: "Fit-and-proper criteria for directors, shareholders and key personnel" },
      { num: "04", title: "Ongoing reporting, compliance and AML/KYC obligations" }
    ],
    theApproach: "We assess the licensing regime against the business activity, prepare the application narrative and documentation, and coordinate with local counsel and regulators throughout the process.",
    relatedJurisdictions: ["Mauritius", "Seychelles", "Cayman", "Belize"],
    faqs: [
      {
        question: "Can you guarantee a licence will be granted?",
        answer: "No. Licensing decisions rest with the relevant regulatory authority. Our role is to prepare the strongest possible application and coordinate the process."
      },
      {
        question: "Do you advise on digital-asset licensing?",
        answer: "Yes, in jurisdictions where such regimes exist. Suitability and availability depend on the jurisdiction and the specific activity contemplated."
      },
      {
        question: "Is licensing advice a substitute for legal counsel?",
        answer: "No. Regulated activities typically require formal legal opinion from qualified counsel in the relevant jurisdiction, which we coordinate alongside our advisory work."
      }
    ],
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
    overview: "We assist businesses and private clients in navigating international banking relationships, preparing institutional compliance files, and establishing robust treasury and account infrastructure.",
    whoItsFor: "Businesses and individuals establishing or restructuring international banking relationships.",
    typicalConsiderations: [
      { num: "01", title: "Institution selection and relationship mapping" },
      { num: "02", title: "KYC, source-of-funds and beneficial-ownership documentation" },
      { num: "03", title: "Account architecture for multi-entity groups" },
      { num: "04", title: "Payment, treasury and correspondent infrastructure" }
    ],
    theApproach: "We prepare the documentation and narrative that institutions require, make introductions where appropriate, and guide clients through the compliance review — while recognising that account-opening decisions rest with the institution.",
    relatedJurisdictions: ["UAE", "Singapore", "Mauritius", "Cyprus"],
    faqs: [
      {
        question: "Can you guarantee a bank account will be opened?",
        answer: "No. Account-opening decisions rest entirely with the financial institution. We prepare the strongest possible file and support the process."
      },
      {
        question: "Do you act as a bank introducer?",
        answer: "We support introductions and preparation, but we are not a licensed financial intermediary. The banking relationship is directly between the client and the institution."
      },
      {
        question: "What if our profile is complex?",
        answer: "Complex profiles are common in our practice. We help present the structure and source of funds clearly, which is often the most important factor."
      }
    ],
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
    overview: "We advise on and coordinate the establishment of international trusts, foundations and private wealth vehicles for succession planning, asset protection and multi-generational governance.",
    whoItsFor: "Families, principals and private clients considering succession, asset protection and multi-generational planning across borders.",
    typicalConsiderations: [
      { num: "01", title: "Trust vs. foundation vs. holding structure" },
      { num: "02", title: "Jurisdiction, governing law and enforceability" },
      { num: "03", title: "Trustee, protector and beneficiary architecture" },
      { num: "04", title: "Tax and reporting implications for the settlor and beneficiaries" }
    ],
    theApproach: "We begin with the family's objectives, map the structural options, and coordinate establishment with qualified trustees and counsel — ensuring the structure is coherent and the family understands its operation.",
    relatedJurisdictions: ["Mauritius", "Cyprus", "Malta", "Seychelles", "BVI"],
    faqs: [
      {
        question: "Is a trust right for every family?",
        answer: "No. A trust is one of several structures; foundations, holding companies and private trust companies may be more appropriate depending on objectives and jurisdiction."
      },
      {
        question: "Do you act as trustee?",
        answer: "No. We are an advisory and coordination firm. We coordinate with licensed, regulated trustees and counsel in the relevant jurisdiction."
      },
      {
        question: "Does a trust eliminate tax?",
        answer: "No. Trusts have tax and reporting consequences for settlors and beneficiaries that vary by jurisdiction. Specific tax advice is essential."
      }
    ],
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
    overview: "We advise internationally mobile individuals and families on investment migration programmes — residency and citizenship pathways by investment — coordinating with licensed agents and immigration counsel in the relevant jurisdiction.",
    whoItsFor: "Individuals and families seeking alternative residency or citizenship through investment, for mobility, optionality or long-term planning.",
    typicalConsiderations: [
      { num: "01", title: "Programme objectives — mobility, optionality, residency" },
      { num: "02", title: "Investment threshold and structure of the programme" },
      { num: "03", title: "Due diligence, source-of-funds and eligibility" },
      { num: "04", title: "Timeline, renewals and ongoing obligations" }
    ],
    theApproach: "We help families clarify their objectives, compare programmes against those objectives, and coordinate the application with licensed, regulated agents in the chosen jurisdiction.",
    relatedJurisdictions: ["Cyprus", "St. Kitts & Nevis", "Malta", "UAE"],
    faqs: [
      {
        question: "Do you operate the migration programme directly?",
        answer: "No. We are advisory. Applications are handled by licensed, regulated agents and immigration counsel in the relevant jurisdiction, which we coordinate."
      },
      {
        question: "Is investment migration the same as tax avoidance?",
        answer: "No. Investment migration is about residency and citizenship optionality. It has independent tax and reporting consequences that require qualified professional advice."
      },
      {
        question: "Which programme is best?",
        answer: "There is no universal answer. Suitability depends on the individual's objectives, profile and circumstances. We help compare options against objectives."
      }
    ],
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
    overview: "We help businesses evaluate jurisdictions, establish structures and move toward operational readiness — coordinating the legal, regulatory and practical steps of entering a new market.",
    whoItsFor: "Businesses planning to enter a new jurisdiction — for operations, clients, talent or market access.",
    typicalConsiderations: [
      { num: "01", title: "Market and jurisdiction evaluation" },
      { num: "02", title: "Entity, licensing and employment setup" },
      { num: "03", title: "Operational infrastructure and local partnerships" },
      { num: "04", title: "Compliance, reporting and ongoing governance" }
    ],
    theApproach: "We assess the market and jurisdiction against the business objective, design the entry structure, and coordinate the practical steps from registration to operational readiness.",
    relatedJurisdictions: ["UAE", "Singapore", "Cayman Islands", "Malta"],
    faqs: [
      {
        question: "Do you provide market research?",
        answer: "We provide jurisdiction and structural evaluation aligned to the business objective. Deep market research is coordinated with specialist partners where needed."
      },
      {
        question: "Can you help hire in a new country?",
        answer: "We coordinate the structural and regulatory setup; employment and payroll are handled through local professional-employer or partner arrangements."
      },
      {
        question: "How long does an expansion take?",
        answer: "It depends on the jurisdiction, licensing requirements and operational complexity. We map a realistic timeline at the outset."
      }
    ],
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
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1600&auto=format&fit=crop",
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
