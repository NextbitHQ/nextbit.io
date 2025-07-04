"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

import { PrimaryButton } from "../shared/parimary-button";

import AIDevIcon from "./customIcons/AIDevIcon";

import service1 from "@/asset/images/home/services/1.png";
import service2 from "@/asset/images/home/services/2.png";
import service3 from "@/asset/images/home/services/3.png";
import service4 from "@/asset/images/home/services/4.png";
import service5 from "@/asset/images/home/services/5.png";
import service6 from "@/asset/images/home/services/6.png";
import { cn } from "@/lib/utils";

const services = [
  {
    category: "AI Development & Integration",
    heading: "AI That Works for You, Not Against You",
    subheading:
      "Use AI to transform difficult tasks into easy processes that adapt to your business demands.",
    description:
      "Use AI to streamline processes, improve decision-making, and create new efficiencies. From machine learning models to AI-powered automation, we help businesses integrate intelligence into their workflows in a simple manner.",
    button: "Let's Build Smarter",
    // icon: <FaBrain />,
    icon: <AIDevIcon />,
    whyChooseUs: [
      {
        title: "No Fluff, Just Results",
        description: "AI solutions that make an impact",
      },
      {
        title: "Seamless Fit",
        description: "We integrate AI without disrupting your workflow",
      },
      {
        title: "Built for Your Business",
        description: "Custom AI built on what you do best",
      },
    ],
  },
  {
    category: "Software/Custom SaaS Development/MVP Creation",
    heading: "From Concept to Execution, Fast & Efficient.",
    subheading:
      "Whether it's a full-scale SaaS, a custom tool, or an MVP, we build it right the first time.",
    description:
      "Whether launching a new SaaS, developing an internal application, or testing an MVP, we make your idea a reality with clean, scalable, and efficient software solutions. No frills, just solid execution.",
    button: "Build With Us",
    // icon: <SiPaloaltosoftware />,
    icon: <AIDevIcon />,
    whyChooseUs: [
      {
        title: "MVP to Market, Faster",
        description: "Get a working product without unnecessary delays",
      },
      {
        title: "Scalable & Future-Proof",
        description: "Software that grows with your business",
      },
      {
        title: "Tailored for Your Vision",
        description:
          "We don't do cookie-cutter solutions—only what fits your needs",
      },
    ],
  },
  {
    category: "Web Development/CMS Migration",
    heading: "Websites That Work, Not Just Look Good",
    subheading:
      "Fast, secure, and scalable web solutions—whether you're starting fresh or upgrading your CMS.",
    description:
      "From high-performance websites to seamless CMS migrations, we ensure your web presence is fast, secure, and designed for growth. Whether starting fresh or moving platforms, we make it frictionless.",
    button: "Get Started",
    // icon: <FaGlobe />,
    icon: <AIDevIcon />,
    whyChooseUs: [
      {
        title: "Performance First",
        description: "Speed, SEO, and security baked in",
      },
      {
        title: "Effortless CMS Migration",
        description: "Move platforms without the headaches",
      },
      {
        title: "Built for Growth",
        description: "Websites that evolve with your business",
      },
    ],
  },
  {
    category: "eCommerce Development",
    heading: "Sell More. Stress Less.",
    subheading:
      "Custom eCommerce solutions to increase conversions and improve operations.",
    description:
      "We create eCommerce experiences that convert. Whether you're starting a new store or optimizing an existing one, we'll handle everything—from design to integrations—to help you sell more easily.",
    button: "Let's Build Your Store",
    // icon: <FaShoppingCart />,
    icon: <AIDevIcon />,
    whyChooseUs: [
      {
        title: "Conversion-Optimized",
        description: "Designed to turn visitors into customers",
      },
      {
        title: "Seamless Integrations",
        description: "Payments, shipping, inventory—fully connected",
      },
      {
        title: "Scalable & Secure",
        description: "Your store is ready for high traffic and big sales",
      },
    ],
  },
  {
    category: "Mobile App Development",
    heading: "Apps That People Love to Use",
    subheading:
      "From startups to enterprises, we craft high-performance mobile apps that make an impact.",
    description:
      "From concept to launch, we create mobile apps that users like. Whether you require an iOS, Android, or cross-platform solution, our team will make sure your app runs smoothly, is engaging, and is designed to grow.",
    button: "Build Your App",
    // icon: <FaMobileAlt />,
    icon: <AIDevIcon />,
    whyChooseUs: [
      {
        title: "User-Centered Design",
        description: "Built for seamless experiences",
      },
      {
        title: "Cross-Platform Ready",
        description: "iOS, Android, or both—your choice",
      },
      {
        title: "Scalable & Future-Proof",
        description: "Apps that grow with your business",
      },
    ],
  },
  {
    category: "Product Design/UI/UX",
    heading: "Design That Does More Than Look Good",
    subheading:
      "We create intuitive, conversion-driven designs that elevate your product experience.",
    description:
      "Good design isn't just about looks—it's about function. We create UI/UX that's intuitive, conversion-driven, and enhances user experiences, making every interaction smooth and meaningful.",
    button: "Let's Design",
    // icon: <FaPaintBrush />,
    icon: <AIDevIcon />,
    whyChooseUs: [
      {
        title: "User First, Always",
        description: "Every pixel serves a purpose",
      },
      {
        title: "Flawless Experiences",
        description: "Smooth, intuitive, and engaging",
      },
      {
        title: "Designs That Convert",
        description: "More clicks, more sales, more success",
      },
    ],
  },
];

