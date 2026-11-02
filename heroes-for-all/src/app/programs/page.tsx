import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui-brand/container";
import { PageHeader } from "@/components/ui-brand/page-header";
import { BrandBadge } from "@/components/ui-brand/badge";
import { BrandImage } from "@/components/ui-brand/brand-image";
import { PlaceholderImage } from "@/components/ui-brand/placeholder-image";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui-brand/reveal-stagger";
import { programs, type Program } from "@/data/content";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Every Heroes For All program — across education, community, culture, relief, and environment.",
};

const categoryOrder: Program["category"][] = [
  "Education",
  "Community",
  "Culture",
  "Relief",
  "Environment",
];

export default function ProgramsPage() {
  return (
    <>
      <PageHeader
        variant="primary"
        eyebrow="What We Do"
        title="Programs that turn intention into impact."
        description="Eleven programs across education, community, culture, relief, and environment. Each one is grounded in the same mission: helping youth become conscious, purposeful, and engaged global citizens."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Programs" },
        ]}
      />

      {/* Category anchors */}
      <section className="border-b border-border bg-background">
        <Container size="wide" className="py-5">
          <Reveal>
            <div className="flex flex-wrap items-center gap-2">
              <span className="label-small text-muted-foreground mr-2">Jump to:</span>
              {categoryOrder.map((c) => {
                const count = programs.filter((p) => p.category === c).length;
                return (
                  <a
                    key={c}
                    href={`#category-${c.toLowerCase()}`}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-sm font-medium text-foreground hover:border-primary hover:bg-primary/5 transition-colors"
                  >
                    {c}
                    <span className="text-xs text-muted-foreground">{count}</span>
                  </a>
                );
              })}
            </div>
          </Reveal>
        </Container>
      </section>

      {categoryOrder.map((cat, idx) => {
        const items = programs.filter((p) => p.category === cat);
        if (items.length === 0) return null;
        const onSage = idx % 2 === 1;
        const Icon = items[0].icon;
        return (
          <section
            key={cat}
            id={`category-${cat.toLowerCase()}`}
            className={`section-spacing ${onSage ? "bg-secondary/40" : ""} scroll-mt-24`}
          >
            <Container size="wide">
              <Reveal>
                <div className="flex flex-col gap-3 mb-8">
                  <BrandBadge variant="accent">
                    <Icon className="h-3.5 w-3.5" aria-hidden />
                    {cat}
                  </BrandBadge>
                  <h2 className="heading-section text-primary">{cat} programs.</h2>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                    {items.length} program{items.length > 1 ? "s" : ""} under this category.
                  </p>
                </div>
              </Reveal>

              <StaggerGroup
                className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
                staggerChildren={0.1}
                as="ul"
              >
                {items.map((p) => {
                  const ProgramIcon = p.icon;
                  return (
                    <StaggerItem
                      key={p.slug}
                      as="li"
                      className="card-hover group flex h-full flex-col gap-5 rounded-2xl border border-border bg-card overflow-hidden"
                    >
                      {p.image ? (
                        <BrandImage
                          src={p.image}
                          alt={p.title}
                          aspect="wide"
                        />
                      ) : (
                        <PlaceholderImage
                          alt={p.title}
                          variant="sage"
                          aspect="wide"
                        />
                      )}
                      <div className="flex flex-col gap-5 p-6 flex-1">
                        <div className="flex items-center justify-between">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                            <ProgramIcon className="h-5 w-5" aria-hidden />
                          </div>
                          <BrandBadge variant="sage">{p.category}</BrandBadge>
                        </div>
                        <div className="flex flex-col gap-2">
                          <h3 className="font-heading text-lg font-semibold text-primary leading-tight">
                            {p.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                            {p.excerpt}
                          </p>
                        </div>
                        <Link
                          href={`/programs/${p.slug}`}
                          className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent transition-colors"
                        >
                          View program
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                        </Link>
                      </div>
                    </StaggerItem>
                  );
                })}
              </StaggerGroup>
            </Container>
          </section>
        );
      })}
    </>
  );
}
