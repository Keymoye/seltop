'use client'

import { ArrowDownIcon, SparklesIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

export const HeroSection = (): JSX.Element => {
  const scrollToWork = () => {
    const element = document.querySelector('#work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-[#3a6ef2] rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-[#f8f8ff] rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-[#3a6ef2] rounded-full animate-pulse delay-500" />
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-[#f8f8ff] rounded-full animate-pulse delay-700" />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3a6ef2]/10 border border-[#3a6ef2]/20 backdrop-blur-sm">
            <SparklesIcon className="w-4 h-4 text-[#3a6ef2]" />
            <span className="font-sora text-[#3a6ef2] text-sm font-medium">
              Professional Minecraft Designer
            </span>
          </div>

          {/* Main heading */}
          <h1 className="font-sora text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="text-[#f8f8ff]">Hello,</span>{" "}
            <span className="text-[#3a6ef2] glow-text">@Seltop</span>{" "}
            <span className="text-[#f8f8ff]">here</span>
          </h1>

          {/* Subtitle */}
          <p className="font-sora text-2xl md:text-3xl text-[#8e93ab] max-w-3xl mx-auto">
            Creating stunning <span className="text-[#3a6ef2] font-semibold">thumbnails</span> and 
            <span className="text-[#3a6ef2] font-semibold"> visual content</span> for Minecraft creators
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Button 
              onClick={scrollToWork}
              className="bg-[#3a6ef2] hover:bg-[#2c5ce6] text-white px-8 py-4 rounded-lg font-sora font-semibold text-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#3a6ef2]/25 hover-lift"
            >
              View My Work
            </Button>
            <Button 
              variant="outline"
              className="border-[#3a6ef2] text-[#3a6ef2] hover:bg-[#3a6ef2] hover:text-white px-8 py-4 rounded-lg font-sora font-semibold text-lg transition-all duration-200"
            >
              Get In Touch
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="font-sora text-3xl font-bold text-[#3a6ef2]">50M+</div>
              <div className="font-sora text-[#8e93ab] text-sm">Total Views</div>
            </div>
            <div className="text-center">
              <div className="font-sora text-3xl font-bold text-[#3a6ef2]">100+</div>
              <div className="font-sora text-[#8e93ab] text-sm">Projects Done</div>
            </div>
            <div className="text-center">
              <div className="font-sora text-3xl font-bold text-[#3a6ef2]">25+</div>
              <div className="font-sora text-[#8e93ab] text-sm">Happy Clients</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToWork}
            className="w-10 h-10 rounded-full border-2 border-[#3a6ef2] flex items-center justify-center hover:bg-[#3a6ef2] hover:text-white transition-all duration-200"
          >
            <ArrowDownIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};