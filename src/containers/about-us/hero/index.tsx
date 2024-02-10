import Statistics from "@/components/Statistics";
import AbstractDesignPositioned from "@/components/AbstractDesignPositioned";
import Image from "next/image";
import hero2 from "@images/hero/hero2.png";
import { AbstractDesign, LinesAbstractDesign } from "@/components/SVGs";

const Hero = () => {
  return (
    <section className="container flex flex-col gap-[40px] md:flex-row xl:gap-[60px] dt:gap-[80px]">
      <div className="order-2 flex flex-1 flex-col gap-[40px] md:order-1 xl:gap-[50px] dt:gap-[80px]">
        <div>
          <AbstractDesignPositioned />
          <h2 className="text-[28px] font-semibold leading-normal xl:text-[38px] dt:text-[48px]">
            Our Journey
          </h2>
          <p className="text-[14px] font-medium text-grey-60 xl:text-[16px] dt:text-[18px]">
            Our story is one of continuous growth and evolution. We started as a
            small team with big dreams, determined to create a real estate
            platform that transcended the ordinary. Over the years, we&apos;ve
            expanded our reach, forged valuable partnerships, and gained the
            trust of countless clients.
          </p>
        </div>
        <Statistics />
      </div>
      <div className="relative order-1 flex-1 overflow-hidden rounded-xl border border-grey-15 md:order-2">
        <LinesAbstractDesign
          viewBox="0 0 755 546"
          className="absolute bottom-0 left-0 z-10 h-full w-full opacity-25"
        />
        <Image
          src={hero2}
          alt="hero2"
          className="relative z-20"
          loading="eager"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </section>
  );
};

export default Hero;
