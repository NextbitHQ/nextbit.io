import Image, { StaticImageData } from "next/image";
import React from "react";

import Title from "@/components/widget/Title";

type TrustedShowProps = {
  title: string;
  brands: (string | StaticImageData)[];
};

const TrustedShow: React.FC<TrustedShowProps> = ({ title, brands }) => {
  return (
    <div className="text-center my-12 lg:my-16">
      <Title
        className="text-[20px] lg:text-title_largemedium md:text-title_largemedium"
        typo="title"
      >
        {title}
      </Title>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 max-w-fit mx-auto justify-center items-center mt-10 gap-20">
        {brands.map((brand, idx) => (
          <span key={idx}>
            <Image alt={`brand-${idx}`} height={30} src={brand} width={80} />
          </span>
        ))}
      </div>
    </div>
  );
};

export default TrustedShow;
