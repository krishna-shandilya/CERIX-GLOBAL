// Precomputed SVG coordinates and arc paths (Zero runtime math overhead)

export const projection = {
  // Equirectangular projection mapping for [1000, 500] viewport
  invert: ([x, y]) => [
    (x / 1000) * 360 - 180,
    90 - (y / 500) * 180
  ]
};

// 1. Spaced jurisdiction coordinates (eliminates Caribbean node overlap)
export const jurisdictions = [
  { name: "Singapore", coordinates: [103.819, 1.352], position: [788.4, 246.2] },
  { name: "Mauritius", coordinates: [57.552, -20.348], position: [659.9, 306.5] },
  { name: "Malta", coordinates: [14.446, 35.921], position: [540.1, 150.2] },
  { name: "Belize", coordinates: [-88.289, 17.504], position: [248.0, 204.0] },
  { name: "BVI", coordinates: [-64.62, 18.42], position: [316.0, 192.0] },
  { name: "Cayman Islands", coordinates: [-81.254, 19.313], position: [272.0, 194.0] },
  { name: "UAE", coordinates: [54.377, 24.453], position: [651.0, 182.1] },
  { name: "Cyprus", coordinates: [33.429, 35.126], position: [592.9, 152.4] },
  { name: "Seychelles", coordinates: [55.492, -4.679], position: [654.1, 263.0] },
  { name: "St. Kitts & Nevis", coordinates: [-62.783, 17.358], position: [328.0, 206.0] }
];

// 2. Precomputed static arc paths seamlessly snapped to the adjusted node centers
export const arcs = [
  // 0 -> 1: Singapore to Mauritius
  {
    length: 168.12,
    d: "M788.4 246.2L782.9 249.2L777.3 252.1L771.6 254.9L765.8 257.6L760.0 260.2L754.0 262.7L748.1 265.2L742.0 267.5L736.0 269.8L729.8 272.0L723.7 274.2L717.5 276.3L711.2 278.4L705.0 280.4L698.8 282.4L692.5 284.4L686.2 286.4L679.9 288.4L673.7 290.4L667.4 292.4L661.2 294.5L659.9 306.5"
  },
  // 1 -> 6: Mauritius to UAE
  {
    length: 125.04,
    d: "M659.9 306.5L658.8 300.9L657.8 295.3L656.9 289.7L656.1 284.0L655.3 278.4L654.6 272.7L654.0 267.1L653.4 261.4L652.9 255.7L652.5 250.0L652.1 244.3L651.8 238.6L651.5 232.8L651.3 227.1L651.1 221.3L651.0 215.6L650.9 209.8L650.9 204.0L651.0 198.2L651.0 182.1"
  },
  // 6 -> 7: UAE to Cyprus
  {
    length: 65.28,
    d: "M651.0 182.1L647.9 180.5L644.8 178.9L641.7 177.3L638.6 175.7L635.4 174.1L632.3 172.6L629.1 171.0L625.9 169.5L622.7 167.9L619.5 166.4L616.2 164.9L613.0 163.4L609.7 161.9L606.4 160.4L603.1 158.9L599.8 157.4L596.5 155.9L592.9 152.4"
  },
  // 7 -> 2: Cyprus to Malta
  {
    length: 53.07,
    d: "M592.9 152.4L590.2 152.3L587.5 152.2L584.8 152.1L582.1 152.0L579.4 151.9L576.7 151.8L573.9 151.7L571.2 151.6L568.5 151.5L565.8 151.4L563.0 151.3L560.3 151.2L557.6 151.1L554.8 151.0L552.1 150.9L549.4 150.8L546.6 150.7L540.1 150.2"
  },
  // 2 -> 5: Malta to Cayman Islands [272.0, 194.0]
  {
    length: 271.60,
    d: "M540.1 150.2L525.0 151.8L510.0 153.6L495.0 155.6L480.0 157.8L465.0 160.1L450.0 162.6L435.0 165.3L420.0 168.1L405.0 171.1L390.0 174.2L375.0 177.5L360.0 180.9L345.0 184.4L330.0 188.0L315.0 191.8L300.0 193.2L285.0 193.8L272.0 194.0"
  },
  // 5 -> 4: Cayman Islands to BVI [316.0, 192.0]
  {
    length: 44.05,
    d: "M272.0 194.0L279.3 193.6L286.7 193.3L294.0 192.9L301.3 192.6L308.7 192.3L316.0 192.0"
  },
  // 4 -> 9: BVI to St. Kitts & Nevis [328.0, 206.0]
  {
    length: 18.44,
    d: "M316.0 192.0L318.4 194.8L320.8 197.6L323.2 200.4L325.6 203.2L328.0 206.0"
  },
  // 9 -> 3: St. Kitts & Nevis to Belize [248.0, 204.0]
  {
    length: 80.02,
    d: "M328.0 206.0L314.7 205.6L301.3 205.3L288.0 205.0L274.7 204.6L261.3 204.3L248.0 204.0"
  },
  // 8 -> 1: Seychelles to Mauritius
  {
    length: 43.83,
    d: "M654.1 263.0L654.5 265.4L654.8 267.8L655.2 270.2L655.5 272.6L655.9 275.0L656.2 277.4L656.6 279.8L657.0 282.2L657.3 284.6L657.7 287.0L658.0 289.4L658.4 291.8L658.8 294.2L659.1 296.6L659.5 299.0L659.8 301.4L660.2 303.8L659.9 306.5"
  },
  // 8 -> 6: Seychelles to UAE
  {
    length: 80.95,
    d: "M654.1 263.0L654.0 258.5L653.9 254.0L653.7 249.5L653.6 245.0L653.4 240.5L653.2 236.0L653.1 231.5L652.9 227.0L652.7 222.5L652.5 218.0L652.4 213.5L652.2 209.0L652.0 204.5L651.8 200.0L651.6 195.5L651.5 191.0L651.3 186.5L651.0 182.1"
  }
];

// 3. High-efficiency fast array join (zero runtime memory thrashing)
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
