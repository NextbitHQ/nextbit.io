import { LuCheck } from "react-icons/lu";
import { TertiaryButton } from "../shared/tertiary-button";

interface ProcessRepeatableSectionProps {
    title: string;
    heading: string;
    description: string;
    firstButtonLable:string;
    SecondButtonLabel:string;
    processSlutions: string[];
}

export default function ProcessRepeatableSection({
    title,
    heading,
    description,
    firstButtonLable,
    SecondButtonLabel,
    processSlutions
}: ProcessRepeatableSectionProps) {
    return (
        <div className="pt-12 md:pt-14">
            <h2 className="border-b-1 border-default-200 pb-3 text-secondary dark:text-primary text-sm font-medium">{title}</h2>
            <div className="pt-6 pb-8 flex flex-col md:flex-row justify-between gap-x-0 md:gap-x-14 gap-y-6 md:gap-y-0 ">
                <div className="w-full md:w-2/3">
                    <h2 className="text-black dark:text-primary text-4xl md:text-[40px] font-semibold leading-[1.2] [-0.01em]  font-primary">{heading}</h2>
                    <p className="font-secondary text-sm md:text-base font-normal text-secondary dark:text-primary-light mt-5 leading-[1.36] tracking-[-0.02em]">
                        {description}
                    </p>
                    <div className="flex gap-2 mt-8">
                        <TertiaryButton className="h-8 border-default-500 dark:border-default-100 bg-inherit text-secondary dark:text-primary-light text-xs font-secondary" showIcon={false}>{firstButtonLable}</TertiaryButton>
                        <TertiaryButton className="h-8 border-default-500 dark:border-default-100 bg-inherit text-secondary dark:text-primary-light text-xs font-secondary" showIcon={false}>{SecondButtonLabel}</TertiaryButton>
                    </div>
                </div>
                <div className="w-full md:w-1/3">
                    <div className="border-1 border-default-50 dark:border-y-default-50 dark:border-x-default-200 p-4 rounded-[10px] bg-[#FAFAFA] dark:bg-dark-gradient">
                        <ul>
                            {processSlutions.map((item, index) => (
                                <li key={index} className="flex items-center text-secondary dark:text-primary">
                                    <LuCheck className="my-3 h-5 w-6 font-semibold" />
                                    <span className="text-sm my-3 ml-2">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}