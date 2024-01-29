import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import Properties from "@/containers/home/properties";

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
      <Properties />
    </>
  );
};

export default page;
