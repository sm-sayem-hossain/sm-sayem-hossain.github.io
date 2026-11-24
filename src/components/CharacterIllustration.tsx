import React from "react";

interface CharacterIllustrationProps {
  className?: string;
}

export default function CharacterIllustration({ className = "" }: CharacterIllustrationProps) {
  return (
    <div className={`w-full max-w-[450px] aspect-square relative select-none pointer-events-none ${className}`}>
      {/* Floating animation wrapper */}
      <svg
        viewBox="0 0 500 500"
        width="100%"
        height="100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_20px_50px_rgba(224,100,49,0.15)] animate-float"
      >
        <defs>
          {/* Head & Skin 3D Gradient */}
          <radialGradient id="skinGlow" cx="45%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="60%" stopColor="#f3f4f6" />
            <stop offset="100%" stopColor="#d1d5db" />
          </radialGradient>

          {/* Torso/Sweater Gradient */}
          <linearGradient id="sweaterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2c2c2c" />
            <stop offset="50%" stopColor="#181818" />
            <stop offset="100%" stopColor="#080808" />
          </linearGradient>

          {/* Headphones Cushion Gradient */}
          <radialGradient id="phoneCushion" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#ff8e60" />
            <stop offset="70%" stopColor="#e06431" />
            <stop offset="100%" stopColor="#a83510" />
          </radialGradient>

          {/* Laptop Screen Gradient */}
          <linearGradient id="laptopScreen" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4b5563" />
            <stop offset="100%" stopColor="#374151" />
          </linearGradient>

          {/* Laptop Body Gradient */}
          <linearGradient id="laptopBody" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e5e7eb" />
            <stop offset="100%" stopColor="#9ca3af" />
          </linearGradient>

          {/* Floor Shadow Gradient */}
          <radialGradient id="floorShadow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(0, 0, 0, 0.6)" />
            <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
          </radialGradient>
        </defs>

        {/* Ambient Floating Shadow Underneath */}
        <ellipse cx="250" cy="440" rx="140" ry="20" fill="url(#floorShadow)" />

        {/* Character Figure Group */}
        <g id="character-body">
          
          {/* 1. Neck */}
          <rect x="238" y="175" width="24" height="35" rx="12" fill="url(#skinGlow)" />
          
          {/* 2. Torso (Sweater) */}
          <path
            d="M 190 230 C 190 200, 310 200, 310 230 L 325 330 C 325 345, 305 350, 250 350 C 195 350, 175 345, 175 330 Z"
            fill="url(#sweaterGrad)"
            stroke="#111111"
            strokeWidth="2"
          />

          {/* 3. Collar */}
          <path
            d="M 230 205 Q 250 215 270 205 Q 270 200 250 200 Q 230 200 230 205 Z"
            fill="#111"
          />

          {/* 4. Head */}
          <circle cx="250" cy="140" r="45" fill="url(#skinGlow)" />

          {/* Closed Eyes */}
          <path
            d="M 226 142 Q 234 147 242 142"
            stroke="#1a1a1a"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 258 142 Q 266 147 274 142"
            stroke="#1a1a1a"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Cute Simple Nose & Smile */}
          <circle cx="250" cy="151" r="2.5" fill="#e06431" opacity="0.8" />
          <path
            d="M 247 161 Q 250 163 253 161"
            stroke="#333"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />

          {/* 5. Hair (Anime Swoosh Style) */}
          {/* Main Back Hair */}
          <path
            d="M 205 130 C 200 100, 230 80, 260 80 C 290 80, 300 105, 295 130 C 290 120, 210 120, 205 130 Z"
            fill="#141414"
          />
          {/* Front Swoosh Wave */}
          <path
            d="M 225 105 C 220 125, 200 145, 215 160 C 225 170, 235 150, 238 135 C 242 120, 255 110, 265 110 C 285 110, 290 125, 282 135 C 285 100, 260 90, 240 95 C 232 98, 227 102, 225 105 Z"
            fill="#141414"
            stroke="#1a1a1a"
            strokeWidth="1"
          />

          {/* 6. Headphones */}
          {/* Headband */}
          <path
            d="M 213 118 A 46 46 0 0 1 287 118"
            stroke="#222222"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
          />
          {/* Left Cushion */}
          <rect
            x="200"
            y="122"
            width="12"
            height="32"
            rx="6"
            transform="rotate(-5, 206, 138)"
            fill="url(#phoneCushion)"
            stroke="#8c2a07"
            strokeWidth="1"
          />
          {/* Right Cushion */}
          <rect
            x="288"
            y="122"
            width="12"
            height="32"
            rx="6"
            transform="rotate(5, 294, 138)"
            fill="url(#phoneCushion)"
            stroke="#8c2a07"
            strokeWidth="1"
          />

          {/* 7. Legs (Crossed Legged Base) */}
          {/* Left Leg (tucked) */}
          <path
            d="M 175 330 C 130 350, 160 380, 210 380 C 240 380, 230 350, 200 345"
            fill="#1c1c1c"
            stroke="#111"
            strokeWidth="2"
          />
          {/* Right Leg (tucked) */}
          <path
            d="M 325 330 C 370 350, 340 380, 290 380 C 260 380, 270 350, 300 345"
            fill="#1c1c1c"
            stroke="#111"
            strokeWidth="2"
          />

          {/* Left Sneaker (crossed in front) */}
          <g transform="translate(160, 360)">
            <ellipse cx="25" cy="15" rx="20" ry="12" fill="#ffffff" />
            <path d="M 5 15 Q 25 25 45 15" stroke="#111" strokeWidth="2.5" />
            <path d="M 5 18 L 45 18 L 41 21 L 9 21 Z" fill="#222" /> {/* Sole */}
            <circle cx="20" cy="10" r="2.5" fill="#e06431" />
          </g>

          {/* Right Sneaker (crossed in front) */}
          <g transform="translate(265, 360)">
            <ellipse cx="25" cy="15" rx="20" ry="12" fill="#ffffff" />
            <path d="M 5 15 Q 25 25 45 15" stroke="#111" strokeWidth="2.5" />
            <path d="M 5 18 L 45 18 L 41 21 L 9 21 Z" fill="#222" /> {/* Sole */}
            <circle cx="30" cy="10" r="2.5" fill="#e06431" />
          </g>

          {/* 8. Arms and Laptop */}
          {/* Left Arm (Reaching forward) */}
          <path
            d="M 195 235 Q 165 285, 205 315"
            stroke="url(#skinGlow)"
            strokeWidth="18"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M 195 235 Q 165 285, 205 315"
            stroke="#e2e8f0"
            strokeWidth="1"
            strokeLinecap="round"
            fill="none"
          />
          {/* Left Sleeve cuff */}
          <path
            d="M 188 230 C 182 235, 185 250, 195 245"
            stroke="#222"
            strokeWidth="18"
            strokeLinecap="round"
            fill="none"
          />

          {/* Right Arm (Reaching forward) */}
          <path
            d="M 305 235 Q 335 285, 295 315"
            stroke="url(#skinGlow)"
            strokeWidth="18"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M 305 235 Q 335 285, 295 315"
            stroke="#e2e8f0"
            strokeWidth="1"
            strokeLinecap="round"
            fill="none"
          />
          {/* Right Sleeve cuff */}
          <path
            d="M 312 230 C 318 235, 315 250, 305 245"
            stroke="#222"
            strokeWidth="18"
            strokeLinecap="round"
            fill="none"
          />

          {/* Laptop Base (Trapezoid resting on lap) */}
          <polygon
            points="180,315 320,315 340,345 160,345"
            fill="url(#laptopBody)"
            stroke="#7f8c8d"
            strokeWidth="1.5"
          />
          
          {/* Laptop Keyboard Area Accent */}
          <polygon
            points="190,320 310,320 322,338 178,338"
            fill="#374151"
            opacity="0.3"
          />

          {/* Hands Typing on Keyboard */}
          {/* Left Hand */}
          <circle cx="210" cy="315" r="9" fill="url(#skinGlow)" stroke="#ccc" strokeWidth="0.5" />
          {/* Right Hand */}
          <circle cx="290" cy="315" r="9" fill="url(#skinGlow)" stroke="#ccc" strokeWidth="0.5" />

          {/* Laptop Screen (Lid open) */}
          <polygon
            points="185,315 315,315 310,250 190,250"
            fill="url(#laptopScreen)"
            stroke="#4b5563"
            strokeWidth="1"
          />
          {/* Inner Screen Glow (Blank laptop) */}
          <polygon
            points="193,310 307,310 303,256 197,256"
            fill="#1f2937"
          />
        </g>
      </svg>
    </div>
  );
}
