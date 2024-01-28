import { cn } from "@/utils/lib";
import AbstractDesignPositioned from "../AbstractDesignPositioned";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  heading: string;
  paragraph: string;
}

export default function SectionHeader({
  heading,
  paragraph,
  className,
  ...props
}: SectionHeaderProps) {
  return (
    <div className={cn("", className)} {...props}>
      <AbstractDesignPositioned />
      <Heading>{heading}</Heading>
      <Paragraph>{paragraph}</Paragraph>
    </div>
  );
}
