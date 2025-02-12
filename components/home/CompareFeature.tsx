import React from 'react';
import { IconType } from 'react-icons';
import { LuCheck } from 'react-icons/lu';

interface CompareFeatureProps {
    title: string;
    items: string[];
    icon: IconType;
}

const CompareFeature: React.FC<CompareFeatureProps> = ({ title, items, icon: Icon }) => {
    return (
        <div className="bg-inherit p-3 rounded-md border border-default-200 dark:border-y-default-50 dark:border-x-default-200">
            <h3 className="text-secondary dark:text-primary text-3xl md:text-[28px] leading-[48px] tracking-[-2px] font-semibold font-primary">{title}</h3>
            <ul className="mt-1">
                {items.map((item, index) => (
                    <li key={index} className="flex items-center text-secondary dark:text-primary gap-x-2 ">
                        <Icon className="my-3 h-5 w-6 font-semibold" />
                        <span className="text-sm my-3">{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CompareFeature;
