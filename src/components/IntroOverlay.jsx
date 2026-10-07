import React, { useEffect, useRef, useState } from "react";
import { introShouldRun, markIntroDone, notifyIntroDone } from "@/lib/intro";

// Full-screen intro (once per session): a dark forest-olive ground matching the hero
// (base #17231F with the same centre glow) plus a few soft static olive blobs. The Cerix
// dotted-grid mark forms from the centre outward, the reversed CERIX GLOBAL wordmark
// settles in, then the whole lockup zooms toward the header logo and fades while the
// backdrop sharpens. Timeline, zoom, skip, sessionStorage flag and reduced-motion stay.
export default function IntroOverlay() {
  const [mounted, setMounted] = useState(introShouldRun());
  const timers = useRef([]);

  useEffect(() => {
    if (!mounted) return;
    const t1 = setTimeout(() => {
      markIntroDone();
      notifyIntroDone();
    }, 3200);
    const t2 = setTimeout(() => setMounted(false), 3400);
    timers.current = [t1, t2];
    return () => timers.current.forEach(clearTimeout);
  }, [mounted]);

  if (!mounted) return null;

  // Dotted globe mark — dots stagger outward from the centre.
  const dots = [];
  const cols = 7, rows = 7, spacing = 8.5, cx = 32, cy = 32, r = 27;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x = 6 + col * spacing;
      const y = 6 + row * spacing;
      const dist = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);
      if (dist <= r) {
        dots.push({ x, y, delay: (dist / r) * 1.0, opacity: 0.3 + (1 - dist / r) * 0.7 });
      }
    }
  }

  return (
    <div className="intro-overlay" aria-hidden="true">
      <div className="intro-backdrop-olive" />
      <div className="intro-blob" style={{ width: "46vw", height: "46vw", left: "8vw", top: "12vh" }} />
      <div className="intro-blob" style={{ width: "38vw", height: "38vw", right: "6vw", bottom: "8vh" }} />
      <div className="intro-blob" style={{ width: "30vw", height: "30vw", left: "42vw", bottom: "14vh" }} />
      <div className="intro-tint" />
      <div className="intro-lockup">
        <svg className="intro-mark" width="104" height="104" viewBox="0 0 64 64" aria-hidden="true">
          {dots.map((d, i) => (
            <circle
              key={i}
              cx={d.x}
              cy={d.y}
              r="1.8"
              fill="#DE8E76"
              opacity={d.opacity}
              className="intro-dot"
              style={{ animationDelay: `${0.2 + d.delay}s` }}
            />
          ))}
          <circle className="intro-accent" cx="40" cy="40" r="2.4" fill="#DE8E76" style={{ animationDelay: "1.25s" }} />
          <circle className="intro-accent" cx="46" cy="34" r="1.8" fill="#DE8E76" style={{ animationDelay: "1.35s" }} />
          <circle className="intro-accent" cx="50" cy="30" r="1.3" fill="#DE8E76" style={{ animationDelay: "1.45s" }} />
        </svg>
        <div className="intro-wordmark">
          <span className="intro-word">CERIX</span>
          <span className="intro-word intro-word-accent">GLOBAL</span>
        </div>
      </div>
    </div>
  );
}