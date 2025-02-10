"use client"
import React from "react";
import {Icon} from "@iconify/react";
import {AnimatePresence, LazyMotion, domAnimation, m} from "framer-motion";
import FadeInImage from "./fade-in-image";
import AppScreenshotSkewed from "./app-screenshot-skewed";
import { Button } from "@heroui/react";
import Image from "next/image";
import HeroImage from "@/asset/images/home/nb-hero-img.png";
import { PrimaryButton } from "../shared/parimary-button";
import { SecondaryButton } from "../shared/secondary-button";


export default function Hero() {
  return (
    <div className="relative flex w-full flex-col overflow-hidden bg-background">
      <main className="container mx-auto mt-6 md:mt-[80px] flex flex-col md:flex-row gap-x-5 justify-between items-start">
        <section className="w-full md:w-3/5 z-20 flex flex-col items-start justify-center gap-[18px] sm:gap-6">
          <Button
        className="h-10 overflow-hidden border-1 border-default-100 bg-[#F7F7F7] dark:bg-inherit px-[16px] py-[10px] text-sm font-medium leading-5 text-[#656565] dark:text-[#BDBDBD]"
        endContent={
          <Icon
            className="flex-none outline-none [&>path]:stroke-[2] ml-2"
            icon="solar:arrow-right-linear"
            width={20}
          />
        }
        radius="sm"
        variant="bordered"
          >
        New onboarding experience
          </Button>
          <LazyMotion features={domAnimation}>
        <m.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          <AnimatePresence mode="wait">
            <m.div
          key="title"
          className="text-start text-4xl md:text-[56px] font-bold leading-[44px] md:leading-[64px] tracking-[-2px] font-primary mt-2"
          transition={{
            duration: 0.8,
            delay: 0.1,
            type: "spring",
            bounce: 0.3
          }}
            >
          <div className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-black dark:text-white   ">
            Turn Your Big Ideas Into A Beautiful App In Record Time
          </div>
            </m.div>
            <m.div
          key="description"
          animate={{ filter: "blur(0px)", opacity: 1, x: 0 }}
          className="text-start font-normal leading-[24px] md:leading-[28px] text-[#656565] dark:text-[#BDBDBD] text-sm md:text-lg font-secondary"
          initial={{ filter: "blur(16px)", opacity: 0, x: 30 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            type: "spring",
            bounce: 0.3
          }}
            >
             We&apos;re unique: we combine a full-time, handpicked team of desginers & Developers with the leatest Low-code,No-code and 
             AI tools to deliver amazing apps  in 1/4 the time & cost of normal agency.
            </m.div>

            <m.div
          key="features"
          animate={{ filter: "blur(0px)", opacity: 1, x: 0 }}
          className="grid grid-col-1 gap-4 w-full max-w-[466px] mt-2"
          initial={{ filter: "blur(16px)", opacity: 0, x: 30 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            type: "spring",
            bounce: 0.3
          }}
            >
          {[
            { icon: "solar:smartphone-broken", text: "On-Demand App Design & Dev" },
            { icon: "solar:users-group-rounded-broken", text: "Expert Talent" },
            { icon: "solar:pause-broken", text: "Pause or Cancel Anytime" },
            { icon: "solar:clock-circle-broken", text: "48-Hour Iteration Cycles" },
          ].map((feature, index) => (
            <div key={index} className="flex items-center gap-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-default-50">
            <Icon icon={feature.icon} className="h-5 w-5 text-[#292929] dark:text-[#BDBDBD] " />
              </div>
              <span className="text-sm font-secondary font-medium text-[#292929] dark:text-white">{feature.text}</span>
            </div>
          ))}
            </m.div>


            <m.div
          key="buttons"
          animate={{ filter: "blur(0px)", opacity: 1, x: 0 }}
          className="flex flex-row gap-x-5 md:gap-x-6 items-center mt-2"
          initial={{ filter: "blur(16px)", opacity: 0, x: 30 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            type: "spring",
            bounce: 0.3
          }}
            >
          <PrimaryButton>Get Started</PrimaryButton>
          <SecondaryButton> See our plans</SecondaryButton>
            </m.div>
          </AnimatePresence>
        </m.div>
          </LazyMotion>
          
        </section>
        <section className="hidden md:block md:w-2/5 ml-1.5">
           <Image className="w-full h-full" src={HeroImage} alt="hero image" width={400} height={600} />
        </section>
      </main>
    </div>
  );
}
