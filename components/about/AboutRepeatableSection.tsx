import Image, { StaticImageData } from "next/image";

interface AboutRepeatableSectionProps {
    title: string;
    heading: string;
    descriptions: string[];
    imageSrc: StaticImageData;
    imageAlt?: string;
}

export default function AboutRepeatableSection({
    title,
    heading,
    descriptions,
    imageSrc,
    imageAlt
}: AboutRepeatableSectionProps) {
    return (
        <div className="pt-12 md:pt-16">
            <h2 className="border-b-1 border-default-200 pb-3 text-secondary dark:text-primary text-sm font-medium">{title}</h2>

            <div className="pt-6 pb-14 flex flex-col md:flex-row justify-between gap-x-0 md:gap-x-6 gap-y-6 ">
                <div className="w-full md:w-1/2">
                    <h2 className="text-black dark:text-primary text-4xl md:text-[40px] font-bold leading-[44px] md:leading-[48px] tracking-[-2px] font-primary">{heading}</h2>
                    {
                        descriptions.map((description, index) => (
                            <p key={index} className="font-secondary text-sm md:text-base font-normal leading-6 md:leading-7 text-secondary dark:text-primary mt-5">
                                {description}
                            </p>
                        ))
                    }
                    {/* <p className="font-secondary text-sm md:text-base font-normal leading-6 md:leading-7 text-secondary dark:text-primary mt-5">
                        {description}
                    </p> */}
                </div>
                <div className="w-full md:w-1/2">
                    <Image src={imageSrc} width={600} height={400} alt={imageAlt || 'Image'} />
                </div>
            </div>
        </div>
    );
}