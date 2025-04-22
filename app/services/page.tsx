import { Metadata } from "next";

import HomeServices from "@/components/home/home-services";
export const metadata: Metadata = {
  title: "Service",
  description:
    'Explore the range of services Nextbit Studio offers, from custom eCommerce platforms to SaaS solutions. We provide scalable and powerful tools to grow your business.',
};
export default function Service() {
  return <HomeServices />;
}
