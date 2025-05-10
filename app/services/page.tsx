import { Metadata } from "next";
import ServicesList from "@/components/home/ServicesList";
export const metadata: Metadata = {
  title: "Service",
  description:
    'Explore the range of services Nextbit Studio offers, from custom eCommerce platforms to SaaS solutions. We provide scalable and powerful tools to grow your business.',
};
export default function Service() {
  return <ServicesList />;
}
