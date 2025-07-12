import Statistics from "@/components/Statistics";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import Experience from "@/containers/about-us/experience";
import Features from "@/containers/home/hero/Features";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - Estatein | Real Estate Expertise & Solutions",
  description: "Discover our comprehensive real estate services including valuation mastery, strategic marketing, negotiation expertise, and property management solutions.",
};

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
      
      <section id="valuation-mastery" className="container flex flex-col gap-[40px] xl:gap-[60px] dt:gap-[80px]">
        <div>
          <Heading>Valuation Mastery</Heading>
          <Paragraph>
            Our expert team provides accurate property valuations using cutting-edge market analysis and years of industry experience. We combine advanced analytics with local market knowledge to deliver precise property assessments.
          </Paragraph>
        </div>
        <div className="grid gap-[30px] md:grid-cols-2 xl:grid-cols-3 dt:gap-[40px]">
          <div className="flex flex-col gap-[20px] rounded-xl border border-grey-15 p-[30px] xl:p-[40px] dt:p-[50px]">
            <Heading variant="medium">Market Analysis</Heading>
            <Paragraph>
              Comprehensive market research and comparative analysis to determine accurate property values based on current market trends.
            </Paragraph>
          </div>
          <div className="flex flex-col gap-[20px] rounded-xl border border-grey-15 p-[30px] xl:p-[40px] dt:p-[50px]">
            <Heading variant="medium">Property Inspection</Heading>
            <Paragraph>
              Detailed property assessments including condition evaluation, structural analysis, and feature documentation.
            </Paragraph>
          </div>
          <div className="flex flex-col gap-[20px] rounded-xl border border-grey-15 p-[30px] xl:p-[40px] dt:p-[50px]">
            <Heading variant="medium">Investment Analysis</Heading>
            <Paragraph>
              ROI calculations, rental yield assessments, and long-term investment potential analysis for informed decision-making.
            </Paragraph>
          </div>
        </div>
      </section>

      <section id="strategic-marketing" className="container flex flex-col gap-[40px] xl:gap-[60px] dt:gap-[80px]">
        <div>
          <Heading>Strategic Marketing</Heading>
          <Paragraph>
            Comprehensive marketing strategies to showcase your property to the right audience and maximize its market potential. Our multi-channel approach ensures maximum exposure and optimal pricing.
          </Paragraph>
        </div>
        <div className="grid gap-[30px] md:grid-cols-2 xl:grid-cols-3 dt:gap-[40px]">
          <div className="flex flex-col gap-[20px] rounded-xl border border-grey-15 p-[30px] xl:p-[40px] dt:p-[50px]">
            <Heading variant="medium">Digital Marketing</Heading>
            <Paragraph>
              Professional photography, virtual tours, social media campaigns, and online listing optimization across major platforms.
            </Paragraph>
          </div>
          <div className="flex flex-col gap-[20px] rounded-xl border border-grey-15 p-[30px] xl:p-[40px] dt:p-[50px]">
            <Heading variant="medium">Target Audience</Heading>
            <Paragraph>
              Buyer profiling and targeted marketing to reach qualified prospects most likely to purchase your property.
            </Paragraph>
          </div>
          <div className="flex flex-col gap-[20px] rounded-xl border border-grey-15 p-[30px] xl:p-[40px] dt:p-[50px]">
            <Heading variant="medium">Market Positioning</Heading>
            <Paragraph>
              Strategic pricing and positioning to differentiate your property in the competitive real estate market.
            </Paragraph>
          </div>
        </div>
      </section>

      <section id="negotiation-wizardry" className="container flex flex-col gap-[40px] xl:gap-[60px] dt:gap-[80px]">
        <div>
          <Heading>Negotiation Wizardry</Heading>
          <Paragraph>
            Expert negotiation skills to secure the best deals, whether you're buying, selling, or investing in real estate. Our experienced negotiators protect your interests and maximize value in every transaction.
          </Paragraph>
        </div>
        <div className="grid gap-[30px] md:grid-cols-2 xl:grid-cols-3 dt:gap-[40px]">
          <div className="flex flex-col gap-[20px] rounded-xl border border-grey-15 p-[30px] xl:p-[40px] dt:p-[50px]">
            <Heading variant="medium">Price Negotiation</Heading>
            <Paragraph>
              Strategic pricing discussions to achieve optimal sale prices for sellers and fair purchase prices for buyers.
            </Paragraph>
          </div>
          <div className="flex flex-col gap-[20px] rounded-xl border border-grey-15 p-[30px] xl:p-[40px] dt:p-[50px]">
            <Heading variant="medium">Contract Terms</Heading>
            <Paragraph>
              Negotiating favorable contract terms, contingencies, and conditions to protect your interests throughout the process.
            </Paragraph>
          </div>
          <div className="flex flex-col gap-[20px] rounded-xl border border-grey-15 p-[30px] xl:p-[40px] dt:p-[50px]">
            <Heading variant="medium">Deal Structuring</Heading>
            <Paragraph>
              Creative deal structuring and problem-solving to overcome obstacles and ensure successful transactions.
            </Paragraph>
          </div>
        </div>
      </section>

      <section id="closing-success" className="container flex flex-col gap-[40px] xl:gap-[60px] dt:gap-[80px]">
        <div>
          <Heading>Closing Success</Heading>
          <Paragraph>
            Smooth and efficient closing processes with our experienced team handling all the details for a successful transaction. We coordinate with all parties to ensure seamless property transfers.
          </Paragraph>
        </div>
        <div className="grid gap-[30px] md:grid-cols-2 xl:grid-cols-3 dt:gap-[40px]">
          <div className="flex flex-col gap-[20px] rounded-xl border border-grey-15 p-[30px] xl:p-[40px] dt:p-[50px]">
            <Heading variant="medium">Documentation</Heading>
            <Paragraph>
              Complete preparation and review of all legal documents, contracts, and paperwork required for closing.
            </Paragraph>
          </div>
          <div className="flex flex-col gap-[20px] rounded-xl border border-grey-15 p-[30px] xl:p-[40px] dt:p-[50px]">
            <Heading variant="medium">Coordination</Heading>
            <Paragraph>
              Seamless coordination between buyers, sellers, lenders, attorneys, and inspectors throughout the closing process.
            </Paragraph>
          </div>
          <div className="flex flex-col gap-[20px] rounded-xl border border-grey-15 p-[30px] xl:p-[40px] dt:p-[50px]">
            <Heading variant="medium">Final Walkthrough</Heading>
            <Paragraph>
              Comprehensive final inspections and walkthrough coordination to ensure everything is in perfect order.
            </Paragraph>
          </div>
        </div>
      </section>

      <section id="property-management" className="container flex flex-col gap-[40px] xl:gap-[60px] dt:gap-[80px]">
        <div>
          <Heading>Property Management</Heading>
          <Paragraph>
            Comprehensive property management services to maintain and optimize your real estate investments. From tenant screening to maintenance coordination, we handle every aspect of property management.
          </Paragraph>
        </div>
        <div className="grid gap-[30px] md:grid-cols-2 xl:grid-cols-3 dt:gap-[40px]">
          <div className="flex flex-col gap-[20px] rounded-xl border border-grey-15 p-[30px] xl:p-[40px] dt:p-[50px]">
            <Heading variant="medium">Tenant Services</Heading>
            <Paragraph>
              Professional tenant screening, lease management, rent collection, and responsive customer service for renters.
            </Paragraph>
          </div>
          <div className="flex flex-col gap-[20px] rounded-xl border border-grey-15 p-[30px] xl:p-[40px] dt:p-[50px]">
            <Heading variant="medium">Maintenance & Repairs</Heading>
            <Paragraph>
              24/7 maintenance coordination, regular inspections, preventive care, and emergency repair services.
            </Paragraph>
          </div>
          <div className="flex flex-col gap-[20px] rounded-xl border border-grey-15 p-[30px] xl:p-[40px] dt:p-[50px]">
            <Heading variant="medium">Financial Reporting</Heading>
            <Paragraph>
              Detailed financial reporting, expense tracking, tax preparation assistance, and investment performance analysis.
            </Paragraph>
          </div>
        </div>
      </section>

      <Experience />
    </>
  );
};

export default page;
