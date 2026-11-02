import type { Metadata } from "next";
import { Container } from "@/components/ui-brand/container";
import { PageHeader } from "@/components/ui-brand/page-header";
import { SectionHeading } from "@/components/ui-brand/section-heading";
import { BrandBadge } from "@/components/ui-brand/badge";
import { BrandImage } from "@/components/ui-brand/brand-image";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui-brand/reveal-stagger";
import { volunteerRoles } from "@/data/content";
import { Check, ArrowRight } from "lucide-react";
import { VolunteerForm } from "./volunteer-form";

export const metadata: Metadata = {
  title: "Volunteer",
  description:
    "Volunteer with Heroes For All — on the ground in Bangladesh or remotely across the diaspora.",
};

const roleLabels = [
  "Program volunteer",
  "Knowledge Sessions volunteer",
  "Communications volunteer",
  "Research & Evaluation volunteer",
];

export default function VolunteerPage() {
  return (
    <>
      <PageHeader
        variant="primary"
        eyebrow="Get Involved"
        title="Volunteer."
        description="Give your time and skills. Roles are available on the ground in Bangladesh and remotely across the diaspora. Heroes For All runs on volunteers."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Get Involved", href: "/get-involved" },
          { label: "Volunteer" },
        ]}
      />

      {/* Hero banner */}
      <section className="pb-2 pt-4">
        <Container size="wide">
          <Reveal direction="up">
            <BrandImage
              src="/images/campaigns/food-distribution.jpg"
              alt="Heroes For All volunteers distributing food and supplies in the community"
              aspect="wide"
              className="rounded-3xl"
              priority
            />
          </Reveal>
        </Container>
      </section>

      {/* Roles */}
      <section className="section-spacing">
        <Container size="wide">
          <Reveal>
            <SectionHeading
              eyebrow="Open roles"
              title="Where help is needed."
              description="Four standing roles, each with clear scope. Not sure which fits? Choose 'Not sure yet' in the form and we'll find the right fit together."
            />
          </Reveal>
          <StaggerGroup
            className="mt-10 grid gap-5 sm:grid-cols-2"
            staggerChildren={0.1}
            as="ul"
          >
            {volunteerRoles.map((r, i) => (
              <StaggerItem
                key={i}
                as="li"
                className="card-hover flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 h-full"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Check className="h-4 w-4" aria-hidden />
                  </span>
                  <h3 className="font-heading text-base font-semibold text-primary">
                    {roleLabels[i] ?? `Role ${i + 1}`}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{r}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      {/* Form */}
      <section className="section-spacing bg-secondary/40">
        <Container size="wide">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16 items-start">
            <div className="flex flex-col gap-4">
              <BrandBadge variant="accent">Application</BrandBadge>
              <SectionHeading
                eyebrow="Apply"
                title="Tell us how you'd like to help."
                description="Fill in the form and a member of the team will respond within 5 business days to discuss placement."
              />
            </div>

            <div className="rounded-3xl border border-border bg-background p-6 md:p-8">
              <VolunteerForm roleOptions={roleLabels} />
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
                Not sure where you fit?
              </h2>
              <p className="text-base text-primary-foreground/85 leading-relaxed">
                Get in touch and we'll find the right role together — on the ground or
                remotely, on your schedule.
              </p>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 h-11 text-sm font-semibold text-accent-foreground hover:bg-accent/90 transition-colors"
            >
              Contact us
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
