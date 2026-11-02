import type { Metadata } from "next";
import { Container } from "@/components/ui-brand/container";
import { PageHeader } from "@/components/ui-brand/page-header";
import { SectionHeading } from "@/components/ui-brand/section-heading";
import { BrandBadge } from "@/components/ui-brand/badge";
import { BrandButton } from "@/components/ui-brand/button";
import { BrandImage } from "@/components/ui-brand/brand-image";
import { Reveal } from "@/components/ui-brand/reveal-stagger";
import { membershipBenefits } from "@/data/content";
import { Check, Sparkles } from "lucide-react";
import { MembershipForm } from "./membership-form";

export const metadata: Metadata = {
  title: "Student Membership",
  description:
    "Student membership in Heroes For All is open to youth aged 13–25.",
};

export default function StudentMembershipPage() {
  return (
    <>
      <PageHeader
        variant="primary"
        eyebrow="Get Involved"
        title="Student membership."
        description="Open to youth aged 13–25. Members receive priority access to programs, mentorship circles, and a network of like-minded peers across Bangladesh and the diaspora."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Get Involved", href: "/get-involved" },
          { label: "Student Membership" },
        ]}
      />

      {/* Hero banner */}
      <section className="pb-2 pt-4">
        <Container size="wide">
          <Reveal direction="up">
            <BrandImage
              src="/images/programs/building-mindset.jpg"
              alt="Youth participants in a Heroes For All knowledge session"
              aspect="wide"
              className="rounded-3xl"
              priority
            />
          </Reveal>
        </Container>
      </section>

      {/* Intro + benefits */}
      <section className="section-spacing">
        <Container size="wide">
          <div className="grid gap-10 lg:grid-cols-[2fr_1fr] lg:gap-16 items-start">
            <div className="flex flex-col gap-5">
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                Who it's for
              </span>
              <h2 className="heading-section text-primary">
                A network for the next generation.
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Student membership is the on-ramp to everything Heroes For All does.
                Members get first access to knowledge sessions, mentorship circles, and
                ticketed events, and they join a network of youth across Bangladesh and
                the diaspora who are building purposeful lives.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Membership is open to any youth aged 13–25 who aligns with the
                organization's mission. There is no membership fee — interest and
                participation are what count.
              </p>
            </div>

            <Reveal direction="left" delay={0.1}>
              <aside className="rounded-2xl border border-border bg-card p-6 flex flex-col gap-4">
                <div className="flex items-center gap-2 text-accent">
                  <Sparkles className="h-5 w-5" aria-hidden />
                  <span className="label-small">Member benefits</span>
                </div>
                <ul className="flex flex-col gap-2.5">
                  {membershipBenefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" aria-hidden />
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </aside>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Form */}
      <section className="section-spacing bg-secondary/40">
        <Container size="wide">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16 items-start">
              <div className="flex flex-col gap-4">
                <BrandBadge variant="accent">Interest form</BrandBadge>
                <h2 className="heading-section text-primary">
                  Submit your interest.
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Fill in the form and a member of the Heroes For All team will be in touch
                  to confirm your membership and walk you through next steps.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We will get back to you within 5 business days.
                </p>
                <BrandButton href="/get-involved" variant="ghost" size="md" className="self-start mt-2">
                  Other ways to get involved
                </BrandButton>
              </div>

              <div className="rounded-3xl border border-border bg-background p-6 md:p-8">
                <MembershipForm />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
