import { useEffect, useState } from "react";

// Samples the real background behind the fixed header and decides "dark" or "light".
// Primary signal: data-theme markers on sections / the layout root (walked up from
// the element under the header's centre). Backstop: the luminance of the first opaque
// element under that point. If the marker and the luminance disagree, luminance wins
// (a contrast check that flips a wrong marker). Safe default before / on failure: light.
function sampleTheme() {
  if (typeof window === "undefined") return "light";
  const x = 90; // logo area, left side
  const y = 36; // header band centre
  let els;
  try {
    els = document.elementsFromPoint(x, y);
  } catch {
    return "light";
  }
  if (!els || !els.length) return "light";

  // 1. marker-based — nearest data-theme ancestor of the first non-header element
  let marker = null;
  for (const el of els) {
    if (el.closest && el.closest("header")) continue;
    let node = el;
    while (node && node !== document.documentElement) {
      const t = node.getAttribute && node.getAttribute("data-theme");
      if (t === "dark" || t === "light") { marker = t; break; }
      node = node.parentElement;
    }
    if (marker) break;
  }

  // 2. luminance-based — first opaque background under the point
  let lumTheme = null;
  for (const el of els) {
    if (el.closest && el.closest("header")) continue;
    let bg;
    try { bg = getComputedStyle(el).backgroundColor; } catch { continue; }
    const m = bg.match(/rgba?\(([^)]+)\)/);
    if (!m) continue;
    const parts = m[1].split(",").map((s) => parseFloat(s));
    const a = parts.length === 4 ? parts[3] : 1;
    if (a <= 0.5) continue;
    const [r, g, b] = parts;
    const lum = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
    lumTheme = lum < 0.35 ? "dark" : "light";
    break;
  }

  // Contrast check: a wrong marker flips to the luminance verdict.
  if (marker && lumTheme && marker !== lumTheme) return lumTheme;
  if (marker) return marker;
  if (lumTheme) return lumTheme;
  return "light";
}

export function useHeaderTheme(pathname) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    let raf = null;
    const update = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        const next = sampleTheme();
        setTheme((prev) => (prev === next ? prev : next));
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    const t1 = setTimeout(update, 300); // after the new page's hero mounts
    const t2 = setTimeout(update, 1000);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      clearTimeout(t1);
      clearTimeout(t2);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [pathname]);

  return theme;
}