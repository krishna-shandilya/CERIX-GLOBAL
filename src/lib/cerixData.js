import { IMAGES, IMAGE_ALT } from "./siteImages";

// Re-exports from siteImages
export { IMAGES, IMAGE_ALT };
export const SITE_IMAGES = IMAGES;

// Safe Mock Client & DB setup for Base44 / Vercel standalone builds
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

// Auth helper re-exports
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

// CRUD & Storage re-exports
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
