import React, { memo } from 'react';

const DottedMapBackground = memo(function DottedMapBackground() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0 flex items-center justify-center transform-gpu will-change-transform">
      <svg
        className="w-full h-full object-cover opacity-35 min-w-[800px]"
        viewBox="0 0 1000 500"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="dotted-grid" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
            {/* Updated to new signature gold */}
            <circle cx="2" cy="2" r="1.5" fill="#C5A059" />
          </pattern>
          <radialGradient id="map-mask-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="80%" stopColor="#FFFFFF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </radialGradient>
          <mask id="map-mask">
            <rect width="100%" height="100%" fill="url(#map-mask-grad)" />
          </mask>
        </defs>

        {/* Dense Dotted Grid Layer */}
        <rect width="100%" height="100%" fill="url(#dotted-grid)" mask="url(#map-mask)" />
      </svg>
      
      {/* Dark overlay to retain readability of text - Updated to new deep green */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#07130E]/30 to-[#07130E]" />
    </div>
  );
});

export default DottedMapBackground;
