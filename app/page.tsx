import GetInTouch from "@/components/about/get-In-touch";
import Compare from "@/components/home/Compare";
import CoreFeature from "@/components/home/core-feature";
import Hero from "@/components/home/Hero";
import Industry from "@/components/home/Industry";
import Services from "@/components/home/services";

export default function Home() {
  return (
    <section>
      <Hero />
      <CoreFeature />
      <Services />
      <Industry />
      <Compare />
      <GetInTouch />
    </section>
  );
}
