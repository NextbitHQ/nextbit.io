"use client";
import { LuCheck, LuX } from "react-icons/lu";
import { Tabs, Tab, Card, CardBody } from "@heroui/react";
import React from "react";

import CompareFeature from "./compare-feature";

const nextbitSulution = [
  "Fast, optimized workflows",
  "Subscription or one-time",
  "Full-stack team, AI automation",
  "Dedicated support & reports",
  "Easy scaling & customization",
];
const otherSulution = [
  {
    name: "Freelancer",
    icon: LuX,
    features: [
      "Varies per project",
      "Hourly or per project",
      "Varies by freelancer",
      "Hard to guarantee",
      "Hard to scale",
    ],
  },
  {
    name: "Agencies",
    icon: LuX,
    features: [
      "Weeks to months",
      "Expensive retainers",
      "Siloed departments",
      "Multiple gatekeepers",
      "Rigid contracts",
    ],
  },
  {
    name: "Full-time",
    icon: LuX,
    features: [
      "Slower execution",
      "Fixed salaries",
      "Limited in-house skills",
      "Internal silos",
      "Difficult to expand",
    ],
  },
];

export default function Compare() {
  const [selected, setSelected] = React.useState("Nextbit");

  return (
    <div className="pt-20 md:pt-32 pb-6 md:pb-10">
      <div>
        <div>
          <h2 className="font-primary font-bold text-secondary dark:text-primary text-4xl md:text-[48px] leading-[1.2] tracking-[-0.02em]">
            Turning Opportunities into Maximum Value
          </h2>
          <p className="font-secondary font-normal text-sm md:text-lg text-secondary-light dark:text-primary-light mt-3 md:mt-4 leading-[1.2] tracking-[-0.03em]">
            We make sure that every resource, choice, and investment contributes
            to long-term success by emphasizing innovation, efficiency, and
            scalability.
          </p>
        </div>

        <div className="hidden md:flex flex-col md:flex-row gap-6 mt-10">
          <div className="w-full md:w-[33%] bg-[#FAFAFA] dark:bg-dark-gradient p-4 rounded-md border border-default-200 dark:border-y-default-50 dark:border-x-default-200">
            <h3 className="text-secondary dark:text-primary text-3xl md:text-[28px] leading-[1.2] tracking-[-0.02em] font-semibold font-primary">
              {" "}
              Nexbit Studio
            </h3>
            <ul className="mt-1">
              {nextbitSulution.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center text-secondary dark:text-primary gap-x-2 "
                >
                  <LuCheck className="my-3 h-5 w-6 font-semibold" />
                  <span className="text-sm my-3">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-[67%] grid grid-cols-1 md:grid-cols-3 gap-3">
            {otherSulution.map((solution, index) => (
              <CompareFeature
                key={index}
                borderShow={true}
                icon={solution.icon}
                items={solution.features}
                title={solution.name}
                titleShow={true}
              />
            ))}
          </div>
        </div>
        <div />

        <div className="block bg-inherit md:hidden mt-10">
          <Tabs
            aria-label="Options"
            className="block"
            radius="sm"
            selectedKey={selected}
            onSelectionChange={(key) => setSelected(key.toString())}
          >
            <Tab key="Nextbit" className="py-2" title="Nextbit">
              <Card radius="sm">
                <CardBody>
                  <div className="w-full p-4 rounded-md">
                    <ul className="mt-1">
                      {nextbitSulution.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-center text-secondary dark:text-primary gap-x-2 "
                        >
                          <LuCheck className="my-3 h-5 w-6 font-semibold" />
                          <span className="text-sm my-3">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardBody>
              </Card>
            </Tab>
            {otherSulution.map((solution, index) => (
              <Tab key={solution.name} title={solution.name}>
                <Card>
                  <CardBody>
                    <CompareFeature
                      key={index}
                      borderShow={false}
                      icon={solution.icon}
                      items={solution.features}
                      title={solution.name}
                    />
                  </CardBody>
                </Card>
              </Tab>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
}
