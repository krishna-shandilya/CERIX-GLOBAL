// Precomputed SVG coordinates and smooth parabolic arc paths

export const projection = {
  invert: ([x, y]) => [
    (x / 1000) * 360 - 180,
    90 - (y / 500) * 180
  ]
};

// 1. Spaced jurisdiction coordinates
export const jurisdictions = [
  { name: "Singapore", coordinates: [103.819, 1.352], position: [788.4, 246.2] },
  { name: "Mauritius", coordinates: [57.552, -20.348], position: [659.9, 306.5], isHub: true },
  { name: "Malta", coordinates: [14.446, 35.921], position: [540.1, 150.2] },
  { name: "Belize", coordinates: [-88.289, 17.504], position: [248.0, 204.0] },
  { name: "BVI", coordinates: [-64.62, 18.42], position: [316.0, 192.0] },
  { name: "Cayman Islands", coordinates: [-81.254, 19.313], position: [272.0, 194.0], isHub: true },
  { name: "UAE", coordinates: [54.377, 24.453], position: [651.0, 182.1] },
  { name: "Cyprus", coordinates: [33.429, 35.126], position: [592.9, 152.4] },
  { name: "Seychelles", coordinates: [55.492, -4.679], position: [654.1, 263.0] },
  { name: "St. Kitts & Nevis", coordinates: [-62.783, 17.358], position: [328.0, 206.0] }
];

// 2. Parabolic sweeping arcs originating from primary nexus hubs
// Quadratic Bézier: M (start) Q (curved apex control point) (end)
export const arcs = [
  // EASTERN CORRIDORS (Mauritius Hub [659.9, 306.5])
  // Mauritius -> Singapore (High Indian Ocean arch)
  { d: "M659.9 306.5 Q724.0 220.0 788.4 246.2" },
  // Mauritius -> Seychelles (Direct maritime corridor)
  { d: "M659.9 306.5 Q660.0 280.0 654.1 263.0" },
  // Mauritius -> UAE (Arabian Sea sweep)
  { d: "M659.9 306.5 Q675.0 230.0 651.0 182.1" },
  // Mauritius -> Cyprus (Afro-Mediterranean ascent)
  { d: "M659.9 306.5 Q640.0 210.0 592.9 152.4" },

  // CROSS-CONTINENTAL INTERCONNECT
  // UAE -> Malta (Levant-Mediterranean bridge)
  { d: "M651.0 182.1 Q595.0 145.0 540.1 150.2" },

  // TRANSATLANTIC SANCTUARY CORRIDOR
  // Malta -> Cayman Islands (Sweeping high-altitude Atlantic arc)
  { d: "M540.1 150.2 Q410.0 110.0 272.0 194.0" },

  // WESTERN CORRIDORS (Cayman Hub [272.0, 194.0])
  // Cayman -> Belize (Central American gateway)
  { d: "M272.0 194.0 Q260.0 192.0 248.0 204.0" },
  // Cayman -> BVI (Caribbean northeastern curve)
  { d: "M272.0 194.0 Q294.0 182.0 316.0 192.0" },
  // Cayman -> St. Kitts & Nevis (Leeward arc)
  { d: "M272.0 194.0 Q300.0 210.0 328.0 206.0" }
];

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
