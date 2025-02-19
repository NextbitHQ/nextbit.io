"use client";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

interface TertiaryButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  showIcon?: boolean;
  className?: string;
  iconClass?: string;
}

export function TertiaryButton({
  onClick,
  children,
  showIcon = true,
  className = "",
  iconClass = "",
}: TertiaryButtonProps) {
  return (
    <Button
      className={`h-10 border-1 bg-gray-1000 border-default-500 px-[16px] py-[10px] text-sm font-medium font-primary leading-5 ${className}`}
      endContent={
        showIcon ? (
          <span
            className={`pointer-events-none flex h-[22px] w-[22px] items-center justify-center rounded-full ${iconClass}`}
          >
            <Icon
              className="text-default-500 [&>path]:stroke-[1.5]"
              icon="solar:arrow-right-linear"
              width={16}
            />
          </span>
        ) : null
      }
      radius="sm"
      variant="bordered"
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
