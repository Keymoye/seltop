'use client'

import React from "react";
import { Header } from "./sections/Header";
import { HeroSection } from "./sections/HeroSection";
import { PortfolioGrid } from "./sections/PortfolioGrid";
import { SkillsSection } from "./sections/SkillsSection";
import { SideProjectsSection } from "./sections/SideProjectsSection";
import { ClientReviewsSection } from "./sections/ClientReviewsSection";
import { AboutMeSection } from "./sections/AboutMeSection";
import { Footer } from "./sections/Footer";
import { FloatingCTA } from "./sections/FloatingCTA";

export const Portfolio = (): JSX.Element => {
  return (
    <div className="bg-[#05071a] min-h-screen">
      <div className="relative">
        {/* Background gradient overlay */}
        <div className="fixed inset-0 gradient-bg -z-10" />
        
        {/* Header */}
        <Header />
        
        {/* Main content */}
        <main className="relative">
          <HeroSection />
          <PortfolioGrid />
          <SkillsSection />
          <SideProjectsSection />
          <ClientReviewsSection />
          <AboutMeSection />
        </main>
        
        {/* Footer */}
        <Footer />
        
        {/* Floating CTA */}
        <FloatingCTA />
      </div>
    </div>
  );
};