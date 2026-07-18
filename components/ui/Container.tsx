import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export type ContainerProps = HTMLAttributes<HTMLDivElement>;

/**
 * Centers content within the site's max width (1200px) with consistent
 * horizontal padding on an 8px scale. Every top-level section should wrap
 * its content in this rather than repeating padding utilities.
 */
export function Container({ className, ...props }: ContainerProps) {
  return <div className={cn("mx-auto w-full max-w-content px-6 md:px-8", className)} {...props} />;
}
