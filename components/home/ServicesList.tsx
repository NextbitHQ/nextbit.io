'use client';

import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useTheme } from 'next-themes';

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
import ServiceCard from './ServiceCard';
import { cn } from '@/lib/utils';


gsap.registerPlugin(ScrollTrigger);



export default function ServicesList() {
  const { theme, systemTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

/*
  useEffect(() => {
    if (!isMounted) return;

    const images = gsap.utils.toArray('.left-content .img_card') as HTMLElement[];
    const rightElements = gsap.utils.toArray('.right-content .right-element');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.container_serviceScroll',
        start: 'top top',
        end: '+=800%',
        pin: true,
        // scrub: true,
        scrub: 1,
        markers: true,
      },
    });

    images.forEach((img, i) => {
      if (images[i + 1]) {
        tl.to(img, { opacity: 0, duration: 0.001 })
          .to(images[i + 1], { opacity: 1, duration: 0.001,  }, '<')
          .to(rightElements, { yPercent: -(100 * (i + 1)), ease: 'none' }, '<');
      }
    });


    // tl.to({}, {}, '+=0.5');
  }, [isMounted]);
*/



  useEffect(() => {
    if (!isMounted) return;

    const images = gsap.utils.toArray('.left-content .img_card') as HTMLElement[];
    const rightElements = gsap.utils.toArray('.right-content .right-element');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.container_serviceScroll',
        start: 'top top',
        end: '+=200%',
        pin: true,
        // scrub: true,
        scrub: 1,
        markers: false,
      },
    });

    images.forEach((img, i) => {
      if (images[i + 1]) {
        tl.to(img, { opacity: 0 })
          .to(images[i + 1], { opacity: 1 }, '<')
          .to(rightElements, { yPercent: -(100 * (i + 1)), ease: 'none' }, '<');
      }
    });

    tl.to({}, {}, '+=0.5');
  }, [isMounted]);


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
      component: theme === "dark" ? service1dark : service1White,
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
      component: theme === "dark" ? service2dark : service2White,
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
      component: theme === "dark" ? service3dark : service3White,
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
      component: theme === "dark" ? service4dark : service4White,
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
      component: theme === "dark" ? service5dark : service5White,
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
      component: theme === "dark" ? service6dark : service6White,
    },

  ];

  return (
    <div className="py-14 mt-40">
      <div>
        <h2 className="font-primary font-bold dark:text-primary text-4xl md:text-[48px] leading-[1.2] tracking-[-0.02em]">
          First-Class
        </h2>
        <h2 className="font-primary font-bold dark:text-primary text-4xl md:text-[48px] leading-[1.2] tracking-[-0.02em]">
          Development experience
        </h2>
        <p className="font-secondary font-normal text-sm md:text-lg text-secondary-light dark:text-primary-light mt-3 md:mt-4 leading-[1.2] tracking-[-0.03em]">
          Give your team access to a smooth, developer-friendly environment that
          is designed to foster creativity and efficiency. A seamless
          development workflow is guaranteed by Nextbit.io&apos;s strong APIs,
          modular architecture, and user-friendly tools.
        </p>
      </div>

      <section className='container_serviceScroll hidden md:flex w-full gap-x-0 md:gap-x-5  h-screen overflow-hidden'>
        <div className='right-container w-3/5 h-screen overflow-hidden relative'>
          <div className='right-content w-full relative'>
            {
                services.map((item,idx)=><div className='right-element w-full min-h-screen flex justify-center items-center text-sm overflow-visible' key={idx}>
                <ServiceCard service={item} />
            </div>)
            }
          </div>
        </div>
        <div className='left-container w-2/5 h-screen overflow-hidden relative flex justify-center items-center'>
          <div className='left-content w-full min-w-[400px] h-full max-h-[400px] relative overflow-hidden'>
            {
                services.map((el,idx)=><div className={['img_card absolute top-0 left-0 right-0 object-cover w-full h-full',cn({
                  ['opacity-100']: idx === 0,
                  ['opacity-0']: idx !== 0,
                  // ['visibility-visible']: idx === 0,
                  // ['visibility-hidden']: idx !== 0,
                })].join(" ")} key={idx}>
                  <Image
                    src={el.component}
                    alt={'Image 1'+idx}
                    width={430}
                    height={400}

                  />
                </div>)
            }
          </div>
        </div>
      </section>

      <section className='block md:hidden '>
            {
              services.map((item,idx)=><div key={idx}>
                <ServiceCard service={item} />
                <div className='mb-20'>
                  <Image
                      className='block mx-auto'
                      src={item.component}
                      alt={'Image 1'+idx}
                      width={400}
                      height={400}
                    />
                </div>
              </div>)
            }

      </section>

    </div>
  );
}