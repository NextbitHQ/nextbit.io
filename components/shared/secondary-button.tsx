"use client";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

import { cn } from "@/lib/utils";

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
  className = "",
}: SecondaryButtonProps) {
  return (
    <Button
      className={cn(
        " border-1 border-default-500 text-base font-medium font-primary leading-5",
        className,
      )}
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
      radius="sm"
      variant="bordered"
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
