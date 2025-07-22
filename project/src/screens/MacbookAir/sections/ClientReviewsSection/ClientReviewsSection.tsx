import React from "react";
import { Card, CardContent, CardFooter } from "../../../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../components/ui/carousel";

export const ClientReviewsSection = (): JSX.Element => {
  // Testimonial data for reusability
  const testimonials = [
    {
      id: 1,
      name: "xSenny_",
      role: "Content Creator - 50M",
      text: "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      image: "/image-6-2.png",
    },
    {
      id: 2,
      name: "xSenny_",
      role: "Content Creator - 50M",
      text: "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      image: "/image-6-2.png",
    },
    {
      id: 3,
      name: "xSenny_",
      role: "Content Creator - 50M",
      text: "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      image: "/image-6-2.png",
    },
  ];

  return (
    <section className="w-full max-w-[1084px] mx-auto py-12 relative">
      <h2 className="text-center font-['Sora',Helvetica] text-5xl mb-12 tracking-[-1.15px]">
        <span className="text-[#f8f8ff]">My </span>
        <span className="text-[#3a6ef2]">clients&apos;</span>
        <span className="text-[#f8f8ff]"> voice</span>
      </h2>

      <Carousel className="w-full">
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={testimonial.id}
              className="md:basis-1/3 lg:basis-1/3"
            >
              <Card
                className={`h-[315px] bg-[#05071a] rounded-xl border-[3px] border-solid border-[#141a4e] ${index !== 1 ? "opacity-50" : ""}`}
              >
                <CardContent className="p-6">
                  <p className="font-['Sora',Helvetica] text-[#f8f8ff] text-lg">
                    {testimonial.text.split(". ").map((sentence, i) => (
                      <React.Fragment key={i}>
                        {sentence}
                        {i < testimonial.text.split(". ").length - 1
                          ? ". "
                          : ""}
                        {i < testimonial.text.split(". ").length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </p>
                </CardContent>
                <div className="relative">
                  <img className="w-full h-0.5" alt="Line" src="/line-1.svg" />
                  <CardFooter className="flex justify-between items-center pt-3 pb-4 px-6">
                    <div>
                      <h3 className="font-['Sora',Helvetica] text-[#3a6ef2] text-2xl">
                        {testimonial.name}
                      </h3>
                      <p className="font-['Sora',Helvetica] text-[#8e93ab] text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                    <img
                      className="w-[53px] h-[53px] object-cover"
                      alt="Client profile"
                      src={testimonial.image}
                    />
                  </CardFooter>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-8">
          <CarouselPrevious className="relative static mr-4 bg-[#021134] rounded-[22.5px] h-[45px] w-[45px]" />
          <CarouselNext className="relative static bg-[#021134] rounded-[22.5px] h-[45px] w-[45px]" />
        </div>
      </Carousel>
    </section>
  );
};
