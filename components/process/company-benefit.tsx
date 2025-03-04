import { LuSmile, LuFrown } from "react-icons/lu";
const nextbitSulution = [
  "Start with a validated MVP before full development",
  "Go to market 3x faster (within months, not years)",
  "All-in-one, fully integrated development ecosystem",
  "Cost-effective, transparent pricing",
  "Optimized for speed, security, and enterprise level",
  "Easily scale and evolve without expensive overhauls",
  "Structured roadmap and strategic development",
  "Deliver a premium user experience from day one",
];
const yourCompanySolution = [
  "Jump into development without validation",
  "Slow, inefficient launch process (12+ months)",
  "Struggle with scattered third-party tools ",
  "High development costs with hidden fees",
  "Compromised performance and security risks",
  "Difficult to scale and adapt to market changes",
  "Lack of clear strategy and project direction",
  "Poor user experience and design limitations",
];

export default function CompanyBenefit() {
  return (
    <div className="pt-20 md:pt-32 pb-6 md:pb-10">
      <div>
        <h2 className="font-primary font-bold text-secondary dark:text-primary text-4xl md:text-[48px] leading-[1.2] tracking-[-0.02em]">
          Maximizing Opportunities for Holistic Growth
        </h2>
        <p className="font-secondary font-normal text-sm md:text-lg text-secondary-light dark:text-primary-light mt-3 md:mt-4 leading-[1.2] tracking-[-0.04em]">
          We make certain that every choice, resource, and technological
          advancement contributes to maximizing value by fusing creativity,
          effectiveness, and strategic execution.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <div className="bg-[#FAFAFA] dark:bg-dark-gradient p-10 rounded-md border border-default-200 dark:border-y-default-50 dark:border-x-default-200">
          <h3 className="text-secondary dark:text-primary text-3xl md:text-4xl leading-[48px] tracking-[-2px] font-semibold font-primary">
            {" "}
            Nexbit Studio
          </h3>

          <ul className="mt-7 mb-5">
            {nextbitSulution.map((item, index) => (
              <li
                key={index}
                className="flex items-center text-secondary dark:text-primary gap-x-2 "
              >
                <LuSmile className="my-3 h-5 w-6 font-semibold" />
                <span className="text-sm my-3">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-[#FAFAFA] dark:bg-dark-gradient p-10 rounded-md border border-default-200 dark:border-y-default-50 dark:border-x-default-200">
          <h3 className="text-secondary dark:text-primary text-3xl md:text-4xl leading-[48px] tracking-[-2px] font-semibold font-primary">
            {" "}
            Your Company
          </h3>

          <ul className="mt-7 mb-5">
            {yourCompanySolution.map((item, index) => (
              <li
                key={index}
                className="flex items-center text-secondary dark:text-primary gap-x-2 "
              >
                <LuFrown className="my-3 h-5 w-6 font-semibold" />
                <span className="text-sm my-3">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
