const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop";

// Proxy that returns a valid image URL for ANY key accessed on IMAGES
export const IMAGES = new Proxy({
  logo: DEFAULT_IMAGE,
  hero: DEFAULT_IMAGE,
  banner: DEFAULT_IMAGE,
  about: DEFAULT_IMAGE,
  contact: DEFAULT_IMAGE
}, {
  get: (target, prop) => {
    if (typeof prop === "symbol" || prop === "inspect") return target[prop];
    return target[prop] || DEFAULT_IMAGE;
  }
});

export const IMAGE_ALT = new Proxy({
  logo: "Cerix Global Logo",
  hero: "Cerix Global",
  banner: "Cerix Global Banner"
}, {
  get: (target, prop) => {
    if (typeof prop === "symbol" || prop === "inspect") return target[prop];
    return target[prop] || "Cerix Global Image";
  }
});

export default IMAGES;
