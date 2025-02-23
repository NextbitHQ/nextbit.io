import Image, { StaticImageData } from "next/image";

import { TertiaryButton } from "../shared/tertiary-button";

interface AboutRepeatableSectionProps {
  title: string;
  heading: string;
  descriptions: string[];
  imageSrc: StaticImageData;
  imageAlt?: string;
  button?: boolean;
  buttonLabel?: string;
  buttonClass?: string;
}

export default function AboutRepeatableSection({
  title,
  heading,
  descriptions,
  imageSrc,
  imageAlt,
  button,
  buttonLabel,
  buttonClass,
}: AboutRepeatableSectionProps) {
  return (
    <div className="pt-12 md:pt-16">
      <h2 className="border-b-1 border-default-200 pb-3 text-secondary dark:text-primary text-sm font-medium">
        {title}
      </h2>

      <div className="pt-6 pb-14 flex flex-col md:flex-row justify-between gap-x-0 md:gap-x-6 gap-y-6 ">
        <div className="w-full md:w-1/2">
          <h2 className="text-black dark:text-primary text-4xl md:text-[40px] font-bold leading-[1.2] tracking-[-0.04em] font-primary">
            {heading}
          </h2>
          {descriptions.map((description, index) => (
            <p
              key={index}
              className="font-secondary text-sm md:text-base font-normal leading-[1.36] tracking-[-0.02em] text-secondary dark:text-primary mt-5"
            >
              {description}
            </p>
          ))}
          {button && (
            <div className="mt-8">
              <TertiaryButton className={`${buttonClass}`}>
                {buttonLabel || "Learn More"}
              </TertiaryButton>
            </div>
          )}
        </div>
        <div className="w-full md:w-1/2">
          <Image
            alt={imageAlt || "Image"}
            height={400}
            src={imageSrc}
            width={600}
          />
        </div>
      </div>
    </div>
  );
}
