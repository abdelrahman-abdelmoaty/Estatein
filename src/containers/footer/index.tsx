import Link from "next/link";
import Image from "next/image";
import logo from "@images/logo/logo.svg";
import { FacebookIcon, LinkedinIcon, MailBox, PaperPlane, TwitterIcon, YoutubeIcon } from "@/components/SVGs";
import FooterLink from "@/components/ui/FooterLink";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="container flex flex-col sm:flex-row gap-[80px] py-[80px] dt:py-[100px]">
        <div className="flex flex-col gap-[16px] md:gap-[24px] dt:gap-[30px]">
          <div>
            <Link href="/">
              <Image src={logo} alt="logo" className="w-23.5 h-7 md:w-40 md:h-12 dt:w-40 dt:h-12" width={160} height={48} />
            </Link>
          </div>
          <div className="rounded-xl border border-grey-15 flex items-center gap-2.5 py-[14px] px-[20px] dt:py-[18px] dt:px-[24px] ">
            <MailBox className="w-5 h-5 dt:w-6 dt:h-6" />
            <input type="text" placeholder="Enter Your Email" className="flex-1 bg-transparent font-medium text-[14px] dt:text-[18px] outline-none" />
            <PaperPlane className="w-6 h-6 dt:w-7.5 dt:h-7.5" />
          </div>
        </div>
        <div className="grid grid-cols-2 xl:grid-cols-5 flex-1 gap-5">
          <div className="flex flex-col gap-[16px] md:gap-[24px] dt:gap-[30px]">
            <span className="font-medium text-[18px] dt:text-[20px] text-grey-60">Home</span>
            <div className="flex flex-col gap-[8px] md:gap-[16px] dt:gap[20px]">
              <FooterLink href="#">Hero Section</FooterLink>
              <FooterLink href="#">Features</FooterLink>
              <FooterLink href="#">Properties</FooterLink>
              <FooterLink href="#">Testimonials</FooterLink>
              <FooterLink href="#">FAQ&aposs</FooterLink>
            </div>
          </div>
          <div className="flex flex-col gap-[16px] md:gap-[24px] dt:gap-[30px]">
            <span className="font-medium text-[18px] dt:text-[20px] text-grey-60">About Us</span>
            <div className="flex flex-col gap-[8px] md:gap-[16px] dt:gap[20px]">
              <FooterLink href="#">Our Story</FooterLink>
              <FooterLink href="#">Our Works</FooterLink>
              <FooterLink href="#">How It Works</FooterLink>
              <FooterLink href="#">Our Team</FooterLink>
              <FooterLink href="#">Our Clients</FooterLink>
            </div>
          </div>
          <div className="grid grid-row-2 xl:grid-row-1 grid-cols-2 xl:grid-cols-3 col-span-2 md:col-span-3 gap-5">
            <div className="flex flex-col gap-[16px] md:gap-[24px] dt:gap-[30px]">
              <span className="font-medium text-[18px] dt:text-[20px] text-grey-60">Properties</span>
              <div className="flex flex-col gap-[8px] md:gap-[16px] dt:gap[20px]">
                <FooterLink href="#">Portfolio</FooterLink>
                <FooterLink href="#">Categories</FooterLink>
              </div>
            </div>
            <div className="row-span-2 flex flex-col gap-[16px] md:gap-[24px] dt:gap-[30px]">
              <span className="font-medium text-[18px] dt:text-[20px] text-grey-60">Services</span>
              <div className="flex flex-col gap-[8px] md:gap-[16px] dt:gap[20px]">
                <FooterLink href="#">Valuation Mastery</FooterLink>
                <FooterLink href="#">Strategic Marketing</FooterLink>
                <FooterLink href="#">Negotiation Wizardry</FooterLink>
                <FooterLink href="#">Closing Success</FooterLink>
                <FooterLink href="#">Property Management</FooterLink>
              </div>
            </div>
            <div className="flex flex-col gap-[16px] md:gap-[24px] dt:gap-[30px]">
              <span className="font-medium text-[18px] dt:text-[20px] text-grey-60">Contact Us</span>
              <div className="flex flex-col gap-[8px] md:gap-[16px] dt:gap[20px]">
                <FooterLink href="#">Contact Form</FooterLink>
                <FooterLink href="#">Our Offices</FooterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-3 dt:py-4 bg-grey-10">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="order-2 md:order-1 flex flex-col md:flex-row gap-[10px] md:gap-[20px] dt:gap-[38px] items-center">
            <p className="font-medium text-[14px] xl:text-[16px] dt:text-[18px]">@2023 Estatein. All Rights Reserved.</p>
            <FooterLink href="#">Terms & Conditions</FooterLink>
          </div>
          <div className="order-1 md:order-2 flex items-center gap-[8px] dt:gap-[10px]">
            <a href="#" className="hover:opacity-80 transition p-[10px] dt:p-[14px] rounded-full bg-grey-08">
              <FacebookIcon className="w-5 h-5 dt:w-6 dt:h-6" />
            </a>
            <a href="#" className="hover:opacity-80 transition p-[10px] dt:p-[14px] rounded-full bg-grey-08">
              <LinkedinIcon className="w-5 h-5 dt:w-6 dt:h-6" />
            </a>
            <a href="#" className="hover:opacity-80 transition p-[10px] dt:p-[14px] rounded-full bg-grey-08">
              <TwitterIcon className="w-5 h-5 dt:w-6 dt:h-6" />
            </a>
            <a href="#" className="hover:opacity-80 transition p-[10px] dt:p-[14px] rounded-full bg-grey-08">
              <YoutubeIcon className="w-5 h-5 dt:w-6 dt:h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
