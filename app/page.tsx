import Compare from "@/components/home/compare";
import CoreFeature from "@/components/home/core-feature";
import Hero from "@/components/home/hero";
import Industry from "@/components/home/industry";
import Services from "@/components/home/services";

export default function Home() {
  return (
    <section>
       <Hero />
       <CoreFeature/>
       <Services/>
       <Industry/>
       <Compare/>
    </section>
  );
}
