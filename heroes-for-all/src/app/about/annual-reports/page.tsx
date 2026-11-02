import type { Metadata } from "next";
import { Container } from "@/components/ui-brand/container";
import { PageHeader } from "@/components/ui-brand/page-header";
import { SectionHeading } from "@/components/ui-brand/section-heading";
import { BrandButton } from "@/components/ui-brand/button";
import { BrandBadge } from "@/components/ui-brand/badge";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui-brand/reveal-stagger";
import { annualReports, reportsDisclaimer } from "@/data/content";
import { FileText, Download, Info, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Annual Reports",
  description:
    "Annual summaries of Heroes For All's programs, partnerships, and finances — published for transparency and accountability.",
};

export default function AnnualReportsPage() {
  return (
    <>
      <PageHeader
        variant="primary"
        eyebrow="About Us"
        title="Transparency & impact."
        description="Each year, Heroes For All publishes a summary of its programs, partnerships, and finances. The reports below will be linked to the original documents once verified."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about/our-story" },
          { label: "Annual Reports" },
        ]}
      />

      {/* Reports list */}
      <section className="section-spacing">
        <Container size="wide">
          <Reveal>
            <SectionHeading
              eyebrow="Publications"
              title="Annual reports, by year."
              description="Summaries of the organization's work, finances, and partnerships. Where a document is not yet verified, the download is disabled."
            />
          </Reveal>
          <StaggerGroup
            className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
            staggerChildren={0.1}
            as="ul"
          >
            {annualReports.map((r) => (
              <StaggerItem
                key={r.year}
                as="li"
                className="card-hover flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary">
                    <FileText className="h-5 w-5" aria-hidden />
                  </div>
                  {r.available ? (
                    <BrandBadge variant="sage">Available</BrandBadge>
                  ) : (
                    <BrandBadge variant="outline">Pending verification</BrandBadge>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-heading text-3xl font-bold text-accent">
                    {r.year}
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-primary">
                    {r.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {r.summary}
                  </p>
                </div>
                {r.available ? (
                  <a
                    href={r.documentUrl}
                    className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent transition-colors"
                  >
                    <Download className="h-4 w-4" aria-hidden />
                    Download report
                  </a>
                ) : (
                  <span
                    aria-disabled
                    className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground/70 cursor-not-allowed"
                  >
                    <Download className="h-4 w-4" aria-hidden />
                    Download pending
                  </span>
                )}
              </StaggerItem>
            ))}
          </StaggerGroup>

          {/* Disclaimer */}
          <Reveal delay={0.1}>
            <div className="mt-10 flex items-start gap-3 rounded-2xl border border-border bg-secondary/40 p-5">
              <Info className="h-5 w-5 text-accent shrink-0 mt-0.5" aria-hidden />
              <p className="text-sm text-muted-foreground leading-relaxed">
                {reportsDisclaimer}
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-secondary/40">
        <Container size="wide">
          <div className="rounded-3xl bg-card border border-border p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex flex-col gap-3 max-w-xl">
              <h2 className="heading-section text-primary">
                Questions about a report?
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                For detailed financial, governance, or programmatic questions, contact
                Heroes For All directly and a member of the executive body will respond.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <BrandButton href="/contact" variant="primary" size="lg">
                Contact Us
                <ArrowRight className="h-4 w-4" aria-hidden />
              </BrandButton>
              <BrandButton href="/about/board-members" variant="outline" size="lg">
                Board Members
              </BrandButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
