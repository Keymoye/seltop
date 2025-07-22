import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const SideProjectsSection = (): JSX.Element => {
  // Project data for easier mapping
  const projects = [
    {
      id: 1,
      image: "/image-6-3.png",
      position: "top-left",
      overlay: false,
    },
    {
      id: 2,
      image: "/image-8-1.png",
      position: "top-right",
      overlay: true,
      title: "Project Name",
      description:
        "Project description Project description Project description Project description",
    },
    {
      id: 3,
      image: "/image-7-1.png",
      position: "bottom-left",
      overlay: false,
    },
    {
      id: 4,
      image: "/image-8.png",
      position: "bottom-right",
      overlay: false,
    },
  ];

  return (
    <section className="w-full max-w-[1082px] mx-auto my-16">
      <h2 className="text-center mb-8 font-['Sora',Helvetica] text-5xl">
        <span className="text-[#f8f8ff] tracking-[-1.15px]">My </span>
        <span className="text-[#3a6ef2] tracking-[-1.15px]">side </span>
        <span className="text-[#f8f8ff] tracking-[-1.15px]">projects</span>
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="border-0 rounded-none overflow-hidden"
          >
            <CardContent className="p-0 relative">
              <div className="relative w-full h-[299px]">
                <img
                  className="w-full h-full object-cover"
                  alt="Project thumbnail"
                  src={project.image}
                />

                {project.overlay && (
                  <div className="absolute inset-0 bg-[#000000a6] backdrop-blur-[5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5px)_brightness(100%)]">
                    <div className="flex flex-col items-center justify-center h-full">
                      <h3 className="font-['Sora',Helvetica] font-semibold text-[#3a6ef2] text-[32px] tracking-[-1.60px]">
                        {project.title}
                      </h3>
                      <p className="w-[440px] font-['Sora',Helvetica] font-normal text-white text-xl text-center tracking-[-1.00px] mt-2">
                        {project.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
