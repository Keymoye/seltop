'use client'

import React from "react";
import { Separator } from "../ui/separator";
import { 
  DiscIcon as Discord, 
  TwitterIcon, 
  InstagramIcon, 
  YoutubeIcon 
} from "lucide-react";

export const Footer = (): JSX.Element => {
  const navLinks = [
    { text: "Home", href: "#home" },
    { text: "Work", href: "#work" },
    { text: "Reviews", href: "#reviews" },
    { text: "About", href: "#about" },
  ];

  const socialLinks = [
    { icon: Discord, href: "https://discord.com/users/seltop", label: "Discord" },
    { icon: TwitterIcon, href: "https://twitter.com/seltop7", label: "Twitter" },
    { icon: InstagramIcon, href: "https://instagram.com/seltop.design", label: "Instagram" },
    { icon: YoutubeIcon, href: "https://youtube.com/@SeltopDesigns", label: "YouTube" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-16 px-6 mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <h3 className="font-sora text-4xl font-bold text-[#3a6ef2] glow-text">
              Seltop
            </h3>
            <p className="font-sora text-[#8e93ab] text-sm mt-2">
              Minecraft Graphic Designer
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-8 mb-6 md:mb-0">
            {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(link.href)}
                className="font-archivo text-[#f8f8ff] text-base hover:text-[#3a6ef2] transition-colors duration-200"
              >
                {link.text}
              </button>
            ))}
          </nav>

          {/* Social links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#3a6ef2]/20 rounded-full flex items-center justify-center hover:bg-[#3a6ef2] transition-all duration-200 hover-lift group"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-[#3a6ef2] group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>
        </div>

        <Separator className="bg-[#3a6ef2]/20 mb-8" />

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <p className="font-sora text-[#8e93ab] text-sm">
              © 2025 Seltop. All rights reserved.
            </p>
            <p className="font-sora text-[#8e93ab] text-xs mt-1">
              Crafted with passion for the gaming community
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm">
            <a href="#" className="font-sora text-[#8e93ab] hover:text-[#3a6ef2] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-sora text-[#8e93ab] hover:text-[#3a6ef2] transition-colors">
              Terms of Service
            </a>
            <a href="#" className="font-sora text-[#8e93ab] hover:text-[#3a6ef2] transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};