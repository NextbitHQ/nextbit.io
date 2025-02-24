"use client";
import { useState,useEffect } from "react";
import Image from "next/image";
import service1dark from "@/asset/images/home/services/1.png";
import service1White from "@/asset/images/home/services/w-1.png";
import service2dark from "@/asset/images/home/services/2.png";
import service2White from "@/asset/images/home/services/w-2.png";
import service3dark from "@/asset/images/home/services/3.png";
import service3White from "@/asset/images/home/services/w-3.png";
import service4dark from "@/asset/images/home/services/4.png";
import service4White from "@/asset/images/home/services/w-4.png";
import service5dark from "@/asset/images/home/services/5.png";
import service5White from "@/asset/images/home/services/w-5.png";
import service6dark from "@/asset/images/home/services/6.png";
import service6White from "@/asset/images/home/services/w-6.png";
import AIDevIcon from "@/components/home/customIcons/AIDevIcon";
import { cn } from "@/lib/utils";
import { PrimaryButton } from "@/components/shared/parimary-button";
import { useTheme } from "next-themes";
import ScrollableSection from "./scrollable-service-section";

export default function HomeServices() {
  const {theme,systemTheme}=useTheme();
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
      setIsMounted(true); 
    }, []);
  
    if (!isMounted) return null; 
  const services = [
    {
      category: "AI Development & Integration",
      heading: "AI That Works for You, Not Against You",
      subheading:
        "Use AI to transform difficult tasks into easy processes that adapt to your business demands.",
      description:
        "Use AI to streamline processes, improve decision-making, and create new efficiencies. From machine learning models to AI-powered automation, we help businesses integrate intelligence into their workflows in a simple manner.",
      button: "Let's Build Smarter",
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
      component: theme === 'dark'? service1dark:service1White,
    },
    {
      category: "Software Development",
      heading: "From Concept to Execution, Fast & Efficient.",
      subheading:
        "Whether it's a full-scale SaaS, a custom tool, or an MVP, we build it right the first time.",
      description:
        "Whether launching a new SaaS, developing an internal application, or testing an MVP, we make your idea a reality with clean, scalable, and efficient software solutions. No frills, just solid execution.",
      button: "Build With Us",
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
      component:theme === 'dark'? service2dark:service2White,
    },
    {
      category: "Web Development",
      heading: "Websites That Work, Not Just Look Good",
      subheading:
        "Fast, secure, and scalable web solutions—whether you're starting fresh or upgrading your CMS.",
      description:
        "From high-performance websites to seamless CMS migrations, we ensure your web presence is fast, secure, and designed for growth. Whether starting fresh or moving platforms, we make it frictionless.",
      button: "Get Started",
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
      component: theme === 'dark'? service3dark:service3White,
    },
    {
      category: "eCommerce Development",
      heading: "Sell More. Stress Less.",
      subheading:
        "Custom eCommerce solutions to increase conversions and improve operations.",
      description:
        "We create eCommerce experiences that convert. Whether you're starting a new store or optimizing an existing one, we'll handle everything—from design to integrations—to help you sell more easily.",
      button: "Let's Build Your Store",
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
      component: theme === 'dark'? service4dark:service4White,
    },
    {
      category: "Mobile App Development",
      heading: "Apps That People Love to Use",
      subheading:
        "From startups to enterprises, we craft high-performance mobile apps that make an impact.",
      description:
        "From concept to launch, we create mobile apps that users like. Whether you require an iOS, Android, or cross-platform solution, our team will make sure your app runs smoothly, is engaging, and is designed to grow.",
      button: "Build Your App",
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
      component: theme === 'dark'? service5dark:service5White,
    },
    {
      category: "Product Design",
      heading: "Design That Does More Than Look Good",
      subheading:
        "We create intuitive, conversion-driven designs that elevate your product experience.",
      description:
        "Good design isn't just about looks—it's about function. We create UI/UX that's intuitive, conversion-driven, and enhances user experiences, making every interaction smooth and meaningful.",
      button: "Let's Design",
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
      component: theme === 'dark'? service6dark:service6White,
    },
  ];

  return (
    <div className="py-14 mt-40" >
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
      <div className="hidden md:block py-28">
      <ScrollableSection services={services} />
      </div>
      <div className="block md:hidden px-2 py-20">
        {services.map((service, index) => (

          <div key={index} className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full">
              <div
                className={[
                  "flex items-center text-sm md:text-xl gap-x-3 leading-7 font-semibold text-black dark:text-white font-secondary",
                  cn({ "mt-40": index !== 0 }),
                ].join(" ")}
              >
                {service.icon}
                <h3>{service.category}</h3>
              </div>

              <h3 className="text-start text-4xl md:text-[48px] font-primary leading-[1.2] tracking-[-0.04em] text-black dark:text-white font-bold mt-5 md:mt-11 ">
                {service.heading}
              </h3>

              <h4 className="text-start leading-[1.2] tracking-[-0.04em] text-black dark:text-primary-light font-semibold font-secondary text-sm md:text-xl mt-5 md:mt-6">
                {service.subheading}
              </h4>

              <p className="text-start font-normal leading-[1.36] tracking-[-0.02em] md:leading-7 text-secondary-light dark:text-primary-light text-sm md:text-lg mt-9">
                {service.description}
              </p>
              <div className="mt-8">
                <ul className="mt-4">
                  {service.whyChooseUs.map((reason, idx) => (
                    <li
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
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <PrimaryButton className="my-6">
                  {service.button}
                </PrimaryButton>
              </div>
            </div>
            <div className="w-full mt-16">
              <Image className="object-contain h-full w-full" width={400} height={500} src={service.component} alt={service.category} />
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
