"use client"
import { Button } from "@heroui/react";

interface PrimaryButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

export function PrimaryButton({ onClick, children, className = "" }: PrimaryButtonProps) {
  return (
    <Button
      onClick={onClick}
      className={`h-10 w-[168px] md:w-[183px] bg-default-foreground px-[16px] py-[10px] text-base font-medium leading-5 font-secondary text-background ${className}`}
      radius="sm"
    >
      {children}
    </Button>
  );
}