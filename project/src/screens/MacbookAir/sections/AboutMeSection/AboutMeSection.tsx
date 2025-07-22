import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const AboutMeSection = (): JSX.Element => {
  // Contact information data
  const contactInfo = [
    { platform: "Discord", handle: "@seltop" },
    { platform: "Twitter", handle: "@seltop7" },
  ];

  return (
    <section className="w-full max-w-[1084px] mx-auto py-12">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-[441px] h-[441px]">
          <img
            className="w-full h-full object-cover rounded-md"
            alt="Profile image of Seltop"
            src="/image-7.png"
          />
        </div>

        <Card className="w-full md:w-[537px] border-none">
          <CardContent className="p-0 space-y-6">
            <div className="space-y-4">
              <p className="font-['Sora',Helvetica] text-2xl text-[#3a6ef2]">
                Who am I?
              </p>

              <h2 className="font-['Sora',Helvetica] font-bold text-[32px] text-[#f8f8ff]">
                I am Seltop, a Minecraft Graphic Designer
              </h2>

              <p className="font-['Sora',Helvetica] text-xl text-[#8e93ab]">
                Lorem ipsum odor amet, consectetuer adipiscing elit. Ultricies
                morbi fames nullam class elit mattis taciti sed. Parturient leo
                vivamus neque quam ante litora natoque. Non aptent maecenas
                lobortis ex pulvinar consequat. Ornare volutpat et sollicitudin
                lobortis eu rhoncus consectetur.
              </p>
            </div>

            <Separator className="w-full h-0.5 bg-[url('/line-1.svg')] my-6" />

            <div className="flex flex-col md:flex-row gap-6">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="font-['Sora',Helvetica] text-xl text-[#f8f8ff]"
                >
                  <span>{item.platform}: </span>
                  <span className="font-bold">{item.handle}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
