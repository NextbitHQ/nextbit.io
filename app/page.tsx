import { Metadata } from "next";

import GetInTouch from "@/components/about/get-In-touch";
import Compare from "@/components/home/Compare";
import Hero from "@/components/home/Hero";
import ServicesList from "@/components/home/ServicesList";
import Industry from "@/components/home/Industry";
import CoreFeature from "@/components/home/core-feature";
import HomeServices from "@/components/home/home-services";
export const metadata: Metadata = {
  title: 'Home | Nextbit Studio',
  description:
    'Discover Nextbit Studio is innovative eCommerce software and business solutions designed to simplify your online store experience. Join the future of eCommerce today',
};
export default function Home() {
  return (
    <section>
      <Hero />
      <CoreFeature />
      <ServicesList />
      {/* <HomeServices /> */}
      <Industry />
      <Compare />
      <GetInTouch />
    </section>
  );
}
