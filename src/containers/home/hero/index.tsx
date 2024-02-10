import Image from "next/image";
import hero from "@images/hero/hero.webp";
import badge from "@images/hero/badge.png";
import abstractDesgin from "@images/abstract-designs/abstract-design-2.svg";
import React from "react";
import CustomLink from "@/components/ui/CustomLink";
import Statistics from "@/components/Statistics";
import Paragraph from "@/components/ui/Paragraph";
import Features from "./Features";
const Hero = () => {
  return (
    <div className="-mt-[50px] flex flex-col overflow-hidden xl:-mt-[70px] dt:-mt-[100px]">
      <div className="container relative my-8 grid grid-cols-1 content-center md:my-0 md:grid-cols-2 md:gap-15 dt:gap-20">
        <div className="order-2 flex flex-col justify-center gap-15 md:order-1">
          <div className="flex flex-col gap-6">
            <h1 className="text-[28px] font-semibold leading-[1.2] sm:text-[36px] xl:text-[46px] dt:text-6xl">
              Discover Your Dream Property with Estatein
            </h1>
            <Paragraph className="text-[14px] font-medium text-grey-60 xl:text-base dt:text-lg">
              Your journey to finding the perfect property begins here. Explore
              our listings to find the home that matches your dreams.
            </Paragraph>
          </div>
          <div className="flex flex-col items-center gap-4 md:flex-row dt:gap-5">
            <CustomLink href="#" className="w-full md:w-fit">
              Learn More
            </CustomLink>
            <CustomLink href="#" variant="purple">
              Browse Properties
            </CustomLink>
          </div>
          <Statistics />
        </div>
        <div className="relative order-1 mb-18 h-[302px] overflow-hidden rounded-xl border border-grey-15 md:order-2 md:mb-0 md:min-h-[622px] md:overflow-visible md:rounded-none md:border-none dt:min-h-[814px]">
          <div className="absolute left-0 right-0 z-30 h-full translate-x-0 md:w-[calc(50vw-30px)]">
            <Image
              src={hero}
              alt="hero"
              className="relative z-20 h-full w-full object-cover"
            />
            <Image
              src={abstractDesgin}
              alt="abstract design"
              className="absolute left-1/2 top-1/2 z-10 h-full w-full -translate-x-1/2 -translate-y-1/2 object-contain "
            />
          </div>
        </div>
        <div className="absolute top-[250px] z-40 ml-4 md:left-[calc(50%+30px)] md:top-24 md:ml-0 md:-translate-x-1/2 dt:top-36">
          <Image
            src={badge}
            alt="badge"
            className="h-29 w-29 object-cover md:h-32 md:w-32 dt:h-[175px] dt:w-[175px]"
          />
        </div>
      </div>
      <Features />
    </div>
  );
};

export default Hero;
