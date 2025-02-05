import React, { FC, ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type TextSizeWC = "title" | "para_1" | "para_2" | "caption";
type TTypo = "head1" | "head2" | "title" | "para" | "caption";

interface ButtonWCProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  loading?: boolean;
  size?: "sm" | "md" | "lg" | "full";
  textSize?: TextSizeWC;
  disabled?: boolean;
}

const textSizeWCClasses: Record<TextSizeWC, string> = {
  title: "text-title",
  para_1: "text-para_1",
  para_2: "text-para_2",
  caption: "text-caption",
};

const ButtonWC: FC<ButtonWCProps> = ({
  label,
  loading = false,
  size = "md",
  textSize = "para_2",
  disabled = false,
  className,
  ...props
}) => {
  const baseClasses = `inline-flex items-center justify-center font-medium rounded-lg focus:ring-4 focus:outline-none`;
  const sizeClasses = {
    sm: "px-3 py-2",
    md: "px-5 py-2.5",
    lg: "px-6 py-3",
    full: "w-full py-2.5",
  };

  return (
    <button
      className={[
        cn(
          baseClasses,
          sizeClasses[size],
          disabled || loading ? "opacity-50 cursor-not-allowed " : "",
          className,
        ),
        textSizeWCClasses[textSize],
      ].join(" ")}
      disabled={disabled || loading}
      type="button"
      {...props}
    >
      {loading && (
        <div className="border-black-20 h-4 w-4 mr-1 animate-spin rounded-full border-2 border-t-blue-600" />
      )}
      {!loading && label}
    </button>
  );
};

export default ButtonWC;
