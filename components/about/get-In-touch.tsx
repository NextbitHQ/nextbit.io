"use client";
import { PrimaryButton } from "../shared/parimary-button";
import { SecondaryButton } from "../shared/secondary-button";

export default function GetInTouch() {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl  py-20 sm:py-28 lg:flex lg:items-center lg:justify-between ">
        <h2 className="max-w-2xl text-2xl md:text-4xl font-semibold leading-[1.2] tracking-[-0.04em] text-secondary dark:text-primary ">
          Ready to dive in? <br />
          Start your free trial today.
        </h2>
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:shrink-0">
          <PrimaryButton>Get Started</PrimaryButton>
          <SecondaryButton>Learn more</SecondaryButton>
        </div>
      </div>
    </div>
  );
}
