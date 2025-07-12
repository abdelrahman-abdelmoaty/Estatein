import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import SectionHeader from "@/components/ui/SectionHeader";
import Questions from "@/containers/home/questions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - Estatein | Frequently Asked Questions",
  description: "Find answers to common questions about Estatein's services, property listings, and the real estate process. Get clarity and assistance every step of the way.",
};

const FAQPage = () => {
  return (
    <>
      <div className="mt-[-50px] bg-[linear-gradient(96deg,#262626_-26.82%,rgba(38,38,38,0.00)_40.46%)] py-[50px] xl:mt-[-70px] xl:py-[100px] dt:mt-[-100px] dt:py-[150px]">
        <div className="container">
          <Heading>Frequently Asked Questions</Heading>
          <Paragraph className="xl:max-w-[80%]">
            Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.
          </Paragraph>
        </div>
      </div>
      <Questions />
    </>
  );
};

export default FAQPage;