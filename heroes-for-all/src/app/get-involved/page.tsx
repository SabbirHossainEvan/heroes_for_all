import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui-brand/container";
import { PageHeader } from "@/components/ui-brand/page-header";
import { SectionHeading } from "@/components/ui-brand/section-heading";
import { BrandButton } from "@/components/ui-brand/button";
import { BrandBadge } from "@/components/ui-brand/badge";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui-brand/reveal-stagger";
import {
  membershipBenefits,
  volunteerRoles,
  corporatePartnershipTiers,
} from "@/data/content";
import {
  UserPlus,
  Users,
  Building2,
  HandHeart,
  ArrowRight,
  Check,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Find your place in the work — as a student member, peer mentor, corporate partner, or volunteer.",
};

const cards = [
  {
    icon: UserPlus,
    title: "Student Membership",
    description:
      "For youth aged 13–25 who want priority access to programs, mentorship circles, and events.",
    href: "/get-involved/student-membership",
  },
  {
    icon: Users,
    title: "Peer Mentorship",
    description:
      "Become a mentor or a mentee. Pair up across disciplines, schools, and generations.",
    href: "/get-involved/peer-mentorship",
  },
  {
    icon: Building2,
    title: "Corporate Partnership",
    description:
      "Align your organization with a program, a campaign, or a flagship event.",
    href: "/get-involved/corporate-partnership",
  },
  {
    icon: HandHeart,
    title: "Volunteer",
    description:
      "Give your time and skills. Roles available on the ground and remotely.",
    href: "/get-involved/volunteer",
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      <PageHeader
        variant="primary"
        eyebrow="Get Involved"
        title="Find your place in the work."
        description="There are four ways to show up — as a student member, a peer mentor, a corporate partner, or a volunteer. There is a place for everyone in this work."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Get Involved" },
        ]}
      />

      {/* Four-card grid */}
      <section className="section-spacing">
        <Container size="wide">
          <StaggerGroup
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
            staggerChildren={0.1}
            as="ul"
          >
            {cards.map((c) => {
              const Icon = c.icon;
              return (
                <StaggerItem key={c.title} as="li">
                  <Link
                    href={c.href}
                    className="card-hover group flex h-full flex-col gap-5 rounded-2xl border border-border bg-card p-6"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="font-heading text-lg font-semibold text-primary leading-tight">
                        {c.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {c.description}
                      </p>
                    </div>
                    <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                      Learn more
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                    </span>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </Container>
      </section>

      {/* Membership benefits */}
      <section className="section-spacing bg-secondary/40">
        <Container size="wide">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16 items-start">
              <div className="flex flex-col gap-4">
                <span className="eyebrow">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                  Student Membership
                </span>
                <h2 className="heading-section text-primary">
                  What members get.
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Student membership is open to youth aged 13–25. Members receive the
                  benefits below, plus a network of like-minded peers across Bangladesh and
                  the diaspora.
                </p>
                <BrandButton href="/get-involved/student-membership" variant="primary" size="md" className="mt-2 self-start">
                  Become a member
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </BrandButton>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {membershipBenefits.map((b, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Check className="h-4 w-4" aria-hidden />
                    </span>
                    <span className="text-sm text-foreground leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Volunteer roles */}
      <section className="section-spacing">
        <Container size="wide">
          <Reveal direction="up">
            <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16 items-start">
              <ul className="grid gap-3 sm:grid-cols-2">
                {volunteerRoles.map((r, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Check className="h-4 w-4" aria-hidden />
                    </span>
                    <span className="text-sm text-foreground leading-relaxed">{r}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <span className="eyebrow">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                  Volunteer
                </span>
                <h2 className="heading-section text-primary">
                  Open roles.
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Heroes For All runs on volunteers. Roles are available on the ground in
                  Bangladesh and remotely across the diaspora.
                </p>
                <BrandButton href="/get-involved/volunteer" variant="primary" size="md" className="mt-2 self-start">
                  See all roles
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </BrandButton>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Corporate tiers */}
      <section className="section-spacing bg-secondary/40">
        <Container size="wide">
          <Reveal>
            <SectionHeading
              eyebrow="Corporate Partnership"
              title="Three ways to partner."
              description="Co-fund a program, a multi-year strategy, or a single flagship event."
            />
          </Reveal>
          <StaggerGroup
            className="mt-10 grid gap-5 md:grid-cols-3"
            staggerChildren={0.12}
            as="ul"
          >
            {corporatePartnershipTiers.map((t) => (
              <StaggerItem
                key={t.name}
                as="li"
                className="card-hover flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6"
              >
                <BrandBadge variant="accent">Tier</BrandBadge>
                <h3 className="font-heading text-xl font-bold text-primary">{t.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t.description}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <Reveal delay={0.2}>
            <div className="mt-8">
              <BrandButton href="/get-involved/corporate-partnership" variant="primary" size="lg">
                Explore corporate partnership
                <ArrowRight className="h-4 w-4" aria-hidden />
              </BrandButton>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
