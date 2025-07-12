"use client";

import { Star } from "@/components/SVGs";
import Image from "next/image";
import profile1 from "@images/profiles/profile1.png";
import profile2 from "@images/profiles/profile2.png";
import Paragraph from "@/components/ui/Paragraph";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useState } from "react";
import { ArrowLeft, ArrowRight } from "@/components/SVGs";
import Autoplay from "embla-carousel-autoplay";
import SectionHeaderWithLink from "@/components/ui/SectionHeaderWithLink";

const Testimonials = () => {
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
    <section id="testimonials" className="container relative z-20">
      <SectionHeaderWithLink
        heading="What Our Clients Say"
        paragraph="Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."
        linkLabel="View All Testimonials"
        href="/about-us"
      />
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="mr-4 min-w-0 flex-[0_0_100%] self-stretch md:flex-[0_0_50%] xl:flex-[0_0_32.5%]"
            >
              <Card testimonial={t} />
            </div>
          ))}
        </div>
      </div>
      <hr className="mb-4 mt-[40px] border-grey-15 dt:mb-5 dt:mt-[50px]" />
      <div className="flex items-center justify-between">
        <div className="order-2 text-[14px] xl:order-1 xl:text-[16px] dt:text-[20px]">
          <span>{String(currentIndex).padStart(2, "0")}</span>{" "}
          <span className="text-grey-60">
            of {String(TESTIMONIALS.length).padStart(2, "0")}
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
    </section>
  );
};

export default Testimonials;

type Testimonial = {
  title: string;
  desc: string;
  authorImg: string;
  authorName: string;
  authorAddress: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    title: "Exceptional Service!",
    desc: "Our experience with Estatein was outstanding. Their team&apos;s dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    authorImg: profile1.src,
    authorName: "Wade Warren",
    authorAddress: "USA, California",
  },
  {
    title: "Efficient and Reliable",
    desc: "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn&apos;t be happier with the results.",
    authorImg: profile2.src,
    authorName: "Emelie Thomson",
    authorAddress: "USA, Florida",
  },
  {
    title: "Trusted Advisors",
    desc: "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
    authorImg: profile1.src,
    authorName: "John Mans",
    authorAddress: "USA, Nevada",
  },
  {
    title: "Exceptional Service!",
    desc: "Our experience with Estatein was outstanding. Their team&apos;s dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    authorImg: profile1.src,
    authorName: "Wade Warren",
    authorAddress: "USA, California",
  },
  {
    title: "Efficient and Reliable",
    desc: "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn&apos;t be happier with the results.",
    authorImg: profile2.src,
    authorName: "Emelie Thomson",
    authorAddress: "USA, Florida",
  },
  {
    title: "Trusted Advisors",
    desc: "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
    authorImg: profile1.src,
    authorName: "John Mans",
    authorAddress: "USA, Nevada",
  },
];

const Card = ({
  testimonial: { title, desc, authorName, authorImg, authorAddress },
}: {
  testimonial: Testimonial;
}) => {
  return (
    <div className="flex h-full flex-col justify-between gap-[30px] rounded-base border border-grey-15 p-[40px] dt:gap-[40px] dt:p-[50px]">
      <div className="flex items-center gap-2 dt:gap-2.5">
        <div className="rounded-full border border-grey-15 p-[9px] text-[#FFE500] dt:p-2.5">
          <Star className="h-4 w-4 dt:h-5 dt:w-5 " />
        </div>
        <div className="rounded-full border border-grey-15 p-[9px] text-[#FFE500] dt:p-2.5">
          <Star className="h-4 w-4 dt:h-5 dt:w-5 " />
        </div>
        <div className="rounded-full border border-grey-15 p-[9px] text-[#FFE500] dt:p-2.5">
          <Star className="h-4 w-4 dt:h-5 dt:w-5 " />
        </div>
        <div className="rounded-full border border-grey-15 p-[9px] text-[#FFE500] dt:p-2.5">
          <Star className="h-4 w-4 dt:h-5 dt:w-5 " />
        </div>
        <div className="rounded-full border border-grey-15 p-[9px] text-[#FFE500] dt:p-2.5">
          <Star className="h-4 w-4 dt:h-5 dt:w-5 " />
        </div>
      </div>
      <div>
        <p className="mb-[10px] text-[20px] font-semibold dt:mb-[14px] dt:text-[24px]">
          {title}
        </p>
        <p className="text-[16px] font-medium dt:text-[18px] ">{desc}</p>
      </div>
      <div className="flex gap-[10px] dt:gap-[12px]">
        <div className="relative h-[50px] w-[50px] rounded-full dt:h-[60px] dt:w-[60px]">
          <Image src={authorImg} alt={authorName} fill />
        </div>
        <div className="flex flex-col">
          <p className="text-[18px] font-medium dt:text-[20px]">{authorName}</p>
          <Paragraph>{authorAddress}</Paragraph>
        </div>
      </div>
    </div>
  );
};