const servesComponent = [
  { component: service1 },
  { component: service2 },
  { component: service3 },
  { component: service4 },
  { component: service5 },
  { component: service6 },
];

export default function Services() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div className="py-14 mt-40">
      <div>
        <h2 className="font-primary font-bold text-secondary dark:text-primary text-4xl md:text-[48px] leading-[1.2] tracking-[-0.02em]">
          First-Class
        </h2>
        <h2 className="font-primary font-bold text-secondary dark:text-primary text-4xl md:text-[48px] leading-[1.2] tracking-[-0.02em]">
          Development experience
        </h2>
        <p className="font-secondary font-normal text-sm md:text-lg text-secondary-light dark:text-primary-light mt-3 md:mt-4 leading-[1.2] tracking-[-0.03em]">
          Give your team access to a smooth, developer-friendly environment that
          is designed to foster creativity and efficiency. A seamless
          development workflow is guaranteed by Nextbit.io&apos;s strong APIs,
          modular architecture, and user-friendly tools.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-start py-[100px] md:py-[120px]">
        <div
          ref={containerRef}
          className="w-full md:w-3/5 h-screen overflow-y-auto scrollbar-hide"
        >
          {services.map((service, index) => {
            return (
              <motion.div key={index}>
                <motion.div
                  className={[
                    "flex items-center text-sm md:text-xl gap-x-3 leading-7 font-semibold text-black dark:text-white font-secondary",
                    cn({ "mt-40": index !== 0 }),
                  ].join(" ")}
                >
                  {service.icon}
                  <h3>{service.category}</h3>
                </motion.div>

                <motion.h3 className="text-start text-4xl md:text-[48px] font-primary leading-[1.2] tracking-[-0.04em] text-black dark:text-white font-bold mt-5 md:mt-11 ">
                  {service.heading}
                </motion.h3>

                <motion.h4 className="text-start leading-[1.2] tracking-[-0.04em] text-black dark:text-primary-light font-semibold font-secondary text-sm md:text-xl mt-5 md:mt-6">
                  {service.subheading}
                </motion.h4>

                <motion.p className="text-start font-normal leading-[1.36] tracking-[-0.02em] md:leading-7 text-secondary-light dark:text-primary-light text-sm md:text-lg mt-9">
                  {service.description}
                </motion.p>
                <motion.div className="mt-8">
                  <ul className="mt-4">
                    {service.whyChooseUs.map((reason, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-center gap-x-2 text-start mb-2"
                      >
                        <div>
                          <span className="font-semibold text-black dark:text-white text-xs md:text-sm leading-6 md:leading-7 font-secondary">
                            {reason.title} -
                          </span>
                          <span className="ml-2 font-normal text-secondary  dark:text-primary-light text-xs md:text-sm leading-6 md:leading-7 font-secondary ">
                            {reason.description}
                          </span>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div>
                  <PrimaryButton className="my-6">
                    {service.button}
                  </PrimaryButton>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <div className="w-full md:w-2/5 relative h-screen">
          {servesComponent.map((service, index) => {
            return (
              <motion.div
                key={index}
                className="absolute top-0 right-0 w-full h-full"
              >
                <Image
                  alt="Service illustration"
                  className="object-contain h-full w-full"
                  src={service.component}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
