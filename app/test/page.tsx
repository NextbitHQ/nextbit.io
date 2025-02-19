"use client";
import React from "react";

// GSAP register
import { gsap } from "gsap";
import { SlowMo } from "gsap/EasePack";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(
  Flip,
  ScrollTrigger,
  Observer,
  ScrollToPlugin,
  MotionPathPlugin,
  TextPlugin,
  SlowMo,
);

const page = () => {
  return <div>tedy</div>;
};

export default page;
