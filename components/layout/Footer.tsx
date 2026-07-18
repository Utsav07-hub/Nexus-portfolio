import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site";
import type { SocialLink } from "@/types";

const socialLinks: SocialLink[] = [
  { label: "GitHub", href: siteConfig.social.github, icon: Github },
  {
    label: "Twitter",
    href: `https://twitter.com/${siteConfig.social.twitter.replace("@", "")}`,
    icon: Twitter,
  },
  { label: "LinkedIn", href: siteConfig.social.linkedin, icon: Linkedin },
  {
    label: "Email",
    href: siteConfig.social.emailUrl,
    icon: Mail,
  },
];

/**
 * Minimal footer: social links, copyright, and a quiet nod to the stack.
 * Deliberately understated — no newsletter forms or link farms.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col items-center gap-6 py-12 md:flex-row md:justify-between md:py-16">
        <p className="text-sm text-muted-foreground">
          © {year} {siteConfig.author}. All rights reserved.
        </p>

        <ul className="flex items-center gap-1">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
                aria-label={label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors duration-200 hover:bg-surface hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <Icon size={17} strokeWidth={1.75} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}
