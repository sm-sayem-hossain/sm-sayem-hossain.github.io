"use client";

import React from "react";
import DecayCard from "./DecayCard";

export default function AboutMe() {
  return (
    <div id="about" className="relative w-full py-8 border-b border-zinc-800/40">
      {/* Heading */}
      <h2 className="text-zinc-500 font-bold text-sm uppercase tracking-widest mb-6 block text-left">
        About Me
      </h2>

      {/* Two-column layout: DecayCard left, text right */}
      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 lg:gap-12 items-center">
        {/* ── LEFT: WebGL DecayCard ── */}
        <div className="flex justify-center md:justify-start">
          <DecayCard
            image="/images/about_profile.jpg"
            width={360}
            height={460}
            intensity={0.5}
            sensitivity={0.5}
            hoverDecay={0.05}
            recovery={0.6}
            idle={0.35}
            grain={0.25}
            detail={5}
            pattern={4}
            flow={0}
            chroma={0}
            travel={50}
            tilt={10}
            scope="window"
            radius={0}
            grayscale={false}
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
