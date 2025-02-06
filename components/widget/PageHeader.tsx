import React from "react";

import { cn } from "@/lib/utils";
type TPageHeaderProps = {
  children: React.ReactNode;
  className?: string;
};
const PageHeader = ({ className, children }: TPageHeaderProps) => {
  return <section className={cn("mt-20", className)}>{children}</section>;
};

export default PageHeader;
