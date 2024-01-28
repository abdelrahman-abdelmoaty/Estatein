import { cn } from "@/utils/lib";

interface SectionLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  variant: "row" | "col";
}

export default function SectionLayout({
  children,
  variant,
  className,
  ...props
}: SectionLayoutProps) {
  return (
    <div
      className={cn(
        "container flex gap-[40px] xl:gap-[60px] dt:gap-[80px]",
        {
          "flex-col": variant === "col",
          "flex-row": variant === "row",
        },
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
