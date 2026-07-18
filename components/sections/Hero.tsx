"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { buttonVariants } from "@/components/ui/Button";
import { heroContent } from "@/data/hero";
import { siteConfig } from "@/data/site";
import { staggerContainer, staggerItem, hoverLift } from "@/styles/animations";

const socialLinks = [
  { label: "GitHub", href: siteConfig.social.github, icon: Github },
  { label: "LinkedIn", href: siteConfig.social.linkedin, icon: Linkedin },
  {
    label: "Email",
    href: siteConfig.social.emailUrl,
    icon: Mail,
  },
];

/**
 * Full-viewport introduction to the site. Left-aligned rather than
 * centered so the large name reads like a statement, not a poster.
 * Every element enters via a single staggered reveal — no per-element
 * bespoke animation — to keep the motion coherent and easy to tune.
 */
export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100svh-4rem)] items-center border-b border-border"
    >
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex max-w-3xl flex-col"
        >
          <motion.span variants={staggerItem} className="font-mono text-sm text-accent">
            {heroContent.intro}
          </motion.span>

          <motion.h1
            variants={staggerItem}
            className="mt-4 text-5xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl"
          >
            {heroContent.name}
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="mt-4 text-xl font-medium text-muted-foreground sm:text-2xl"
          >
            {heroContent.titleLines.join(" · ")}
          </motion.p>

          <motion.p
            variants={staggerItem}
            className="mt-4 inline-flex items-center gap-2 font-mono text-sm text-muted-foreground"
          >
            <MapPin size={16} strokeWidth={1.75} aria-hidden="true" />
            {heroContent.location}
          </motion.p>

          <motion.p
            variants={staggerItem}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {heroContent.description}
          </motion.p>

          <motion.div variants={staggerItem} className="mt-10 flex flex-wrap items-center gap-4">
            <motion.div whileHover={hoverLift}>
              <Link
                href={heroContent.primaryCta.href as never}
                className={buttonVariants({ variant: "primary", size: "lg" })}
              >
                {heroContent.primaryCta.label}
              </Link>
            </motion.div>

            <motion.div whileHover={hoverLift}>
              <Link
                href={siteConfig.resumeUrl as never}
                download
                className={buttonVariants({ variant: "secondary", size: "lg" })}
              >
                {heroContent.secondaryCta.label}
              </Link>
            </motion.div>
          </motion.div>

          <motion.ul variants={staggerItem} className="mt-10 flex items-center gap-1">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <motion.div whileHover={hoverLift}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
                    aria-label={label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md text-muted-foreground transition-colors duration-200 hover:bg-surface hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <Icon size={19} strokeWidth={1.75} aria-hidden="true" />
                  </a>
                </motion.div>
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="pointer-events-none absolute inset-x-0 bottom-8 flex justify-center"
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="font-mono text-xs tracking-wide">scroll</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={16} strokeWidth={1.75} aria-hidden="true" />
          </motion.span>
        </div>
      </motion.div>
    </section>
  );
}
