'use client'

import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { 
  DiscIcon as Discord, 
  TwitterIcon, 
  InstagramIcon, 
  YoutubeIcon,
  MailIcon,
  MapPinIcon,
  CalendarIcon,
  AwardIcon
} from "lucide-react";

export const AboutMeSection = (): JSX.Element => {
  const contactInfo = [
    { 
      platform: "Discord", 
      handle: "@seltop", 
      icon: Discord,
      link: "https://discord.com/users/seltop"
    },
    { 
      platform: "Twitter", 
      handle: "@seltop7", 
      icon: TwitterIcon,
      link: "https://twitter.com/seltop7"
    },
    { 
      platform: "Instagram", 
      handle: "@seltop.design", 
      icon: InstagramIcon,
      link: "https://instagram.com/seltop.design"
    },
    { 
      platform: "YouTube", 
      handle: "@SeltopDesigns", 
      icon: YoutubeIcon,
      link: "https://youtube.com/@SeltopDesigns"
    },
  ];

  const achievements = [
    { icon: AwardIcon, text: "5+ Years Experience" },
    { icon: CalendarIcon, text: "Available 24/7" },
    { icon: MapPinIcon, text: "Global Clients" },
    { icon: MailIcon, text: "Fast Response" },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-sora text-5xl md:text-6xl font-bold mb-6">
            <span className="text-[#f8f8ff]">About </span>
            <span className="text-[#3a6ef2] glow-text">Me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile image */}
          <div className="relative">
            <div className="gradient-border rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Seltop - Minecraft Graphic Designer"
                className="w-full h-[500px] object-cover"
              />
            </div>
            
            {/* Floating stats */}
            <div className="absolute -top-6 -right-6 card-gradient rounded-xl p-4 border border-[#3a6ef2]/20">
              <div className="text-center">
                <div className="font-sora text-2xl font-bold text-[#3a6ef2]">5+</div>
                <div className="font-sora text-[#8e93ab] text-xs">Years</div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 card-gradient rounded-xl p-4 border border-[#3a6ef2]/20">
              <div className="text-center">
                <div className="font-sora text-2xl font-bold text-[#3a6ef2]">150+</div>
                <div className="font-sora text-[#8e93ab] text-xs">Projects</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="font-sora text-3xl font-bold text-[#3a6ef2] mb-4">
                Who am I?
              </h3>
              <h4 className="font-sora text-4xl font-bold text-[#f8f8ff] mb-6">
                I am Seltop, a Minecraft Graphic Designer
              </h4>
              <div className="space-y-4 text-[#8e93ab] font-sora text-lg leading-relaxed">
                <p>
                  With over 5 years of experience in the gaming industry, I specialize in creating 
                  compelling visual content that helps content creators stand out in the crowded 
                  digital landscape.
                </p>
                <p>
                  My passion lies in understanding what makes viewers click, engage, and remember. 
                  Every thumbnail, logo, and graphic I create is designed with psychology and 
                  performance in mind.
                </p>
                <p>
                  I've had the privilege of working with creators who have collectively generated 
                  over 100 million views, and I'm always excited to help the next creator achieve 
                  their goals.
                </p>
              </div>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-3 card-gradient rounded-lg p-3">
                  <achievement.icon className="w-5 h-5 text-[#3a6ef2]" />
                  <span className="font-sora text-[#f8f8ff] text-sm font-medium">
                    {achievement.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Contact info */}
            <div>
              <h5 className="font-sora text-xl font-semibold text-[#f8f8ff] mb-4">
                Let's Connect
              </h5>
              <div className="grid grid-cols-2 gap-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 card-gradient rounded-lg p-3 hover-lift group"
                  >
                    <item.icon className="w-5 h-5 text-[#3a6ef2] group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-sora text-[#f8f8ff] text-sm font-medium">
                        {item.platform}
                      </div>
                      <div className="font-sora text-[#8e93ab] text-xs">
                        {item.handle}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Button 
                className="bg-[#3a6ef2] hover:bg-[#2c5ce6] text-white px-8 py-3 rounded-lg font-sora font-semibold text-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#3a6ef2]/25 hover-lift"
              >
                Start Your Project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};