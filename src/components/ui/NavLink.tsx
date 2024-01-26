"use client";

import { cn } from "@/utils/lib";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps extends LinkProps<HTMLLinkElement> {
  children: React.ReactNode;
}

export default function NavLink({ children, ...props }: NavLinkProps) {
  const pathname = usePathname();
  return (
    <Link
      className={cn(
        "border border-grey-15 hover:bg-grey-08 transition py-[12px] px-[20px] dt:py-[14px] dt:px-[24px] font-medium rounded-[10px] text-[14px] dt:text-[18px]",
        {
          "bg-grey-08": pathname === props.href,
        }
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
