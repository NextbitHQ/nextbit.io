"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import ServiceImage from '@/asset/images/home/nb-hero-img.png';
import { FaBrain, FaCode, FaGlobe, FaShoppingCart, FaMobileAlt, FaPaintBrush } from "react-icons/fa";
import { SiPaloaltosoftware } from "react-icons/si";
import { PrimaryButton } from '../shared/parimary-button';

const services = [
  {
    category: "AI Development & Integration",
    heading: "AI That Works for You, Not Against You",
    subheading: "Use AI to transform difficult tasks into easy processes that adapt to your business demands.",
    description: "Use AI to streamline processes, improve decision-making, and create new efficiencies. From machine learning models to AI-powered automation, we help businesses integrate intelligence into their workflows in a simple manner.",
    button: "Let's Build Smarter",
    icon: <FaBrain />,
    whyChooseUs: [
      {
        title: "No Fluff, Just Results",
        description: "AI solutions that make an impact"
      },
      {
        title: "Seamless Fit",
        description: "We integrate AI without disrupting your workflow"
      },
      {
        title: "Built for Your Business",
        description: "Custom AI built on what you do best"
      }
    ]
  },
  {
    category: "Software Development / Custom SaaS Development / MVP Creation",
    heading: "From Concept to Execution—Fast.",
    subheading: "Whether it's a full-scale SaaS, a custom tool, or an MVP, we build it right the first time.",
    description: "Whether launching a new SaaS, developing an internal application, or testing an MVP, we make your idea a reality with clean, scalable, and efficient software solutions. No frills, just solid execution.",
    button: "Build With Us",
    icon: <SiPaloaltosoftware />,
    whyChooseUs: [
      {
        title: "MVP to Market, Faster",
        description: "Get a working product without unnecessary delays"
      },
      {
        title: "Scalable & Future-Proof",
        description: "Software that grows with your business"
      },
      {
        title: "Tailored for Your Vision",
        description: "We don't do cookie-cutter solutions—only what fits your needs"
      }
    ]
  },
  {
    category: "Web Development / CMS Migration",
    heading: "Websites That Work, Not Just Look Good",
    subheading: "Fast, secure, and scalable web solutions—whether you're starting fresh or upgrading your CMS.",
    description: "From high-performance websites to seamless CMS migrations, we ensure your web presence is fast, secure, and designed for growth. Whether starting fresh or moving platforms, we make it frictionless.",
    button: "Get Started",
    icon: <FaGlobe />,
    whyChooseUs: [
      {
        title: "Performance First",
        description: "Speed, SEO, and security baked in"
      },
      {
        title: "Effortless CMS Migration",
        description: "Move platforms without the headaches"
      },
      {
        title: "Built for Growth",
        description: "Websites that evolve with your business"
      }
    ]
  },
  {
    category: "eCommerce Development",
    heading: "Sell More. Stress Less.",
    subheading: "Custom eCommerce solutions to increase conversions and improve operations.",
    description: "We create eCommerce experiences that convert. Whether you're starting a new store or optimizing an existing one, we'll handle everything—from design to integrations—to help you sell more easily.",
    button: "Let's Build Your Store",
    icon: <FaShoppingCart />,
    whyChooseUs: [
      {
        title: "Conversion-Optimized",
        description: "Designed to turn visitors into customers"
      },
      {
        title: "Seamless Integrations",
        description: "Payments, shipping, inventory—fully connected"
      },
      {
        title: "Scalable & Secure",
        description: "Your store is ready for high traffic and big sales"
      }
    ]
  },
  {
    category: "Mobile App Development",
    heading: "Apps That People Love to Use",
    subheading: "From startups to enterprises, we craft high-performance mobile apps that make an impact.",
    description: "From concept to launch, we create mobile apps that users like. Whether you require an iOS, Android, or cross-platform solution, our team will make sure your app runs smoothly, is engaging, and is designed to grow.",
    button: "Build Your App",
    icon: <FaMobileAlt />,
    whyChooseUs: [
      {
        title: "User-Centered Design",
        description: "Built for seamless experiences"
      },
      {
        title: "Cross-Platform Ready",
        description: "iOS, Android, or both—your choice"
      },
      {
        title: "Scalable & Future-Proof",
        description: "Apps that grow with your business"
      }
    ]
  },
  {
    category: "Product Design / UI/UX",
    heading: "Design That Does More Than Look Good",
    subheading: "We create intuitive, conversion-driven designs that elevate your product experience.",
    description: "Good design isn't just about looks—it's about function. We create UI/UX that's intuitive, conversion-driven, and enhances user experiences, making every interaction smooth and meaningful.",
    button: "Let's Design",
    icon: <FaPaintBrush />,
    whyChooseUs: [
      {
        title: "User First, Always",
        description: "Every pixel serves a purpose"
      },
      {
        title: "Flawless Experiences",
        description: "Smooth, intuitive, and engaging"
      },
      {
        title: "Designs That Convert",
        description: "More clicks, more sales, more success"
      }
    ]
  }
];

export default function Services() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div className="flex flex-col md:flex-row h-screen justify-center items-center">
      <div ref={containerRef} className="w-full md:w-[65%] h-screen overflow-y-auto">
        {services.map((service, index) => {
          const yRange = useTransform(scrollYProgress, [0, 1], [0, -100 * index]);
          const opacityRange = useTransform(scrollYProgress, 
            [index * 0.1, index * 0.1 + 0.1], 
            [1, 0]
          );

          return (
            <motion.div 
              key={index} 
              style={{ 
                y: yRange,
                opacity: opacityRange,
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='px-6 py-20'
            >
              <motion.div 
                className="flex items-center text gap-4 font-extrabold text-lg md:text-xl text-black dark:text-white mb-12"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {service.icon}
                <h2>{service.category}</h2>
              </motion.div>

              <motion.h3 
                className='text-start text-[clamp(40px,10vw,40px)] text-black dark:text-white font-bold leading-[1.2] tracking-tighter sm:text-[50px]'
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                {service.heading}
              </motion.h3>

              <motion.h4 
                className='text-start leading-7 text-black dark:text-white font-semibold text-lg md:text-xl my-3'
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
              >
                {service.subheading}
              </motion.h4>

              <motion.p 
                className='text-start font-normal leading-7 text-default-500 sm:text-[18px]'
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                {service.description}
              </motion.p>

              <motion.div
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9 }}
              >
                <PrimaryButton className='my-8'>{service.button}</PrimaryButton>
              </motion.div>

              <motion.div 
                className='mt-10'
                initial={{ y: 70, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <h4 className='text-xl md:text-2xl font-semibold text-black dark:text-white'>
                  Why Choose Us?
                </h4>
                <ul className='mt-5'>
                  {service.whyChooseUs.map((reason, idx) => (
                    <motion.li 
                      key={idx} 
                      className='flex items-center gap-2 text-start mb-3'
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div>
                        <span className='font-semibold text-black dark:text-white'>{reason.title} -</span>
                        <span className='ml-2 font-normal text-default-500'>{reason.description}</span>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      <div className='w-[35%] right-0 top-0 h-screen'>
        <Image 
          src={ServiceImage} 
          alt="Service illustration"
          className="object-contain h-full w-full"
        />
      </div>
    </div>
  );
}

