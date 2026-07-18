"use client";

import type { ReactNode } from "react";
import { MotionConfig } from "framer-motion";

/**
 * Wraps the app in Framer Motion's MotionConfig so every animation —
 * including JS-driven, infinitely-repeating ones like the Hero's scroll
 * indicator — automatically respects `prefers-reduced-motion`. The
 * global CSS reset in `globals.css` only covers CSS transitions, so this
 * is required for animate()/whileInView motion to comply too.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
