import React from "react";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import FeaturedWorks from "@/components/FeaturedWorks";
import SkillsRow from "@/components/SkillsRow";
import BlogPosts from "@/components/BlogPosts";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-1 w-full bg-brand-black relative overflow-hidden pb-12 font-sans select-none">
      {/* 1. Hero Section Card */}
      <Hero />

      {/* 2. Content Sections Container (Two Column Grid) */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8">
          
          {/* LEFT CARD: About, Featured Works, Skills */}
          <div className="relative p-[5px] rounded-[24px] sm:rounded-[32px] overflow-visible premium-card-border premium-card-shadow-grid flex">
            <div className="bg-brand-black rounded-[19px] sm:rounded-[27px] w-full p-6 sm:p-8 flex flex-col gap-4 overflow-hidden">
              <AboutMe />
              <FeaturedWorks />
              <SkillsRow />
            </div>
          </div>

          {/* RIGHT CARD: Profiles, Contact, Footer */}
          <div className="relative p-[5px] rounded-[24px] sm:rounded-[32px] overflow-visible premium-card-border premium-card-shadow-grid flex">
            <div className="bg-brand-black rounded-[19px] sm:rounded-[27px] w-full p-6 sm:p-8 flex flex-col gap-4 overflow-hidden">
              <BlogPosts />
              <ContactSection />
              <Footer />
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
