import type { Metadata } from "next";
import { Container } from "@/components/ui-brand/container";
import { PageHeader } from "@/components/ui-brand/page-header";
import { SectionHeading } from "@/components/ui-brand/section-heading";
import { BrandImage } from "@/components/ui-brand/brand-image";
import { BrandBadge } from "@/components/ui-brand/badge";
import { BrandButton } from "@/components/ui-brand/button";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui-brand/reveal-stagger";
import {
  foundingStory,
  missionStatement,
  visionStatement,
  timeline,
  targetGroups,
} from "@/data/content";
import { Calendar, MapPin, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "How Heroes For All began — from a Non-Profit Management class at SUNY Brockport in 2016 to a youth movement across Bangladesh.",
};

export default function OurStoryPage() {
  return (
    <>
      <PageHeader
        variant="primary"
        eyebrow="About Us"
        title="From a classroom to a movement."
        description="In March 2016, twenty-two students at SUNY Brockport designed a nonprofit to help youth build purposeful lives. That nonprofit became Heroes For All."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about/our-story" },
          { label: "Our Story" },
        ]}
      />

      {/* Founding story */}
      <section className="section-spacing">
        <Container size="wide">
          <div className="grid gap-10 lg:grid-cols-[2fr_1fr] lg:gap-16 items-start">
            <Reveal direction="right">
              <div className="flex flex-col gap-5">
                <span className="eyebrow">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                  The beginning
                </span>
                <h2 className="heading-section text-primary">{foundingStory.year} — where it started.</h2>
                {foundingStory.body.map((para, i) => (
                  <p key={i} className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {para}
                  </p>
                ))}
                <p className="text-base text-foreground leading-relaxed mt-2">
                  <span className="font-semibold text-primary">Lead:</span> {foundingStory.lead}.{" "}
                  <span className="font-semibold text-primary">Place:</span> {foundingStory.place}.
                </p>
              </div>
            </Reveal>
            <Reveal direction="left" delay={0.1}>
              <aside className="flex flex-col gap-4">
              <BrandImage
                src="/images/programs/school-project-banner.jpg"
                alt="The College at Brockport, SUNY, where Heroes For All was designed"
                aspect="tall"
                className="rounded-3xl"
              />
              <div className="rounded-2xl border border-border bg-card p-5 flex flex-col gap-3">
                <h3 className="font-heading font-semibold text-primary text-base">At a glance</h3>
                <ul className="flex flex-col gap-2 text-sm">
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4 text-accent" aria-hidden />
                    Founded March 2016
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4 text-accent" aria-hidden />
                    Brockport, NY & Dhaka, Bangladesh
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-4 w-4 text-accent" aria-hidden />
                    22 founding students
                  </li>
                </ul>
              </div>
            </aside>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="section-spacing bg-secondary/40">
        <Container size="wide">
          <Reveal>
            <SectionHeading
              eyebrow="Milestones"
              title="A timeline of the work."
              description="From a single school to a network of programs across Bangladesh."
            />
          </Reveal>
          <StaggerGroup
            className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5"
            staggerChildren={0.1}
            as="ol"
          >
            {timeline.map((t) => (
              <StaggerItem
                key={t.year}
                as="li"
                className="relative flex flex-col gap-3 rounded-2xl border border-border bg-card p-5 h-full"
              >
                <span className="font-heading text-2xl font-bold text-accent">
                  {t.year}
                </span>
                <h3 className="font-heading text-base font-semibold text-primary">
                  {t.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t.description}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="section-spacing">
        <Container size="wide">
          <StaggerGroup className="grid gap-6 lg:grid-cols-2" staggerChildren={0.12} as="div">
            <StaggerItem as="div" className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-7 md:p-8">
              <BrandBadge variant="accent">Our Mission</BrandBadge>
              <p className="text-base md:text-lg text-foreground leading-relaxed">
                {missionStatement}
              </p>
            </StaggerItem>
            <StaggerItem as="div" className="flex flex-col gap-4 rounded-3xl bg-primary text-primary-foreground p-7 md:p-8">
              <BrandBadge variant="white">Our Vision</BrandBadge>
              <p className="text-base md:text-lg text-primary-foreground/90 leading-relaxed">
                {visionStatement}
              </p>
            </StaggerItem>
          </StaggerGroup>

          {/* Target groups */}
          <div className="mt-12">
            <Reveal>
              <SectionHeading
                eyebrow="Who we serve"
                title="The community we build with."
              />
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {targetGroups.map((g) => (
                  <li key={g}>
                    <span className="inline-flex items-center rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground">
                      {g}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="section-spacing bg-primary text-primary-foreground">
        <Container size="wide" className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-col gap-3 max-w-xl">
            <h2 className="heading-section text-primary-foreground">
              Want to be part of the next chapter?
            </h2>
            <p className="text-base text-primary-foreground/85 leading-relaxed">
              There is a place for you in this work — as a volunteer, mentor, partner, or donor.
            </p>
          </div>
          <div className="flex gap-3">
            <BrandButton href="/get-involved" variant="accent" size="lg">
              Get Involved
            </BrandButton>
            <BrandButton href="/about/strategic-direction" variant="outline" size="lg" className="border-white/30 text-primary-foreground hover:bg-white/10">
              Strategic Direction
            </BrandButton>
          </div>
        </Container>
      </section>
    </>
  );
}
