import HomeServices from "@/components/home/home-services";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: 'Service',
  description: 'This is the service page',
};
export default function Service() {
  return (
   <HomeServices/>
  );
}
