"use client";
import { useState } from "react";
import { HiArrowSmRight } from "react-icons/hi";

import { TAccordian } from "@/components/shared/accordians/AccordianItem";
import AccordianTwoCol from "@/components/shared/accordians/AccordianTwoCol";
import Title from "@/components/widget/Title";

type TFAQsProps = {
  faqs: TAccordian[];
  title: string;
  description?: string;
};
const FAQs = ({ faqs, title, description }: TFAQsProps) => {
  const [active, setActive] = useState<Set<string | number>>(new Set());
  const handleAccordion = (faq: TAccordian) => {
    const newSet = new Set(active);

    if (newSet.has(faq.id)) {
      newSet.delete(faq.id);
    } else {
      newSet.add(faq.id);
    }
    setActive(newSet);
  };

  return (
    <section className="my-18 lg:my-32">
      <Title
        className="mx-auto text-center leading-tight title_largemedium"
        typo="title"
        variant="h3"
      >
        {title}
      </Title>

      <div className="my-8 lg:my-16">
        <AccordianTwoCol accordians={faqs} />
      </div>

      <div className="flex items-center justify-center gap-2">
        <p className="text-base text-color-secondary text-center">
          Question not answered above?
        </p>
        <span className="flex items-center gap-2 text-base ">
          {" "}
          Contact us <HiArrowSmRight size={25} />{" "}
        </span>
      </div>
    </section>
  );
};

export default FAQs;
