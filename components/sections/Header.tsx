'use client'

import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";

export const Header = (): JSX.Element => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", text: "Home" },
    { href: "#work", text: "Work" },
    { href: "#reviews", text: "Reviews" },
    { href: "#about", text: "About" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#05071a]/90 backdrop-blur-md border-b border-[#3a6ef2]/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <div className="font-archivo text-[#f8f8ff] text-2xl font-bold glow-text">
            Seltop
          </div>

          <NavigationMenu>
            <NavigationMenuList className="flex gap-8">
              {navLinks.map((link, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    onClick={() => scrollToSection(link.href)}
                    className="font-archivo text-[#f8f8ff] text-base hover:text-[#3a6ef2] cursor-pointer transition-colors duration-200"
                  >
                    {link.text}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <Button 
            className="bg-[#3a6ef2] hover:bg-[#2c5ce6] text-white px-6 py-2 rounded-lg font-sora font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-[#3a6ef2]/25"
            onClick={() => scrollToSection('#contact')}
          >
            Let's Work Together
          </Button>
        </div>
      </div>
    </header>
  );
};