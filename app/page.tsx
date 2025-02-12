import Compare from "@/components/home/Compare";
import Hero from "@/components/home/Hero";
import Industry from "@/components/home/Industry";
import Services from "@/components/home/Services";

export default function Home() {
  return (
    <section>
      <Hero />
       <Services/>
      <Industry/>
      <Compare/>
    </section>
  );
}
