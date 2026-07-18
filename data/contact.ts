import { siteConfig } from "@/data/site";

export const contactContent = {
  heading: "Get in Touch",
  message: "Open to opportunities, collaborations, and conversations about software and ML.",
  links: [
    {
      label: "GitHub",
      href: "https://github.com/Utsav07-hub",
      external: true,
    },
    {
      label: "LinkedIn",
      href: siteConfig.social.linkedin,
      external: true,
    },
    {
      label: "Mail",
      href: siteConfig.social.emailUrl,
      external: true,
    },
  ],
  resume: {
    label: "Resume",
    href: "/resume.pdf",
  },
};
