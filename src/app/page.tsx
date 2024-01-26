import CTA from "@/containers/home/cta";
import Hero from "@/containers/home/hero";
import Properties from "@/containers/home/properties";
import Questions from "@/containers/home/questions";
import Testimonials from "@/containers/home/testimonials";
export default function Home() {
  return (
    <div>
      <Hero />
      <Properties />
      <Testimonials />
      <Questions />
      <CTA />
    </div>
  );
}
