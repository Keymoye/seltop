'use client'

import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { ExternalLinkIcon, GithubIcon } from "lucide-react";

export const SideProjectsSection = (): JSX.Element => {
  const projects = [
    {
      id: 1,
      title: "Minecraft Texture Pack",
      description: "Custom texture pack with over 10K downloads featuring enhanced visual elements for better gameplay experience.",
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Textures", "Minecraft", "Game Assets"],
      downloads: "10K+",
      featured: true,
    },
    {
      id: 2,
      title: "YouTube Thumbnail Templates",
      description: "Collection of 50+ professional thumbnail templates for Minecraft content creators.",
      image: "https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Templates", "YouTube", "Design"],
      downloads: "5K+",
      featured: false,
    },
    {
      id: 3,
      title: "Gaming Logo Pack",
      description: "Premium logo collection featuring 25 unique gaming-focused designs with full commercial rights.",
      image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Logos", "Branding", "Gaming"],
      downloads: "8K+",
      featured: false,
    },
    {
      id: 4,
      title: "Stream Overlay Kit",
      description: "Complete streaming package with overlays, alerts, and panels for professional live streaming setup.",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Streaming", "Overlays", "Twitch"],
      downloads: "12K+",
      featured: true,
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-sora text-5xl md:text-6xl font-bold mb-6">
            <span className="text-[#f8f8ff]">Side </span>
            <span className="text-[#3a6ef2] glow-text">Projects</span>
          </h2>
          <p className="font-sora text-xl text-[#8e93ab] max-w-2xl mx-auto">
            Passion projects and community resources that showcase my creativity and give back to the gaming community.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className={`group overflow-hidden bg-transparent border-0 hover-lift ${
                project.featured ? 'md:col-span-2' : ''
              }`}
            >
              <CardContent className="p-0">
                <div className={`flex ${project.featured ? 'flex-col md:flex-row' : 'flex-col'} h-full`}>
                  {/* Image */}
                  <div className={`relative overflow-hidden ${
                    project.featured ? 'md:w-1/2' : 'w-full'
                  }`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                        project.featured ? 'h-64 md:h-full' : 'h-48'
                      }`}
                    />
                    
                    {/* Featured badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4 bg-[#3a6ef2] text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </div>
                    )}

                    {/* Downloads badge */}
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="font-sora text-white text-xs font-medium">
                        {project.downloads} downloads
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`p-6 card-gradient ${
                    project.featured ? 'md:w-1/2' : 'w-full'
                  } flex flex-col justify-between`}>
                    <div>
                      <h3 className="font-sora text-[#f8f8ff] font-bold text-xl mb-3">
                        {project.title}
                      </h3>
                      <p className="font-sora text-[#8e93ab] text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="px-3 py-1 bg-[#3a6ef2]/20 text-[#3a6ef2] rounded-full text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                      <Button 
                        size="sm" 
                        className="bg-[#3a6ef2] hover:bg-[#2c5ce6] text-white flex-1"
                      >
                        <ExternalLinkIcon className="w-4 h-4 mr-2" />
                        View Project
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="border-[#3a6ef2] text-[#3a6ef2] hover:bg-[#3a6ef2] hover:text-white"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};