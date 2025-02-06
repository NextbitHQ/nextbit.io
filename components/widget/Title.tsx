import React from "react";

import { cn } from "@/lib/utils";

type TitleSize =
  | "xs"
  | "sm"
  | "md"
  | "lg_semi"
  | "lg"
  | "xl_semi"
  | "xl"
  | "xxl";
type TitleVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type TitleSizeWC =
  | "title_extramini"
  | "title_medium"
  | "title_large"
  | "title"
  | "title_mini"
  | "para_1"
  | "para_2"
  | "caption";
type TitleTypo = "head1" | "head2" | "title" | "para" | "caption";

interface TitleProps {
  size?: TitleSize;
  size_wc?: TitleSizeWC;
  typo?: TitleTypo;
  variant?: TitleVariant;
  children: React.ReactNode;
  className?: string;
}

const sizeClasses: Record<TitleSize, string> = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg_semi: "text-xl",
  lg: "text-2xl",
  xl_semi: "text-3xl",
  xl: "text-4xl",
  xxl: "text-5xl",
};

const sizeWCClasses: Record<TitleSizeWC, string> = {
  title_large: "text-4xl",
  title_medium: "text-3xl",
  title: "text-2xl",
  title_mini: "text-xl",
  title_extramini: "text-lg",
  para_1: "text-base",
  para_2: "text-sm",
  caption: "text-xs",
};

const typoClasses: Record<TitleTypo, string> = {
  head1: "",
  head2: "",
  title: "",
  para: "",
  caption: "",
};

const Title: React.FC<TitleProps> = ({
  size,
  size_wc,
  typo = "title",
  variant = "h3",
  children,
  className = "",
}) => {
  const Component = variant as keyof JSX.IntrinsicElements;

  return (
    <Component
      className={[
        cn("font-semibold capitalize"),
        cn(
          sizeClasses[size as TitleSize],
          sizeWCClasses[size_wc as TitleSizeWC],
        ),
        typoClasses[typo],
        className,
      ].join(" ")}
    >
      {children}
    </Component>
  );
};

export default Title;
