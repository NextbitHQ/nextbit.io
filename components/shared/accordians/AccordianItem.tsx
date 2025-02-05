import React from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

import Title from "@/components/widget/Title";
import { cn } from "@/lib/utils";

export type TAccordian = {
  id: number | string;
  level: string;
  description: string;
};

interface TAccordianItemProps {
  accordian: TAccordian;
  active: Set<string | number>;
  handleAccordion: (accordian: TAccordian) => void;
}

const AccordianItem = ({
  accordian,
  active,
  handleAccordion,
}: TAccordianItemProps) => {
  return (
    <li className="py-6 border-y border-black-50 z-10">
      <div
        className="flex justify-between items-center cursor-pointer"
        role="button"
        onClick={() => handleAccordion(accordian)}
      >
        <Title
          className="leading-tight"
          size_wc="para_1"
          typo="title"
          variant="h6"
        >
          {accordian.level}
        </Title>
        <div>
          {active.has(accordian.id) ? (
            <FiMinus size={25} />
          ) : (
            <FiPlus size={25} />
          )}
        </div>
      </div>
      <div>
        <p
          className={[
            cn(
              "text-typo-caption overflow-hidden transition-all ease-in-out duration-300",
              {
                "max-h-[300px] mt-6": active.has(accordian.id),
                "max-h-0": !active.has(accordian.id),
              },
            ),
            "text-para_1",
          ].join(" ")}
        >
          {accordian.description}
        </p>
      </div>
    </li>
  );
};

export default AccordianItem;
