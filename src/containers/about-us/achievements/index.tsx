import AbstractDesignPositioned from "@/components/AbstractDesignPositioned";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import SectionHeader from "@/components/ui/SectionHeader";

const Achievements = () => {
  return (
    <section className="container flex flex-col gap-[40px] xl:gap-[60px] dt:gap-[80px]">
      <SectionHeader
        heading="Our Achievements"
        paragraph="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary."
      />
      <div className="dt:gap[40px] grid gap-[20px] md:grid-cols-2 xl:grid-cols-3 xl:gap-[30px]">
        {ACHIEVEMENTS.slice(0, 3).map((a, idx) => (
          <AchievementCard key={idx} achievement={a} />
        ))}
      </div>
    </section>
  );
};

export default Achievements;

type Achievement = { title: string; desc: string };

const AchievementCard = ({
  achievement: { title, desc },
}: {
  achievement: Achievement;
}) => {
  return (
    <div className="flex flex-col gap-[16px] rounded-xl border border-grey-15 p-[30px] outline outline-4 outline-grey-10 xl:gap-[24px] xl:p-[40px] xl:outline-[6px] dt:gap-[30px] dt:p-[50px] dt:outline-[8px]">
      <Heading variant="medium">{title}</Heading>
      <Paragraph>{desc}</Paragraph>
    </div>
  );
};

const ACHIEVEMENTS: Achievement[] = [
  {
    title: "3+ Years of Excellence",
    desc: "With over 3 years in the industry, we've amassed a wealth of knowledge and experience.",
  },
  {
    title: "Happy Clients",
    desc: "Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.",
  },
  {
    title: "Industry Recognition",
    desc: "We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence.",
  },
];
