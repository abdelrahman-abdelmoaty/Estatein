import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Header from "@/containers/header";
import Footer from "@/containers/footer";
import CTA from "@/containers/home/cta";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Estatein",
  description: "Developed by Abdelrahman Abdelmoaty",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.className} relative z-0 bg-grey-08 text-white`}
      >
        <Header />
        <main className="my-[50px] flex flex-col gap-[80px] xl:my-[70px] xl:gap-[112px] dt:my-[100px] dt:gap-[140px]">
          {children}
        </main>
        <CTA />
        <Footer />
      </body>
    </html>
  );
}
