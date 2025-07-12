import { Arrow, SVG1, SVG2, SVG3, SVG4 } from "@/components/SVGs";

const Features = () => {
  return (
    <section id="features" className="my-2 grid grid-cols-2 gap-2.5 border border-grey-15 bg-grey-08 p-2.5 outline outline-8 outline-grey-10 md:grid-cols-4 dt:gap-5 dt:p-5">
      <div className="group relative flex cursor-pointer items-center justify-center rounded-base border border-grey-15 bg-grey-10 px-4 py-7.5 text-center dt:px-5 dt:py-10">
        <div className="flex flex-col items-center gap-5">
          <SVG1 className="h-15 w-15 dt:h-20.5 dt:w-20.5" />
          <span className="font-semibold leading-normal md:text-base dt:text-xl">
            Find Your Dream Home
          </span>
        </div>
        <div className="absolute right-5 top-5 text-grey-30 transition group-hover:text-white">
          <Arrow className="md:h-6.5 md:w-6.5 dt:h-8.5 dt:w-8.5" />
        </div>
      </div>
      <div className="group relative flex cursor-pointer items-center justify-center rounded-base border border-grey-15 bg-grey-10 px-4 py-7.5 text-center dt:px-5 dt:py-10">
        <div className="flex flex-col items-center gap-5">
          <SVG2 className="h-15 w-15 dt:h-20.5 dt:w-20.5" />
          <span className="font-semibold leading-normal md:text-base dt:text-xl">
            Unlock Property Value
          </span>
        </div>
        <div className="absolute right-5 top-5 text-grey-30 transition group-hover:text-white">
          <Arrow className="md:h-6.5 md:w-6.5 dt:h-8.5 dt:w-8.5" />
        </div>
      </div>
      <div className="group relative flex cursor-pointer items-center justify-center rounded-base border border-grey-15 bg-grey-10 px-4 py-7.5 text-center dt:px-5 dt:py-10">
        <div className="flex flex-col items-center gap-5">
          <SVG3 className="h-15 w-15 dt:h-20.5 dt:w-20.5" />
          <span className="font-semibold leading-normal md:text-base dt:text-xl">
            Effortless Property Management
          </span>
        </div>
        <div className="absolute right-5 top-5 text-grey-30 transition group-hover:text-white">
          <Arrow className="md:h-6.5 md:w-6.5 dt:h-8.5 dt:w-8.5" />
        </div>
      </div>
      <div className="group relative flex cursor-pointer items-center justify-center rounded-base border border-grey-15 bg-grey-10 px-4 py-7.5 text-center dt:px-5 dt:py-10">
        <div className="flex flex-col items-center gap-5">
          <SVG4 className="h-15 w-15 dt:h-20.5 dt:w-20.5" />
          <span className="font-semibold leading-normal md:text-base dt:text-xl">
            Smart Investments
          </span>
        </div>
        <div className="absolute right-5 top-5 text-grey-30 transition group-hover:text-white">
          <Arrow className="md:h-6.5 md:w-6.5 dt:h-8.5 dt:w-8.5" />
        </div>
      </div>
    </section>
  );
};

export default Features;
