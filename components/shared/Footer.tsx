"use client";
import type { IconProps } from "@iconify/react";

import React from "react";
import { Button, Input, Link } from "@heroui/react";
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
    <footer className="flex justify-between w-full p-5 border-t-1 border-default-200">
        <div className="">
          <p className="text-smalltext-default-400">
            &copy; 2025 Nextbit Inc. All rights reserved.
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
    </footer>
  );
};

export default Footer;
