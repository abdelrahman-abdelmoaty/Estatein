"use client";

import React, { useCallback, useState } from "react";
import SectionHeaderWithLink from "@/components/ui/SectionHeaderWithLink";
import CustomLink from "@/components/ui/CustomLink";
import Paragraph from "@/components/ui/Paragraph";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight } from "@/components/SVGs";

const Questions = () => {
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
    <div id="questions" className="container relative z-20">
      <SectionHeaderWithLink
        heading="Frequently Asked Questions"
        paragraph="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."
        linkLabel="View All FAQ's"
        href="/faq"
      />
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {QUESTIONS.map((q, idx) => (
            <div key={idx} className="mr-4 min-w-0 self-stretch flex-[0_0_100%] p-4 md:flex-[0_0_50%] xl:flex-[0_0_32.5%]">
              <Card question={q} />
            </div>
          ))}
        </div>
      </div>
      <hr className="mb-4 mt-[40px] border-grey-15 dt:mb-5 dt:mt-[50px]" />
      <div className="flex items-center justify-between">
        <div className="order-2 text-[14px] xl:order-1 xl:text-[16px] dt:text-[20px]">
          <span>{String(currentIndex).padStart(2, "0")}</span>{" "}
          <span className="text-grey-60">
            of {String(QUESTIONS.length).padStart(2, "0")}
          </span>
        </div>
        <div className="order-1 flex items-center gap-2.5 xl:order-2">
          <button
            aria-label="Previous FAQ"
            className="rounded-full border border-grey-15 bg-grey-10 p-2.5 transition hover:bg-grey-08 dt:p-3.5"
            onClick={scrollPrev}
          >
            <ArrowLeft className="h-6 w-6 dt:h-7.5 dt:w-7.5" />
          </button>
          <button
            aria-label="Next FAQ"
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

export default Questions;

type Question = { question: string; answer: string; url: string };

const QUESTIONS: Question[] = [
  {
    question: "How do I search for properties on Estatein?",
    answer:
      "Learn how to use our user-friendly search tools to find properties that match your criteria.",
    url: "/faq",
  },
  {
    question: "What documents do I need to sell my property through Estatein?",
    answer:
      "Find out about the necessary documentation for listing your property with us.",
    url: "/faq",
  },
  {
    question: "How can I contact an Estatein agent?",
    answer:
      "Discover the different ways you can get in touch with our experienced agents.",
    url: "/contact-us",
  },
  {
    question: "What are the fees for buying a property?",
    answer:
      "Understand all the costs involved in purchasing a property through our platform.",
    url: "/faq",
  },
  {
    question: "How long does the property buying process take?",
    answer:
      "Get insights into typical timelines and what factors can affect the duration.",
    url: "/faq",
  },
  {
    question: "Do you offer property management services?",
    answer:
      "Learn about our comprehensive property management solutions for investors.",
    url: "/services",
  },
  {
    question: "Can I schedule a virtual property tour?",
    answer:
      "Discover how to book virtual tours and what technology we use for remote viewings.",
    url: "/properties",
  },
  {
    question: "What financing options are available?",
    answer:
      "Explore the various financing solutions and mortgage options we can connect you with.",
    url: "/services",
  }
];

const Card = ({
  question: { question, answer, url },
}: {
  question: Question;
}) => {
  return (
    <div className="flex h-full flex-col justify-between gap-[24px] rounded-base border border-grey-15 p-[40px] dt:gap-[30px] dt:p-[50px]">
      <p className="mb-[10px] flex-1 text-[20px] font-semibold dt:mb-[14px] dt:text-[24px]">
        {question}
      </p>
      <Paragraph>{answer}</Paragraph>
      <CustomLink href={url} variant="dark" className="underline">
        Read More
      </CustomLink>
    </div>
  );
};
