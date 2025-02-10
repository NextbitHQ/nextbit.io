"use client";

import type {NavbarProps} from "@heroui/react";

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
  Button,
  Divider,
} from "@heroui/react";
import {Icon} from "@iconify/react";
import {cn} from "@heroui/react";
import { ThemeSwitch } from "../theme-switch";
import { Label } from "@radix-ui/react-select";
import { AcmeIcon } from "../icons/acme";


const menuItems = [
  { label: "Services", link: "#services" },
  { label: "How We Work", link: "/how-we-work" },
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
        base: cn("border-default-100", {
          "bg-default-200/50 dark:bg-default-100/50 ": isMenuOpen,
          "border-b border-default-200": scrolled,
        }),
        wrapper: "w-full justify-center",
        item: "hidden md:flex",
      }}
      height="60px"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      {/* Left Content */}
      <NavbarBrand>
        <div >
        <AcmeIcon size={34} />
        </div>
        <Link href="/" className="text-default-500 text-lg font-medium">
         Nextbit        
        </Link>
      </NavbarBrand>

      {/* Center Content */}
      <NavbarContent justify="center" className="space-x-4">
      {menuItems.map((item, index) => (
            <NavbarItem key={index+1}>
              <Link href={item.link} className="text-default-500 text-sm">
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        <NavbarItem>
           <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenuToggle className="text-default-400 md:hidden" />
      <NavbarMenu className="top-[calc(var(--navbar-height)_-_1px)] max-h-fit bg-default-200/50 pb-6 pt-6 shadow-medium backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="mb-2 w-full text-default-500" href={item.link} size="md">
              {item.label}
            </Link>
            {index < menuItems.length - 1 && <Divider className="opacity-50" />}
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <ThemeSwitch />
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
