import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { educationEntry } from "@/data/education";

/**
 * Single-entry education card. Kept as one clean block rather than a
 * timeline since there's currently only one entry to show.
 */
export function Education() {
  return (
    <Section id="education">
      <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">Education</h2>

      <div className="mt-10 flex flex-col gap-3 border-t border-border pt-8 md:mt-12">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-xl font-medium tracking-tight text-foreground">
            {educationEntry.institution}
          </h3>
          <span className="font-mono text-sm text-muted-foreground">{educationEntry.period}</span>
        </div>
        <p className="text-base text-muted-foreground">{educationEntry.degree}</p>
        <div>
          <Badge variant="outline">CGPA: {educationEntry.cgpa}</Badge>
        </div>
      </div>
    </Section>
  );
}
