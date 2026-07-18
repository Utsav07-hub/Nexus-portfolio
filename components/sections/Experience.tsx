"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { experienceEntries } from "@/data/experience";
import { staggerContainer, staggerItem } from "@/styles/animations";

/**
 * Simple bordered timeline — each entry as a row rather than a card,
 * consistent with the Featured Projects treatment.
 */
export function Experience() {
  return (
    <Section id="experience" animate={false}>
      <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">
        Experience
      </h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
        className="mt-10 divide-y divide-border border-t border-border md:mt-12"
      >
        {experienceEntries.map((entry) => (
          <motion.div
            key={entry.role}
            variants={staggerItem}
            className="grid grid-cols-1 gap-2 py-8 md:grid-cols-[1fr_2fr] md:gap-12 md:py-10"
          >
            <div>
              <h3 className="text-xl font-medium tracking-tight text-foreground">{entry.role}</h3>
              <p className="mt-1 font-mono text-sm text-accent">{entry.organization}</p>
            </div>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
              {entry.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
