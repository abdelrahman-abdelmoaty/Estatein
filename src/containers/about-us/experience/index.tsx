import SectionLayout from "@/components/ui/SectionLayout";
import SectionHeader from "@/components/ui/SectionHeader";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";

const Experience = () => {
  return (
    <SectionLayout variant="col" id="our-works">
      <SectionHeader
        heading="Navigating the Estatein Experience"
        paragraph="At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works."
      />
      <div className="dt:gap[40px] grid gap-[20px] md:grid-cols-2 xl:grid-cols-3 xl:gap-[30px]">
        {EXPERIENCES.map((e) => (
          <ExperienceCard key={e.id} experience={e} />
        ))}
      </div>
    </SectionLayout>
  );
};

export default Experience;

type Experience = { id: number; title: string; desc: string };

const ExperienceCard = ({
  experience: { id, title, desc },
}: {
  experience: Experience;
}) => {
  return (
    <div className="flex flex-col">
      <div className="border-l border-purple-60 p-[16px] text-[16px] font-medium leading-normal dt:p-[20px] dt:text-[20px]">
        Step {id < 10 ? `0${id}` : id}
      </div>
      <div className="before:content-[''] after:content-[''] relative flex flex-1 flex-col gap-[14px] rounded-r-xl rounded-bl-xl border border-grey-15 bg-[linear-gradient(121deg,#703BF7_-49.01%,rgba(112,59,247,0.00)_13.65%)] p-[30px] before:absolute before:left-[-1px] before:top-[-1px] before:z-40 before:h-[1px] before:w-1/2 before:bg-gradient-to-r before:from-purple-60 before:to-grey-15 after:absolute after:left-[-1px] after:top-[-1px] after:z-40 after:h-1/2 after:w-[1px] after:bg-gradient-to-b after:from-purple-60 after:to-grey-15 xl:gap-[16px] xl:p-[40px] dt:gap-[20px] dt:p-[50px]">
        <Heading variant="large">{title}</Heading>
        <Paragraph>{desc}</Paragraph>
      </div>
    </div>
  );
};

const EXPERIENCES: Experience[] = [
  {
    id: 1,
    title: "Discover a World of Possibilities",
    desc: "With over 3 years in the industry, we&apos;ve amassed a wealth of knowledge and experience.Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget.",
  },
  {
    id: 2,
    title: "Narrowing Down Your Choices",
    desc: "Once you&apos;ve found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.",
  },
  {
    id: 3,
    title: "Personalized Guidance",
    desc: "Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.",
  },
  {
    id: 4,
    title: "See It for Yourself",
    desc: "Arrange viewings of the properties you&apos;re interested in. We&apos;ll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home.",
  },
  {
    id: 5,
    title: "Making Informed Decisions",
    desc: "Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed and confident in your choice.",
  },
  {
    id: 6,
    title: "Getting the Best Deal",
    desc: "We&apos;ll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms.",
  },
];
