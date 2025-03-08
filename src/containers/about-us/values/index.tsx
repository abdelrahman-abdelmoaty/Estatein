import { ClientCentric, Excellence, Star } from "@/components/SVGs";
import AbstractDesignPositioned from "@/components/AbstractDesignPositioned";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import SectionHeader from "@/components/ui/SectionHeader";
import React from "react";

const Values = () => {
  return (
    <section className="container flex flex-col items-center gap-[40px] md:flex-row xl:gap-[60px] dt:gap-[80px]">
      <div className="flex flex-1 flex-col gap-[40px] xl:gap-[50px] dt:gap-[80px]">
        <SectionHeader
          heading="Our Values"
          paragraph="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate
            platform that transcended the ordinary."
        />
      </div>
      <div
        className="grid flex-[2] gap-[20px] rounded-xl border border-grey-15 p-[24px] outline outline-[6px]
outline-grey-10 md:grid-cols-[1fr_1px_1fr] md:grid-rows-[1fr_1px_1fr] xl:gap-[24px] xl:p-[50px] xl:outline-[8px] dt:gap-[30px] dt:p-[60px] dt:outline-[10px]"
      >
        <div className="flex flex-col gap-[14px] xl:gap-[16px] dt:gap-[20px]">
          <div className="items flex gap-[8px] xl:gap-[10px] dt:gap-[14px]">
            <Star className="h-[24px] w-[24px] text-purple-75 xl:h-[28px] xl:w-[28px] dt:h-[34px] dt:w-[34px]" />
            <Heading variant="small">Trust</Heading>
          </div>
          <Paragraph>
            Trust is the cornerstone of every successful real estate
            transaction.
          </Paragraph>
        </div>
        <div className="hidden border-l border-grey-15 md:block"></div>
        <hr className="border-grey-15 md:hidden" />
        <div className="flex flex-col gap-[14px] xl:gap-[16px] dt:gap-[20px]">
          <div className="items flex gap-[8px] xl:gap-[10px] dt:gap-[14px]">
            <Excellence className="h-[24px] w-[24px] text-purple-75 xl:h-[28px] xl:w-[28px] dt:h-[34px] dt:w-[34px]" />
            <Heading variant="small">Excellence</Heading>
          </div>
          <Paragraph>
            We set the bar high for ourselves. From the properties we list to
            the services we provide.
          </Paragraph>
        </div>
        <hr className="border-grey-15 md:col-span-3" />
        <div className="flex flex-col gap-[14px] xl:gap-[16px] dt:gap-[20px]">
          <div className="items flex gap-[8px] xl:gap-[10px] dt:gap-[14px]">
            <ClientCentric className="h-[24px] w-[24px] text-purple-75 xl:h-[28px] xl:w-[28px] dt:h-[34px] dt:w-[34px]" />
            <Heading variant="small">Client-Centric</Heading>
          </div>
          <Paragraph>
            Your dreams and needs are at the center of our universe. We listen,
            understand.
          </Paragraph>
        </div>
        <div className="hidden border-l border-grey-15 md:block"></div>
        <hr className="border-grey-15 md:hidden" />
        <div className="flex flex-col gap-[14px] xl:gap-[16px] dt:gap-[20px]">
          <div className="items flex gap-[8px] xl:gap-[10px] dt:gap-[14px]">
            <Star className="h-[24px] w-[24px] text-purple-75 xl:h-[28px] xl:w-[28px] dt:h-[34px] dt:w-[34px]" />
            <Heading variant="small">Our Commitment</Heading>
          </div>
          <Paragraph>
            We are dedicated to providing you with the highest level of service,
            professionalism, and support.
          </Paragraph>
        </div>
      </div>
    </section>
  );
};

export default Values;
