"use client";
import type { IconProps } from "@iconify/react";

import React from "react";
import { Link } from "@heroui/react";
import { Icon } from "@iconify/react";

type SocialIconProps = Omit<IconProps, "icon">;
const social = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/nextbithq/",
    icon: (props: SocialIconProps) => (
      <Icon {...props} icon="fontisto:facebook" />
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/nextbithq/",
    icon: (props: SocialIconProps) => (
      <Icon {...props} icon="fontisto:instagram" />
    ),
  },
  {
    name: "X",
    href: "https://www.x.com/nextbithq/",
    icon: (props: SocialIconProps) => (
      <Icon {...props} icon="fontisto:twitter" />
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/NextbitHQ",
    icon: (props: SocialIconProps) => (
      <Icon {...props} icon="fontisto:github" />
    ),
  },
];

const Footer = () => {
  const renderList = React.useCallback(
    ({
      title,
      items,
    }: {
      title: string;
      items: { name: string; href: string }[];
    }) => (
      <div>
        <h3 className="text-small font-semibold text-default-600">{title}</h3>
        <ul className="mt-6 space-y-4">
          {items.map((item) => (
            <li key={item.name}>
              <Link className="text-default-400" href={item.href} size="sm">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    ),
    [],
  );

  return (
    <footer>
    
      <div className="relative ">
        <div className="relative overflow-hidden h-[300px]">
          <p
            className="absolute bottom-[-2.5vw] left-[-3vw] md:left-[-1.3vw] font-semibold leading-[1.3]  text-white dark:text-black [text-shadow:0_0_1px_gray,0_0_1px_gray,0_0_1px_gray,0_0_1px_gray]
           text-[clamp(4rem,24vw,16rem)] md:text-[clamp(5rem,25vw,16rem)]"
          >
            NEXTBIT
          </p>
        </div>
      </div>
      <div className=" mt-2 flex justify-between w-full p-5 border-t-1 border-default-200">
        <div className="">
          <p className="text-small text-default-400">
            &copy; 2025 Nextbit Technologies. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-6">
          {social.map((item) => (
            <Link key={item.name} isExternal className="text-default-400" href={item.href}>
              <span className="sr-only">{item.name}</span>
              <item.icon aria-hidden="true" className="w-4" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
