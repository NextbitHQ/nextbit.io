"use client";
import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";
import { Button } from "@heroui/react";
import Image from "next/image";
import { useTheme } from "next-themes";
import Link from "next/link";

import { PrimaryButton } from "../shared/parimary-button";
import { SecondaryButton } from "../shared/secondary-button";

import bg_grid from "@/asset/images/home/bg_grid.png";
import brandDarkImage from "@/asset/images/home/brand_icon_img.png";

export default function Hero() {
  const { theme, systemTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const isDark =
    theme === "dark" || (theme === "system" && systemTheme === "dark");

  return (
    <div className="relative flex w-full flex-col overflow-hidden bg-background">
      <main
        className={`container mx-auto mt-6 md:pt-[80px] md:pb-[120px]  flex flex-col md:flex-row gap-x-6 justify-between items-center
        `}
        style={{
          backgroundImage: isDark
            ? `linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${bg_grid.src})`
            : "",
          backgroundSize: "288%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "-23% 49%",
        }}
      >
        <section className="w-full md:w-3/5 z-20 flex flex-col items-start justify-center gap-[18px] sm:gap-6">
          <Button
            className="h-10 overflow-hidden border-1 border-default-100 dark:bg-inherit px-[16px] py-[10px] text-sm font-medium leading-5 text-secondary-light dark:text-primary-light"
            radius="sm"
            variant="bordered"
          >
            The finest digital studio you can rely on
          </Button>
          <LazyMotion features={domAnimation}>
            <m.div
              animate={{ opacity: 1 }}
              className="flex flex-col gap-6"
              initial={{ opacity: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              <AnimatePresence mode="sync">
                <m.div
                  key="title"
                  className="text-start text-4xl md:text-[56px] font-bold leading-[44px] md:leading-[64px] tracking-[-2px] font-primary mt-2"
                  transition={{
                    duration: 0.8,
                    delay: 0.1,
                    type: "spring",
                    bounce: 0.3,
                  }}
                >
                  <div className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-black dark:text-white  leading-[1.2] tracking-[-0.04em] ">
                    Your vision.
                    <br />
                    Our expert execution.
                    <br />A thriving business.
                  </div>
                </m.div>
                <m.div
                  key="description"
                  animate={{ opacity: 1, x: 0 }}
                  className="text-start font-normal text-secondary-light dark:text-primary-light text-sm md:text-lg font-secondary leading-[1.36] tracking-[-0.02em]"
                  initial={{ opacity: 0, x: 30 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3,
                    type: "spring",
                    bounce: 0.3,
                  }}
                >
                  We&apos;re an engineering studio building cutting-edge digital
                  products and solutions. We partner with disruptive companies
                  and innovative entrepreneurs to fulfill their strategy,
                  design, & development needs.
                </m.div>

                <m.div
                  key="features"
                  animate={{ opacity: 1, x: 0 }}
                  className="grid grid-col-1 gap-4 w-full max-w-[466px] mt-2"
                  initial={{ opacity: 0, x: 30 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.4,
                    type: "spring",
                    bounce: 0.3,
                  }}
                >
                  {[
                    {
                      icon: "solar:users-group-rounded-broken",
                      text: "On-demand senior developers and designers",
                    },
                    {
                      icon: "solar:pause-broken",
                      text: "Pause or cancel anytime",
                    },
                    {
                      icon: "solar:clock-circle-broken",
                      text: "Fast iteration cycles",
                    },
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-x-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-md border border-[#292929]">
                        <Icon
                          className="h-5 w-5 text-secondary dark:text-primary-light "
                          icon={feature.icon}
                        />
                      </div>
                      <span className="text-sm font-secondary font-medium text-secondary dark:text-white">
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </m.div>

                <m.div
                  key="buttons"
                  animate={{ opacity: 1, x: 0 }}
                  className="flex flex-row gap-x-5 md:gap-x-6 items-center mt-2"
                  initial={{ opacity: 0, x: 30 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    type: "spring",
                    bounce: 0.3,
                  }}
                >
                  <PrimaryButton>Book a free call</PrimaryButton>
                  <SecondaryButton className="w-[168px] md:w-[183px] px-[16px] py-[10px] h-10">
                    {" "}
                    <Link href="/contact">Email us</Link>
                  </SecondaryButton>
                </m.div>
              </AnimatePresence>
            </m.div>
          </LazyMotion>
        </section>
        <section className="hidden md:block md:w-2/5 ml-1.5">
          {/* <Image className="w-full h-full" src={HeroImage} alt="hero image" width={400} height={600} /> */}
          <Image
            alt="hero image"
            className="w-full h-full opacity-75"
            height={600}
            src={brandDarkImage}
            width={400}
          />
        </section>
      </main>
    </div>
  );
}
