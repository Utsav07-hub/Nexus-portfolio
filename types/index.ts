import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

export type ButtonVariant = "primary" | "secondary" | "ghost" | "link";
export type ButtonSize = "sm" | "md" | "lg";

export type BadgeVariant = "default" | "accent" | "outline";

export interface CtaLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  openGraphTitle: string;
  description: string;
  url: string;
  author: string;
  keywords: string[];
  resumeUrl: string;
  social: {
    github: string;
    twitter: string;
    linkedin: string;
    email: string;
    emailUrl: string;
  };
}
