"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { skillGroups } from "@/data/skills";
import { staggerContainer, staggerItem } from "@/styles/animations";

/**
 * Grouped skill badges — no bars, ratings, or radial charts. Typography
 * (category label) does the hierarchy work; badges stay uniform weight.
 */
export function Skills() {
  return (
    <Section id="skills" animate={false}>
      <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">Skills</h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
        className="mt-10 grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 md:mt-12 lg:grid-cols-3"
      >
        {skillGroups.map((group) => (
          <motion.div key={group.category} variants={staggerItem}>
            <h3 className="font-mono text-xs tracking-wide text-accent">{group.category}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Badge key={skill} variant="outline">
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
