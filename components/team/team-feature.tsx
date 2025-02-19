interface TeamFeatureProps {
  title: string;
  heading: string;
  description: string;
}

export default function TeamFeature({
  title,
  heading,
  description,
}: TeamFeatureProps) {
  return (
    <div>
      <h2 className="border-b-1 border-default-200 pb-3 text-secondary dark:text-primary text-sm font-medium">
        {title}
      </h2>
      <div className="pt-6 pb-8 flex flex-col gap-x-0 md:gap-x-14 gap-y-6 md:gap-y-0">
        <div className="w-full">
          <h2 className="text-black dark:text-primary text-4xl font-semibold leading-[1.2] [-0.01em] font-primary">
            {heading}
          </h2>
          <p className="font-secondary text-sm md:text-base font-normal text-secondary dark:text-primary-light mt-5 leading-[1.36] tracking-[-0.02em]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
