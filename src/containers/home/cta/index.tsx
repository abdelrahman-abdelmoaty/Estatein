import { CtaLeft, CtaRight } from "@/components/SVGs";
import CustomLink from "@/components/ui/CustomLink";

const CTA = () => {
  return (
    <div className="flex flex-col py-[60px] dt:py-[100px] relative border-y border-grey-15 overflow-hidden">
      <CtaLeft className="absolute bottom-0 left-0 z-10" />
      <CtaRight className="absolute bottom-0 right-0 z-10" />
      <div className="container flex flex-col items-center sm:flex-row gap-y-12 gap-x-[150px] dt:gap-x-[250px] relative z-20">
        <div className="flex-1 flex flex-col gap-[10px] dt:gap-[14px]">
          <h4 className="font-semibold text-[28px] xl:text-[38px] dt:text-[48px]">Start Your Real Estate Journey Today</h4>
          <p className="font-medium text-[14px] xl:text-[16px] dt:text-[18px]">
            Your dream property is just a click away. Whether you&aposre looking for a new home, a strategic investment, or expert real estate advice,
            Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available
            properties or get in touch with our team for personalized assistance.
          </p>
        </div>
        <CustomLink href="#" className="w-full sm:w-fit h-fit bg-purple-60">
          Explore Properties
        </CustomLink>
      </div>
    </div>
  );
};

export default CTA;
