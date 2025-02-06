"use client"
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

interface SecondaryButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  showIcon?: boolean;
  className?: string;
}

export function SecondaryButton({ 
  onClick, 
  children, 
  showIcon = true,
  className = "" 
}: SecondaryButtonProps) {
  return (
    <Button
      onClick={onClick}
      className={`h-10 w-[163px] border-1 border-default-400 px-[16px] py-[10px] text-small font-medium leading-5 ${className}`}
      radius="sm"
      variant="bordered"
      endContent={
        showIcon ? (
          <span className="pointer-events-none flex h-[22px] w-[22px] items-center justify-center rounded-full bg-default-100">
            <Icon
              className="text-default-500 [&>path]:stroke-[1.5]"
              icon="solar:arrow-right-linear"
              width={16}
            />
          </span>
        ) : null
      }
    >
      {children}
    </Button>
  );
}