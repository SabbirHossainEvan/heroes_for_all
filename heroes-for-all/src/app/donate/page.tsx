import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui-brand/container";
import { PageHeader } from "@/components/ui-brand/page-header";
import { SectionHeading } from "@/components/ui-brand/section-heading";
import { BrandButton } from "@/components/ui-brand/button";
import { BrandBadge } from "@/components/ui-brand/badge";
import { BrandImage } from "@/components/ui-brand/brand-image";
import { Reveal, StaggerGroup, StaggerItem, AnimatedProgress } from "@/components/ui-brand/reveal-stagger";
import { campaigns } from "@/data/content";
import { formatCurrency } from "@/lib/utils";
import { ArrowRight, Check, TrendingUp, Info, Heart } from "lucide-react";
import { DonationForm } from "./donation-form";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Direct your giving to a verified Heroes For All campaign, or give where it is needed most.",
};

function CampaignCard({ c }: { c: (typeof campaigns)[number] }) {
  const pct = Math.min(100, Math.round((c.raised / c.goal) * 100));
  const complete = pct >= 100;
  return (
    <article className="card-hover group flex h-full flex-col rounded-2xl border border-border bg-card overflow-hidden">
      {c.image && (
        <BrandImage
          src={c.image}
          alt={c.title}
          aspect="wide"
        />
      )}
      <div className="p-6 flex flex-col gap-5 flex-1">
        <div className="flex items-center justify-between">
          <BrandBadge variant={c.status === "completed" ? "outline" : "sage"}>
            {c.category}
          </BrandBadge>
          {complete ? (
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary">
              <Check className="h-3.5 w-3.5" aria-hidden /> Funded
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-accent">
              <TrendingUp className="h-3.5 w-3.5" aria-hidden /> {pct}%
            </span>
          )}
        </div>
        <h3 className="heading-card text-primary">{c.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {c.description}
        </p>
        <div className="flex flex-col gap-2 mt-auto">
          <div className="flex items-baseline justify-between text-sm">
            <span className="font-semibold text-primary">
              {formatCurrency(c.raised)}
            </span>
            <span className="text-muted-foreground">
              of {formatCurrency(c.goal)}
            </span>
          </div>
          <AnimatedProgress
            value={pct}
            variant={complete ? "primary" : "accent"}
            aria-label={`${c.title} progress: ${pct}% funded`}
          />
        </div>
        <Link
          href={`/donate/${c.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent transition-colors mt-2"
        >
          {complete ? "Read the recap" : "Donate to this campaign"}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </article>
  );
}

export default function DonatePage() {
  return (
    <>
      <PageHeader
        variant="primary"
        eyebrow="Donate"
        title="Your giving, directed where it matters most."
        description="Each campaign is tied to a verified program or piece of infrastructure. You choose where your donation goes — or give where it is needed most."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Donate" },
        ]}
      />

      {/* Campaigns */}
      <section className="section-spacing">
        <Container size="wide">
          <Reveal>
            <SectionHeading
              eyebrow="Active campaigns"
              title="Choose a campaign."
              description="Three live campaigns plus a fourth option to give where it is needed most."
            />
          </Reveal>

          <StaggerGroup
            className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            staggerChildren={0.1}
            as="div"
          >
            {campaigns.map((c) => (
              <StaggerItem key={c.slug} as="div">
                <CampaignCard c={c} />
              </StaggerItem>
            ))}

            {/* Give where most needed */}
            <StaggerItem as="div">
              <article className="card-hover group flex h-full flex-col rounded-2xl border border-primary bg-primary text-primary-foreground overflow-hidden">
                <div className="p-6 flex flex-col gap-5 flex-1">
                  <div className="flex items-center justify-between">
                    <BrandBadge variant="white">Most needed</BrandBadge>
                    <Heart className="h-5 w-5 text-accent" aria-hidden />
                  </div>
                  <h3 className="heading-card text-primary-foreground">
                    Give where most needed.
                  </h3>
                  <p className="text-sm text-primary-foreground/85 leading-relaxed">
                    Let Heroes For All direct your gift to the campaign, program, or
                    community where it will do the most good at the time of giving.
                  </p>
                  <div className="mt-auto">
                    <Link
                      href="#donate-form"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:opacity-90 transition-opacity"
                    >
                      Give now
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                  </div>
                </div>
              </article>
            </StaggerItem>
          </StaggerGroup>
        </Container>
      </section>

      {/* Donation form */}
      <section id="donate-form" className="section-spacing bg-secondary/40 scroll-mt-24">
        <Container size="wide">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16 items-start">
              <div className="flex flex-col gap-4">
                <BrandBadge variant="accent">Make a gift</BrandBadge>
                <SectionHeading
                  eyebrow="Donate"
                  title="Give where most needed."
                  description="Choose an amount and a frequency. In production, this form routes to a secure payment provider."
                />
                <div className="mt-4 flex items-start gap-3 rounded-2xl border border-dashed border-border bg-background p-5">
                  <Info className="h-5 w-5 text-accent shrink-0 mt-0.5" aria-hidden />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Heroes For All is described in its founding documents as a
                    non-profitable, non-political, and charitable organization. For
                    specific tax-deductibility confirmation, please contact{" "}
                    <a
                      href="mailto:info@heroesforall.org"
                      className="text-primary font-medium link-underline"
                    >
                      info@heroesforall.org
                    </a>
                    .
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-border bg-background p-6 md:p-8">
                <DonationForm />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* CTA */}
      <section className="section-spacing">
        <Container size="wide">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 rounded-3xl bg-primary text-primary-foreground p-8 md:p-12">
            <div className="flex flex-col gap-3 max-w-xl">
              <h2 className="heading-section text-primary-foreground">
                Time is also a gift.
              </h2>
              <p className="text-base text-primary-foreground/85 leading-relaxed">
                If giving money is not the right move for you right now, consider
                giving your time. Heroes For All runs on volunteers.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <BrandButton href="/get-involved/volunteer" variant="accent" size="lg">
                Volunteer
                <ArrowRight className="h-4 w-4" aria-hidden />
              </BrandButton>
              <BrandButton
                href="/about/annual-reports"
                variant="outline"
                size="lg"
                className="border-white/30 text-primary-foreground hover:bg-white/10"
              >
                Annual Reports
              </BrandButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
