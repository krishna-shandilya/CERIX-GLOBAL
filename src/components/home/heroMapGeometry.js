// Precomputed SVG coordinates and sovereign node metadata (Zero runtime overhead)

export const projection = {
  invert: ([x, y]) => [
    (x / 1000) * 360 - 180,
    90 - (y / 500) * 180
  ]
};

// Jurisdictions with financial codes and directional label offsets
export const jurisdictions = [
  { 
    name: "Singapore", 
    code: "SGP", 
    sub: "SG // +65", 
    position: [788.4, 246.2], 
    labelPos: { dx: 12, dy: 3, anchor: "start" } 
  },
  { 
    name: "Mauritius", 
    code: "MRU", 
    sub: "MU // +230", 
    position: [659.9, 306.5], 
    labelPos: { dx: 12, dy: 3, anchor: "start" } 
  },
  { 
    name: "Malta", 
    code: "MLT", 
    sub: "MT // +356", 
    position: [540.1, 150.2], 
    labelPos: { dx: -12, dy: -6, anchor: "end" } 
  },
  { 
    name: "Belize", 
    code: "BLZ", 
    sub: "BZ // +501", 
    position: [248.0, 204.0], 
    labelPos: { dx: -12, dy: 14, anchor: "end" } 
  },
  { 
    name: "Cayman Islands", 
    code: "CYM", 
    sub: "KY // +1-345", 
    position: [272.0, 194.0], 
    labelPos: { dx: -12, dy: -6, anchor: "end" } 
  },
  { 
    name: "BVI", 
    code: "VGB", 
    sub: "VG // +1-284", 
    position: [316.0, 192.0], 
    labelPos: { dx: 12, dy: -6, anchor: "start" } 
  },
  { 
    name: "St. Kitts & Nevis", 
    code: "KNA", 
    sub: "KN // +1-869", 
    position: [328.0, 206.0], 
    labelPos: { dx: 12, dy: 14, anchor: "start" } 
  },
  { 
    name: "UAE", 
    code: "ARE", 
    sub: "AE // +971", 
    position: [651.0, 182.1], 
    labelPos: { dx: 12, dy: -4, anchor: "start" } 
  },
  { 
    name: "Cyprus", 
    code: "CYP", 
    sub: "CY // +357", 
    position: [592.9, 152.4], 
    labelPos: { dx: 12, dy: -4, anchor: "start" } 
  },
  { 
    name: "Seychelles", 
    code: "SYC", 
    sub: "SC // +248", 
    position: [654.1, 263.0], 
    labelPos: { dx: 12, dy: 3, anchor: "start" } 
  }
];

// Empty arcs list (Zero line rendering)
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
