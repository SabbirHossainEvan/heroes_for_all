import type { Metadata } from "next";
import { Container } from "@/components/ui-brand/container";
import { PageHeader } from "@/components/ui-brand/page-header";
import { SectionHeading } from "@/components/ui-brand/section-heading";
import { BrandBadge } from "@/components/ui-brand/badge";
import { BrandButton } from "@/components/ui-brand/button";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui-brand/reveal-stagger";
import {
  missionStatement,
  strategicObjectives,
  expectedOutcomes,
} from "@/data/content";
import { Target, Compass, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Strategic Direction",
  description:
    "Heroes For All's mission, vision, strategic objectives, and the outcomes we work toward.",
};

export default function StrategicDirectionPage() {
  return (
    <>
      <PageHeader
        variant="primary"
        eyebrow="About Us"
        title="Where we are headed."
        description="Heroes For All is a non-profitable, non-political, and charitable organization. Our operational areas are primarily Dhaka and adjacent regions, with the potential to expand throughout Bangladesh as resources permit."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about/our-story" },
          { label: "Strategic Direction" },
        ]}
      />

      {/* Mission */}
      <section className="section-spacing">
        <Container size="wide">
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16 items-start">
            <Reveal direction="right">
              <div className="flex flex-col gap-4">
                <span className="eyebrow">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                  The North Star
                </span>
                <h2 className="heading-section text-primary">Mission.</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The mission that orients every program, partnership, and decision at Heroes For All.
                </p>
              </div>
            </Reveal>
            <Reveal direction="left" delay={0.1}>
              <div className="rounded-3xl border border-border bg-card p-7 md:p-9">
                <p className="text-base md:text-lg text-foreground leading-relaxed italic">
                  {missionStatement}
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Strategic Objectives */}
      <section className="section-spacing bg-secondary/40">
        <Container size="wide">
          <Reveal>
            <SectionHeading
              eyebrow="Strategic Objectives"
              title="Nine commitments that structure our work."
              description="Drawn from the Memorandum and Articles of Association of Heroes For All."
            />
          </Reveal>
          <StaggerGroup
            className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
            staggerChildren={0.08}
            as="ol"
          >
            {strategicObjectives.map((obj, i) => (
              <StaggerItem
                key={i}
                as="li"
                className="flex gap-4 rounded-2xl border border-border bg-card p-5 h-full"
              >
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-heading text-sm font-bold">
                  {i + 1}
                </span>
                <p className="text-sm text-foreground leading-relaxed">{obj}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      {/* Expected Outcomes */}
      <section className="section-spacing">
        <Container size="wide">
          <Reveal>
            <SectionHeading
              eyebrow="Expected Outcomes"
              title="The change we are working toward."
              description="If we do this work well, here is what becomes possible for the young people and communities we serve."
            />
          </Reveal>
          <StaggerGroup
            className="mt-10 grid gap-4 md:grid-cols-2"
            staggerChildren={0.1}
            as="ul"
          >
            {expectedOutcomes.map((o, i) => (
              <StaggerItem
                key={i}
                as="li"
                className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 h-full"
              >
                <Target className="h-5 w-5 text-accent shrink-0 mt-0.5" aria-hidden />
                <p className="text-sm text-foreground leading-relaxed">{o}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      {/* Pillars strip */}
      <section className="section-spacing bg-primary text-primary-foreground">
        <Container size="wide">
          <StaggerGroup className="grid gap-6 md:grid-cols-3" staggerChildren={0.12} as="div">
            {[
              { icon: Compass, title: "Conscious", text: "Helping youth make informed life choices." },
              { icon: Target, title: "Purposeful", text: "Supporting youth in building a life of meaning." },
              { icon: TrendingUp, title: "Engaged", text: "Connecting youth to community, country, and world." },
            ].map((p) => {
              const Icon = p.icon;
              return (
                <StaggerItem key={p.title} as="div" className="flex flex-col gap-3 rounded-2xl border border-white/15 bg-white/5 p-6 h-full">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-primary-foreground">
                    {p.title}
                  </h3>
                  <p className="text-sm text-primary-foreground/80 leading-relaxed">
                    {p.text}
                  </p>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
          <Reveal delay={0.2}>
            <div className="mt-10 flex justify-center">
              <BrandButton href="/about/our-team" variant="accent" size="lg">
                Meet the team
              </BrandButton>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
