import React from "react";

interface DecorativeHexagonProps {
  className?: string;
  size?: number; // Size in pixels, default is 120
}

export default function DecorativeHexagon({ className = "", size = 120 }: DecorativeHexagonProps) {
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
        className="w-full h-full opacity-40 blur-[2px]"
      >
        <polygon
          points="50,5 90,28 90,72 50,95 10,72 10,28"
          fill="#1C1817"
          stroke="#2C2422"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}
