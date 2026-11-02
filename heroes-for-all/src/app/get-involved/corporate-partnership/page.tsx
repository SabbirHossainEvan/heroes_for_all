import type { Metadata } from "next";
import { Container } from "@/components/ui-brand/container";
import { PageHeader } from "@/components/ui-brand/page-header";
import { SectionHeading } from "@/components/ui-brand/section-heading";
import { BrandBadge } from "@/components/ui-brand/badge";
import { BrandImage } from "@/components/ui-brand/brand-image";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui-brand/reveal-stagger";
import { Check, ArrowRight } from "lucide-react";
import { corporatePartnershipTiers } from "@/data/content";
import { CorporateForm } from "./corporate-form";

export const metadata: Metadata = {
  title: "Corporate Partnership",
  description:
    "Partner your organization with Heroes For All's programs, campaigns, and flagship events.",
};

export default function CorporatePartnershipPage() {
  return (
    <>
      <PageHeader
        variant="primary"
        eyebrow="Get Involved"
        title="Corporate partnership."
        description="Align your organization with a program, a campaign, or a flagship event. Three tiers, each with clear scope and recognition."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Get Involved", href: "/get-involved" },
          { label: "Corporate Partnership" },
        ]}
      />

      {/* Hero banner */}
      <section className="pb-2 pt-4">
        <Container size="wide">
          <Reveal direction="up">
            <BrandImage
              src="/images/programs/community-engagement.jpg"
              alt="Heroes For All volunteers and corporate partners engaging with the community"
              aspect="wide"
              className="rounded-3xl"
              priority
            />
          </Reveal>
        </Container>
      </section>

      {/* Tiers */}
      <section className="section-spacing">
        <Container size="wide">
          <Reveal>
            <SectionHeading
              eyebrow="Tiers"
              title="Three ways to partner."
              description="Co-fund a program, a multi-year strategy, or a single flagship event. Each tier carries branded recognition across the partnership's touchpoints."
            />
          </Reveal>
          <StaggerGroup
            className="mt-10 grid gap-5 md:grid-cols-3"
            staggerChildren={0.12}
            as="ul"
          >
            {corporatePartnershipTiers.map((t, i) => {
              const featured = i === 1;
              return (
                <StaggerItem
                  key={t.name}
                  as="li"
                  className={`card-hover flex h-full flex-col gap-5 rounded-3xl p-7 md:p-8 ${
                    featured
                      ? "bg-primary text-primary-foreground border border-primary"
                      : "border border-border bg-card"
                  }`}
                >
                  <BrandBadge variant={featured ? "white" : "accent"}>
                    Tier {i + 1}
                  </BrandBadge>
                  <h3
                    className={`font-heading text-xl font-bold ${
                      featured ? "text-primary-foreground" : "text-primary"
                    }`}
                  >
                    {t.name}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      featured ? "text-primary-foreground/85" : "text-muted-foreground"
                    }`}
                  >
                    {t.description}
                  </p>
                  <ul
                    className={`mt-auto flex flex-col gap-2 border-t pt-4 ${
                      featured ? "border-white/15" : "border-border"
                    }`}
                  >
                    <li
                      className={`flex items-start gap-2 text-sm ${
                        featured ? "text-primary-foreground/85" : "text-muted-foreground"
                      }`}
                    >
                      <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" aria-hidden />
                      Branded recognition across touchpoints.
                    </li>
                    <li
                      className={`flex items-start gap-2 text-sm ${
                        featured ? "text-primary-foreground/85" : "text-muted-foreground"
                      }`}
                    >
                      <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" aria-hidden />
                      Impact reporting included.
                    </li>
                  </ul>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </Container>
      </section>

      {/* Form */}
      <section className="section-spacing bg-secondary/40">
        <Container size="wide">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16 items-start">
            <div className="flex flex-col gap-4">
              <BrandBadge variant="accent">Inquiry</BrandBadge>
              <SectionHeading
                eyebrow="Start a conversation"
                title="Tell us what you're hoping to do."
                description="Fill in the form and a member of the development team will respond within 5 business days to set up an introductory call."
              />
            </div>

            <div className="rounded-3xl border border-border bg-background p-6 md:p-8">
              <CorporateForm />
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="section-spacing">
        <Container size="wide">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 rounded-3xl bg-primary text-primary-foreground p-8 md:p-12">
            <div className="flex flex-col gap-3 max-w-xl">
              <h2 className="heading-section text-primary-foreground">
                See who we already work with.
              </h2>
              <p className="text-base text-primary-foreground/85 leading-relaxed">
                Heroes For All's current partners include sponsors, programmatic
                partners, academic institutions, and media organizations.
              </p>
            </div>
            <a
              href="/about/our-partners"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 h-11 text-sm font-semibold text-accent-foreground hover:bg-accent/90 transition-colors"
            >
              Our Partners
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
