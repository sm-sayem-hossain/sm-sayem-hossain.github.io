import React from "react";
import { ArrowUpRight } from "lucide-react";

interface CodingProfile {
  platform: string;
  handle: string;
  subtitle: string;
  link: string;
}

export default function BlogPosts() {
  const profiles: CodingProfile[] = [
    {
      platform: "Codeforces",
      handle: "sm-sayem-hossain",
      subtitle: "Competitive Programming",
      link: "https://codeforces.com/profile/sm-sayem-hossain",
    },
    {
      platform: "LeetCode",
      handle: "sm-sayem-hossain",
      subtitle: "Algorithms & Data Structures",
      link: "https://leetcode.com/u/sm-sayem-hossain",
    },
    {
      platform: "GitHub",
      handle: "@sm-sayem-hossain",
      subtitle: "Open Source & Projects",
      link: "https://github.com/sm-sayem-hossain",
    },
  ];

  return (
    <div id="profiles" className="relative w-full py-8 lg:py-12 border-b border-zinc-800/40">
      {/* Heading */}
      <h2 className="text-zinc-500 font-bold text-sm uppercase tracking-widest mb-6 block text-left">
        Competitive Programming &amp; Profiles
      </h2>

      {/* Profile Cards Grid / Scroll Row */}
      <div className="flex flex-row md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
        {profiles.map((profile, index) => (
          <a
            key={index}
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group min-w-[260px] md:min-w-0 flex-grow flex-shrink-0 flex flex-col justify-between rounded-2xl border border-zinc-800/60 bg-brand-card/50 p-6 hover:border-brand-orange/40 hover:-translate-y-1 transition-all duration-300 cursor-pointer relative min-h-[140px]"
          >
            <div>
              <span className="text-[11px] sm:text-xs text-brand-orange font-bold uppercase tracking-wider block mb-2">
                {profile.subtitle}
              </span>
              <h3 className="text-base sm:text-lg font-sans font-bold text-white leading-snug group-hover:text-brand-orange transition-colors duration-300 mb-1">
                {profile.platform}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 font-medium">
                {profile.handle}
              </p>
            </div>

            {/* Action arrow icon bottom right */}
            <div className="absolute right-4 bottom-4 w-7 h-7 rounded-full bg-zinc-900 border border-zinc-800/80 flex items-center justify-center text-zinc-400 group-hover:bg-brand-orange group-hover:text-white group-hover:border-brand-orange transition-all duration-300">
              <ArrowUpRight size={14} className="stroke-[2.5]" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
