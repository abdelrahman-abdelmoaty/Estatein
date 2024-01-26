"use client";

import { cn } from "@/utils/lib";
import Link, { LinkProps } from "next/link";

interface FooterLinkProps extends LinkProps<HTMLLinkElement> {
  className?: string;
  children: React.ReactNode;
}

export default function FooterLink({ children, className, ...props }: FooterLinkProps) {
  return (
    <Link className={cn("font-medium text-[14px] xl:text-[16px] dt:text-[18px] hover:opacity-80 transition", className)} {...props}>
      {children}
    </Link>
  );
}
