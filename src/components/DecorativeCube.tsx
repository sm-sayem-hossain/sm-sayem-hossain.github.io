import React from "react";

interface DecorativeCubeProps {
  className?: string;
  size?: number; // Size in pixels, default is 80
}

export default function DecorativeCube({ className = "", size = 80 }: DecorativeCubeProps) {
  return (
    <div
      className={`select-none pointer-events-none ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        width="100%"
        height="100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_10px_20px_rgba(224,100,49,0.35)]"
      >
        {/* Top Face - Lightest Orange */}
        <path
          d="M 50 15 L 85 35 L 50 55 L 15 35 Z"
          fill="#ff8e60"
        />
        {/* Left Face - Medium Orange */}
        <path
          d="M 15 35 L 50 55 L 50 90 L 15 70 Z"
          fill="#e06431"
        />
        {/* Right Face - Darkest Orange */}
        <path
          d="M 50 55 L 85 35 L 85 70 L 50 90 Z"
          fill="#a83510"
        />
      </svg>
    </div>
  );
}
