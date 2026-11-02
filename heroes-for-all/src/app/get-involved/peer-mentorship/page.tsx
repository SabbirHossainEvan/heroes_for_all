import type { Metadata } from "next";
import { Container } from "@/components/ui-brand/container";
import { PageHeader } from "@/components/ui-brand/page-header";
import { SectionHeading } from "@/components/ui-brand/section-heading";
import { BrandBadge } from "@/components/ui-brand/badge";
import { BrandButton } from "@/components/ui-brand/button";
import { BrandImage } from "@/components/ui-brand/brand-image";
import { Reveal } from "@/components/ui-brand/reveal-stagger";
import { Check, ArrowRight } from "lucide-react";
import { MentorshipForm } from "./mentorship-form";

export const metadata: Metadata = {
  title: "Peer Mentorship",
  description:
    "Become a mentor or a mentee in the Heroes For All peer mentorship program.",
};

const mentorPoints = [
  "Share your experience with the generation coming up behind you.",
  "Guide a young person through school, career, or life choices.",
  "Join a structured mentorship circle with matched mentees.",
  "Contribute a few hours a month — on your schedule.",
];

const menteePoints = [
  "Get matched with an established professional in your field of interest.",
  "Build confidence through guided practice and shadowing.",
  "Join one-on-one and small-group mentorship sessions.",
  "Open to youth aged 13–25 who want to grow.",
];

export default function PeerMentorshipPage() {
  return (
    <>
      <PageHeader
        variant="primary"
        eyebrow="Get Involved"
        title="Peer mentorship."
        description="Pair up across disciplines, schools, and generations. Mentors guide. Mentees grow. Both sides come out changed."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Get Involved", href: "/get-involved" },
          { label: "Peer Mentorship" },
        ]}
      />

      {/* Hero banner */}
      <section className="pb-2 pt-4">
        <Container size="wide">
          <Reveal direction="up">
            <BrandImage
              src="/images/hero/social-shafat-memorial-school.jpg"
              alt="Mentorship and learning in action at a Heroes For All community site"
              aspect="wide"
              className="rounded-3xl"
              priority
            />
          </Reveal>
        </Container>
      </section>

      {/* Intro */}
      <section className="section-spacing">
        <Container size="wide">
          <div className="max-w-3xl flex flex-col gap-5">
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
              How it works
            </span>
            <h2 className="heading-section text-primary">
              A structured pairing, not a one-off introduction.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              The Heroes For All peer mentorship program matches experienced
              professionals with youth across Bangladesh and the diaspora. Pairings are
              structured around goals — a school transition, a career decision, a skill
              to build — and supported by Heroes For All throughout.
            </p>
          </div>
        </Container>
      </section>

      {/* Two-column mentor / mentee */}
      <section className="section-spacing bg-secondary/40">
        <Container size="wide">
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal direction="left">
              <div className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-7 md:p-8 h-full">
                <BrandBadge variant="accent">Become a mentor</BrandBadge>
                <h3 className="font-heading text-xl font-bold text-primary">
                  For established professionals.
                </h3>
                <ul className="flex flex-col gap-3 mt-2">
                  {mentorPoints.map((p, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" aria-hidden />
                      <span className="leading-relaxed">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal direction="right" delay={0.1}>
              <div className="flex flex-col gap-4 rounded-3xl bg-primary text-primary-foreground p-7 md:p-8 h-full">
                <BrandBadge variant="white">Become a mentee</BrandBadge>
                <h3 className="font-heading text-xl font-bold text-primary-foreground">
                  For youth aged 13–25.
                </h3>
                <ul className="flex flex-col gap-3 mt-2">
                  {menteePoints.map((p, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-primary-foreground/85">
                      <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" aria-hidden />
                      <span className="leading-relaxed">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Form */}
      <section className="section-spacing">
        <Container size="wide">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16 items-start">
            <div className="flex flex-col gap-4">
              <BrandBadge variant="accent">Application</BrandBadge>
              <SectionHeading
                eyebrow="Apply"
                title="Apply to the program."
                description="Fill in the form and a member of the team will be in touch to discuss pairing. We will get back to you within 5 business days."
              />
              <BrandButton href="/get-involved" variant="ghost" size="md" className="self-start mt-2">
                Other ways to get involved
                <ArrowRight className="h-4 w-4" aria-hidden />
              </BrandButton>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 md:p-8">
              <MentorshipForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
