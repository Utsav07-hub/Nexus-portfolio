"use client";

import type { ElementType, HTMLAttributes } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { slideUp } from "@/styles/animations";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  id?: string;
  as?: ElementType;
  /** Renders content without the built-in Container wrapper. */
  unwrapped?: boolean;
  /** Disables the on-scroll reveal animation. */
  animate?: boolean;
}

/**
 * Vertical rhythm primitive for page sections. Applies consistent
 * spacing on the 8px scale and an optional subtle reveal-on-scroll
 * animation that respects `prefers-reduced-motion` via Framer Motion's
 * viewport-based `whileInView`.
 */
export function Section({
  id,
  as: Tag = "section",
  unwrapped = false,
  animate = true,
  className,
  children,
  ...props
}: SectionProps) {
  const content = unwrapped ? children : <Container>{children}</Container>;

  if (!animate) {
    return (
      <Tag id={id} className={cn("py-16 md:py-24", className)} {...props}>
        {content}
      </Tag>
    );
  }

  return (
    <Tag id={id} className={cn("py-16 md:py-24", className)} {...props}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={slideUp}
      >
        {content}
      </motion.div>
    </Tag>
  );
}
