'use client'

import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { MessageCircleIcon, XIcon } from "lucide-react";

export const FloatingCTA = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling 100px
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isExpanded ? (
        // Expanded card
        <div className="card-gradient rounded-2xl p-6 max-w-sm border border-[#3a6ef2]/20 shadow-2xl">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h4 className="font-sora text-[#f8f8ff] font-semibold text-lg">
                Ready to get started?
              </h4>
              <p className="font-sora text-[#8e93ab] text-sm mt-1">
                Let's create something amazing together!
              </p>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-[#8e93ab] hover:text-[#f8f8ff] transition-colors"
            >
              <XIcon className="w-5 h-5" />
            </button>
          </div>
          
          <div className="space-y-3">
            <Button 
              className="w-full bg-[#3a6ef2] hover:bg-[#2c5ce6] text-white font-sora font-semibold"
            >
              Start Your Project
            </Button>
            <Button 
              variant="outline"
              className="w-full border-[#3a6ef2] text-[#3a6ef2] hover:bg-[#3a6ef2] hover:text-white font-sora"
            >
              View Pricing
            </Button>
          </div>
        </div>
      ) : (
        // Collapsed button
        <Button
          onClick={() => setIsExpanded(true)}
          className="bg-[#3a6ef2] hover:bg-[#2c5ce6] text-white rounded-full w-14 h-14 shadow-2xl hover:shadow-[#3a6ef2]/25 hover-lift"
        >
          <MessageCircleIcon className="w-6 h-6" />
        </Button>
      )}
    </div>
  );
};