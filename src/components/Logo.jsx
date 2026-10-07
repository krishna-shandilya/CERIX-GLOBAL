import React from "react";

// Dotted globe icon — grid of circles forming a sphere. Opacity falls off toward the
// edges for subtle spherical depth. Colours crossfade with the header theme.
function Globe({ color, size = 34 }) {
  const dots = [];
  const cols = 7, rows = 7, spacing = 8.5;
  const cx = 32, cy = 32, r = 27;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x = 6 + col * spacing;
      const y = 6 + row * spacing;
      const dist = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);
      if (dist <= r) {
        const opacity = 0.3 + (1 - dist / r) * 0.7;
        dots.push({ x, y, opacity });
      }
    }
  }
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className="shrink-0" aria-hidden="true">
      {dots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r="1.8" fill={color} opacity={d.opacity} style={{ transition: "fill 300ms ease" }} />
      ))}
    </svg>
  );
}

// Forward-motion dots — increasing size, suggesting forward movement.
function ForwardDots({ dot1, dot2, dot3 }) {
  return (
    <div className="flex items-center gap-1.5 ml-1.5">
      <span className="w-1 h-1 rounded-full" style={{ background: dot1.color, opacity: dot1.opacity, transition: "background-color 300ms ease, opacity 300ms ease" }} />
      <span className="w-1.5 h-1.5 rounded-full" style={{ background: dot2.color, opacity: dot2.opacity, transition: "background-color 300ms ease, opacity 300ms ease" }} />
      <span className="w-2 h-2 rounded-full" style={{ background: dot3.color, transition: "background-color 300ms ease" }} />
    </div>
  );
}

// CERIX GLOBAL logo — dotted globe + wordmark + forward-motion dots.
// variant: "dark" for light backgrounds (standard: CERIX #0B0F0D, GLOBAL #7A3120),
//          "light" for dark backgrounds (reversed: CERIX ivory, GLOBAL + globe #DE8E76).
// Colours crossfade over 300ms; sizes/positions never change, so nothing shifts.
// compact: mobile — ~20px globe, smaller wordmark, accent dots hidden.
// showTagline: renders the "One. World." tagline beneath the wordmark (footer use).
export default function Logo({ variant = "dark", className = "", showTagline = false, compact = false }) {
  const onDark = variant === "light"; // reversed logo on a dark background
  const cerixColor = onDark ? "#FAF8F3" : "#0B0F0D";
  const globalColor = onDark ? "#DE8E76" : "#7A3120";
  const taglineColor = onDark ? "text-parchment/45" : "text-obsidian/40";
  const dots = onDark
    ? { dot1: { color: "#FAF8F3", opacity: 0.45 }, dot2: { color: "#DE8E76", opacity: 0.6 }, dot3: { color: "#DE8E76" } }
    : { dot1: { color: "#6B6A62", opacity: 0.35 }, dot2: { color: "#7A3120", opacity: 0.6 }, dot3: { color: "#7A3120" } };
  const wordSize = compact ? "0.95rem" : "1.35rem";

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <Globe color={globalColor} size={compact ? 20 : 34} />
      <div className="flex flex-col leading-none">
        <div className="flex items-baseline gap-1.5">
          <span className="font-serif tracking-[0.1em] font-semibold" style={{ fontSize: wordSize, color: cerixColor, transition: "color 300ms ease" }}>
            CERIX
          </span>
          <span className="font-serif tracking-[0.1em] font-semibold" style={{ color: globalColor, fontSize: wordSize, transition: "color 300ms ease" }}>
            GLOBAL
          </span>
        </div>
        {showTagline && (
          <span className={`font-serif text-[0.65rem] tracking-[0.2em] italic ${taglineColor} mt-1.5`}>
            One. World.
          </span>
        )}
      </div>
      {!compact && <ForwardDots dot1={dots.dot1} dot2={dots.dot2} dot3={dots.dot3} />}
    </div>
  );
}