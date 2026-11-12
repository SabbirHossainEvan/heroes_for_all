import Link from "next/link";
import { ArrowRight, Building2, Handshake, GraduationCap, Newspaper, Sparkles } from "lucide-react";
import { Container } from "@/components/ui-brand/container";
import { SectionHeading } from "@/components/ui-brand/section-heading";
import { Reveal, StaggerGroup, StaggerItem, AnimatedCounter } from "@/components/ui-brand/reveal-stagger";
import { partners, type Partner } from "@/data/content";
import { getPartnerLogo } from "@/lib/partner-logos";
import { cn } from "@/lib/utils";

const categories = ["Sponsor", "Programmatic", "Academic", "Media"] as const;

const categoryMeta: Record<
  Partner["category"],
  { icon: typeof Building2; accent: string; chipVariant: "primary" | "accent" | "sage" | "outline" }
> = {
  Sponsor:     { icon: Building2,      accent: "text-primary",   chipVariant: "primary" },
  Programmatic:{ icon: Handshake,      accent: "text-accent",    chipVariant: "accent"  },
  Academic:    { icon: GraduationCap,  accent: "text-primary",   chipVariant: "sage"    },
  Media:       { icon: Newspaper,      accent: "text-accent",    chipVariant: "outline" },
};

// Spotlight picks — one or two from each category to feel representative
const spotlightNames = [
  "BRAC Bank",
  "Qatar Airways",
  "GlobalGiving",
  "Camp Abilities USA",
  "North South University",
  "The Daily Star",
];

function getSpotlight() {
  return spotlightNames
    .map((name) => partners.find((p) => p.name === name))
    .filter((p): p is Partner => Boolean(p));
}

function PartnerCard({ partner, featured = false }: { partner: Partner; featured?: boolean }) {
  const logo = getPartnerLogo(partner);

  if (!logo) return null;

  return (
    <div
      className={cn(
        "group relative flex items-center justify-center rounded-2xl border border-border bg-card transition-all duration-300 ease-out hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg",
        featured ? "p-5 md:p-6" : "p-4 md:p-5",
      )}
    >
      <div
        className={cn(
          "relative w-full rounded-xl bg-secondary/60",
          featured ? "h-16" : "h-14",
        )}
      >
        <img
          src={logo}
          alt={partner.name}
          className="h-full w-full object-contain"
          loading="lazy"
        />
      </div>

      {/* hover accent line at bottom */}
      <span
        aria-hidden
        className="absolute left-0 right-0 bottom-0 h-0.5 rounded-b-2xl bg-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
      />
    </div>
  );
}

export function PartnersSection() {
  const spotlight = getSpotlight();
  const totalCount = partners.length;
  const categoryCount = categories.length;

  // Duplicate the logo list for a seamless marquee loop.
  const marqueePartners = [...partners, ...partners];

  return (
    <section className="section-spacing bg-secondary/40 relative overflow-hidden">
      {/* subtle ambient shape */}
      <div aria-hidden className="absolute -top-20 right-0 h-72 w-72 rounded-full bg-accent/5 blur-3xl animate-soft-pulse" />
      <div aria-hidden className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

      <Container size="wide" className="relative">
        {/* Section header + animated stat row */}
        <Reveal>
          <SectionHeading
            eyebrow="Partners & Trust"
            title="We do not do this alone."
            description="Heroes For All's work is made possible by a network of corporate, programmatic, academic, and media partners."
            align="center"
          />
        </Reveal>

        {/* Stat strip */}
        <Reveal delay={0.15}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 md:gap-10">
            <StatPill label="partners" value={totalCount} />
            <span aria-hidden className="h-8 w-px bg-border hidden md:block" />
            <StatPill label="sectors" value={categoryCount} />
            <span aria-hidden className="h-8 w-px bg-border hidden md:block" />
            <StatPill label="countries" value={2} />
          </div>
        </Reveal>

        {/* Marquee strip */}
        <Reveal direction="scale" delay={0.2}>
          <div
            className="relative mt-12 overflow-hidden"
            role="presentation"
            aria-hidden
          >
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-secondary/80 to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-secondary/80 to-transparent z-10" />
            <div className="flex w-max animate-marquee gap-3 py-2">
              {marqueePartners.map((p, i) => (
                <div
                  key={`${p.name}-${i}`}
                  className="flex h-[82px] w-[210px] items-center justify-center rounded-xl border border-border bg-card px-5 py-3 shrink-0 hover:border-accent/40 transition-colors"
                >
                  <div className="relative h-full w-full min-w-0">
                    <img
                      src={getPartnerLogo(p)}
                      alt={p.name}
                      className="h-full w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Featured spotlight */}
        {spotlight.length > 0 && (
          <div className="mt-16">
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="h-4 w-4 text-accent" aria-hidden />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Featured partners
                </span>
                <span className="h-px flex-1 bg-border" aria-hidden />
              </div>
            </Reveal>

            <StaggerGroup
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
              staggerChildren={0.1}
              as="div"
            >
              {spotlight.map((p) => (
                <StaggerItem key={`spotlight-${p.name}`} direction="up">
                  <PartnerCard partner={p} featured />
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        )}

        {/* All partners grouped by category */}
        <div className="mt-16 flex flex-col gap-10">
          {categories.map((cat, idx) => {
            const items = partners.filter((p) => p.category === cat);
            if (items.length === 0) return null;
            const meta = categoryMeta[cat];
            const CatIcon = meta.icon;
            return (
              <Reveal key={cat} delay={idx * 0.08}>
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <CatIcon className="h-3.5 w-3.5" aria-hidden />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {cat}
                    </span>
                    <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-accent/10 text-accent text-[10px] font-bold px-1.5">
                      {items.length}
                    </span>
                    <span className="h-px flex-1 bg-border" aria-hidden />
                  </div>

                  <StaggerGroup
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
                    staggerChildren={0.08}
                    as="div"
                  >
                    {items.map((p) => (
                      <StaggerItem key={`${cat}-${p.name}`} direction="up" as="div">
                        <PartnerCard partner={p} />
                      </StaggerItem>
                    ))}
                  </StaggerGroup>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <Reveal delay={0.15}>
          <div className="mt-14 flex flex-col items-center gap-4 text-center">
            <p className="text-sm text-muted-foreground max-w-md">
              Want to see your organization in this list? We work with mission-aligned
              partners across sectors.
            </p>
            <Link
              href="/about/our-partners"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent transition-colors"
            >
              See all partners
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function StatPill({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-baseline gap-1.5">
      <AnimatedCounter
        value={value}
        className="font-heading text-2xl md:text-3xl font-bold text-primary"
      />
      <span className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}
