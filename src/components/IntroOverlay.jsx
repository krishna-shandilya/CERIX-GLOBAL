import React, { useEffect, useRef, useState, useCallback } from "react";
import { introShouldRun, markIntroDone, notifyIntroDone } from "@/lib/intro";

export default function IntroOverlay() {
  const [mounted, setMounted] = useState(introShouldRun());
  const [fadeOut, setFadeOut] = useState(false);

  // Clean, fast opacity fade that signals the main app to reveal itself
  const dismiss = useCallback(() => {
    if (fadeOut) return;
    setFadeOut(true);
    markIntroDone();
    notifyIntroDone();
    
    // Unmount from DOM completely after a swift 400ms fade
    setTimeout(() => setMounted(false), 400); 
  }, [fadeOut]);

  useEffect(() => {
    if (!mounted) return;

    // 1. Cut the delay: start fading right after the last dot animates (~1.6s) 
    // instead of forcing users to stare at a blank green screen for 3.4s.
    const timer = setTimeout(dismiss, 1600);

    // 2. Instant skip: If the user scrolls, clicks, or taps, dismiss instantly.
    const handleInteraction = () => dismiss();
    window.addEventListener("wheel", handleInteraction, { passive: true, once: true });
    window.addEventListener("touchstart", handleInteraction, { passive: true, once: true });
    window.addEventListener("click", handleInteraction, { once: true });
    window.addEventListener("keydown", handleInteraction, { once: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("wheel", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("keydown", handleInteraction);
    };
  }, [mounted, dismiss]);

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
    <div 
      className="intro-overlay" 
      aria-hidden="true"
      style={{
        // Forces a strict opacity fade, overriding any external CSS trying to animate this wrapper
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.4s ease-out",
        pointerEvents: fadeOut ? "none" : "auto",
      }}
    >
      <div className="intro-backdrop-olive" />
      <div className="intro-blob" style={{ width: "46vw", height: "46vw", left: "8vw", top: "12vh" }} />
      <div className="intro-blob" style={{ width: "38vw", height: "38vw", right: "6vw", bottom: "8vh" }} />
      <div className="intro-blob" style={{ width: "30vw", height: "30vw", left: "42vw", bottom: "14vh" }} />
      <div className="intro-tint" />
      
      <div 
        className="intro-lockup"
        style={{
          // Kills the "zoom toward the header logo" CSS animation entirely
          transform: "translateZ(0)", 
          transition: "opacity 0.4s ease-out"
        }}
      >
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
