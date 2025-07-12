"use client";

import React, { useCallback, useState } from "react";
import SectionLayout from "@/components/ui/SectionLayout";
import SectionHeader from "@/components/ui/SectionHeader";
import { ArrowLeft, ArrowRight, Category, Domain } from "@/components/SVGs";
import Paragraph from "@/components/ui/Paragraph";
import Heading from "@/components/ui/Heading";
import CustomLink from "@/components/ui/CustomLink";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const Clients = () => {
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
    <SectionLayout variant="col" id="our-clients">
      <SectionHeader
        heading="Our Valued Clients"
        paragraph="At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving"
      />
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {CLIENTS.map((client, idx) => (
            <div
              key={idx}
              className="mr-4 self-stretch min-w-0 flex-[0_0_100%] p-4 xl:flex-[0_0_50%]"
            >
              <ClientCard client={client} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <hr className="mb-4 border-grey-15 dt:mb-5" />
        <div className="flex items-center justify-between">
          <div className="order-2 text-[14px] xl:order-1 xl:text-[16px] dt:text-[20px]">
            <span>{String(currentIndex).padStart(2, "0")}</span>{" "}
            <span className="text-grey-60">
              of {String(CLIENTS.length).padStart(2, "0")}
            </span>
          </div>
          <div className="order-1 flex items-center gap-2.5 xl:order-2">
            <button
              aria-label="Previous Client"
              className="rounded-full border border-grey-15 bg-grey-10 p-2.5 transition hover:bg-grey-08 dt:p-3.5"
              onClick={scrollPrev}
            >
              <ArrowLeft className="h-6 w-6 dt:h-7.5 dt:w-7.5" />
            </button>
            <button
              aria-label="Next Client"
              className="rounded-full border border-grey-15 bg-grey-10 p-2.5 transition hover:bg-grey-08 dt:p-3.5"
              onClick={scrollNext}
            >
              <ArrowRight className="h-6 w-6 dt:h-7.5 dt:w-7.5" />
            </button>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default Clients;

type Client = {
  since: string;
  name: string;
  domain: string;
  category: string;
  testimonial: string;
  website: string;
};

const CLIENTS: Client[] = [
  {
    since: "Since 2019",
    name: "ABC Corporation",
    domain: "Commercial Real Estate",
    category: "Luxury Home Development",
    testimonial:
      "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
    website: "#",
  },
  {
    since: "Since 2018",
    name: "GreenTech Enterprises",
    domain: "Commercial Real Estate",
    category: "Retail Space",
    testimonial:
      "Estatein's ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.",
    website: "#",
  },
  {
    since: "Since 2020",
    name: "Tech Innovations Ltd",
    domain: "Commercial Real Estate",
    category: "Office Development",
    testimonial:
      "Working with Estatein has been exceptional. Their market knowledge and professional approach made our property acquisition seamless.",
    website: "#",
  },
  {
    since: "Since 2017",
    name: "Golden Gate Ventures",
    domain: "Investment Properties",
    category: "Portfolio Management",
    testimonial:
      "Estatein's investment property expertise helped us build a profitable real estate portfolio. Their insights are invaluable.",
    website: "#",
  },
  {
    since: "Since 2021",
    name: "Urban Living Co",
    domain: "Residential Real Estate",
    category: "Luxury Apartments",
    testimonial:
      "The team at Estatein delivered exactly what we needed - premium residential spaces that exceed our expectations.",
    website: "#",
  },
];

const ClientCard = ({ client }: { client: Client }) => {
  return (
    <div className="flex h-full flex-col gap-[30px] rounded-xl border border-grey-15 p-[30px] xl:p-[40px] dt:gap-[40px] dt:p-[50px]">
      <div className="flex h-full flex-col gap-[20px] md:flex-row md:items-center dt:gap-[30px]">
        <div>
          <Paragraph>{client.since}</Paragraph>
          <Heading>{client.name}</Heading>
        </div>
        <CustomLink href={client.website} className="w-full">
          View Website
        </CustomLink>
      </div>
      <div className="flex gap-[20px] dt:gap-[30px]">
        <div className="flex-1">
          <div className="mb-[6px] flex items-center gap-[4px] dt:mb-[8px] dt:gap-[6px]">
            <Domain className="h-5 w-5 dt:h-6 dt:w-6" />
            <Paragraph>Domain</Paragraph>
          </div>
          <Paragraph className="text-[16px] text-white dt:text-[20px]">
            {client.domain}
          </Paragraph>
        </div>
        <div className="border-l border-grey-15"></div>
        <div className="flex-1">
          <div className="mb-[6px] flex items-center gap-[4px] dt:mb-[8px] dt:gap-[6px]">
            <Category className="h-5 w-5 dt:h-6 dt:w-6" />
            <Paragraph>Category</Paragraph>
          </div>
          <Paragraph className="text-[16px] text-white dt:text-[20px]">
            {client.category}
          </Paragraph>
        </div>
      </div>
      <div className="flex-1 rounded-xl border border-grey-15 p-[20px] xl:p-[24px] dt:p-[30px]">
        <Paragraph>What They Said 🤗</Paragraph>
        <Paragraph className="my-[10px] text-white dt:mt-[14px]">
          {client.testimonial}
        </Paragraph>
      </div>
    </div>
  );
};
