import SectionLayout from "@/components/SectionLayout";
import CustomLink from "@/components/ui/CustomLink";
import Paragraph from "@/components/ui/Paragraph";
import React from "react";

const Questions = () => {
  return (
    <SectionLayout
      key={2}
      heading="Frequently Asked Questions"
      paragraph="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."
      linkLabel="View All FAQ’s"
      href="#"
    >
      <div className="dt:gap[30px] grid gap-[20px] sm:grid-cols-2 lg:grid-cols-3">
        {QUESTIONS.slice(0, 3).map((q, idx) => (
          <Card key={idx} question={q} />
        ))}
      </div>
    </SectionLayout>
  );
};

export default Questions;

type Question = { question: string; answer: string; url: string };

const QUESTIONS: Question[] = [
  {
    question: "How do I search for properties on Estatein?",
    answer:
      "Learn how to use our user-friendly search tools to find properties that match your criteria.",
    url: "#",
  },
  {
    question: "What documents do I need to sell my property through Estatein?",
    answer:
      "Find out about the necessary documentation for listing your property with us.",
    url: "#",
  },
  {
    question: "How can I contact an Estatein agent?",
    answer:
      "Discover the different ways you can get in touch with our experienced agents.",
    url: "#",
  },
];

const Card = ({
  question: { question, answer, url },
}: {
  question: Question;
}) => {
  return (
    <div className="flex flex-col justify-between gap-[24px] rounded-base border border-grey-15 p-[40px] odd:hidden sm:odd:flex dt:gap-[30px] dt:p-[50px]">
      <p className="mb-[10px] flex-1 text-[20px] font-semibold dt:mb-[14px] dt:text-[24px]">
        {question}
      </p>
      <Paragraph>{answer}</Paragraph>
      <CustomLink href={url} variant="dark" className="underline">
        Read More
      </CustomLink>
    </div>
  );
};
