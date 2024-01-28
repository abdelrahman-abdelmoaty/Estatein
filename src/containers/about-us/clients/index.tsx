import SectionLayout from "@/components/ui/SectionLayout";
import SectionHeader from "@/components/ui/SectionHeader";
import { ArrowLeft, ArrowRight, Category, Domain } from "@/components/SVGs";
import Paragraph from "@/components/ui/Paragraph";
import Heading from "@/components/ui/Heading";
import CustomLink from "@/components/ui/CustomLink";

const Clients = () => {
  return (
    <SectionLayout variant="col">
      <SectionHeader
        heading="Our Valued Clients"
        paragraph="At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving"
      />
      <div className="grid gap-[40px] xl:grid-cols-2 dt:gap-[50px]">
        <div className="flex flex-col gap-[30px] rounded-xl border border-grey-15 p-[30px] outline outline-4 outline-grey-10 xl:p-[40px] xl:outline-[6px] dt:gap-[40px] dt:p-[50px] dt:outline-[8px]">
          <div className="flex flex-col gap-[20px] md:flex-row md:items-center dt:gap-[30px]">
            <div>
              <Paragraph>Since 2019</Paragraph>
              <Heading>ABC Corporation</Heading>
            </div>
            <CustomLink href="#" className="w-full">
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
                Commercial Real Estate
              </Paragraph>
            </div>
            <div className="border-l border-grey-15"></div>
            <div className="flex-1">
              <div className="mb-[6px] flex items-center gap-[4px] dt:mb-[8px] dt:gap-[6px]">
                <Category className="h-5 w-5 dt:h-6 dt:w-6" />
                <Paragraph>Category</Paragraph>
              </div>
              <Paragraph className="text-[16px] text-white dt:text-[20px]">
                Luxury Home Development
              </Paragraph>
            </div>
          </div>
          <div className="flex-1 rounded-xl border border-grey-15 p-[20px] xl:p-[24px] dt:p-[30px]">
            <Paragraph>What They Said 🤗</Paragraph>
            <Paragraph className="my-[10px] text-white dt:mt-[14px]">
              Estatein&apos;s expertise in finding the perfect office space for
              our expanding operations was invaluable. They truly understand our
              business needs.
            </Paragraph>
          </div>
        </div>
        <div className="flex flex-col gap-[30px] rounded-xl border border-grey-15 p-[30px] outline outline-4 outline-grey-10 xl:p-[40px] xl:outline-[6px] dt:gap-[40px] dt:p-[50px] dt:outline-[8px]">
          <div className="flex flex-col gap-[20px] md:flex-row md:items-center dt:gap-[30px]">
            <div>
              <Paragraph>Since 2018</Paragraph>
              <Heading>GreenTech Enterprises</Heading>
            </div>
            <CustomLink href="#" className="w-full">
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
                Commercial Real Estate
              </Paragraph>
            </div>
            <div className="border-l border-grey-15"></div>
            <div className="flex-1">
              <div className="mb-[6px] flex items-center gap-[4px] dt:mb-[8px] dt:gap-[6px]">
                <Category className="h-5 w-5 dt:h-6 dt:w-6" />
                <Paragraph>Category</Paragraph>
              </div>
              <Paragraph className="text-[16px] text-white dt:text-[20px]">
                Retail Space
              </Paragraph>
            </div>
          </div>
          <div className="flex-1 rounded-xl border border-grey-15 p-[20px] xl:p-[24px] dt:p-[30px]">
            <Paragraph>What They Said 🤗</Paragraph>
            <Paragraph className="my-[10px] text-white dt:mt-[14px]">
              Estatein&apos;s ability to identify prime retail locations helped
              us expand our brand presence. They are a trusted partner in our
              growth.
            </Paragraph>
          </div>
        </div>
      </div>
      <div>
        <hr className="mb-4 border-grey-15 dt:mb-5" />
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
    </SectionLayout>
  );
};

export default Clients;
