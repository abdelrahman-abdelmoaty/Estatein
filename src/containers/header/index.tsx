"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "@images/logo/logo.svg";
import abstractDesgin from "@images/abstract-designs/abstract-design-1.svg";
import Link from "next/link";
import { HamburgerBurger, XMark } from "@/components/SVGs";
import NavLink from "@/components/ui/NavLink";
import CustomLink from "@/components/ui/CustomLink";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [showBanner, setShowBanner] = useState(true);

  const handleCloseBanner = () => {
    setShowBanner(false);
  };
  return (
    <header className="relative z-50 bg-grey-10">
      {showBanner && (
        <div className="relative overflow-hidden">
          <div className="container flex items-center justify-start pb-5 pt-10 md:justify-center md:py-3.5 dt:py-4.5">
            <div className="relative z-20 flex  items-center gap-1 text-xs md:gap-2 md:text-sm dt:gap-2.5 dt:text-lg">
              <h1>✨Discover Your Dream Property with Estatein</h1>
              <a
                href="/about-us"
                className="cursor-pointer font-medium capitalize underline transition hover:opacity-80"
              >
                Learn More
              </a>
            </div>
            <div className="absolute left-0 top-1/2 z-10 h-[1046px] w-screen -translate-y-1/2 opacity-30 md:w-[1566px] dt:w-screen">
              <Image src={abstractDesgin} alt="abstract design" fill />
            </div>
            <button
              onClick={handleCloseBanner}
              aria-label="Close Banner"
              className="absolute right-4 z-20 rounded-full bg-white bg-opacity-10 p-1 transition hover:opacity-80 md:right-8"
            >
              <XMark />
            </button>
          </div>
        </div>
      )}
      <div className="border-y border-grey-15 bg-grey-10 py-3.5 xl:py-5">
        <nav className="container flex items-center justify-between">
          <div className="shrink-0">
            <Link href="/">
              <Image
                src={logo}
                alt="logo"
                className="h-7 w-23.5 md:h-12 md:w-40 dt:h-12 dt:w-40"
                width={160}
                height={48}
              />
            </Link>
          </div>
          <div className="hidden items-center gap-[10px] md:flex lg:gap-[30px]">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about-us">About Us</NavLink>
            <NavLink href="/properties">Properties</NavLink>
            <NavLink href="/services">Services</NavLink>
          </div>
          <CustomLink
            href="/contact-us"
            className="hidden bg-grey-08 hover:opacity-80 md:block dt:px-[24px] dt:py-[16px]"
          >
            Contact Us
          </CustomLink>
          <MobileMenu />
        </nav>
      </div>
    </header>
  );
};

export default Header;
