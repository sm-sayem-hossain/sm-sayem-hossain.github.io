"use client";

import React from "react";

interface Project {
  title: string;
  description: string;
  link: string;
}

export default function FeaturedWorks() {
  const projects: Project[] = [
    {
      title: "Outliers",
      description:
        "AI-native legal intelligence & advocate marketplace for Bangladesh Law.",
      link: "https://outliers-omega.vercel.app",
    },
    {
      title: "CPAgent",
      description:
        "Auto-syncs Codeforces, AtCoder & LeetCode contests to Google Calendar.",
      link: "https://github.com/sm-sayem-hossain/CPAgent",
    },
    {
      title: "Orbital",
      description:
        "Quantum Simulation MCP Server for AI Agents with QAOA & VQE.",
      link: "https://github.com/sm-sayem-hossain/Orbital",
    },
    {
      title: "nexus-rescue",
      description:
        "Disaster Rescue Route Optimizer with real-time hazard management.",
      link: "https://sm-sayem-hossain.github.io/nexus-rescue/",
    },
  ];

  return (
    <div id="featured" className="relative w-full py-8 lg:py-12 border-b border-zinc-800/40">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-sans font-bold text-white mb-8 block text-left">
        Featured Works
      </h2>

      {/* Horizontal Project Card Row */}
      <div className="flex flex-row items-stretch gap-5 sm:gap-6 overflow-x-auto no-scrollbar py-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group min-w-[270px] sm:min-w-[310px] lg:min-w-[330px] max-w-[340px] min-h-[205px] flex-shrink-0 flex flex-col justify-center p-7 sm:p-9 rounded-[2px] border border-white/15 bg-gradient-to-br from-[#231712] via-[#18110e] to-[#120e0c] relative overflow-hidden transition-all duration-300 hover:border-brand-orange/60 hover:shadow-[0_12px_28px_rgba(224,100,49,0.12)]"
          >
            {/* Subtle Ambient Warm Glow on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Project Content */}
            <div className="relative z-10 flex flex-col items-start">
              <h3 className="text-xl sm:text-2xl font-sans font-bold text-white mb-2 group-hover:text-brand-orange transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm font-normal leading-relaxed mb-6 line-clamp-2">
                {project.description}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-orange text-white text-xs font-semibold px-5 py-2.5 rounded-[5px] hover:bg-brand-orange-light transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_4px_14px_rgba(224,100,49,0.2)] inline-block"
              >
                View live
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
