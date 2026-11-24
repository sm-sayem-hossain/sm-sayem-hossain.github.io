"use client";

import React from "react";
import Lanyard from "./Lanyard";

export default function AboutMe() {
  return (
    <div id="about" className="relative w-full py-8 border-b border-zinc-800/40">
      {/* Heading */}
      <h2 className="text-zinc-500 font-bold text-sm uppercase tracking-widest mb-6 block text-left">
        About Me
      </h2>

      {/* Two-column layout: 3D Lanyard left, text right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* ── LEFT: Interactive 3D Lanyard Card ── */}
        <div className="w-full h-[460px] sm:h-[540px]">
          <Lanyard
            frontImage="/images/about_profile.jpg"
            backImage="/images/about_profile.jpg"
            imageFit="cover"
            cardColor="#ffffff"
            orientation="portrait"
            finish="glossy"
            cornerRadius={0.3}
            size={0.6}
            anchor="center"
            strapLength={0.5}
            strapColor="#111111"
            strapWidth={0.65}
            metal="silver"
            gravity={1}
            damping={0.5}
            elasticity={0.5}
            breeze={0.5}
            interactive
            intro
          />
        </div>

        {/* ── RIGHT: Name + bio ── */}
        <div className="flex flex-col justify-center min-w-0">
          <h2 className="text-2xl sm:text-3xl font-sans font-bold leading-snug mb-4 text-white">
            S. M. Sayem Hossain
          </h2>

          <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-medium">
            I am a Full Stack Developer and Computer Science &amp; Engineering
            (CSE) student at Daffodil International University, based in
            Narayanganj, Bangladesh. I build end-to-end web applications and
            developer tools with TypeScript, JavaScript, React, Next.js,
            Node.js, Express.js, and NestJS, backed by PostgreSQL, SQLite, and
            MongoDB. Alongside full-stack engineering and design with Adobe
            Creative Cloud, I actively practice competitive programming on
            Codeforces and LeetCode.
          </p>
        </div>
      </div>
    </div>
  );
}
