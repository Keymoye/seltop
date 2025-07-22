'use client'

import React, { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { ExternalLinkIcon, ZoomInIcon } from "lucide-react";

export const PortfolioGrid = (): JSX.Element => {
  const [visibleItems, setVisibleItems] = useState(6);

  const portfolioItems = [
    {
      id: 1,
      title: "Epic Minecraft Thumbnail",
      category: "Thumbnail Design",
      image: "https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=800",
      views: "2.5M",
    },
    {
      id: 2,
      title: "Gaming Logo Design",
      category: "Logo Design",
      image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800",
      views: "1.8M",
    },
    {
      id: 3,
      title: "Channel Banner",
      category: "Banner Design",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
      views: "3.2M",
    },
    {
      id: 4,
      title: "Minecraft Server Art",
      category: "Server Graphics",
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800",
      views: "4.1M",
    },
    {
      id: 5,
      title: "YouTube Thumbnail",
      category: "Thumbnail Design",
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800",
      views: "5.3M",
    },
    {
      id: 6,
      title: "Gaming Overlay",
      category: "Stream Graphics",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
      views: "2.9M",
    },
    {
      id: 7,
      title: "Minecraft Poster",
      category: "Poster Design",
      image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=800",
      views: "1.7M",
    },
    {
      id: 8,
      title: "Channel Art",
      category: "Channel Graphics",
      image: "https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=800",
      views: "3.8M",
    },
  ];

  const loadMore = () => {
    setVisibleItems(prev => Math.min(prev + 3, portfolioItems.length));
  };

  return (
    <section id="work" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-sora text-5xl md:text-6xl font-bold mb-6">
            <span className="text-[#f8f8ff]">My </span>
            <span className="text-[#3a6ef2] glow-text">Portfolio</span>
          </h2>
          <p className="font-sora text-xl text-[#8e93ab] max-w-2xl mx-auto">
            Explore my latest work in Minecraft graphic design, from eye-catching thumbnails to complete brand identities.
          </p>
        </div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {portfolioItems.slice(0, visibleItems).map((item, index) => (
            <Card 
              key={item.id} 
              className="group overflow-hidden bg-transparent border-0 hover-lift"
            >
              <CardContent className="p-0 relative">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-sora text-white font-semibold text-lg mb-1">
                            {item.title}
                          </h3>
                          <p className="font-sora text-[#3a6ef2] text-sm">
                            {item.category}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" className="bg-[#3a6ef2] hover:bg-[#2c5ce6] p-2">
                            <ZoomInIcon className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-black p-2">
                            <ExternalLinkIcon className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stats badge */}
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="font-sora text-white text-xs font-medium">
                      {item.views} views
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load more button */}
        {visibleItems < portfolioItems.length && (
          <div className="text-center">
            <Button 
              onClick={loadMore}
              className="bg-[#3a6ef2] hover:bg-[#2c5ce6] text-white px-8 py-3 rounded-lg font-sora font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-[#3a6ef2]/25"
            >
              Load More Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};