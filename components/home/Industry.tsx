import {
    LuPencil,
    LuShoppingBag,
    LuBrain,
    LuWallet,
    LuHeartPulse,
    LuGraduationCap,
    LuBriefcase,
    LuHouse
} from "react-icons/lu";

const industries = [
    {
        icon: <LuPencil className="w-5 h-5" />,
        text: "Creators & Publications"
    },
    {
        icon: <LuShoppingBag className="w-5 h-5" />,
        text: "eCommerce"
    },
    {
        icon: <LuBrain className="w-5 h-5" />,
        text: "AI Startups"
    },
    {
        icon: <LuWallet className="w-5 h-5" />,
        text: "Fintech"
    },
    {
        icon: <LuHeartPulse className="w-5 h-5" />,
        text: "Healthcare"
    },
    {
        icon: <LuHouse className="w-5 h-5" />,
        text: "Real Estate"
    },
    {
        icon: <LuGraduationCap className="w-5 h-5" />,
        text: "Education"
    },
    {
        icon: <LuBriefcase className="w-5 h-5" />,
        text: "Business Services"
    }
];
export default function Industry() {
    return (
        <div className="pb-5">
            <div>
                <h2 className="font-primary font-bold text-secondary dark:text-primary text-4xl md:text-[48px] leading-[1.2] tracking-[-0.02em]">Leveraging Opportunities to Maximize</h2>
                <p className="font-secondary font-normal text-sm md:text-lg text-secondary-light dark:text-primary-light mt-3 md:mt-4 leading-[1.2] tracking-[-0.03em]">Use AI to streamline processes, improve decision-making, and create new efficiencies. From machine learning models to AI-powered automation, we help businesses integrate intelligence into their workflows.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
                {industries.map((industry, index) => (
                    <div key={index} className="flex items-center gap-2 text-secondary font-semibold dark:text-primary">
                        {industry.icon}
                        <span>{industry.text}</span>
                    </div>
                ))}
            </div>

        </div>
    );
}