import type { Metadata } from "next";
import { Container } from "@/components/ui-brand/container";
import { PageHeader } from "@/components/ui-brand/page-header";
import { SectionHeading } from "@/components/ui-brand/section-heading";
import { BrandBadge } from "@/components/ui-brand/badge";
import { BrandAvatar } from "@/components/ui-brand/brand-image";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui-brand/reveal-stagger";
import { teamMembers } from "@/data/content";
import { Mail } from "lucide-react";
import { getInitials } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "The people behind Heroes For All — Dr. Rehnuma Karim and the executive body that runs the organization day to day.",
};

export default function OurTeamPage() {
  const founder = teamMembers.find((m) => m.category === "leadership");
  const executives = teamMembers.filter((m) => m.category === "executive");

  return (
    <>
      <PageHeader
        variant="primary"
        eyebrow="About Us"
        title="The people behind the work."
        description="Heroes For All is run by a small, dedicated executive body, led by our founder and president, Dr. Rehnuma Karim."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about/our-story" },
          { label: "Our Team" },
        ]}
      />

      {/* Founder block */}
      {founder && (
        <section className="section-spacing">
          <Container size="wide">
            <Reveal direction="left">
              <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16 items-start">
                <div className="flex flex-col gap-4">
                  {founder.image ? (
                    <BrandAvatar
                      src={founder.image}
                      alt={founder.name}
                      className="aspect-[3/4] rounded-3xl"
                      priority
                    />
                  ) : (
                    <div className="aspect-[3/4] rounded-3xl bg-gradient-to-br from-[#173F35] via-[#102F28] to-[#173F35] flex items-center justify-center">
                      <span className="font-heading text-6xl font-bold text-accent">
                        {getInitials(founder.name)}
                      </span>
                    </div>
                  )}
                  <div className="flex flex-col gap-1">
                    <h2 className="font-heading text-xl font-bold text-primary">
                      {founder.name}
                    </h2>
                    <p className="text-sm text-accent font-medium">{founder.role}</p>
                    {founder.email && (
                      <a
                        href={`mailto:${founder.email}`}
                        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mt-1"
                      >
                        <Mail className="h-3.5 w-3.5" aria-hidden />
                        {founder.email}
                      </a>
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <span className="eyebrow">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                    Founder & President
                  </span>
                  <h3 className="heading-section text-primary">
                    Dr. Rehnuma Karim
                  </h3>
                  {founder.bio && (
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                      {founder.bio}
                    </p>
                  )}
                </div>
              </div>
            </Reveal>
          </Container>
        </section>
      )}

      {/* Executives */}
      <section className="section-spacing bg-secondary/40">
        <Container size="wide">
          <Reveal>
            <SectionHeading
              eyebrow="Executive Body"
              title="The team that runs the work."
              description="Day-to-day, Heroes For All is run by a body of executives covering operations, finance, communications, IT, and community affairs."
            />
          </Reveal>
          <StaggerGroup
            className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            staggerChildren={0.08}
            as="ul"
          >
            {executives.map((m) => (
              <StaggerItem
                key={m.name}
                as="li"
                className="card-hover flex flex-col gap-3 rounded-2xl border border-border bg-card p-5 h-full"
              >
                <div className="flex items-center gap-3">
                  {m.image ? (
                    <BrandAvatar
                      src={m.image}
                      alt={m.name}
                      className="h-12 w-12 shrink-0 rounded-2xl"
                    />
                  ) : (
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground font-heading text-base font-bold">
                      {getInitials(m.name)}
                    </span>
                  )}
                  <div className="flex flex-col">
                    <h3 className="font-heading text-base font-semibold text-primary leading-tight">
                      {m.name}
                    </h3>
                    <p className="text-xs text-accent font-medium">{m.role}</p>
                  </div>
                </div>
                {m.email && (
                  <a
                    href={`mailto:${m.email}`}
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="h-3.5 w-3.5" aria-hidden />
                    {m.email}
                  </a>
                )}
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>
    </>
  );
}
