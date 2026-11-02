import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui-brand/container";
import { PageHeader } from "@/components/ui-brand/page-header";
import { SectionHeading } from "@/components/ui-brand/section-heading";
import { BrandBadge } from "@/components/ui-brand/badge";
import { BrandImage } from "@/components/ui-brand/brand-image";
import { PlaceholderImage } from "@/components/ui-brand/placeholder-image";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui-brand/reveal-stagger";
import { newsArticles } from "@/data/content";
import { formatDate } from "@/lib/utils";
import { ArrowRight, CalendarDays } from "lucide-react";

export const metadata: Metadata = {
  title: "News & Articles",
  description:
    "Stories from Heroes For All's work — programs, events, partnerships, and the youth, volunteers, and communities that make it possible.",
};

const categories = ["Camp Abilities", "Community Engagement", "Covid-19 Relief", "Environment"];

export default function NewsPage() {
  const featured = newsArticles.find((a) => a.featured) ?? newsArticles[0];
  const rest = newsArticles.filter((a) => a.slug !== featured.slug);

  return (
    <>
      <PageHeader
        variant="primary"
        eyebrow="Stories"
        title="The work, in their words."
        description="Field stories from Heroes For All's programs, partnerships, and events across Bangladesh and the wider network."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Stories", href: "/news" },
          { label: "News & Articles" },
        ]}
      />

      {/* Category filter row */}
      <section className="border-b border-border bg-background">
        <Container size="wide" className="py-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="label-small text-muted-foreground mr-2">Filter:</span>
            <Link
              href="/news"
              className="inline-flex items-center rounded-full border border-primary bg-primary text-primary-foreground px-3.5 py-1.5 text-sm font-medium"
            >
              All
            </Link>
            {categories.map((c) => (
              <Link
                key={c}
                href={`/news?category=${encodeURIComponent(c)}`}
                className="inline-flex items-center rounded-full border border-border bg-card px-3.5 py-1.5 text-sm font-medium text-foreground hover:border-primary hover:bg-primary/5 transition-colors"
              >
                {c}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured article */}
      <section className="section-spacing">
        <Container size="wide">
          <Reveal>
            <SectionHeading
              eyebrow="Featured"
              title="The latest from the field."
            />
          </Reveal>
          <Reveal direction="scale" delay={0.1}>
            <Link
              href={`/news/${featured.slug}`}
              className="card-hover group mt-8 grid gap-6 md:gap-10 md:grid-cols-2 rounded-3xl border border-border bg-card p-5 md:p-7"
            >
              <BrandImage
                src={featured.image}
                alt={featured.title}
                aspect="video"
                className="rounded-2xl"
                priority
              />
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  <BrandBadge variant="accent">{featured.category}</BrandBadge>
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                    <CalendarDays className="h-3.5 w-3.5" aria-hidden />
                    {formatDate(featured.date)}
                  </span>
                </div>
                <h2 className="heading-card text-primary">{featured.title}</h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {featured.excerpt}
                </p>
                <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                  Read story
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </span>
              </div>
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* Remaining articles */}
      <section className="section-spacing bg-secondary/40">
        <Container size="wide">
          <Reveal>
            <SectionHeading
              eyebrow="More stories"
              title="Recent updates."
            />
          </Reveal>
          <StaggerGroup
            className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            staggerChildren={0.1}
            as="ul"
          >
            {rest.map((a) => (
              <StaggerItem key={a.slug} as="li">
                <Link
                  href={`/news/${a.slug}`}
                  className="card-hover group flex h-full flex-col gap-4 rounded-2xl border border-border bg-card overflow-hidden"
                >
                  {a.image ? (
                    <BrandImage
                      src={a.image}
                      alt={a.title}
                      aspect="video"
                    />
                  ) : (
                    <PlaceholderImage
                      alt={a.title}
                      variant="sage"
                      aspect="video"
                    />
                  )}
                  <div className="flex flex-col gap-3 p-5">
                    <div className="flex flex-wrap items-center gap-2">
                      <BrandBadge variant="sage">{a.category}</BrandBadge>
                      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                        <CalendarDays className="h-3 w-3" aria-hidden />
                        {formatDate(a.date)}
                      </span>
                    </div>
                    <h3 className="font-heading text-base font-semibold text-primary leading-tight">
                      {a.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {a.excerpt}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                      Read story
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>
    </>
  );
}
