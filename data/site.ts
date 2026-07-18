import type { SiteConfig } from "@/types";

/**
 * Central site configuration. Update this file to change site-wide
 * metadata, author info, and social links without touching components.
 */
export const siteConfig: SiteConfig = {
  name: "Utsav Chauhan",
  shortName: "Portfolio",
  openGraphTitle: "Utsav Chauhan | Portfolio",
  description:
    "Utsav Chauhan is a Mathematics & Computing undergraduate at Delhi Technological University building machine learning projects, full-stack web applications, and algorithmic solutions.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  author: "Utsav Chauhan",
  keywords: [
    "Utsav Chauhan",
    "software engineer",
    "machine learning",
    "portfolio",
    "DTU",
    "full stack developer",
    "web development",
  ],
  // Place the actual file at /public/resume.pdf to make this link resolve.
  resumeUrl: "/resume.pdf",
  social: {
    github: "https://github.com/Utsav07-hub",
    twitter: "@utsavchauhan",
    linkedin: "https://www.linkedin.com/in/utsav-chauhan-39b687294",
    email: "utsavchauhan702@gmail.com",
    emailUrl: "https://mail.google.com/mail/?view=cm&fs=1&to=utsavchauhan702@gmail.com",
  },
};
