import type { CtaLink } from "@/types";
import { siteConfig } from "./site";

/**
 * Content for the Hero section. Kept separate from `site.ts` since this
 * is presentation copy specific to the homepage, not app-wide metadata.
 */
export const heroContent = {
  intro: "Hi, I'm",
  name: "Utsav Chauhan",
  location: "Delhi, India",
  titleLines: ["Mathematics & Computing Undergraduate | Machine Learning Enthusiast"],
  description:
    "I build software, train machine learning models, and solve algorithmic problems. This portfolio showcases the projects I've built, the technologies I work with, and the skills I'm developing as a Mathematics & Computing undergraduate at Delhi Technological University. ",
  primaryCta: { label: "View Projects", href: "/#work" } satisfies CtaLink,
  secondaryCta: { label: "Download Resume", href: "" } satisfies CtaLink,
};
