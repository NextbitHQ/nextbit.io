import { features } from "process"
import { LuCheck, LuX } from "react-icons/lu"
import CompareFeature from "./CompareFeature"

const nextbitSulution = [
    'AI solutions that make an impact',
    'AI solutions that make an impact',
    'AI solutions that make an impact',
    'AI solutions that make an impact',
    'AI solutions that make an impact',
    'AI solutions that make an impact',
    'AI solutions that make an impact',
    'AI solutions that make an impact',
]
const otherSulution = [
    {
        name: "Freelancer",
        icon: LuX,
        features: [
            'AI solutions ',
            'AI solutions ',
            'AI solutions ',
            'AI solutions ',
            'AI solutions ',
            'AI solutions ',
            'AI solutions ',
            'AI solutions ',
        ]
    },
    {
        name: "Agency",
        icon: LuX,
        features: [
            'AI solutions ',
            'AI solutions ',
            'AI solutions ',
            'AI solutions ',
            'AI solutions ',
            'AI solutions ',
            'AI solutions ',
            'AI solutions ',
        ]
    },
    {
        name: "Full-time",
        icon: LuX,
        features: [
            'AI solutions ',
            'AI solutions ',
            'AI solutions ',
            'AI solutions ',
            'AI solutions ',
            'AI solutions ',
            'AI solutions ',
            'AI solutions ',
        ]
    }
]
export default function Compare() {
    return (
        <div className="pt-20 md:pt-32 pb-6 md:pb-10">
            <div>
                <h2 className="font-primary font-bold text-secondary dark:text-primary text-4xl md:text-[48px] leading-[1.2] tracking-[-0.02em]">Leveraging Opportunities to Maximize Benefits from Every Perspective</h2>
                <p className="font-secondary font-normal text-sm md:text-lg text-secondary-light dark:text-primary-light mt-3 md:mt-4 leading-[1.2] tracking-[-0.03em]">Use AI to streamline processes, improve decision-making, and create new efficiencies. From machine learning models to AI-powered automation, we help businesses integrate intelligence into their workflows in a simple manner.</p>
            </div>

            <div className="flex flex-col md:flex-row gap-6 mt-10">

                <div className="w-full md:w-2/5 bg-[#FAFAFA] dark:bg-dark-gradient p-4 rounded-md border border-default-200 dark:border-y-default-50 dark:border-x-default-200">
                    <h3 className="text-secondary dark:text-primary text-3xl md:text-[28px] leading-[48px] tracking-[-2px] font-semibold font-primary"> Nexbit Studio</h3>
                    <ul className="mt-1">
                        {nextbitSulution.map((item, index) => (
                            <li key={index} className="flex items-center text-secondary dark:text-primary gap-x-2 ">
                                <LuCheck className="my-3 h-5 w-6 font-semibold" />
                                <span className="text-sm my-3">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-full md:w-3/5 grid grid-cols-1 md:grid-cols-3 gap-3">
                     
                     {
                        otherSulution.map((solution, index) => (
                            <CompareFeature 
                                key={index}
                                title={solution.name}
                                items={solution.features}
                                icon={solution.icon}
                            />
                        ))
                     }
                </div>

            </div>
        </div>
    )
}