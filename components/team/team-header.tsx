export default function TeamHeader() {
  return (
    <div className="pt-12 md:pt-16">
      <h2 className="border-b-1 border-default-200 pb-3 text-secondary dark:text-primary text-sm font-medium">
        About Us
      </h2>

      <div className="py-6 flex flex-col md:flex-row justify-between gap-x-0 md:gap-x-3 gap-y-6 ">
        <div className="w-full md:w-1/2">
          <h2 className="text-black dark:text-primary text-4xl md:text-[40px] font-bold leading-[1.2] tracking-[-0.04em] font-primary">
            The kind of people you love working with
          </h2>
        </div>
        <div className="w-full md:w-1/2 space-y-4">
          <p className="font-secondary text-sm md:text-base font-normal leading-[1.36] tracking-[-0.02em] text-secondary dark:text-primary">
            We are the skilled and cooperative team of digital crafters
            you&apos;ve been looking for. We know how difficult it is to find
            the perfect partners for your venture. So, look no further: Everyone
            at Nextbit Studio has the product mindset you need and a proven
            track-record of reliable co-creation.
          </p>
        </div>
      </div>
    </div>
  );
}
