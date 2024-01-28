import { cn } from "@/utils/lib";
import AbstractDesignPositioned from "../AbstractDesignPositioned";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import CustomLink from "./CustomLink";

interface SectionHeaderWithLinkProps
  extends React.HTMLAttributes<HTMLDivElement> {
  heading: string;
  paragraph: string;
  linkLabel: string;
  href: string;
}

export default function SectionHeaderWithLink({
  heading,
  paragraph,
  linkLabel,
  href,
  className,
  ...props
}: SectionHeaderWithLinkProps) {
  return (
    <div className={cn(className)} {...props}>
      <AbstractDesignPositioned />
      <Heading>{heading}</Heading>
      <div className="mb-[40px] flex items-center justify-between xl:mb-[60px] dt:mb-[80px]">
        <Paragraph className="xl:max-w-[75%]">{paragraph}</Paragraph>
        <CustomLink href={href} className="hidden xl:block ">
          {linkLabel}
        </CustomLink>
      </div>
    </div>
  );
}
