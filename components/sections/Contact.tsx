import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { buttonVariants } from "@/components/ui/Button";
import { contactContent } from "@/data/contact";

/**
 * Text-first contact block — no form, no icon grid. Links are rendered
 * as plain buttons, matching the editorial tone of the rest of the page.
 */
export function Contact() {
  return (
    <Section id="contact">
      <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">
        {contactContent.heading}
      </h2>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
        {contactContent.message}
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-4 md:mt-12">
        {contactContent.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noreferrer noopener" : undefined}
            className={buttonVariants({ variant: "secondary", size: "lg" })}
          >
            {link.label}
          </a>
        ))}

        <Link
          href={contactContent.resume.href as never}
          download
          className={buttonVariants({ variant: "primary", size: "lg" })}
        >
          {contactContent.resume.label}
        </Link>
      </div>
    </Section>
  );
}
