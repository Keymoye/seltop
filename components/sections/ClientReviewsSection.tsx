'use client'

import React from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { StarIcon, QuoteIcon } from "lucide-react";

export const ClientReviewsSection = (): JSX.Element => {
  const testimonials = [
    {
      id: 1,
      name: "xSenny_",
      role: "Content Creator",
      subscribers: "50M",
      text: "Seltop's thumbnails increased my click-through rate by 40%! The attention to detail and understanding of what catches viewers' eyes is incredible. Highly recommend for any serious content creator.",
      image: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      platform: "YouTube",
    },
    {
      id: 2,
      name: "MinecraftPro",
      role: "Gaming Streamer",
      subscribers: "2.5M",
      text: "Working with Seltop was a game-changer for my channel. The complete rebrand including logo, thumbnails, and overlays brought my content to the next level. Professional and creative!",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      platform: "Twitch",
    },
    {
      id: 3,
      name: "CraftMaster",
      role: "Server Owner",
      subscribers: "15K",
      text: "The server graphics and promotional materials Seltop created helped us grow from 100 to 15,000 members in just 3 months. The quality and creativity are unmatched.",
      image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      platform: "Discord",
    },
    {
      id: 4,
      name: "RedstoneKing",
      role: "Content Creator",
      subscribers: "8.2M",
      text: "Fast turnaround, excellent communication, and designs that perfectly capture my brand. Seltop understands the gaming community and what works. Will definitely work together again!",
      image: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      platform: "YouTube",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <StarIcon 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} 
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-sora text-5xl md:text-6xl font-bold mb-6">
            <span className="text-[#f8f8ff]">Client </span>
            <span className="text-[#3a6ef2] glow-text">Reviews</span>
          </h2>
          <p className="font-sora text-xl text-[#8e93ab] max-w-2xl mx-auto">
            Don't just take my word for it. Here's what my clients say about working with me.
          </p>
        </div>

        {/* Testimonials carousel */}
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2">
                <Card className="h-full card-gradient border-0 hover-lift">
                  <CardContent className="p-6 h-full flex flex-col">
                    {/* Quote icon */}
                    <div className="mb-4">
                      <QuoteIcon className="w-8 h-8 text-[#3a6ef2] opacity-50" />
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Testimonial text */}
                    <p className="font-sora text-[#f8f8ff] text-base leading-relaxed mb-6 flex-grow">
                      "{testimonial.text}"
                    </p>

                    {/* Platform badge */}
                    <div className="mb-4">
                      <span className="inline-flex items-center px-3 py-1 bg-[#3a6ef2]/20 text-[#3a6ef2] rounded-full text-xs font-medium">
                        {testimonial.platform}
                      </span>
                    </div>
                  </CardContent>

                  <CardFooter className="p-6 pt-0">
                    <div className="flex items-center gap-4 w-full">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-grow">
                        <h4 className="font-sora text-[#3a6ef2] font-semibold text-lg">
                          {testimonial.name}
                        </h4>
                        <p className="font-sora text-[#8e93ab] text-sm">
                          {testimonial.role} • {testimonial.subscribers} subscribers
                        </p>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="flex justify-center gap-4 mt-8">
            <CarouselPrevious className="relative static bg-[#3a6ef2]/20 border-[#3a6ef2] text-[#3a6ef2] hover:bg-[#3a6ef2] hover:text-white" />
            <CarouselNext className="relative static bg-[#3a6ef2]/20 border-[#3a6ef2] text-[#3a6ef2] hover:bg-[#3a6ef2] hover:text-white" />
          </div>
        </Carousel>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="font-sora text-4xl font-bold text-[#3a6ef2] mb-2">98%</div>
            <div className="font-sora text-[#8e93ab] text-sm">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="font-sora text-4xl font-bold text-[#3a6ef2] mb-2">24h</div>
            <div className="font-sora text-[#8e93ab] text-sm">Average Delivery</div>
          </div>
          <div className="text-center">
            <div className="font-sora text-4xl font-bold text-[#3a6ef2] mb-2">150+</div>
            <div className="font-sora text-[#8e93ab] text-sm">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="font-sora text-4xl font-bold text-[#3a6ef2] mb-2">5.0</div>
            <div className="font-sora text-[#8e93ab] text-sm">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};