import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Header from "@/containers/header";
import Footer from "@/containers/footer";

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
      <body className={`${urbanist.className} bg-grey-08 text-white relative z-0`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
