import { CtaLeft, CtaRight } from "@/components/SVGs";
import CustomLink from "@/components/ui/CustomLink";

const CTA = () => {
  return (
    <div className="relative flex flex-col overflow-hidden border-y border-grey-15 py-[60px] dt:py-[100px]">
      <CtaLeft className="absolute bottom-0 left-0 z-10" />
      <CtaRight className="absolute bottom-0 right-0 z-10" />
      <div className="container relative z-20 flex flex-col items-center gap-x-[150px] gap-y-12 sm:flex-row dt:gap-x-[250px]">
        <div className="flex flex-1 flex-col gap-[10px] dt:gap-[14px]">
          <h4 className="text-[28px] font-semibold xl:text-[38px] dt:text-[48px]">
            Start Your Real Estate Journey Today
          </h4>
          <p className="text-[14px] font-medium xl:text-[16px] dt:text-[18px]">
            Your dream property is just a click away. Whether you&apos;re
            looking for a new home, a strategic investment, or expert real
            estate advice, Estatein is here to assist you every step of the way.
            Take the first step towards your real estate goals and explore our
            available properties or get in touch with our team for personalized
            assistance.
          </p>
        </div>
        <CustomLink href="#" className="">
          Explore Properties
        </CustomLink>
      </div>
    </div>
  );
};

export default CTA;
