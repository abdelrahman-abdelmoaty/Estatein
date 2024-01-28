import Achievements from "@/containers/about-us/achievements";
import Clients from "@/containers/about-us/clients";
import Experience from "@/containers/about-us/experience";
import Hero from "@/containers/about-us/hero";
import Values from "@/containers/about-us/values";

const AboutUs = () => {
  return (
    <>
      <Hero />
      <Values />
      <Achievements />
      <Experience />
      <Clients />
    </>
  );
};

export default AboutUs;
