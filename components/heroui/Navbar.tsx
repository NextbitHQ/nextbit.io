"use client";

import type { NavbarProps } from "@heroui/react";

import React, { useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
  Divider,
} from "@heroui/react";
import { cn } from "@heroui/react";

import BrandIcon from "../icons/BrandIcon";

const menuItems = [
  { label: "Services", link: "/services" },
  { label: "Process", link: "/process" },
  { label: "About", link: "/about" },
  { label: "Contact", link: "/contact" },
];

export default function Component(props: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;

      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      {...props}
      classNames={{
        base: cn(
          "dark:bg-black border-b border-default-200",
          {
            "dark:bg-default-100/50 ": isMenuOpen,
          },
        ),
        wrapper: "w-full justify-center",
        item: "hidden md:flex",
      }}
      height="60px"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      {/* Left Content */}
      <NavbarBrand>
        <Link
          className=" dark:text-white text-lg font-medium"
          href="/"
          onClick={() => setIsMenuOpen(false)}
        >
          <BrandIcon />
        </Link>
      </NavbarBrand>

      {/* Center Content */}
      <NavbarContent className="space-x-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index + 1}>
            <Link className="text-default-500 text-sm" href={item.link}>
              {item.label}
            </Link>
          </NavbarItem>
        ))}

      </NavbarContent>
      <NavbarMenuToggle className="text-default-400 md:hidden" />
      <NavbarMenu
        className={cn(
          "top-[calc(var(--navbar-height)_-_1px)] max-h-fit bg-default-200/50 pb-6 pt-6 shadow-medium backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50 transition-all duration-300 ease-in-out",
          {
            "opacity-0 translate-y-[-10px]": !isMenuOpen,
            "opacity-1 translate-y-[-10px]": isMenuOpen,
          },
        )}
      >
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="mb-2 w-full text-default-500"
              href={item.link}
              size="md"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
            {index < menuItems.length - 1 && <Divider className="opacity-50" />}
          </NavbarMenuItem>
        ))}
  
      </NavbarMenu>
    </Navbar>
  );
}
