import { LuCheck } from "react-icons/lu";
const nextbitSulution = [
    'AI solutions that make an impact make an impact',
    'AI solutions that make an impact make an impact',
    'AI solutions that make an impact make an impact',
    'AI solutions that make an impact make an impact',
    'AI solutions that make an impact make an impact',
    'AI solutions that make an impact make an impact',
    'AI solutions that make an impact make an impact',
    'AI solutions that make an impact make an impact',
]


export default function CompanyBenefit() {
    return (
        <div className="pt-20 md:pt-32 pb-6 md:pb-10">
            <div>
                <h2 className="font-primary font-bold text-secondary dark:text-primary text-4xl md:text-[48px] leading-[1.2] tracking-[-0.02em]">Leveraging Opportunities to Maximize Benefits from Every Perspective</h2>
                <p className="font-secondary font-normal text-sm md:text-lg text-secondary-light dark:text-primary-light mt-3 md:mt-4 leading-[1.2] tracking-[-0.04em]">Use AI to streamline processes, improve decision-making, and create new efficiencies. From machine learning models to AI-powered automation, we help businesses integrate intelligence into their workflows in a simple manner.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

                <div className="bg-[#FAFAFA] dark:bg-dark-gradient p-10 rounded-md border border-default-200 dark:border-y-default-50 dark:border-x-default-200">
                    <h3 className="text-secondary dark:text-primary text-3xl md:text-4xl leading-[48px] tracking-[-2px] font-semibold font-primary"> Nexbit Studio</h3>

                    <ul className="mt-7 mb-5">
                        {nextbitSulution.map((item, index) => (
                            <li key={index} className="flex items-center text-secondary dark:text-primary gap-x-2 ">
                                <LuCheck className="my-3 h-5 w-6 font-semibold" />
                                <span className="text-sm my-3">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-[#FAFAFA] dark:bg-dark-gradient p-10 rounded-md border border-default-200 dark:border-y-default-50 dark:border-x-default-200">
                    <h3 className="text-secondary dark:text-primary text-3xl md:text-4xl leading-[48px] tracking-[-2px] font-semibold font-primary"> Your Company</h3>

                    <ul className="mt-7 mb-5">
                        {nextbitSulution.map((item, index) => (
                            <li key={index} className="flex items-center text-secondary dark:text-primary gap-x-2 ">
                                <LuCheck className="my-3 h-5 w-6 font-semibold" />
                                <span className="text-sm my-3">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )

}
