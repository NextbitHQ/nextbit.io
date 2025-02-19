import { Icon } from "@iconify/react";

const coreFeatures = [
  {
    icon: <Icon icon={"prime:box"} width={22} />,
    title: "Scalable Architecture",
    description:
      "Our technology grows with your business, ensuring seamless performance from startup to enterprise level.",
  },
  {
    icon: <Icon icon={"prime:box"} width={22} />,
    title: "Enterprise-Grade Security",
    description:
      "Stay protected with cutting-edge security protocols, safeguarding your data and transactions against evolving threats",
  },
  {
    icon: <Icon icon={"prime:box"} width={22} />,
    title: "Lightning-Fast Performance",
    description:
      "Speed matters. Experience ultra-fast load times and smooth interactions for a frictionless user experience.",
  },
  {
    icon: <Icon icon={"prime:box"} width={22} />,
    title: "AI-Driven Automation",
    description:
      "Run operations with intelligent automation, reducing manual effort and boosting efficiency across workflows.",
  },
];

export default function CoreFeature() {
  return (
    <div className="bg-inherit pt-12 md:pt-24">
      <h3 className="text-secondary dark:text-primary text-4xl md:text-[48px] leading-[1.2] tracking-[-0.02em] font-semibold font-primary">
        Core Features for Maximum Impact
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-5">
        {coreFeatures.map((feature, index) => (
          <div key={index}>
            <div className="flex text-secondary dark:text-primary gap-5">
              <span className="h-3 w-3 font-semibold">{feature.icon}</span>
              <h4 className="text-sm md:text-base font-semibold">
                {feature.title}
              </h4>
            </div>
            <p className="mt-4 text-secondary-light dark:text-primary-light text-sm md:text-base leading-[1.36] tracking-[-0.04em]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
