'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { PrimaryButton } from '../shared/parimary-button';

export interface Service {
  icon: React.ReactNode;
  category: string;
  heading: string;
  subheading: string;
  description: string;
  whyChooseUs: { title: string; description: string }[];
  component: any;
  button: React.ReactNode;
}

interface ScrollableSectionProps {
  services: Service[];
}

const ScrollableSection: React.FC<ScrollableSectionProps> = ({ services }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const leftSideRef = useRef<HTMLDivElement>(null);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const updateActiveIndex = () => {
      if (!leftSideRef.current) return;

      const { scrollTop, clientHeight } = leftSideRef.current;
      const scrollMid = scrollTop + (clientHeight / 2);

      // Find which section is most visible
      let newActiveIndex = 0;
      serviceRefs.current.forEach((ref, index) => {
        if (!ref) return;
        
        const rect = ref.getBoundingClientRect();
        const parentRect = leftSideRef.current!.getBoundingClientRect();
        const relativeTop = rect.top - parentRect.top;
        
        if (relativeTop <= clientHeight / 2) {
          newActiveIndex = index;
        }
      });

      if (newActiveIndex !== activeIndex) {
        setActiveIndex(newActiveIndex);
      }
    };

    const handleScroll = () => {
      requestAnimationFrame(updateActiveIndex);
    };

    const handleWheel = (e: { deltaY: number; preventDefault: () => void; }) => {
      if (leftSideRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = leftSideRef.current;
        const isAtTop = scrollTop <= 0;
        const isAtBottom = Math.abs(scrollTop + clientHeight - scrollHeight) < 1;

        if ((isAtTop && e.deltaY < 0) || (isAtBottom && e.deltaY > 0)) {
          return;
        }

        e.preventDefault();
        const newScrollTop = scrollTop + e.deltaY;

        if (newScrollTop >= 0 && newScrollTop <= scrollHeight - clientHeight) {
          leftSideRef.current.scrollTop = newScrollTop;
        }
      }
    };

    const container = scrollContainerRef.current;
    const leftSide = leftSideRef.current;

    if (container && leftSide) {
      container.addEventListener('wheel', handleWheel, { passive: false });
      leftSide.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (container && leftSide) {
        container.removeEventListener('wheel', handleWheel);
        leftSide.removeEventListener('scroll', handleScroll);
      }
    };
  }, [activeIndex, services.length]);

  return (
    <div
      ref={scrollContainerRef}
      className="flex flex-row items-center justify-between gap-5 md:h-[780px] overflow-hidden"
    >
      {/* Left Side - Scrollable Content */}
      <div
        ref={leftSideRef}
        className="md:w-3/5 md:h-[780px] overflow-y-auto scrollbar-hide"
        style={{ overscrollBehavior: 'contain' }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            ref={el => {
              serviceRefs.current[index] = el;
            }}
            className={index !== 0 ? "my-20" : ""}
          >
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
                  <li
                    key={idx}
                    className="flex items-center gap-x-2 text-start mb-2"
                  >
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
              <PrimaryButton className="my-6">
                {service.button}
              </PrimaryButton>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Right Side - Fixed Image */}
      <div className="md:w-2/5 md:h-[780px] pointer-events-none flex items-center justify-center">
        <motion.div
          className="w-full flex items-center"
          key={activeIndex}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
        >
          <Image
            className="object-contain h-full w-full"
            width={400}
            height={500}
            src={services[activeIndex].component}
            alt={services[activeIndex].category}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollableSection;