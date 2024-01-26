import SectionLayout from "@/components/SectionLayout";
import CustomLink from "@/components/ui/CustomLink";
import Link from "next/link";
import React from "react";

const Questions = () => {
  return (
    <SectionLayout
      h1="Frequently Asked Questions"
      p="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."
      btn="View All FAQ’s"
    >
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-[20px] dt:gap[30px]">
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
    answer: "Learn how to use our user-friendly search tools to find properties that match your criteria.",
    url: "#",
  },
  {
    question: "What documents do I need to sell my property through Estatein?",
    answer: "Find out about the necessary documentation for listing your property with us.",
    url: "#",
  },
  {
    question: "How can I contact an Estatein agent?",
    answer: "Discover the different ways you can get in touch with our experienced agents.",
    url: "#",
  },
];

const Card = ({ question: { question, answer, url } }: { question: Question }) => {
  return (
    <div className="odd:hidden md:odd:flex rounded-base border border-grey-15 p-[40px] dt:p-[50px] flex flex-col gap-[24px] dt:gap-[30px] justify-between">
      <p className="font-semibold text-[20px] dt:text-[24px] mb-[10px] dt:mb-[14px] flex-1">{question}</p>
      <p className="font-medium text-[16px] dt:text-[18px] text-grey-60">{answer}</p>
      <CustomLink href={url} className="w-fit bg-grey-08 dt:py-[16px] dt:px-[24px] hover:opacity-80">
        Read More
      </CustomLink>
    </div>
  );
};
