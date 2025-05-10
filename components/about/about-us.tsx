export default function AboutUs() {
  return (
    <div className="pt-12 md:pt-16">
      <h2 className="border-b-1 border-default-200 pb-3 dark:text-primary text-sm font-medium">
        About Us
      </h2>

      <div className="py-6 flex flex-col md:flex-row justify-between gap-x-0 md:gap-x-3 gap-y-6 ">
        <div className="w-full md:w-1/2">
          <h2 className=" dark:text-primary text-4xl md:text-[40px] font-bold leading-[1.2] tracking-[-0.04em] font-primary">
            From a Bold Idea to a Global Tech Force
          </h2>
        </div>
        <div className="w-full md:w-1/2 space-y-4">
          <p className="font-secondary text-sm md:text-base font-normal leading-[1.36] tracking-[-0.02em] dark:text-primary">
            What started as a passion-driven project has evolved into a
            pioneering technology company specializing in eCommerce, SaaS, and
            business software.
          </p>
          <p className="font-secondary text-sm md:text-base font-normal leading-[1.36] tracking-[-0.02em] dark:text-primary">
            Over the years, we’ve launched disruptive eCommerce solutions,
            streamlined WooCommerce-based innovations, and built platforms that
            empower businesses of all sizes.
          </p>
          <p className="font-secondary text-sm md:text-base font-normal leading-[1.36] tracking-[-0.02em] dark:text-primary">
            With a global mindset and a relentless drive for innovation, we
            continue pushing boundaries, changing how businesses operate, sell,
            and grow digitally.
          </p>
          <p className="font-secondary text-sm md:text-base font-normal leading-[1.36] tracking-[-0.02em] dark:text-primary">
            We are innovators, problem-solvers, and digital architects committed
            to redefining the eCommerce and SaaS landscape.
          </p>
        </div>
      </div>
    </div>
  );
}
