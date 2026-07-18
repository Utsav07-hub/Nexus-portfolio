import type { NavItem } from "@/types";

/**
 * Primary navigation items. Each entry maps to a section that actually
 * exists on the home page — keep this list in sync as sections are added.
 */
export const navItems: NavItem[] = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];
