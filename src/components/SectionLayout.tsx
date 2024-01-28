import React from "react";
import { ArrowLeft, ArrowRight } from "./SVGs";
import SectionHeaderWithLink from "./ui/SectionHeaderWithLink";

export default function SectionLayout({
  heading,
  paragraph,
  href,
  linkLabel,
  children,
}: {
  heading: string;
  paragraph: string;
  href: string;
  linkLabel: string;
  children: React.ReactNode;
}) {
  return (
    <div className="container relative z-20">
      <SectionHeaderWithLink
        heading={heading}
        paragraph={paragraph}
        linkLabel={linkLabel}
        href={href}
      />
      {children}
      <hr className="mb-4 mt-[40px] border-grey-15 dt:mb-5 dt:mt-[50px]" />
      <div className="flex items-center justify-between">
        <div className="order-2 text-[14px] xl:order-1 xl:text-[16px] dt:text-[20px]">
          <span>01</span> <span className="text-grey-60">of 60</span>
        </div>
        <div className="order-1 flex items-center gap-2.5 xl:order-2">
          <button className="rounded-full border border-grey-15 p-2.5 dt:p-3.5">
            <ArrowLeft className="h-6 w-6 text-grey-50 dt:h-7.5 dt:w-7.5" />
          </button>
          <button className="rounded-full border border-grey-15 bg-grey-10 p-2.5 transition hover:bg-grey-08 dt:p-3.5">
            <ArrowRight className="h-6 w-6 dt:h-7.5 dt:w-7.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
