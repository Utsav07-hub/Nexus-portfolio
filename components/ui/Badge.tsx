import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import type { BadgeVariant } from "@/types";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-surface text-muted-foreground border-border",
  accent: "bg-accent/10 text-accent border-accent/20",
  outline: "bg-transparent text-foreground border-border",
};

/**
 * Small label used for tech stack tags, status indicators, and metadata
 * (e.g. "TypeScript", "In Progress"). Always set in JetBrains Mono to
 * visually distinguish it from body copy, per the typography rules.
 */
export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border px-2 py-0.5 font-mono text-xs tracking-tight",
        variantStyles[variant],
        className,
      )}
      {...props}
    />
  );
}
