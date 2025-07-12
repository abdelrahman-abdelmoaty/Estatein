import SectionLayout from "@/components/ui/SectionLayout";
import SectionHeader from "@/components/ui/SectionHeader";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import CustomLink from "@/components/ui/CustomLink";
import Image from "next/image";
import profile1 from "@images/profiles/profile1.png";
import profile2 from "@images/profiles/profile2.png";

const Team = () => {
  return (
    <SectionLayout variant="col" id="our-team">
      <SectionHeader
        heading="Meet Our Team"
        paragraph="Our dedicated team of real estate professionals brings years of experience and expertise to help you achieve your property goals. Get to know the people behind Estatein's success."
      />
      <div className="grid gap-[30px] md:grid-cols-2 xl:grid-cols-3 dt:gap-[40px]">
        {TEAM_MEMBERS.map((member, idx) => (
          <TeamCard key={idx} member={member} />
        ))}
      </div>
    </SectionLayout>
  );
};

export default Team;

type TeamMember = {
  name: string;
  position: string;
  description: string;
  image: string;
  experience: string;
};

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Sarah Johnson",
    position: "Senior Real Estate Agent",
    description: "With over 10 years of experience in luxury real estate, Sarah specializes in high-end residential properties and investment opportunities.",
    image: profile1.src,
    experience: "10+ Years Experience"
  },
  {
    name: "Michael Chen",
    position: "Property Investment Specialist",
    description: "Michael leads our investment division, helping clients build profitable real estate portfolios with strategic market insights.",
    image: profile2.src,
    experience: "8+ Years Experience"
  },
  {
    name: "Emily Rodriguez",
    position: "Commercial Real Estate Expert",
    description: "Emily focuses on commercial properties and business real estate solutions, serving corporate clients and entrepreneurs.",
    image: profile1.src,
    experience: "12+ Years Experience"
  },
  {
    name: "David Thompson",
    position: "Property Management Director",
    description: "David oversees our property management services, ensuring optimal maintenance and tenant satisfaction for all managed properties.",
    image: profile2.src,
    experience: "15+ Years Experience"
  },
  {
    name: "Lisa Wang",
    position: "Market Research Analyst",
    description: "Lisa provides crucial market insights and data analysis to help clients make informed real estate decisions.",
    image: profile1.src,
    experience: "6+ Years Experience"
  },
  {
    name: "Robert Martinez",
    position: "Client Relations Manager",
    description: "Robert ensures exceptional client experience throughout the entire real estate journey, from initial consultation to closing.",
    image: profile2.src,
    experience: "9+ Years Experience"
  }
];

const TeamCard = ({ member }: { member: TeamMember }) => {
  return (
    <div className="flex flex-col gap-[20px] rounded-xl border border-grey-15 p-[30px] xl:gap-[25px] xl:p-[40px] dt:gap-[30px] dt:p-[50px]">
      <div className="flex items-center gap-[15px] dt:gap-[20px]">
        <div className="relative h-[60px] w-[60px] overflow-hidden rounded-full border border-grey-15 xl:h-[70px] xl:w-[70px] dt:h-[80px] dt:w-[80px]">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <Heading variant="small">{member.name}</Heading>
          <Paragraph className="text-purple-60">{member.position}</Paragraph>
        </div>
      </div>
      
      <div className="flex flex-col gap-[15px] dt:gap-[20px]">
        <Paragraph>{member.description}</Paragraph>
        <div className="flex items-center justify-between">
          <span className="text-[12px] font-medium text-grey-60 xl:text-[14px] dt:text-[16px]">
            {member.experience}
          </span>
          <CustomLink href="/contact-us" variant="dark" className="text-[12px] xl:text-[14px] dt:text-[16px]">
            Contact
          </CustomLink>
        </div>
      </div>
    </div>
  );
};