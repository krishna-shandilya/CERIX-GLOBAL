import { IMAGES, IMAGE_ALT } from "./siteImages";
export { IMAGES, IMAGE_ALT };

// Safe mock client for Base44 standalone Vercel deployments
const safeAuth = {
  isAuthenticated: async () => false,
  me: async () => null,
  getUser: async () => null,
  useMe: () => ({ data: null, isLoading: false, error: null }),
  useUser: () => ({ data: null, isLoading: false, error: null }),
  login: async () => {},
  logout: async () => {},
  redirectToLogin: () => {},
  getToken: async () => null,
  getAccessToken: async () => null,
};

const safeDb = new Proxy({}, {
  get: (target, prop) => {
    if (prop === 'auth') return safeAuth;
    if (prop === 'entities') {
      return new Proxy({}, {
        get: (_, entityName) => new Proxy({}, {
          get: (_, method) => {
            if (typeof method === 'string' && method.startsWith('use')) {
              return () => ({ data: [], isLoading: false, error: null, refetch: () => {} });
            }
            return async () => [];
          }
        })
      });
    }
    if (prop === 'integrations') {
      return new Proxy({}, {
        get: () => new Proxy({}, {
          get: () => async () => ({ file_url: '' })
        })
      });
    }
    return async () => [];
  }
});

export const db = globalThis.__B44_DB__ || safeDb;
export const base44 = db;

const BASE = "https://media.db.com/images/public/6aba6a983679dc865cd49028";

export const JURISDICTION_IMAGES = {
  Singapore: `${BASE}/4fb635d66_generated_image.png`,
  Mauritius: `${BASE}/c702afe32_generated_image.png`,
  Malta: `${BASE}/af0251812_generated_image.png`,
  Belize: `${BASE}/67d34f288_generated_image.png`,
  BVI: `${BASE}/a41cf467e_generated_image.png`,
  "Cayman Islands": `${BASE}/8c7cbb52d_generated_image.png`,
  "UAE": `${BASE}/74dac129a_generated_image.png`,
  Cyprus: `${BASE}/74c24440a_generated_image.png`,
  Seychelles: `${BASE}/0db6f1bdf_generated_image.png`,
  "St. Kitts & Nevis": `${BASE}/492099dd5_generated_image.png`,
};

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
    name
