import Achievements from "@/containers/about-us/achievements";
import Clients from "@/containers/about-us/clients";
import Experience from "@/containers/about-us/experience";
import Hero from "@/containers/about-us/hero";
import Values from "@/containers/about-us/values";
import Team from "@/containers/about-us/team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Estatein | Our Journey, Values & Team",
  description: "Learn about Estatein's journey, values, and achievements. Meet our expert team and discover our client-centric approach to real estate excellence.",
};

const AboutUs = () => {
  return (
    <>
      <Hero />
      <Values />
      <Achievements />
      <Experience />
      <Team />
      <Clients />
    </>
  );
};

export default AboutUs;
