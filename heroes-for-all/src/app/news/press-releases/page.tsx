import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui-brand/container";
import { PageHeader } from "@/components/ui-brand/page-header";
import { SectionHeading } from "@/components/ui-brand/section-heading";
import { BrandButton } from "@/components/ui-brand/button";
import { BrandBadge } from "@/components/ui-brand/badge";
import { BrandImage } from "@/components/ui-brand/brand-image";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui-brand/reveal-stagger";
import { newsArticles } from "@/data/content";
import { formatDate } from "@/lib/utils";
import { ArrowRight, CalendarDays, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Press Releases",
  description:
    "Official statements and press materials from Heroes For All.",
};

export default function PressReleasesPage() {
  return (
    <>
      <PageHeader
        variant="primary"
        eyebrow="Stories"
        title="Press releases & official statements."
        description="Press releases are listed alongside news articles on the original site. For specific press inquiries, contact info@heroesforall.org."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Stories", href: "/news" },
          { label: "Press Releases" },
        ]}
      />

      {/* Note */}
      <section className="section-spacing">
        <Container size="wide">
          <Reveal>
            <div className="max-w-3xl flex flex-col gap-5">
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                Note on press materials
              </span>
              <h2 className="heading-section text-primary">
                News and press, side by side.
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Press releases are listed alongside news articles. For specific press
                inquiries, contact{" "}
                <a
                  href="mailto:info@heroesforall.org"
                  className="text-primary font-medium link-underline"
                >
                  info@heroesforall.org
                </a>
                .
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Articles as press items */}
      <section className="section-spacing bg-secondary/40">
        <Container size="wide">
          <Reveal>
            <SectionHeading
              eyebrow="Latest"
              title="Press materials & statements."
            />
          </Reveal>
          <StaggerGroup
            className="mt-10 grid gap-4 md:grid-cols-2"
            staggerChildren={0.1}
            as="ul"
          >
            {newsArticles.map((a) => (
              <StaggerItem key={a.slug} as="li">
                <Link
                  href={`/news/${a.slug}`}
                  className="card-hover group flex h-full flex-col rounded-2xl border border-border bg-card overflow-hidden"
                >
                  {a.image && (
                    <BrandImage
                      src={a.image}
                      alt={a.title}
                      aspect="wide"
                    />
                  )}
                  <div className="flex flex-col gap-3 p-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <BrandBadge variant="accent">{a.category}</BrandBadge>
                      <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                        <CalendarDays className="h-3.5 w-3.5" aria-hidden />
                        {formatDate(a.date)}
                      </span>
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-primary leading-tight">
                      {a.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {a.excerpt}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                      Read statement
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      {/* Press contact callout */}
      <section className="section-spacing">
        <Container size="wide">
          <div className="rounded-3xl bg-primary text-primary-foreground p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex flex-col gap-3 max-w-xl">
              <BrandBadge variant="white">Press contact</BrandBadge>
              <h2 className="heading-section text-primary-foreground">
                For press inquiries.
              </h2>
              <p className="text-base text-primary-foreground/85 leading-relaxed">
                Journalists, editors, and producers working on stories involving Heroes
                For All can reach the organization directly by email. A member of the PR &
                Communication team will respond.
              </p>
            </div>
            <div className="flex flex-col gap-3 items-start md:items-end">
              <a
                href="mailto:info@heroesforall.org"
                className="inline-flex items-center gap-2 text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                <Mail className="h-5 w-5" aria-hidden />
                info@heroesforall.org
              </a>
              <BrandButton href="/contact" variant="accent" size="lg">
                Contact page
              </BrandButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
