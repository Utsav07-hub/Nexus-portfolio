"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { buttonVariants } from "@/components/ui/Button";
import { projects } from "@/data/projects";
import { staggerContainer, staggerItem, hoverLift } from "@/styles/animations";

/**
 * Editorial list of featured work. Each project is a bordered row rather
 * than a card grid — keeps focus on typography and content over decoration.
 */
export function FeaturedProjects() {
  return (
    <Section id="work" animate={false}>
      <div className="mb-10 flex items-end justify-between gap-4 md:mb-12">
        <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          Featured Projects
        </h2>
        <span className="font-mono text-sm text-muted-foreground">
          {String(projects.length).padStart(2, "0")} selected
        </span>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
        className="divide-y divide-border border-t border-border"
      >
        {projects.map((project) => (
          <motion.article
            key={project.title}
            variants={staggerItem}
            whileHover={hoverLift}
            className="grid grid-cols-1 gap-6 py-10 md:grid-cols-[1fr_1.4fr] md:gap-12 md:py-14"
          >
            <div>
              <span className="font-mono text-xs text-accent">{project.category}</span>
              <h3 className="mt-2 text-2xl font-medium tracking-tight text-foreground">
                {project.title}
              </h3>
            </div>

            <div className="flex flex-col">
              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                {project.githubUrl && (
                  <Link
                    href={project.githubUrl as never}
                    target="_blank"
                    rel="noreferrer noopener"
                    className={buttonVariants({ variant: "secondary", size: "sm" })}
                  >
                    <Github size={15} strokeWidth={1.75} aria-hidden="true" />
                    GitHub
                  </Link>
                )}
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl as never}
                    target="_blank"
                    rel="noreferrer noopener"
                    className={buttonVariants({ variant: "ghost", size: "sm" })}
                  >
                    Live Demo
                    <ArrowUpRight size={15} strokeWidth={1.75} aria-hidden="true" />
                  </Link>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}
