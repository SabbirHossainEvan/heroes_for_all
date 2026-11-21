import Link from "next/link";
import { ArrowUpRight, Users } from "lucide-react";
import { Container } from "@/components/ui-brand/container";
import { SectionHeading } from "@/components/ui-brand/section-heading";
import { BrandBadge } from "@/components/ui-brand/badge";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui-brand/reveal-stagger";
import { programs } from "@/data/content";

const categoryVariants = {
  Education: "primary",
  Community: "sage",
  Culture: "accent",
  Relief: "outline",
  Environment: "sage",
} as const;

export function ProgramsSection() {
  const featured = [
    {
      slug: "paara-kunjo",
      title: "Paara Kunjo",
      category: "Community" as const,
      excerpt:
        "A welcoming community hub where neighbors can connect, take part in creative wellbeing activities, and support one another.",
      icon: Users,
      href: "https://www.facebook.com/paarakunjo",
      external: true,
      action: "Visit Paara Kunjo",
    },
    ...programs
      .filter((program) => program.featured && program.slug !== "knowledge-sessions")
      .slice(0, 3)
      .map((program) => ({
        slug: program.slug,
        title: program.title,
        category: program.category,
        excerpt: program.excerpt,
        icon: program.icon,
        href: `/programs/${program.slug}`,
        external: false,
        action: "View program",
      })),
  ];

  return (
    <section className="section-spacing bg-secondary/40">
      <Container size="wide">
        <Reveal>
          <SectionHeading
            eyebrow="What We Do"
            title="Programs that turn intention into impact."
            description="Eleven initiatives across education, community, culture, relief, and the environment — each one anchored in the same mission."
            align="center"
          />
        </Reveal>

        <StaggerGroup
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          staggerChildren={0.12}
          as="div"
        >
          {featured.map((p) => {
            const Icon = p.icon;
            const content = (
              <>
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <BrandBadge variant={categoryVariants[p.category]}>
                    {p.category}
                  </BrandBadge>
                </div>
                <div className="flex flex-col gap-3 flex-1">
                  <h3 className="heading-card text-primary">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {p.excerpt}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                  {p.action}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                </span>
              </>
            );
            const className = "card-hover group relative flex flex-col gap-5 rounded-3xl border border-border bg-card p-6 md:p-7 h-full";

            return (
              <StaggerItem key={p.slug} as="div">
                {p.external ? (
                  <a href={p.href} target="_blank" rel="noopener noreferrer" className={className}>
                    {content}
                  </a>
                ) : (
                  <Link href={p.href} className={className}>
                    {content}
                  </Link>
                )}
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        <Reveal delay={0.2}>
          <div className="mt-10 flex justify-center">
            <Link
              href="/programs"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent transition-colors"
            >
              Browse all 11 programs
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
