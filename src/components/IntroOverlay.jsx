import React, { useEffect, useState, useCallback } from "react";
import { introShouldRun, markIntroDone, notifyIntroDone } from "@/lib/intro";
import BrandEmblem from "@/components/BrandEmblem";

export default function IntroOverlay() {
  const [mounted, setMounted] = useState(introShouldRun());
  const [fadeOut, setFadeOut] = useState(false);

  // Clean, fast opacity fade
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

    // Start fading out shortly after the emblem finishes its spin animation
    const timer = setTimeout(dismiss, 1600);

    // Instant skip: If the user scrolls, clicks, or taps, dismiss instantly.
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

  return (
    <div 
      aria-hidden="true"
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#07130E]"
      style={{
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.4s ease-out",
        pointerEvents: fadeOut ? "none" : "auto",
      }}
    >
      {/* 1. The Correct Animated Brand Emblem */}
      <div className="mb-5">
        <BrandEmblem size="lg" animate={true} />
      </div>

      {/* 2. The Correct New Typography (Zero fly-out zoom) */}
      <h1 className="text-xl sm:text-2xl font-serif tracking-[0.35em] text-white uppercase mb-2">
        Cerix Global
      </h1>
      <p className="text-[10px] sm:text-xs font-mono tracking-[0.45em] text-[#C5A880] uppercase">
        International Advisory
      </p>
    </div>
  );
}
