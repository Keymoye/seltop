import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const SkillsSection = (): JSX.Element => {
  return (
    <section className="w-full py-16 flex flex-col items-center">
      <h2 className="font-['Sora',Helvetica] font-normal text-5xl tracking-[-1.15px] mb-8 text-center">
        <span className="text-[#f8f8ff]">What my </span>
        <span className="text-[#3a6ef2]">process</span>
        <span className="text-[#f8f8ff]"> looks like </span>
      </h2>

      <Card className="w-full max-w-[1080px] border-0 shadow-none">
        <CardContent className="p-0">
          <img
            className="w-full h-auto object-cover"
            alt="Process visualization"
            src="/image-5-1.png"
          />
        </CardContent>
      </Card>

      <div className="mt-8 flex justify-center">
        <img className="h-[57px] w-auto" alt="Skill set" src="/skill-set.png" />
      </div>
    </section>
  );
};
