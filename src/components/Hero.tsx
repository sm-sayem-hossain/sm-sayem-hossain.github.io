"use client";

import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import DecorativeCube from "./DecorativeCube";
import DecorativeHexagon from "./DecorativeHexagon";
import CharacterIllustration from "./CharacterIllustration";
import { TextRoll } from "./TextRoll";

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12">
      {/* Outer Floating Cube - Top Right */}
      <DecorativeCube
        size={90}
        className="absolute right-[8%] sm:right-[12%] -top-4 sm:-top-8 z-20 animate-float"
      />

      {/* Outer Floating Cubes - Bottom Left */}
      <DecorativeCube
        size={65}
        className="absolute left-[12%] sm:left-[18%] -bottom-6 sm:-bottom-8 z-20 animate-float-delayed"
      />
      <DecorativeCube
        size={45}
        className="absolute left-[18%] sm:left-[24%] -bottom-12 sm:-bottom-16 z-20 animate-float"
      />

      {/* Inset Main Card Wrapper with Gradient Border */}
      <div className="relative p-[5px] rounded-[24px] sm:rounded-[32px] overflow-visible premium-card-border premium-card-shadow-hero">
        
        {/* Card Background Container */}
        <div className="relative bg-brand-black rounded-[19px] sm:rounded-[27px] w-full min-h-[520px] sm:min-h-[560px] lg:min-h-[620px] overflow-hidden p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
          
          {/* Header Navigation Area */}
          <div className="flex items-center justify-between lg:block relative z-30">
            {/* Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="lg:absolute lg:left-0 lg:top-0 text-white hover:text-brand-orange transition-colors duration-300 focus:outline-none p-1"
              aria-label="Open menu"
            >
              <Menu size={24} className="stroke-[2.5]" />
            </button>

            {/* Wordmark Logo */}
            <div className="lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-0 text-xl sm:text-2xl font-sans tracking-tight">
              <span className="font-bold text-zinc-300">SM</span>
              <span className="font-extrabold text-brand-orange">Sayem</span>
            </div>
            
            {/* Empty placeholder to balance flex row on mobile */}
            <div className="w-6 lg:hidden"></div>
          </div>

          {/* Body Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center justify-center flex-grow py-8 lg:py-6 relative z-10">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 flex flex-row items-center relative lg:pl-[14%]">
              
              {/* Vertical Social Icon Stack */}
              <div className="flex flex-col items-center gap-6 sm:gap-8 text-zinc-400 mr-8 sm:mr-12 lg:mr-0 lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2">
                <a
                  href="https://github.com/sm-sayem-hossain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:scale-110 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.22.694.825.576C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/sm-sayem-hossain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:scale-110 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a
                  href="https://facebook.com/me.smsayem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:scale-110 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com/sm_sayem_hossain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:scale-110 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
              </div>

              {/* Main Text Content */}
              <div className="flex flex-col items-start lg:pl-10">
                <div className="flex items-center gap-2 text-zinc-400 text-sm font-semibold tracking-wider uppercase mb-3">
                  <span className="w-6 h-[1.5px] bg-zinc-400"></span>
                  <span>Hello</span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-sans leading-[1.1] mb-4 text-white">
                  I&apos;m <span className="font-extrabold">S. M. Sayem Hossain</span>
                </h1>
                
                <p className="text-zinc-400 text-sm sm:text-base md:text-lg mb-8 max-w-md font-medium leading-relaxed">
                  Full Stack Developer.
                </p>
                
                <a
                  href="#about"
                  className="bg-brand-orange text-white px-8 py-3.5 rounded-lg font-bold text-sm hover:bg-brand-orange-light shadow-[0_8px_30px_rgba(224,100,49,0.3)] hover:shadow-[0_8px_30px_rgba(224,100,49,0.5)] transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer inline-block"
                >
                  Learn more
                </a>
              </div>
            </div>

            {/* Right Illustration Column */}
            <div className="lg:col-span-6 flex items-center justify-center relative w-full mt-8 lg:mt-0">
              {/* Blurred Decorative Hexagon behind character's head */}
              <DecorativeHexagon
                size={140}
                className="absolute left-[38%] top-[10%] opacity-20 animate-spin-slow"
              />

              {/* Character Illustration */}
              <CharacterIllustration className="w-[85%] sm:w-[65%] lg:w-full max-w-[420px]" />
            </div>

          </div>

          {/* Footer Area with Scroll Down Text */}
          <div className="relative z-10 flex items-center h-16 mt-6 lg:mt-0">
            <div className="flex flex-col items-center gap-2 select-none absolute left-0 lg:left-[14%] bottom-0">
              <span 
                className="text-[9px] sm:text-[10px] tracking-[0.25em] text-zinc-500 uppercase font-bold"
                style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
              >
                scroll down
              </span>
              <ChevronDown size={14} className="text-zinc-400 animate-bounce mt-1" />
            </div>
          </div>

          {/* Sunglasses Emoji Badge - Floating on Card Border Right */}
          <div className="absolute right-[-24px] top-[26%] lg:top-[28%] z-20 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-2xl border border-zinc-200 hover:scale-110 active:scale-95 transition-all duration-300 select-none group">
            {/* Sunglasses Emoji Details */}
            <svg
              viewBox="0 0 24 24"
              width="26"
              height="26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-black group-hover:rotate-12 transition-transform duration-300"
            >
              {/* Lenses */}
              <path
                d="M4 10 C4 9, 6 9, 7.5 9.5 C9 10, 10 11.5, 10 13 C10 14, 8.5 15, 7 15 C5.5 15, 4 13.5, 4 10 Z"
                fill="#111"
              />
              <path
                d="M20 10 C20 9, 18 9, 16.5 9.5 C15 10, 14 11.5, 14 13 C14 14, 15.5 15, 17 15 C18.5 15, 20 13.5, 20 10 Z"
                fill="#111"
              />
              {/* Glasses Bridge */}
              <path
                d="M10 11.5 Q12 10.5 14 11.5"
                stroke="#111"
                strokeWidth="2"
                strokeLinecap="round"
              />
              {/* Glasses Frames side arm */}
              <path
                d="M3 10.5 L4 10"
                stroke="#111"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M21 10.5 L20 10"
                stroke="#111"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              {/* Smile */}
              <path
                d="M8 18 Q12 21 16 18"
                stroke="#111"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>

        </div>
      </div>

      {/* Hamburger Overlay Navigation Menu */}
      <div
        className={`fixed inset-0 z-50 bg-brand-black/95 backdrop-blur-md flex flex-col justify-between p-8 sm:p-12 transition-all duration-500 ease-in-out ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
          {/* Logo */}
          <div className="text-xl sm:text-2xl font-sans tracking-tight">
            <span className="font-bold text-zinc-300">SM</span>
            <span className="font-extrabold text-brand-orange">Sayem</span>
          </div>
          
          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-white hover:text-brand-orange transition-colors duration-300 p-1"
            aria-label="Close menu"
          >
            <X size={28} className="stroke-[2]" />
          </button>
        </div>

        {/* Menu Navigation Links */}
        <nav className="flex flex-col items-center justify-center gap-4 sm:gap-5 font-sans font-extrabold uppercase tracking-[-0.03em] flex-grow">
          {[
            { label: "About me", href: "#about" },
            { label: "Featured Works", href: "#featured" },
            { label: "My Skills", href: "#skills" },
            { label: "Coding Profiles", href: "#profiles" },
            { label: "Contact", href: "#contact" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="py-1"
            >
              <TextRoll
                center
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-[-0.03em] text-white"
              >
                {item.label}
              </TextRoll>
            </a>
          ))}
        </nav>

        {/* Menu Footer */}
        <div className="text-center text-zinc-500 text-xs sm:text-sm font-medium border-t border-zinc-800/80 pt-6">
          © 2026 | S. M. Sayem Hossain | All Rights Reserved.
        </div>
      </div>
    </section>
  );
}
