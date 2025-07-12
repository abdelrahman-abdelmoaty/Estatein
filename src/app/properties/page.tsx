import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import Properties from "@/containers/home/properties";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Properties - Estatein | Find Your Dream Property",
  description: "Explore our curated selection of residential, commercial, and investment properties. Find your dream home or perfect investment opportunity with Estatein.",
};

const page = () => {
  return (
    <>
      <div className="mt-[-50px] bg-[linear-gradient(96deg,#262626_-26.82%,rgba(38,38,38,0.00)_40.46%)] py-[50px] xl:mt-[-70px] xl:py-[100px] dt:mt-[-100px] dt:py-[150px]">
        <div className="container">
          <Heading>Find Your Dream Property</Heading>
          <Paragraph className="xl:max-w-[80%]">
            Welcome to Estatein, where your dream property awaits in every
            corner of our beautiful world. Explore our curated selection of
            properties, each offering a unique story and a chance to redefine
            your life. With categories to suit every dreamer, your journey{" "}
          </Paragraph>
        </div>
      </div>
      <section id="portfolio">
        <Properties />
      </section>
      <section id="categories" className="container flex flex-col gap-[40px] xl:gap-[60px] dt:gap-[80px]">
        <div>
          <Heading>Property Categories</Heading>
          <Paragraph>
            Explore our diverse range of property categories designed to meet every need and lifestyle preference.
          </Paragraph>
        </div>
        <div className="grid gap-[30px] md:grid-cols-2 xl:grid-cols-3 dt:gap-[40px]">
          <div className="flex flex-col gap-[20px] rounded-xl border border-grey-15 p-[30px] xl:p-[40px] dt:p-[50px]">
            <Heading variant="medium">Residential Properties</Heading>
            <Paragraph>
              Luxury homes, apartments, and condominiums for comfortable living.
            </Paragraph>
          </div>
          <div className="flex flex-col gap-[20px] rounded-xl border border-grey-15 p-[30px] xl:p-[40px] dt:p-[50px]">
            <Heading variant="medium">Commercial Properties</Heading>
            <Paragraph>
              Office spaces, retail locations, and business investment opportunities.
            </Paragraph>
          </div>
          <div className="flex flex-col gap-[20px] rounded-xl border border-grey-15 p-[30px] xl:p-[40px] dt:p-[50px]">
            <Heading variant="medium">Investment Properties</Heading>
            <Paragraph>
              High-return properties perfect for building your investment portfolio.
            </Paragraph>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
