import Hero from "@/containers/home/hero";
import Properties from "@/containers/home/properties";
import Questions from "@/containers/home/questions";
import Testimonials from "@/containers/home/testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Estatein - Discover Your Dream Property",
  description: "Welcome to Estatein, where your dream property awaits. Explore our curated selection of properties with expert guidance and comprehensive real estate services.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Properties />
      <Testimonials />
      <Questions />
    </>
  );
}
