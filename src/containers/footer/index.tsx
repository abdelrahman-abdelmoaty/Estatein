import Link from "next/link";
import Image from "next/image";
import logo from "@images/logo/logo.svg";
import {
  FacebookIcon,
  LinkedinIcon,
  MailBox,
  PaperPlane,
  TwitterIcon,
  YoutubeIcon,
} from "@/components/SVGs";
import CustomLink from "@/components/ui/CustomLink";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="container flex flex-col gap-[80px] py-[80px] sm:flex-row dt:py-[100px]">
        <div className="flex flex-col gap-[16px] md:gap-[24px] dt:gap-[30px]">
          <div>
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
          <div className="flex items-center gap-2.5 rounded-xl border border-grey-15 px-[20px] py-[14px] dt:px-[24px] dt:py-[18px] ">
            <MailBox className="h-5 w-5 dt:h-6 dt:w-6" />
            <input
              type="text"
              placeholder="Enter Your Email"
              className="flex-1 bg-transparent text-[14px] font-medium outline-none dt:text-[18px]"
            />
            <PaperPlane className="h-6 w-6 dt:h-7.5 dt:w-7.5" />
          </div>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-5 xl:grid-cols-5">
          <div className="flex flex-col gap-[16px] md:gap-[24px] dt:gap-[30px]">
            <span className="text-[18px] font-medium text-grey-60 dt:text-[20px]">
              Home
            </span>
            <div className="dt:gap[20px] flex flex-col gap-[8px] md:gap-[16px]">
              <CustomLink href="/#hero" variant="footer">
                Dream Properties
              </CustomLink>
              <CustomLink href="/#features" variant="footer">
                Our Services
              </CustomLink>
              <CustomLink href="/#properties" variant="footer">
                Featured Properties
              </CustomLink>
              <CustomLink href="/#testimonials" variant="footer">
                Client Stories
              </CustomLink>
              <CustomLink href="/#questions" variant="footer">
                FAQ
              </CustomLink>
            </div>
          </div>
          <div className="flex flex-col gap-[16px] md:gap-[24px] dt:gap-[30px]">
            <span className="text-[18px] font-medium text-grey-60 dt:text-[20px]">
              About Us
            </span>
            <div className="dt:gap[20px] flex flex-col gap-[8px] md:gap-[16px]">
              <CustomLink href="/about-us#our-story" variant="footer">
                Our Journey
              </CustomLink>
              <CustomLink href="/about-us#how-it-works" variant="footer">
                Our Values
              </CustomLink>
              <CustomLink href="/about-us#our-works" variant="footer">
                Our Process
              </CustomLink>
              <CustomLink href="/about-us#our-team" variant="footer">
                Meet Our Team
              </CustomLink>
              <CustomLink href="/about-us#our-clients" variant="footer">
                Client Testimonials
              </CustomLink>
            </div>
          </div>
          <div className="grid-row-2 xl:grid-row-1 col-span-2 grid grid-cols-2 gap-5 md:col-span-3 xl:grid-cols-3">
            <div className="flex flex-col gap-[16px] md:gap-[24px] dt:gap-[30px]">
              <span className="text-[18px] font-medium text-grey-60 dt:text-[20px]">
                Properties
              </span>
              <div className="dt:gap[20px] flex flex-col gap-[8px] md:gap-[16px]">
                <CustomLink href="/properties#portfolio" variant="footer">
                  Property Portfolio
                </CustomLink>
                <CustomLink href="/properties#categories" variant="footer">
                  Property Types
                </CustomLink>
              </div>
            </div>
            <div className="row-span-2 flex flex-col gap-[16px] md:gap-[24px] dt:gap-[30px]">
              <span className="text-[18px] font-medium text-grey-60 dt:text-[20px]">
                Services
              </span>
              <div className="dt:gap[20px] flex flex-col gap-[8px] md:gap-[16px]">
                <CustomLink href="/services#valuation-mastery" variant="footer">
                  Valuation Mastery
                </CustomLink>
                <CustomLink href="/services#strategic-marketing" variant="footer">
                  Strategic Marketing
                </CustomLink>
                <CustomLink href="/services#negotiation-wizardry" variant="footer">
                  Negotiation Wizardry
                </CustomLink>
                <CustomLink href="/services#closing-success" variant="footer">
                  Closing Success
                </CustomLink>
                <CustomLink href="/services#property-management" variant="footer">
                  Property Management
                </CustomLink>
              </div>
            </div>
            <div className="flex flex-col gap-[16px] md:gap-[24px] dt:gap-[30px]">
              <span className="text-[18px] font-medium text-grey-60 dt:text-[20px]">
                Contact Us
              </span>
              <div className="dt:gap[20px] flex flex-col gap-[8px] md:gap-[16px]">
                <CustomLink href="/contact-us" variant="footer">
                  Contact Form
                </CustomLink>
                <CustomLink href="/contact-us#our-offices" variant="footer">
                  Our Offices
                </CustomLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-grey-10 py-3 dt:py-4">
        <div className="container flex flex-col items-center justify-between gap-5 md:flex-row">
          <div className="order-2 flex flex-col items-center gap-[10px] md:order-1 md:flex-row md:gap-[20px] dt:gap-[38px]">
            <p className="text-[14px] font-medium xl:text-[16px] dt:text-[18px]">
              @2023 Estatein. All Rights Reserved.
            </p>
            <CustomLink href="#" variant="footer">
              Terms & Conditions
            </CustomLink>
          </div>
          <div className="order-1 flex items-center gap-[8px] md:order-2 dt:gap-[10px]">
            <a
              href="#"
              aria-label="facebook"
              className="rounded-full bg-grey-08 p-[10px] transition hover:opacity-80 dt:p-[14px]"
            >
              <FacebookIcon className="h-5 w-5 dt:h-6 dt:w-6" />
            </a>
            <a
              href="#"
              aria-label="linkedin"
              className="rounded-full bg-grey-08 p-[10px] transition hover:opacity-80 dt:p-[14px]"
            >
              <LinkedinIcon className="h-5 w-5 dt:h-6 dt:w-6" />
            </a>
            <a
              href="#"
              aria-label="twitter"
              className="rounded-full bg-grey-08 p-[10px] transition hover:opacity-80 dt:p-[14px]"
            >
              <TwitterIcon className="h-5 w-5 dt:h-6 dt:w-6" />
            </a>
            <a
              href="#"
              aria-label="youtube"
              className="rounded-full bg-grey-08 p-[10px] transition hover:opacity-80 dt:p-[14px]"
            >
              <YoutubeIcon className="h-5 w-5 dt:h-6 dt:w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
