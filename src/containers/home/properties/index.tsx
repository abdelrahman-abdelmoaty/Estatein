"use client";

import React, { useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import CustomLink from "@/components/ui/CustomLink";
import Image from "next/image";
import Paragraph from "@/components/ui/Paragraph";
import SectionHeaderWithLink from "@/components/ui/SectionHeaderWithLink";
import { ArrowLeft, ArrowRight } from "@/components/SVGs";
import Autoplay from "embla-carousel-autoplay";
import { PROPERTIES, Property } from "@/data/properties";

const Properties = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay()],
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      const index = emblaApi.selectedScrollSnap() + 1;
      setCurrentIndex(index);
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
      const index = emblaApi.selectedScrollSnap() + 1;
      setCurrentIndex(index);
    }
  }, [emblaApi]);

  return (
    <div id="properties" className="container relative z-20">
      <SectionHeaderWithLink
        heading={"Featured Properties"}
        paragraph={
          "Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click 'View Details' for more information."
        }
        linkLabel={"View All Properties"}
        href={"/properties"}
      />
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {PROPERTIES.map((p, idx) => (
            <div key={idx + "card"} className="p-4 mr-4 min-w-0 self-stretch flex-[0_0_100%] md:flex-[0_0_50%] xl:flex-[0_0_32.5%]">
              <Card property={p} />
            </div>
          ))}
        </div>
      </div>
      <hr className="mb-4 mt-[40px] border-grey-15 dt:mb-5 dt:mt-[50px]" />
      <div className="flex items-center justify-between">
        <div className="order-2 text-[14px] xl:order-1 xl:text-[16px] dt:text-[20px]">
          <span>{String(currentIndex).padStart(2, "0")}</span>{" "}
          <span className="text-grey-60">
            of {String(PROPERTIES.length).padStart(2, "0")}
          </span>
        </div>
        <div className="order-1 flex items-center gap-2.5 xl:order-2">
          <button
            aria-label="Previous Page Collection"
            className="rounded-full border border-grey-15 bg-grey-10 p-2.5 transition hover:bg-grey-08 dt:p-3.5"
            onClick={scrollPrev}
          >
            <ArrowLeft className="h-6 w-6 dt:h-7.5 dt:w-7.5" />
          </button>
          <button
            aria-label="Next Page Collection"
            className="rounded-full border border-grey-15 bg-grey-10 p-2.5 transition hover:bg-grey-08 dt:p-3.5"
            onClick={scrollNext}
          >
            <ArrowRight className="h-6 w-6 dt:h-7.5 dt:w-7.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Properties;

const Card = ({
  property: { id, title, desc, img, features, price },
}: {
  property: Property;
}) => {
  return (
    <div className="rounded-xl border border-grey-15 p-[30px] dt:p-10">
      <div className="relative mb-[16px] h-auto w-full xl:mb-[20px] dt:mb-[30px]">
        <Image
          src={img}
          alt={title}
          className="w-full rounded-base"
          width={432}
          height={318}
        />
      </div>
      <div className="flex flex-col gap-6 dt:gap-[30px]">
        <div>
          <h3 className="mb-[6px] text-[20px] font-semibold dt:text-[24px]">
            {title}
          </h3>
          <Paragraph>
            {desc}{" "}
            <a
              href="#"
              aria-label="Read More about the property"
              className="text-white underline"
            >
              Read More
            </a>
          </Paragraph>
        </div>
        <div className="flex gap-[6px] dt:gap-2.5">
          {features.slice(0, 3).map((f, idx) => {
            return (
              <div
                key={idx}
                className="rounded-[28px] border border-grey-15 px-[14px] py-[6px] text-[14px] font-medium dt:py-[8px] dt:text-[18px]"
              >
                {f}
              </div>
            );
          })}
        </div>
        <div className="flex items-center gap-[40px] dt:gap-[50px]">
          <div className="flex flex-1 flex-col gap-[2px]">
            <span className="text-[14px] font-medium text-grey-60 dt:text-[18px]">
              Price
            </span>
            <span className="text-[20px] font-semibold dt:text-[24px]">
              ${price.toLocaleString()}
            </span>
          </div>
          <CustomLink href={`/property/${id}`} variant="purple" className="flex-[2]">
            View Property Details
          </CustomLink>
        </div>
      </div>
    </div>
  );
};
