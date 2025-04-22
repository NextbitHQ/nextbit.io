import React from "react";
import { PrimaryButton } from "../shared/parimary-button";


interface WhyChooseUsItem {
  title: string;
  description: string;
}

export interface TService {
  icon: React.ReactNode;
  category: string;
  heading: string;
  subheading: string;
  description: string;
  whyChooseUs: WhyChooseUsItem[];
  button: string;
}

interface ServiceCardProps {
  service: TService;
  className?: string; // Optional additional styling
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, className = "" }) => {
  return (
    <div className={`service-card ${className}`}>
      <div className="flex items-center text-sm md:text-xl gap-x-3 leading-7 font-semibold text-black dark:text-white font-secondary">
        {service.icon}
        <h3>{service.category}</h3>
      </div>

      <h3 className="text-start text-4xl md:text-[48px] font-primary leading-[1.2] tracking-[-0.04em] text-black dark:text-white font-bold mt-5 md:mt-11">
        {service.heading}
      </h3>

      <h4 className="text-start leading-[1.2] tracking-[-0.04em] text-black dark:text-primary-light font-semibold font-secondary text-sm md:text-xl mt-5 md:mt-6">
        {service.subheading}
      </h4>

      <p className="text-start font-normal leading-[1.36] tracking-[-0.02em] md:leading-7 text-secondary-light dark:text-primary-light text-sm md:text-lg mt-9">
        {service.description}
      </p>

      <div className="mt-8">
        <ul className="mt-4">
          {service.whyChooseUs.map((reason, idx) => (
            <li key={idx} className="flex items-center gap-x-2 text-start mb-2">
              <div>
                <span className="font-semibold text-black dark:text-white text-xs md:text-sm leading-6 md:leading-7 font-secondary">
                  {reason.title} -
                </span>
                <span className="ml-2 font-normal text-secondary dark:text-primary-light text-xs md:text-sm leading-6 md:leading-7 font-secondary">
                  {reason.description}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <PrimaryButton className="my-6">{service.button}</PrimaryButton>
      </div>
    </div>
  );
};

export default ServiceCard;
