"use client";

import React, { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(`Thank you ${formData.name}! Your message has been sent successfully.`);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div id="contact" className="relative w-full py-10 lg:py-14 border-b border-zinc-800/40">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
        
        {/* Left Sub-column: Avatar + Info */}
        <div className="col-span-1 lg:col-span-7 flex flex-col sm:flex-row items-start gap-6 sm:gap-10">
          {/* Sunglasses Emoji Avatar */}
          <div className="w-14 h-14 rounded-full bg-gradient-to-b from-zinc-100 to-zinc-400 flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.6)] select-none shrink-0">
            <svg
              viewBox="0 0 24 24"
              width="32"
              height="32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-zinc-900"
            >
              <path d="M3.5 9.5 C3.5 8.5, 6 8.5, 8 9 C9.5 9.5, 10.5 11, 10.5 12.5 C10.5 14, 9 15, 7 15 C5 15, 3.5 13.5, 3.5 9.5 Z" fill="currentColor" />
              <path d="M20.5 9.5 C20.5 8.5, 18 8.5, 16 9 C14.5 9.5, 13.5 11, 13.5 12.5 C13.5 14, 15 15, 17 15 C19 15, 20.5 13.5, 20.5 9.5 Z" fill="currentColor" />
              <path d="M10.5 10.8 Q12 10 13.5 10.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M8.5 18 Q12 20.5 15.5 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </div>

          <div className="flex flex-col justify-start pt-2">
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl font-sans font-bold text-white mb-5">
              Get in touch
            </h2>

            {/* Intro Paragraph */}
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-7 font-normal max-w-sm">
              Have a project in mind or want to collaborate? Fill out the form or reach out directly. I&apos;m always open to discussing full-stack development, open-source projects, or new opportunities.
            </p>

            {/* Row of 4 Social Icons */}
            <div className="flex items-center gap-6 text-zinc-300 mb-8">
              <a
                href="https://github.com/sm-sayem-hossain"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-orange transition-colors duration-300"
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.22.694.825.576C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/sm-sayem-hossain"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-orange transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  stroke="currentColor"
                  strokeWidth="2"
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
                className="hover:text-brand-orange transition-colors duration-300"
                aria-label="Facebook"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  stroke="currentColor"
                  strokeWidth="2"
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
                className="hover:text-brand-orange transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  stroke="currentColor"
                  strokeWidth="2"
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

            {/* Contact Details Stack */}
            <div className="flex flex-col gap-3 text-xs sm:text-sm">
              <div className="flex flex-row items-center gap-3">
                <span className="text-white font-semibold w-20 shrink-0">Email:</span>
                <a href="mailto:smsayemhossain1@gmail.com" className="text-zinc-400 hover:text-white transition-colors">
                  smsayemhossain1@gmail.com
                </a>
              </div>

              <div className="flex flex-row items-center gap-3">
                <span className="text-white font-semibold w-20 shrink-0">Portfolio:</span>
                <a
                  href="https://sm-sayem-hossain.github.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  sm-sayem-hossain.github.io
                </a>
              </div>

              <div className="flex flex-row items-start gap-3">
                <span className="text-white font-semibold w-20 shrink-0">Location:</span>
                <span className="text-zinc-400 leading-snug">
                  Narayanganj, Bangladesh
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sub-column: Orange Form Card with inner border & underlined inputs */}
        <div className="col-span-1 lg:col-span-5 bg-brand-orange p-3 sm:p-4 rounded-[2px] shadow-xl shadow-black/30">
          <div className="border border-black/35 p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Name Input */}
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-[10px] font-bold text-white/75 uppercase tracking-wider">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-transparent text-white placeholder-white/85 font-medium border-0 border-b border-white/40 focus:border-white py-1.5 px-0 text-xs sm:text-sm focus:outline-none transition-colors duration-300 w-full"
                />
              </div>

              {/* Email Address Input */}
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-[10px] font-bold text-white/75 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="Your Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-transparent text-white placeholder-white/85 font-medium border-0 border-b border-white/40 focus:border-white py-1.5 px-0 text-xs sm:text-sm focus:outline-none transition-colors duration-300 w-full"
                />
              </div>

              {/* Phone Number Input */}
              <div className="flex flex-col gap-1">
                <label htmlFor="phone" className="text-[10px] font-bold text-white/75 uppercase tracking-wider">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-transparent text-white placeholder-white/85 font-medium border-0 border-b border-white/40 focus:border-white py-1.5 px-0 text-xs sm:text-sm focus:outline-none transition-colors duration-300 w-full"
                />
              </div>

              {/* Message Area */}
              <div className="flex flex-col gap-1">
                <label htmlFor="message" className="text-[10px] font-bold text-white/75 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={3}
                  placeholder="Type Your Message..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-transparent text-white placeholder-white/85 font-medium border-0 border-b border-white/40 focus:border-white py-1.5 px-0 text-xs sm:text-sm focus:outline-none transition-colors duration-300 w-full resize-none"
                />
              </div>

              {/* Send Message Button */}
              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="bg-[#1a1a1a] text-white text-xs font-semibold px-5 py-2.5 rounded-[5px] hover:bg-black active:scale-95 transition-all duration-300 cursor-pointer shadow-md"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
