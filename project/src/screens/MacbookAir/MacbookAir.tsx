import React from "react";
import { Button } from "../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { AboutMeSection } from "./sections/AboutMeSection";
import { ClientReviewsSection } from "./sections/ClientReviewsSection";
import { HeroSection } from "./sections/HeroSection";
import { ProcessSection } from "./sections/ProcessSection";
import { SideProjectsSection } from "./sections/SideProjectsSection";
import { SkillsSection } from "./sections/SkillsSection";

export const MacbookAir = (): JSX.Element => {
  // Portfolio images data
  const portfolioImages = [
    {
      src: "/image-6-3.png",
      alt: "Image",
      className: "w-[532px] h-[299px] top-0 left-0",
    },
    {
      src: "/image-8-1.png",
      alt: "Image",
      className: "w-[532px] h-[299px] top-0 left-[548px]",
    },
    {
      src: "/image-7-1.png",
      alt: "Image",
      className: "w-[532px] h-[299px] top-0 left-0",
    },
    {
      src: "/image-8.png",
      alt: "Image",
      className: "w-[532px] h-[299px] top-0 left-[548px]",
    },
    {
      src: "/image-5-1.png",
      alt: "Image",
      className: "w-[532px] h-[299px] top-[315px] left-0",
    },
    {
      src: "/image-4.png",
      alt: "Image",
      className: "w-[532px] h-[298px] top-[315px] left-[548px]",
    },
  ];

  // Navigation links
  const navLinks = [
    { href: "#", text: "Home" },
    { href: "#", text: "Work" },
    { href: "#", text: "Reviews" },
  ];

  return (
    <div className="bg-[#05071a] flex flex-row justify-center w-full">
      <div className="bg-[#05071a] overflow-hidden w-[1280px] relative">
        {/* Header/Navigation */}
        <div className="w-full h-[236px] relative bg-[url(/rectangle-2.svg)] bg-[100%_100%]">
          <div className="relative w-[1082px] h-[35px] top-[110px] mx-auto">
            <div className="absolute top-0 left-0 font-['Archivo',Helvetica] font-normal text-[#f8f8ff] text-[32px]">
              Seltop
            </div>

            <NavigationMenu className="absolute top-[9px] right-0">
              <NavigationMenuList className="flex gap-8">
                {navLinks.map((link, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      href={link.href}
                      className="font-['Archivo',Helvetica] font-normal text-[#f8f8ff] text-base"
                    >
                      {link.text}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        {/* Hero Section */}
        <section>
          <HeroSection />
        </section>

        {/* Portfolio Grid Section */}
        <section className="w-[1080px] mx-auto mt-[532px] relative">
          <div className="relative">
            {/* First row */}
            <div className="flex justify-between mb-4">
              <img
                className="w-[532px] h-[299px] object-cover"
                alt={portfolioImages[0].alt}
                src={portfolioImages[0].src}
              />
              <img
                className="w-[532px] h-[299px] object-cover"
                alt={portfolioImages[1].alt}
                src={portfolioImages[1].src}
              />
            </div>

            {/* Second row */}
            <div className="relative">
              <div className="flex justify-between mb-4">
                <img
                  className="w-[532px] h-[299px] object-cover"
                  alt={portfolioImages[2].alt}
                  src={portfolioImages[2].src}
                />
                <img
                  className="w-[532px] h-[299px] object-cover"
                  alt={portfolioImages[3].alt}
                  src={portfolioImages[3].src}
                />
              </div>

              {/* Third row */}
              <div className="flex justify-between">
                <img
                  className="w-[532px] h-[299px] object-cover"
                  alt={portfolioImages[4].alt}
                  src={portfolioImages[4].src}
                />
                <img
                  className="w-[532px] h-[298px] object-cover"
                  alt={portfolioImages[5].alt}
                  src={portfolioImages[5].src}
                />
              </div>

              {/* Gradient overlay */}
              <div className="absolute w-full h-[470px] top-36 left-0 bg-[linear-gradient(180deg,rgba(5,7,26,0)_25%,rgba(5,7,26,1)_100%)]" />
            </div>
          </div>

          {/* Load More Button */}
          <div className="flex justify-center mt-4">
            <Button className="w-[141px] h-[47px] bg-[url(/rectangle-3.svg)] bg-[100%_100%] font-['Sora',Helvetica] font-normal text-[#f8f8ff] text-sm tracking-[-0.70px]">
              Load more
            </Button>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mt-8">
          <SkillsSection />
        </section>

        {/* Side Projects Section */}
        <section className="mt-8">
          <SideProjectsSection />
        </section>

        {/* Client Reviews Section */}
        <section className="mt-8 relative">
          <div className="w-[1084px] mx-auto relative">
            <ClientReviewsSection />
            <img
              className="absolute w-[93px] h-[313px] top-[92px] right-0"
              alt="Rectangle"
              src="/rectangle-5.svg"
            />
          </div>
        </section>

        {/* About Me Section */}
        <section className="mt-8">
          <AboutMeSection />
        </section>

        {/* Process Section */}
        <section className="mt-8">
          <ProcessSection />
        </section>

        {/* CTA Button */}
        <div className="fixed top-[762px] right-[36px]">
          <Button className="w-[141px] h-[47px] bg-[#141a4e] font-['Sora',Helvetica] font-normal text-[#f8f8ff] text-sm tracking-[-0.70px]">
            Let&apos;s work together
          </Button>
        </div>
      </div>
    </div>
  );
};
