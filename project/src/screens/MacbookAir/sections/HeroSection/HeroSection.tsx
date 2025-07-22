import { ArrowDownIcon } from "lucide-react";
import React from "react";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="w-full max-w-[580px] py-12">
      <div className="space-y-6">
        <h1 className="font-['Sora',Helvetica] text-[64px] leading-tight">
          <span className="text-[#f8f8ff]">Hello,</span>{" "}
          <span className="text-[#3a6ef2]">@Seltop</span>{" "}
          <span className="text-[#f8f8ff]">here</span>
        </h1>

        <h2 className="font-['Sora',Helvetica] font-normal text-[#f8f8ff] text-3xl tracking-[-1.50px]">
          Minecraft Graphic Designer
        </h2>
      </div>

      <div className="flex justify-end mt-16">
        <div className="w-[34px] h-[34px] flex items-center justify-center">
          <ArrowDownIcon className="w-[22px] h-[23px]" />
        </div>
      </div>
    </section>
  );
};
