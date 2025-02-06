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
    <div className="relative flex h-screen min-h-dvh w-full flex-col overflow-hidden bg-background">
      
      <main className="container mx-auto mt-[80px] flex flex-col md:flex-row justify-between max-w-[1024px] items-start px-8">
        <section className="w-full md:w-2/3 z-20 flex flex-col items-start justify-center gap-[18px] sm:gap-6">
          <Button
            className="h-9 overflow-hidden border-1 border-default-100 bg-default-50 px-[18px] py-2 text-small font-normal leading-5 text-default-500"
            endContent={
              <Icon
                className="flex-none outline-none [&>path]:stroke-[2]"
                icon="solar:arrow-right-linear"
                width={20}
              />
            }
            radius="full"
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
                  className="text-start text-[clamp(40px,10vw,40px)] font-bold leading-[1.2] tracking-tighter sm:text-[50px]"
                  transition={{
                    duration: 0.8,
                    delay: 0.1,
                    type: "spring",
                    bounce: 0.3
                  }}
                >
                  <div className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-black dark:text-white">
                    Turn Your Big Idea <br /> Into A Beautiful App <br/>
                    In Record Time
                  </div>
                </m.div>
                <m.div
                  key="description"
                  animate={{ filter: "blur(0px)", opacity: 1, x: 0 }}
                  className="text-start font-normal leading-7 text-default-500 sm:w-[466px] sm:text-[18px]"
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
                  className="grid grid-col-1 gap-6 w-full max-w-[466px] mt-6"
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
                    <div key={index} className="flex  items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-default-50">
                        <Icon icon={feature.icon} className="h-5 w-5 text-default-500" />
                      </div>
                      <span className="text-sm font-medium text-default-700">{feature.text}</span>
                    </div>
                  ))}
                </m.div>


                <m.div
                  key="buttons"
                  animate={{ filter: "blur(0px)", opacity: 1, x: 0 }}
                  className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6"
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
        <section className="hidden md:block md:w-1/3">
           <Image className="w-full h-full" src={HeroImage} alt="hero image" width={400} height={600} />
        </section>
       
      </main>
    </div>
  );
}
