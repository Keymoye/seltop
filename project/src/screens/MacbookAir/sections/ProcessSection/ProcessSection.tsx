import React from "react";
import { Separator } from "../../../../components/ui/separator";

export const ProcessSection = (): JSX.Element => {
  // Navigation links data
  const navLinks = [
    { text: "Home", href: "#" },
    { text: "Work", href: "#" },
    { text: "Reviews", href: "#" },
  ];

  return (
    <section className="relative w-full">
      <div className="relative w-full">
        <footer className="relative w-full max-w-[1082px] mx-auto py-6 bg-transparent">
          <div className="flex justify-between items-center w-full">
            <div className="font-['Sora',Helvetica] font-bold text-[#3a6ef2] text-[40px]">
              Seltop
            </div>

            <nav className="flex space-x-8">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="font-['Archivo',Helvetica] font-normal text-[#f8f8ff] text-base hover:underline"
                >
                  {link.text}
                </a>
              ))}
            </nav>
          </div>

          <Separator className="my-6 bg-[#f8f8ff] opacity-50" />

          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col">
              <span className="font-['Sora',Helvetica] font-normal text-[#f8f8ff] text-xs">
                Copyright 2025 Seltop.
              </span>
              <span className="font-['Sora',Helvetica] font-normal text-[#f8f8ff] text-xs mt-2">
                All Rights Reserved
              </span>
            </div>

            <div className="flex items-center">
              <img
                className="h-8 w-[173px]"
                alt="Social media links"
                src="/social-media-links.png"
              />
            </div>
          </div>
        </footer>

        <img
          className="absolute w-full h-[417px] top-[-250px] left-0 z-[-1]"
          alt="Gradient"
          src="/gradient.svg"
        />
      </div>
    </section>
  );
};
