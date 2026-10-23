import React, { useEffect, useRef, useState, memo } from "react";
import HeroMapArcs from "@/components/home/HeroMapArcs";
import HeroMapNodes from "@/components/home/HeroMapNodes";
import useHeroMapLand from "@/components/home/useHeroMapLand";
import { arcs, dotsPath, jurisdictions, projection } from "@/components/home/heroMapGeometry";

const VB_X = -197, VB_Y = -131.5, VB_W = 1027, VB_H = 674;

let cachedLandPath = null;

const HeroMap = memo(function HeroMap() {
  const section = useRef(null);
  const [paused, setPaused] = useState(false);
  const [isIdleReady, setIsIdleReady] = useState(false);
  const [computedPath, setComputedPath] = useState(cachedLandPath || "");
  
  const dots = useHeroMapLand(projection);

  // 1. Defer complex child component mounting until main thread is idle
  useEffect(() => {
    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      const handle = window.requestIdleCallback(() => setIsIdleReady(true), { timeout: 1500 });
      return () => window.cancelIdleCallback(handle);
    } else {
      const timer = setTimeout(() => setIsIdleReady(true), 300);
      return () => clearTimeout(timer);
    }
  }, []);

  // 2. Offload heavy dots path generation from the initial critical render cycle
  useEffect(() => {
    if (cachedLandPath) {
      setComputedPath(cachedLandPath);
      return;
    }

    if (!dots || dots.length === 0) return;

    const scheduleCompute = typeof window !== "undefined" && "requestIdleCallback" in window
      ? window.requestIdleCallback
      : (cb) => setTimeout(cb, 100);

    const computeHandle = scheduleCompute(() => {
      const pathStr = dotsPath(dots);
      cachedLandPath = pathStr;
      setComputedPath(pathStr);
    });

    return () => {
      if (typeof window !== "undefined" && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(computeHandle);
      } else {
        clearTimeout(computeHandle);
      }
    };
  }, [dots]);

  // 3. Pause animations when scrolled out of view or tab is hidden
  useEffect(() => {
    const el = section.current?.closest("section");
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setPaused(!entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    observer.observe(el);

    const handleVisibility = () => {
      if (document.hidden) setPaused(true);
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <div 
      ref={section} 
      className="cerix-hero-map transform-gpu will-change-transform" 
      data-paused={paused}
    >
      <svg
        viewBox={`${VB_X} ${VB_Y} ${VB_W} ${VB_H}`}
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full block"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient 
            id="cerix-land-fade" 
            x1={VB_X} 
            y1="0" 
            x2={VB_X + 0.4 * VB_W} 
            y2="0" 
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="black" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <mask 
            id="cerix-land-mask" 
            maskUnits="userSpaceOnUse" 
            x={VB_X} 
            y={VB_Y} 
            width={VB_W} 
            height={VB_H}
          >
            <rect 
              x={VB_X} 
              y={VB_Y} 
              width={VB_W} 
              height={VB_H} 
              fill="url(#cerix-land-fade)" 
            />
          </mask>
        </defs>

        {/* Static land mask dots: painted once computed without blocking initial frame */}
        {computedPath && (
          <path 
            d={computedPath} 
            fill="var(--ivory)" 
            fillOpacity="0.32" 
            mask="url(#cerix-land-mask)" 
          />
        )}

        {/* Defer arcs and nodes until idle ready */}
        {isIdleReady && (
          <>
            <HeroMapArcs arcs={arcs} paused={paused} />
            <HeroMapNodes jurisdictions={jurisdictions} paused={paused} />
          </>
        )}
      </svg>

      <ul className="sr-only" aria-label="Jurisdictions in the international network">
        {jurisdictions.map((n) => (
          <li key={n.name}>{n.name}</li>
        ))}
      </ul>
    </div>
  );
});

export default HeroMap;
