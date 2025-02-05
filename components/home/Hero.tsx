"use client"
import React from "react";
import {Icon} from "@iconify/react";
import {AnimatePresence, LazyMotion, domAnimation, m} from "framer-motion";
import FadeInImage from "./fade-in-image";
import AppScreenshotSkewed from "./app-screenshot-skewed";
import { Button } from "@heroui/react";


export default function Hero() {
  return (
    <div className="relative flex h-screen min-h-dvh w-full flex-col overflow-hidden bg-background">
      
      <main className="container mx-auto mt-[80px] flex max-w-[1024px] flex-col items-start px-8">
        <section className="z-20 flex flex-col items-start justify-center gap-[18px] sm:gap-6">
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
                  animate={{ filter: "blur(0px)", opacity: 1, x: 0 }}
                  className="text-start text-[clamp(40px,10vw,44px)] font-bold leading-[1.2] tracking-tighter sm:text-[64px]"
                  initial={{ filter: "blur(16px)", opacity: 0, x: 30 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.1,
                    type: "spring",
                    bounce: 0.3
                  }}
                >
                  <div className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                    Easiest way to <br /> power global teams.
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
                  Acme makes running global teams simple. HR, Payroll, International Employment,
                  contractor management and more.
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
                  <Button
                    className="h-10 w-[163px] bg-default-foreground px-[16px] py-[10px] text-small font-medium leading-5 text-background"
                    radius="full"
                  >
                    Get Started
                  </Button>
                  <Button
                    className="h-10 w-[163px] border-1 border-default-100 px-[16px] py-[10px] text-small font-medium leading-5"
                    endContent={
                      <span className="pointer-events-none flex h-[22px] w-[22px] items-center justify-center rounded-full bg-default-100">
                        <Icon
                          className="text-default-500 [&>path]:stroke-[1.5]"
                          icon="solar:arrow-right-linear"
                          width={16}
                        />
                      </span>
                    }
                    radius="full"
                    variant="bordered"
                  >
                    See our plans
                  </Button>
                </m.div>
              </AnimatePresence>
            </m.div>
          </LazyMotion>
        </section>
      </main>
    </div>
  );
}
