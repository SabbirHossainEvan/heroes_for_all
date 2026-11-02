import type { Metadata } from "next";
import { Container } from "@/components/ui-brand/container";
import { PageHeader } from "@/components/ui-brand/page-header";
import { SectionHeading } from "@/components/ui-brand/section-heading";
import { BrandButton } from "@/components/ui-brand/button";
import { BrandBadge } from "@/components/ui-brand/badge";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui-brand/reveal-stagger";
import { Scale, ArrowRight, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Board Members",
  description:
    "Heroes For All's board provides strategic oversight, financial stewardship, and accountability for the organization.",
};

const placeholderBoard = [
  { role: "Chair" },
  { role: "Vice Chair" },
  { role: "Secretary" },
  { role: "Treasurer" },
  { role: "Director" },
  { role: "Director" },
];

export default function BoardMembersPage() {
  return (
    <>
      <PageHeader
        variant="primary"
        eyebrow="About Us"
        title="Governance & board oversight."
        description="The Heroes For All board provides strategic oversight, financial stewardship, and accountability for everything the organization does."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about/our-story" },
          { label: "Board Members" },
        ]}
      />

      {/* Intro */}
      <section className="section-spacing">
        <Container size="wide">
          <StaggerGroup className="grid gap-10 lg:grid-cols-[2fr_1fr] lg:gap-16 items-start" staggerChildren={0.1} as="div">
            <StaggerItem as="div" direction="up">
              <div className="flex flex-col gap-5">
                <span className="eyebrow">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                  Governance
                </span>
                <h2 className="heading-section text-primary">
                  A board built for stewardship, not ceremony.
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Heroes For All's board provides strategic oversight, financial stewardship,
                  and accountability. The board reviews program direction, approves annual
                  budgets, and ensures that every campaign and partnership advances the
                  organization's mission of supporting youth to become conscious, purposeful,
                  and engaged global citizens.
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Detailed board member bios will be added as they are verified from the
                  original site. The structure below reflects the standing roles on the
                  Heroes For All board.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem as="div" direction="up">
              <aside className="rounded-2xl border border-border bg-card p-6 flex flex-col gap-4">
                <div className="flex items-center gap-2 text-accent">
                  <Scale className="h-5 w-5" aria-hidden />
                  <span className="label-small">Board responsibilities</span>
                </div>
                <ul className="flex flex-col gap-2.5 text-sm text-muted-foreground">
                  <li>Strategic direction and annual planning.</li>
                  <li>Financial stewardship and budget approval.</li>
                  <li>Programmatic oversight and impact review.</li>
                  <li>Compliance, risk, and accountability.</li>
                </ul>
              </aside>
            </StaggerItem>
          </StaggerGroup>
        </Container>
      </section>

      {/* Placeholder grid */}
      <section className="section-spacing bg-secondary/40">
        <Container size="wide">
          <Reveal>
            <SectionHeading
              eyebrow="Board roster"
              title="The standing board."
              description="Board seats and roles. Bios are pending verification from the original site."
            />
          </Reveal>
          <StaggerGroup
            className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            staggerChildren={0.1}
            as="ul"
          >
            {placeholderBoard.map((m, i) => (
              <StaggerItem
                key={`${m.role}-${i}`}
                as="li"
                className="card-hover flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 h-full"
              >
                <div className="flex aspect-square w-full items-center justify-center rounded-xl bg-gradient-to-br from-[#173F35] via-[#102F28] to-[#173F35]">
                  <span className="font-heading text-3xl font-bold text-accent">
                    HFA
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <BrandBadge variant="sage">{m.role}</BrandBadge>
                  <h3 className="font-heading text-lg font-semibold text-primary">
                    Board Member
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Bio pending verification from the original site.
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          {/* Pending note */}
          <div className="mt-10 flex items-start gap-3 rounded-2xl border border-dashed border-border bg-background p-5">
            <Info className="h-5 w-5 text-accent shrink-0 mt-0.5" aria-hidden />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Board member photographs and detailed biographies will be published on this
              page once they have been verified against the original site. For governance
              inquiries in the meantime, please reach out to{" "}
              <a
                href="mailto:info@heroesforall.org"
                className="text-primary font-medium link-underline"
              >
                info@heroesforall.org
              </a>
              .
            </p>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="section-spacing">
        <Container size="wide">
          <div className="rounded-3xl bg-primary text-primary-foreground p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex flex-col gap-3 max-w-xl">
              <h2 className="heading-section text-primary-foreground">
                Read the reports. Meet the team.
              </h2>
              <p className="text-base text-primary-foreground/85 leading-relaxed">
                Annual reports summarize the organization's programs, partnerships, and
                finances. Our team runs the work day-to-day.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <BrandButton href="/about/annual-reports" variant="accent" size="lg">
                Annual Reports
              </BrandButton>
              <BrandButton
                href="/about/our-team"
                variant="outline"
                size="lg"
                className="border-white/30 text-primary-foreground hover:bg-white/10"
              >
                Our Team
                <ArrowRight className="h-4 w-4" aria-hidden />
              </BrandButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
