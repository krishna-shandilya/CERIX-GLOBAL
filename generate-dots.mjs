import fs from "fs";
import { geoContains, geoEquirectangular } from "d3-geo";
import { merge } from "topojson-client";

async function generate() {
  console.log("Fetching world atlas data...");
  const response = await fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json");
  const topology = await response.json();
  
  const proj = geoEquirectangular().fitSize([1000, 500], { type: "Sphere" });
  const land = {
    type: "Feature",
    geometry: merge(topology, topology.objects.countries.geometries),
  };

  const points = [];
  const columns = 167;
  const total = columns * 84;

  console.log("Calculating map dots (this takes a second)...");
  for (let i = 0; i < total; i++) {
    const pt = [(i % columns) * 6, Math.floor(i / columns) * 6];
    const loc = proj.invert(pt);
    if (loc && loc[1] >= -58 && geoContains(land, loc)) {
      points.push(pt.map(n => Number(n.toFixed(1)))); // Compress numbers to save file size
    }
  }

  // Ensure the public directory exists
  if (!fs.existsSync("./public")) {
    fs.mkdirSync("./public");
  }

  fs.writeFileSync("./public/land-dots.json", JSON.stringify(points));
  console.log(`✅ Success! Saved ${points.length} dots to public/land-dots.json`);
}

generate();
