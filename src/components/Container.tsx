import { ReactNode } from "react";
import { cn } from "../lib/utils";

const Container = ({
  className,
  children,
}: {
  bgColor?: string;
  className?: string;
  children: ReactNode;
}) => {
  return <section className={cn(className)}>{children}</section>;
};

export default Container;
