import React from "react";
import Image1 from "@images/buildings/image1.png";
import Image2 from "@images/buildings/image2.png";
import Image3 from "@images/buildings/image3.png";
import SectionLayout from "@/components/SectionLayout";
import CustomLink from "@/components/ui/CustomLink";
import Image from "next/image";
import Paragraph from "@/components/ui/Paragraph";

const Properties = () => {
  return (
    <SectionLayout
      key={1}
      heading="Featured Properties"
      paragraph="Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click 'View Details' for more information."
      linkLabel="View All Properties"
      href="#"
    >
      <div className="dt:gap[30px] grid gap-[20px] md:grid-cols-2 xl:grid-cols-3">
        {PROPERTIES.slice(0, 3).map((p, idx) => (
          <Card key={idx} property={p} />
        ))}
      </div>
    </SectionLayout>
  );
};

export default Properties;

const PROPERTIES: Property[] = [
  {
    title: "Seaside Serenity Villa",
    desc: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...",
    img: Image1.src,
    features: ["4-Bedroom", "3-Bathrooms", "Villa"],
    price: 550000,
  },
  {
    title: "Seaside Serenity Villa",
    desc: "A chic fully-furnished 2-bedroom apartment with panoramic city views...",
    img: Image2.src,
    features: ["4-Bedroom", "3-Bathrooms", "Villa"],
    price: 550000,
  },
  {
    title: "Seaside Serenity Villa",
    desc: "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...",
    img: Image3.src,
    features: ["4-Bedroom", "3-Bathrooms", "Villa"],
    price: 550000,
  },
];

type Property = {
  title: string;
  desc: string;
  img: string;
  features: string[];
  price: number;
};
const Card = ({
  property: { title, desc, img, features, price },
}: {
  property: Property;
}) => {
  return (
    <div className="rounded-xl border border-grey-15 p-[30px] odd:hidden md:odd:block dt:p-10">
      <div className="relative mb-[16px] h-auto w-full xl:mb-[20px] dt:mb-[30px]">
        <Image
          src={img}
          alt={title}
          className="w-full rounded-base"
          width={432}
          height={318}
        />
      </div>
      <div className="flex flex-col gap-6 dt:gap-[30px]">
        <div>
          <h4 className="mb-[6px] text-[20px] font-semibold dt:text-[24px]">
            {title}
          </h4>
          <Paragraph>
            {desc}{" "}
            <a href="#" className="text-white">
              Read More
            </a>
          </Paragraph>
        </div>
        <div className="flex gap-[6px] dt:gap-2.5">
          {features.slice(0, 3).map((f, idx) => {
            return (
              <div
                key={idx}
                className="rounded-[28px] border border-grey-15 px-[14px] py-[6px] text-[14px] font-medium dt:py-[8px] dt:text-[18px]"
              >
                {f}
              </div>
            );
          })}
        </div>
        <div className="flex items-center gap-[40px] dt:gap-[50px]">
          <div className="flex flex-1 flex-col gap-[2px]">
            <span className="text-[14px] font-medium text-grey-60 dt:text-[18px]">
              Price
            </span>
            <span className="text-[20px] font-semibold dt:text-[24px]">
              ${price}
            </span>
          </div>
          <CustomLink href="#" variant="purple" className="flex-[2]">
            View Property Details
          </CustomLink>
        </div>
      </div>
    </div>
  );
};
