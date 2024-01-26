import Image from "next/image";
import logo from "@images/logo/logo.svg";
import abstractDesgin from "@images/abstract-designs/abstract-design-1.svg";
import Link from "next/link";
import { HamburgerBurger, XMark } from "@/components/SVGs";
import NavLink from "@/components/ui/NavLink";
import CustomLink from "@/components/ui/CustomLink";

const Header = () => {
  return (
    <header className="bg-grey-10 relative z-50">
      <div className="relative overflow-hidden">
        <div className="container flex items-center justify-start md:justify-center pt-10 pb-5 md:py-3.5 dt:py-4.5">
          <div className="text-xs md:text-sm dt:text-lg  flex items-center gap-1 md:gap-2 dt:gap-2.5 relative z-20">
            <h1>✨Discover Your Dream Property with Estatein</h1>
            <a href="#" className="capitalize underline font-medium cursor-pointer hover:opacity-80 transition">
              Learn More
            </a>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 left-0 h-[1046px] w-screen md:w-[1566px] dt:w-screen opacity-30 z-10">
            <Image src={abstractDesgin} alt="abstract design" fill />
          </div>
          <button className=" bg-white bg-opacity-10 absolute right-4 md:right-8 rounded-full p-1 hover:opacity-80 transition z-20">
            <XMark />
          </button>
        </div>
      </div>
      <div className="bg-grey-10 py-3.5 xl:py-5 border-y border-grey-15">
        <nav className="flex items-center justify-between container">
          <div className="shrink-0">
            <Link href="/">
              <Image src={logo} alt="logo" className="w-23.5 h-7 md:w-40 md:h-12 dt:w-40 dt:h-12" width={160} height={48} />
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-[10px] lg:gap-[30px]">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about-us">About Us</NavLink>
            <NavLink href="/properties">Properties</NavLink>
            <NavLink href="/services">Services</NavLink>
          </div>
          <CustomLink href="#" className="hidden md:block bg-grey-08 dt:py-[16px] dt:px-[24px] hover:opacity-80">
            Contact Us
          </CustomLink>
          <button className="md:hidden hover:opacity-80 transition">
            <HamburgerBurger />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
