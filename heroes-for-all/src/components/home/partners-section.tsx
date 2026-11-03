import Link from "next/link";
import { ArrowRight, BadgeCheck, Building2, Handshake, GraduationCap, Newspaper, Sparkles } from "lucide-react";
import { Container } from "@/components/ui-brand/container";
import { SectionHeading } from "@/components/ui-brand/section-heading";
import { Reveal, StaggerGroup, StaggerItem, AnimatedCounter } from "@/components/ui-brand/reveal-stagger";
import { partners, type Partner } from "@/data/content";
import { getInitials, cn } from "@/lib/utils";

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

// Use published image assets for partners without a local logo file.
const partnerLogoSources: Record<string, string> = {
  "Camp Abilities USA":
    "https://www.campabilities.org/uploads/4/0/0/0/40006217/published/screenshot-2023-11-28-at-4-23-25-pm.png",
  "North South University":
    "https://pbs.twimg.com/profile_images/460501803428114432/6QnlkojZ_400x400.png",
  "College at Brockport, SUNY":
    "https://www.brockport.edu/live/image/gid/66/width/777/height/859/15944_BPT_LOGO_AllinOne_color_1.png",
  "Penn State University":
    "https://www.liblogo.com/img-logo/ps6353o1e3-psu-logo-other-university-symbols-penn-state-brand-book.png",
  GlobalGiving:
    "https://images.seeklogo.com/logo-png/32/1/globalgiving-logo-png_seeklogo-321981.png",
};

function getPartnerLogo(partner: Partner) {
  return partner.logo ?? partnerLogoSources[partner.name];
}

function getSpotlight() {
  return spotlightNames
    .map((name) => partners.find((p) => p.name === name))
    .filter((p): p is Partner => Boolean(p));
}

function PartnerCard({ partner, featured = false }: { partner: Partner; featured?: boolean }) {
  const meta = categoryMeta[partner.category];
  const Icon = meta.icon;
  const logo = getPartnerLogo(partner);

  return (
    <div
      className={cn(
        "group relative flex flex-col gap-3 rounded-2xl border bg-card transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:border-accent/40",
        featured ? "p-5 md:p-6 border-border" : "p-4 md:p-5 border-border",
      )}
    >
      {/* Top row: logo (or monogram) + verified badge */}
      <div className="flex items-start justify-between">
        {logo ? (
          <div
            className={cn(
              "relative min-w-0 flex-1 rounded-xl bg-secondary/60",
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
        ) : (
          <span
            className={cn(
              "inline-flex items-center justify-center rounded-xl font-heading font-bold text-primary-foreground transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3",
              featured
                ? "h-12 w-12 text-base bg-gradient-to-br from-primary to-primary-dark"
                : "h-10 w-10 text-sm bg-primary",
            )}
            aria-hidden
          >
            {getInitials(partner.name)}
          </span>
        )}
        <BadgeCheck
          className={cn(
            "h-4 w-4 text-accent/0 group-hover:text-accent transition-colors duration-300",
            featured && "text-accent",
          )}
          aria-hidden
        />
      </div>

      {/* Name + sector chip */}
      <div className="flex flex-col gap-2">
        <h3
          className={cn(
            "font-heading font-semibold text-primary leading-snug",
            featured ? "text-base md:text-lg" : "text-sm md:text-base",
          )}
        >
          {partner.name}
        </h3>
        <span
          className={cn(
            "inline-flex items-center gap-1 self-start rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider",
            meta.chipVariant === "primary" && "bg-primary/10 text-primary",
            meta.chipVariant === "accent"  && "bg-accent/10 text-accent",
            meta.chipVariant === "sage"    && "bg-secondary text-primary",
            meta.chipVariant === "outline" && "border border-border text-muted-foreground",
          )}
        >
          <Icon className="h-2.5 w-2.5" aria-hidden />
          {partner.category}
        </span>
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
