import { Section } from "@/components/ui/Section";
import { aboutContent } from "@/data/about";

/**
 * Concise, text-only introduction. Deliberately narrow measure and
 * generous line-height so paragraphs read like editorial copy, not a bio card.
 */
export function About() {
  return (
    <Section id="about">
      <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">
        {aboutContent.heading}
      </h2>

      <div className="mt-10 max-w-2xl space-y-5 md:mt-12">
        {aboutContent.paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-base leading-relaxed text-muted-foreground md:text-lg">
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  );
}
