import Link, { LinkProps } from "next/link";
import { cn } from "@/utils/lib";

interface CustomLinkProps extends LinkProps<HTMLLinkElement> {
  className?: string;
  children: React.ReactNode;
}
export default function CustomLink({ children, className, ...props }: CustomLinkProps) {
  return (
    <Link
      className={cn(
        "border border-grey-15 bg-grey-10 rounded-[8px] dt:rounded-[10px] font-medium text-[14px] dt:text-[18px] py-[14px] px-[20px] dt:py-[18px] dt:px-[24px] transition hover:bg-grey-08 text-center",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
