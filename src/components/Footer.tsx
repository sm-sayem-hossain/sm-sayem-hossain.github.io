import React from "react";
import DecorativeCube from "./DecorativeCube";
import DecorativeHexagon from "./DecorativeHexagon";

export default function Footer() {
  return (
    <footer className="relative w-full pt-8 pb-4 flex items-center justify-center select-none">
      {/* Copyright Text */}
      <span className="text-[10px] sm:text-xs text-zinc-500 font-medium tracking-wide">
        © 2026 | S. M. Sayem Hossain | All Rights Reserved.
      </span>

      {/* Decorative Floating Cube - Bottom Right Card Edge */}
      <DecorativeCube
        size={55}
        className="absolute -right-3 sm:-right-6 bottom-6 z-10 animate-float"
      />

      {/* Decorative Large Gray Hexagon - Bottom Right Outside Card */}
      <DecorativeHexagon
        size={110}
        className="absolute right-6 -bottom-8 -z-10 opacity-30 animate-spin-slow"
      />
    </footer>
  );
}
