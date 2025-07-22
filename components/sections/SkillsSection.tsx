'use client'

import React from "react";
import { Card, CardContent } from "../ui/card";
import { 
  PaletteIcon, 
  MonitorIcon, 
  BrushIcon, 
  ZapIcon,
  StarIcon,
  TrendingUpIcon
} from "lucide-react";

export const SkillsSection = (): JSX.Element => {
  const skills = [
    {
      icon: PaletteIcon,
      title: "Thumbnail Design",
      description: "Eye-catching thumbnails that boost click-through rates",
      level: 95,
    },
    {
      icon: BrushIcon,
      title: "Logo Design",
      description: "Memorable brand identities for gaming channels",
      level: 90,
    },
    {
      icon: MonitorIcon,
      title: "Channel Art",
      description: "Complete visual branding for YouTube channels",
      level: 88,
    },
    {
      icon: ZapIcon,
      title: "Stream Graphics",
      description: "Professional overlays and stream packages",
      level: 85,
    },
    {
      icon: StarIcon,
      title: "Brand Identity",
      description: "Cohesive visual systems for gaming brands",
      level: 92,
    },
    {
      icon: TrendingUpIcon,
      title: "Social Media",
      description: "Engaging graphics for all social platforms",
      level: 87,
    },
  ];

  const tools = [
    { name: "Photoshop", level: 95 },
    { name: "Illustrator", level: 90 },
    { name: "After Effects", level: 85 },
    { name: "Figma", level: 88 },
    { name: "Blender", level: 80 },
    { name: "Cinema 4D", level: 75 },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-sora text-5xl md:text-6xl font-bold mb-6">
            <span className="text-[#f8f8ff]">My </span>
            <span className="text-[#3a6ef2] glow-text">Skills</span>
          </h2>
          <p className="font-sora text-xl text-[#8e93ab] max-w-2xl mx-auto">
            Specialized in creating compelling visual content that drives engagement and builds strong brand presence.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skills.map((skill, index) => (
            <Card key={index} className="card-gradient hover-lift border-0">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#3a6ef2]/20 rounded-lg">
                    <skill.icon className="w-6 h-6 text-[#3a6ef2]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-sora text-[#f8f8ff] font-semibold text-lg mb-2">
                      {skill.title}
                    </h3>
                    <p className="font-sora text-[#8e93ab] text-sm mb-4">
                      {skill.description}
                    </p>
                    <div className="w-full bg-[#141a4e] rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-[#3a6ef2] to-[#2c5ce6] h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <div className="text-right mt-1">
                      <span className="font-sora text-[#3a6ef2] text-xs font-medium">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tools section */}
        <div className="text-center">
          <h3 className="font-sora text-3xl font-bold text-[#f8f8ff] mb-8">
            Tools I Master
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="text-center">
                <div className="card-gradient rounded-lg p-4 mb-3 hover-lift">
                  <div className="font-sora text-[#f8f8ff] font-semibold text-lg mb-2">
                    {tool.name}
                  </div>
                  <div className="w-full bg-[#141a4e] rounded-full h-1.5">
                    <div 
                      className="bg-gradient-to-r from-[#3a6ef2] to-[#2c5ce6] h-1.5 rounded-full transition-all duration-1000"
                      style={{ width: `${tool.level}%` }}
                    />
                  </div>
                </div>
                <span className="font-sora text-[#8e93ab] text-sm">
                  {tool.level}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};