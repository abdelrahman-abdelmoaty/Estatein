import React from "react";
import { AbstractDesign, ArrowLeft, ArrowRight } from "./SVGs";
import CustomLink from "./ui/CustomLink";

export default function SectionLayout({ h1, p, btn, children }: { h1: string; p: string; btn: string; children: React.ReactNode }) {
  return (
    <div className="container py-[50px] relative z-20">
      <div className="relative right-5 bottom-1.5">
        <AbstractDesign />
      </div>
      <h1 className="font-semibold text-[28px] xl:text-[38px] dt:text-[48px] mb-2.5 dt:mb-3.5">{h1}</h1>
      <div className="flex items-center justify-between mb-[40px] xl:mb-[60px] dt:mb-[80px]">
        <p className="flex-1 text-grey-60 text-[14px] xl:text-[16px] dt:text-[18px] xl:max-w-[75%]">{p}</p>
        <CustomLink href="#" className="hidden xl:block ">
          {btn}
        </CustomLink>
      </div>
      {children}
      <hr className="border-grey-15 mt-[40px] mb-4 dt:mt-[50px] dt:mb-5" />
      <div className="flex justify-between items-center">
        <div className="order-2 xl:order-1 text-[14px] xl:text-[16px] dt:text-[20px]">
          <span>01</span> <span className="text-grey-60">of 60</span>
        </div>
        <div className="order-1 xl:order-2 flex items-center gap-2.5">
          <button className="p-2.5 dt:p-3.5 rounded-full border border-grey-15">
            <ArrowLeft className="w-6 h-6 dt:w-7.5 dt:h-7.5 text-grey-50" />
          </button>
          <button className="p-2.5 dt:p-3.5 rounded-full border border-grey-15 bg-grey-10 hover:bg-grey-08 transition">
            <ArrowRight className="w-6 h-6 dt:w-7.5 dt:h-7.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
