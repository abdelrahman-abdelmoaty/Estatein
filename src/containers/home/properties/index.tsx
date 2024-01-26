import React from "react";
import Image1 from "@images/buildings/image1.png";
import Image2 from "@images/buildings/image2.png";
import Image3 from "@images/buildings/image3.png";
import SectionLayout from "@/components/SectionLayout";
import CustomLink from "@/components/ui/CustomLink";
import Image from "next/image";

const Properties = () => {
  return (
    <SectionLayout
      key={1}
      h1="Featured Properties"
      p="Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click 'View Details' for more information."
      btn="View All Properties"
    >
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-[20px] dt:gap[30px]">
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

type Property = { title: string; desc: string; img: string; features: string[]; price: number };
const Card = ({ property: { title, desc, img, features, price } }: { property: Property }) => {
  return (
    <div className="odd:hidden md:odd:block border border-grey-15 p-[30px] dt:p-10 rounded-xl">
      <div className="w-full h-auto mb-[16px] xl:mb-[20px] dt:mb-[30px] relative">
        <Image src={img} alt={title} className="w-full rounded-base" width={432} height={318} />
      </div>
      <div className="flex flex-col gap-6 dt:gap-[30px]">
        <div>
          <h4 className="font-semibold text-[20px] dt:text-[24px] mb-[6px]">{title}</h4>
          <p className="font-medium text-[16px] dt:text-[18px] text-grey-60">
            {desc}{" "}
            <a href="#" className="text-white">
              Read More
            </a>
          </p>
        </div>
        <div className="flex gap-[6px] dt:gap-2.5">
          {features.slice(0, 3).map((f) => {
            return (
              <div className="font-medium rounded-[28px] text-[14px] dt:text-[18px] py-[6px] dt:py-[8px] px-[14px] border border-grey-15">{f}</div>
            );
          })}
        </div>
        <div className="flex items-center gap-[40px] dt:gap-[50px]">
          <div className="flex flex-1 flex-col gap-[2px]">
            <span className="text-grey-60 font-medium text-[14px] dt:text-[18px]">Price</span>
            <span className="font-semibold text-[20px] dt:text-[24px]">${price}</span>
          </div>
          <CustomLink href="#" className="flex-[2] bg-purple-60">
            View Property Details
          </CustomLink>
        </div>
      </div>
    </div>
  );
};
