import React, { useState } from "react";

import AccordianItem, { TAccordian } from "./AccordianItem";

type TAccordianTwoColProps = {
  accordians: TAccordian[];
};
const AccordianTwoCol = ({ accordians }: TAccordianTwoColProps) => {
  const [active, setActive] = useState<Set<string | number>>(new Set());
  const handleAccordion = (accordian: TAccordian) => {
    const newSet = new Set(active);

    if (newSet.has(accordian.id)) {
      newSet.delete(accordian.id);
    } else {
      newSet.add(accordian.id);
    }
    setActive(newSet);
  };

  // computed
  const midpoint = Math.ceil(accordians.length / 2);

  return (
    <ul className="grid md:grid-cols-2 gap-0 lg:gap-8 px-4">
      <li>
        <ul className="lg:pr-6">
          {accordians.slice(0, midpoint).map((accordian, idx) => (
            <AccordianItem
              key={idx}
              accordian={accordian}
              active={active}
              handleAccordion={handleAccordion}
            />
          ))}
        </ul>
      </li>
      <li>
        <ul className="lg:pl-6">
          {accordians.slice(midpoint).map((accordian, idx) => (
            <AccordianItem
              key={idx}
              accordian={accordian}
              active={active}
              handleAccordion={handleAccordion}
            />
          ))}
        </ul>
      </li>
    </ul>
  );
};

export default AccordianTwoCol;
