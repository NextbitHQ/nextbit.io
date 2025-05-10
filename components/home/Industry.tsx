import {
  LuPencil,
  LuShoppingBag,
  LuBrain,
  LuWallet,
  LuHeartPulse,
  LuGraduationCap,
  LuHouse,
} from "react-icons/lu";

const industries = [
  {
    icon: <LuPencil className="w-5 h-5" />,
    text: "Creators & Publications",
  },
  {
    icon: <LuShoppingBag className="w-5 h-5" />,
    text: "eCommerce",
  },
  {
    icon: <LuBrain className="w-5 h-5" />,
    text: "AI Startups",
  },
  {
    icon: <LuWallet className="w-5 h-5" />,
    text: "Fintech",
  },
  {
    icon: <LuHeartPulse className="w-5 h-5" />,
    text: "Cybersecurity",
  },
  {
    icon: <LuHeartPulse className="w-5 h-5" />,
    text: "Healthcare",
  },
  {
    icon: <LuHouse className="w-5 h-5" />,
    text: "Real Estate",
  },
  {
    icon: <LuGraduationCap className="w-5 h-5" />,
    text: "Entertainment",
  },
];

export default function Industry() {
  return (
    <div className="pb-5">
      <div>
        <h2 className="font-primary font-bold  dark:text-primary text-4xl md:text-[48px] leading-[1.2] tracking-[-0.02em]">
          Unlocking Growth Potential
        </h2>
        <p className="font-secondary font-normal text-sm md:text-lg dark:text-primary-light mt-3 md:mt-4 leading-[1.2] tracking-[-0.03em]">
          Seize every opportunity with a strategic approach that drives
          innovation and scalability. Nextbit.io equips you with the tools and
          insights needed to optimize operations, expand market reach, and
          maximize business impact.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="flex items-center gap-2 font-semibold dark:text-primary"
          >
            {industry.icon}
            <span>{industry.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
