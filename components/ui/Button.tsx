import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import type { ButtonSize, ButtonVariant } from "@/types";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-foreground text-background hover:bg-foreground/90 border border-transparent",
  secondary: "bg-surface text-foreground border border-border hover:border-foreground/30",
  ghost: "bg-transparent text-foreground hover:bg-surface border border-transparent",
  link: "bg-transparent text-foreground underline-offset-4 hover:underline border-0 p-0 h-auto",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
};

/**
 * Returns the composed class string for a given variant/size combination
 * without rendering a `<button>` element. Use this to style a `Link` (or
 * any other element) as a button — e.g.
 * `<Link className={buttonVariants({ variant: "secondary" })}>`.
 * This avoids needing an `asChild`/Slot pattern and an extra dependency.
 */
export function buttonVariants({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}): string {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-md font-medium",
    "transition-colors duration-200 ease-smooth",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:pointer-events-none disabled:opacity-50",
    variantStyles[variant],
    variant !== "link" ? sizeStyles[size] : undefined,
    className,
  );
}

/**
 * Base button primitive. Composes variant and size styles rather than
 * duplicating them across usages. Extend `variantStyles` /
 * `sizeStyles` if new options are needed — never inline one-off styles.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return <button ref={ref} className={buttonVariants({ variant, size, className })} {...props} />;
  },
);

Button.displayName = "Button";
