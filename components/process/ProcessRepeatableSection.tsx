import Image, { StaticImageData } from "next/image";

interface ProcessRepeatableSectionProps {
    title: string;
    heading: string;
    description: string;
    imageSrc: StaticImageData;
    imageAlt?: string;
}

export default function ProcessRepeatableSection({
    title,
    heading,
    description,
    imageSrc,
    imageAlt
}: ProcessRepeatableSectionProps) {
    return (
        <div className="pt-12 md:pt-14">
            <h2 className="border-b-1 border-default-200 pb-3 text-secondary dark:text-primary text-sm font-medium">{title}</h2>
            <div className="pt-6 pb-8 flex flex-col md:flex-row justify-between gap-x-0 md:gap-x-14 gap-y-6 md:gap-y-0 ">
                <div className="w-full md:w-2/3">
                    <h2 className="text-black dark:text-primary text-4xl md:text-[40px] font-bold leading-[44px] md:leading-[48px] tracking-[-2px] font-primary">{heading}</h2>
                    <p className="font-secondary text-sm md:text-base font-normal leading-6 md:leading-7 text-secondary dark:text-primary-light mt-5">
                        {description}
                    </p>
                </div>
                <div className="w-full md:w-1/3">
                    <Image src={imageSrc} width={400} height={400} alt={imageAlt || 'Image'} />
                </div>
            </div>
        </div>
    );
}