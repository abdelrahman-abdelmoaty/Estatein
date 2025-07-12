import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Estatein | Get In Touch With Our Real Estate Experts",
  description: "Contact Estatein for all your real estate needs. Get in touch with our expert team through our contact form or visit one of our convenient office locations.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}