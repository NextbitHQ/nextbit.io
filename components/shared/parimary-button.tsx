"use client"
import { Button, ButtonVariantProps } from "@heroui/react";
import React from "react";

interface PrimaryButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  variant?:  "shadow" | "solid" | "bordered" | "light" | "flat" | "faded" | "ghost" | undefined;
  endContent?:React.ReactNode,
  startContent?:React.ReactNode,
}

export function PrimaryButton({ onClick, children, variant,className = "",endContent,startContent }: PrimaryButtonProps) {
  return (
    <Button
      onClick={onClick}
      className={`h-10 w-[168px] md:w-[183px] bg-default-foreground px-[16px] py-[10px] text-base font-medium leading-5 font-secondary text-background ${className}`}
      radius="sm"
      variant={variant}
      endContent={endContent}
      startContent={startContent}
    >
      {children}
    </Button>
  );
}