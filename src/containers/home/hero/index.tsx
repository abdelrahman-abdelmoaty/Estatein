import Image from "next/image";
import hero from "@images/hero/hero.png";
import badge from "@images/hero/badge.png";
import abstractDesgin from "@images/abstract-designs/abstract-design-2.svg";
import React from "react";
import { Arrow, SVG1, SVG2, SVG3, SVG4 } from "@/components/SVGs";
import CustomLink from "@/components/ui/CustomLink";
import Statistics from "@/components/Statistics";
import Paragraph from "@/components/ui/Paragraph";
const Hero = () => {
  return (
    <div className="flex flex-col overflow-hidden -mt-[50px] xl:-mt-[70px] dt:-mt-[100px]">
      <div className="grid grid-cols-1 md:grid-cols-2 content-center md:gap-15 dt:gap-20 container relative my-8 md:my-0">
        <div className="flex flex-col gap-15 justify-center order-2 md:order-1">
          <div className="flex flex-col gap-6">
            <h1 className="font-semibold text-[28px] sm:text-[36px] xl:text-[46px] dt:text-6xl leading-[1.2]">
              Discover Your Dream Property with Estatein
            </h1>
            <Paragraph className="font-medium text-[14px] xl:text-base dt:text-lg text-grey-60">
              Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.
            </Paragraph>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 dt:gap-5">
            <CustomLink href="#" className="w-full md:w-fit">
              Learn More
            </CustomLink>
            <CustomLink href="#" variant="purple">
              Browse Properties
            </CustomLink>
          </div>
          <Statistics />
        </div>
        <div className="mb-18 md:mb-0 relative h-[302px] md:min-h-[622px] dt:min-h-[814px] order-1 md:order-2 md:rounded-none rounded-xl overflow-hidden md:overflow-visible border border-grey-15 md:border-none">
          <div className="absolute left-0 right-0 translate-x-0 z-30 h-full md:w-[calc(50vw-30px)]">
            <Image src={hero} alt="hero" className="w-full h-full z-20 relative object-cover" />
            <Image
              src={abstractDesgin}
              alt="abstract design"
              className="z-10 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full h-full object-contain "
            />
          </div>
        </div>
        <div className="absolute md:top-24 dt:top-36 ml-4 top-[250px] md:ml-0 md:left-[calc(50%+30px)] md:-translate-x-1/2 z-40">
          <Image src={badge} alt="badge" className="w-29 h-29 md:w-32 md:h-32 dt:w-[175px] dt:h-[175px] object-cover" />
        </div>
      </div>
      <div className="border border-grey-15 p-2.5 dt:p-5 grid grid-cols-2 md:grid-cols-4 gap-2.5 dt:gap-5 bg-grey-08 outline outline-8 outline-grey-10 my-2">
        <div className="relative cursor-pointer group bg-grey-10 text-center py-7.5 px-4 dt:py-10 border border-grey-15 dt:px-5 flex items-center justify-center rounded-base">
          <div className="flex flex-col items-center gap-5">
            <SVG1 className="w-15 h-15 dt:w-20.5 dt:h-20.5" />
            <span className="font-semibold md:text-base dt:text-xl leading-normal">Find Your Dream Home</span>
          </div>
          <div className="group-hover:text-white transition text-grey-30 absolute right-5 top-5">
            <Arrow className="md:w-6.5 md:h-6.5 dt:w-8.5 dt:h-8.5" />
          </div>
        </div>
        <div className="relative cursor-pointer group bg-grey-10 text-center py-7.5 px-4 dt:py-10 border border-grey-15 dt:px-5 flex items-center justify-center rounded-base">
          <div className="flex flex-col items-center gap-5">
            <SVG2 className="w-15 h-15 dt:w-20.5 dt:h-20.5" />
            <span className="font-semibold md:text-base dt:text-xl leading-normal">Find Your Dream Home</span>
          </div>
          <div className="group-hover:text-white transition text-grey-30 absolute right-5 top-5">
            <Arrow className="md:w-6.5 md:h-6.5 dt:w-8.5 dt:h-8.5" />
          </div>
        </div>
        <div className="relative cursor-pointer group bg-grey-10 text-center py-7.5 px-4 dt:py-10 border border-grey-15 dt:px-5 flex items-center justify-center rounded-base">
          <div className="flex flex-col items-center gap-5">
            <SVG3 className="w-15 h-15 dt:w-20.5 dt:h-20.5" />
            <span className="font-semibold md:text-base dt:text-xl leading-normal">Find Your Dream Home</span>
          </div>
          <div className="group-hover:text-white transition text-grey-30 absolute right-5 top-5">
            <Arrow className="md:w-6.5 md:h-6.5 dt:w-8.5 dt:h-8.5" />
          </div>
        </div>
        <div className="relative cursor-pointer group bg-grey-10 text-center py-7.5 px-4 dt:py-10 border border-grey-15 dt:px-5 flex items-center justify-center rounded-base">
          <div className="flex flex-col items-center gap-5">
            <SVG4 className="w-15 h-15 dt:w-20.5 dt:h-20.5" />
            <span className="font-semibold md:text-base dt:text-xl leading-normal">Find Your Dream Home</span>
          </div>
          <div className="group-hover:text-white transition text-grey-30 absolute right-5 top-5">
            <Arrow className="md:w-6.5 md:h-6.5 dt:w-8.5 dt:h-8.5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
