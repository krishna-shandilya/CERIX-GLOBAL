// Precomputed SVG coordinates and sovereign node metadata (Zero runtime overhead)

export const projection = {
  invert: ([x, y]) => [
    (x / 1000) * 360 - 180,
    90 - (y / 500) * 180
  ]
};

// 1. Precise jurisdiction coordinates
export const jurisdictions = [
  { name: "Singapore", coordinates: [103.819, 1.352], position: [788.4, 246.2] },
  { name: "Mauritius", coordinates: [57.552, -20.348], position: [659.9, 306.5], isNexus: true },
  { name: "Malta", coordinates: [14.446, 35.921], position: [540.1, 150.2] },
  { name: "Belize", coordinates: [-88.289, 17.504], position: [248.0, 204.0] },
  { name: "BVI", coordinates: [-64.62, 18.42], position: [316.0, 192.0] },
  { name: "Cayman Islands", coordinates: [-81.254, 19.313], position: [272.0, 194.0], isNexus: true },
  { name: "UAE", coordinates: [54.377, 24.453], position: [651.0, 182.1] },
  { name: "Cyprus", coordinates: [33.429, 35.126], position: [592.9, 152.4] },
  { name: "Seychelles", coordinates: [55.492, -4.679], position: [654.1, 263.0] },
  { name: "St. Kitts & Nevis", coordinates: [-62.783, 17.358], position: [328.0, 206.0] }
];

// Option 3 uses graticule corridors rendered inside HeroMapArcs
export const arcs = [];

// High-efficiency fast string join
export function dotsPath(dots) {
  if (!dots || dots.length === 0) return "";
  const len = dots.length;
  const parts = new Array(len);
  for (let i = 0; i < len; i++) {
    const pt = dots[i];
    parts[i] = `M${pt[0] - 0.9} ${pt[1]}a0.9 0.9 0 1 0 1.8 0a0.9 0.9 0 1 0 -1.8 0`;
  }
  return parts.join("");
}
