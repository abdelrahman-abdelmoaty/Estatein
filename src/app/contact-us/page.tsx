import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import SectionHeader from "@/components/ui/SectionHeader";
import Features from "@/containers/home/hero/Features";

const page = () => {
  return (
    <>
      <div>
        {" "}
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
        <Features />
      </div>
      <div className="container flex flex-col gap-[40px] xl:gap-[60px] dt:gap-[80px]">
        <SectionHeader
          heading="Let's Connect"
          paragraph="We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. Whether you're a prospective client, partner, or simply curious about our services, we're here to answer your questions and provide the assistance you need."
        />
        <div className="text-center">To be continued</div>
      </div>
    </>
  );
};

export default page;
