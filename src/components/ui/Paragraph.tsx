import { cn } from "@/utils/lib";

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export default function Paragraph({
  children,
  className,
  ...props
}: ParagraphProps) {
  return (
    <p
      className={cn(
        "text-[14px] text-grey-60 xl:text-[16px] dt:text-[18px]",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
}
