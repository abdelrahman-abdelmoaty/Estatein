import Link, { LinkProps } from "next/link";
import { cn } from "@/utils/lib";

interface CustomLinkProps extends LinkProps<HTMLLinkElement> {
  className?: string;
  variant?: "default" | "dark" | "purple" | "footer";
  children: React.ReactNode;
}
export default function CustomLink({
  children,
  variant = "default",
  className,
  ...props
}: CustomLinkProps) {
  return (
    <Link
      className={cn(
        "rounded-[8px] border border-grey-15 px-[20px] py-[14px] text-center text-[14px] font-medium transition dt:rounded-[10px] dt:px-[24px] dt:py-[18px] dt:text-[18px]",
        {
          "bg-grey-10 hover:bg-grey-08": variant === "default",
          "w-fit bg-grey-08 hover:opacity-80 dt:px-[24px] dt:py-[16px]":
            variant === "dark",
          "h-fit w-full bg-purple-60 hover:opacity-80  sm:w-fit":
            variant === "purple",
          "border-none p-0 text-start hover:opacity-80 xl:p-0 dt:p-0":
            variant === "footer",
        },
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
