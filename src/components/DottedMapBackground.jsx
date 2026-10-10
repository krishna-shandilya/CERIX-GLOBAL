import React from 'react';

export default function DottedMapBackground() {
  return (
    <div className="absolute inset-0 w-full h-full opacity-35 pointer-events-none overflow-hidden flex items-center justify-center">
      {/* SVG Dotted Matrix World Map */}
      <svg
        className="w-full h-full object-cover text-white/30"
        viewBox="0 0 1000 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="dot-matrix" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="currentColor" opacity="0.6" />
          </pattern>
        </defs>

        {/* Global Dotted Grid Overlay */}
        <rect width="100%" height="100%" fill="url(#dot-matrix)" />
      </svg>
    </div>
  );
}
