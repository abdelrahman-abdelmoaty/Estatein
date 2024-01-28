import { cn } from "@/utils/lib";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  variant?: "default" | "small" | "medium" | "large";
}

export default function Heading({
  children,
  variant = "default",
  className,
  ...props
}: HeadingProps) {
  return (
    <h2
      className={cn(
        "font-semibold leading-normal",
        {
          "mb-2.5 text-[28px]  xl:text-[38px] dt:mb-3.5 dt:text-[48px]":
            variant === "default",
          "text-[18px] xl:text-[20px] dt:text-[24px]": variant === "small",
          "text-[20px] xl:text-[24px] dt:text-[30px]": variant === "medium",
          "text-[18px] xl:text-[20px] dt:text-[26px]": variant === "large",
        },

        className,
      )}
    >
      {children}
    </h2>
  );
}
