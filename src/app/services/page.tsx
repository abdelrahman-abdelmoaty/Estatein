import Statistics from "@/components/Statistics";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import Experience from "@/containers/about-us/experience";
import Features from "@/containers/home/hero/Features";

const page = () => {
  return (
    <>
      <div>
        <div className="mt-[-50px] bg-[linear-gradient(96deg,#262626_-26.82%,rgba(38,38,38,0.00)_40.46%)] py-[50px] xl:mt-[-70px] xl:py-[100px] dt:mt-[-100px] dt:py-[150px]">
          <div className="container">
            <Heading>Elevate Your Real Estate Experience</Heading>
            <Paragraph className="xl:max-w-[80%]">
              Welcome to Estatein, where your real estate aspirations meet
              expert guidance. Explore our comprehensive range of services, each
              designed to cater to your unique needs and dreams.
            </Paragraph>
          </div>
        </div>
        <Features />
      </div>
      <Experience />
    </>
  );
};

export default page;
