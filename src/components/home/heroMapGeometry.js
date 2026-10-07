import { geoEquirectangular, geoInterpolate } from "d3-geo";

export const projection = geoEquirectangular().fitSize([1000, 500], { type: "Sphere" });
export const jurisdictions = [
  { name: "Singapore", coordinates: [103.819, 1.352] },
  { name: "Mauritius", coordinates: [57.552, -20.348] },
  { name: "Malta", coordinates: [14.446, 35.921] },
  { name: "Belize", coordinates: [-88.289, 17.504] },
  { name: "BVI", coordinates: [-64.62, 18.42] },
  { name: "Cayman Islands", coordinates: [-81.254, 19.313] },
  { name: "UAE", coordinates: [54.377, 24.453] },
  { name: "Cyprus", coordinates: [33.429, 35.126] },
  { name: "Seychelles", coordinates: [55.492, -4.679] },
  { name: "St. Kitts & Nevis", coordinates: [-62.783, 17.358] },
].map((node) => ({ ...node, position: projection(node.coordinates) }));

// A connected chain with cross-links, not a single-hub network.
const connections = [[0, 1], [1, 6], [6, 7], [7, 2], [2, 5], [5, 4], [4, 9], [9, 3], [8, 1], [8, 6]];
export const arcs = connections.map(([from, to]) => {
  const interpolate = geoInterpolate(jurisdictions[from].coordinates, jurisdictions[to].coordinates);
  const points = Array.from({ length: 49 }, (_, i) => projection(interpolate(i / 48)));
  const length = points.slice(1).reduce((sum, point, i) =>
    sum + Math.hypot(point[0] - points[i][0], point[1] - points[i][1]), 0);
  return { length, d: points.map(([x, y], i) => `${i ? "L" : "M"}${x} ${y}`).join("") };
});

export function dotsPath(dots) {
  return dots.map(([x, y]) => `M${x - 0.9} ${y}a0.9 0.9 0 1 0 1.8 0a0.9 0.9 0 1 0 -1.8 0`).join("");
}