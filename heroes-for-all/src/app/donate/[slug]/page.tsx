import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui-brand/container";
import { PageHeader } from "@/components/ui-brand/page-header";
import { BrandButton } from "@/components/ui-brand/button";
import { BrandBadge } from "@/components/ui-brand/badge";
import { BrandImage } from "@/components/ui-brand/brand-image";
import { Reveal, StaggerGroup, StaggerItem, AnimatedProgress } from "@/components/ui-brand/reveal-stagger";
import { campaigns } from "@/data/content";
import { formatCurrency, cn } from "@/lib/utils";
import { ArrowRight, ArrowLeft, Check, TrendingUp, Info } from "lucide-react";
import { DonationForm } from "../donation-form";

export function generateStaticParams() {
  return campaigns.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const campaign = campaigns.find((c) => c.slug === slug);
  if (!campaign) return { title: "Campaign not found" };
  return {
    title: campaign.title,
    description: campaign.description,
  };
}

export default async function DonateCampaignPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const campaign = campaigns.find((c) => c.slug === slug);
  if (!campaign) notFound();

  const others = campaigns.filter((c) => c.slug !== campaign.slug);
  const pct = Math.min(100, Math.round((campaign.raised / campaign.goal) * 100));
  const complete = pct >= 100;

  return (
    <>
      <PageHeader
        variant="primary"
        eyebrow="Donate"
        title={campaign.title}
        description={campaign.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Donate", href: "/donate" },
          { label: campaign.title },
        ]}
      >
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <BrandBadge variant={campaign.status === "completed" ? "outline" : "white"}>
            {campaign.category}
          </BrandBadge>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
            {complete ? (
              <>
                <Check className="h-4 w-4" aria-hidden /> Funded
              </>
            ) : (
              <>
                <TrendingUp className="h-4 w-4" aria-hidden /> {pct}% funded
              </>
            )}
          </span>
        </div>
      </PageHeader>

      {/* Hero banner */}
      {campaign.image && (
        <section className="pb-2 pt-4">
          <Container size="wide">
            <Reveal direction="up">
              <BrandImage
                src={campaign.image}
                alt={campaign.title}
                aspect="wide"
                className="rounded-3xl"
                priority
              />
            </Reveal>
          </Container>
        </section>
      )}

      {/* Progress + form */}
      <section className="section-spacing">
        <Container size="wide">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16 items-start">
            <Reveal direction="right">
              <div className="flex flex-col gap-6">
                <div className="rounded-2xl border border-border bg-card p-6 flex flex-col gap-4">
                  <div className="flex items-baseline justify-between">
                    <span className="font-heading text-3xl font-bold text-primary">
                      {formatCurrency(campaign.raised)}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      of {formatCurrency(campaign.goal)} goal
                    </span>
                  </div>
                  <AnimatedProgress
                    value={pct}
                    variant={complete ? "primary" : "accent"}
                    className="h-3"
                    aria-label={`${campaign.title} progress: ${pct}% funded`}
                  />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {complete
                      ? "This campaign has reached its goal. You can still support the work — additional gifts will go toward sustaining the program."
                      : `${formatCurrency(campaign.goal - campaign.raised)} still needed to reach the goal.`}
                  </p>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-dashed border-border bg-background p-5">
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
            </Reveal>

            <Reveal direction="left" delay={0.1}>
              <div className="rounded-3xl border border-border bg-background p-6 md:p-8">
                <h2 className="font-heading text-xl font-bold text-primary mb-2">
                  Give to this campaign.
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Your gift will be directed to <strong className="text-foreground">{campaign.title}</strong>.
                </p>
                <DonationForm campaignSlug={campaign.slug} campaignTitle={campaign.title} />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Other campaigns */}
      <section className="section-spacing bg-secondary/40">
        <Container size="wide">
          <Reveal>
            <div className="flex flex-col gap-3 mb-8">
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                Continue exploring
              </span>
              <h2 className="heading-section text-primary">Other campaigns.</h2>
            </div>
          </Reveal>
          <StaggerGroup
            className="grid gap-5 sm:grid-cols-2"
            staggerChildren={0.1}
            as="ul"
          >
            {others.map((c) => {
              const otherPct = Math.min(100, Math.round((c.raised / c.goal) * 100));
              const otherComplete = otherPct >= 100;
              return (
                <StaggerItem key={c.slug} as="li">
                  <Link
                    href={`/donate/${c.slug}`}
                    className="card-hover group flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-5"
                  >
                    <div className="flex items-center justify-between">
                      <BrandBadge variant="sage">{c.category}</BrandBadge>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-accent">
                        <TrendingUp className="h-3.5 w-3.5" aria-hidden />
                        {otherPct}%
                      </span>
                    </div>
                    <h3 className="font-heading text-base font-semibold text-primary leading-tight">
                      {c.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {c.description}
                    </p>
                    <div className="h-1.5 w-full rounded-full bg-secondary overflow-hidden">
                      <div
                        className={cn(
                          "h-full rounded-full",
                          otherComplete ? "bg-primary" : "bg-accent",
                        )}
                        style={{ width: `${otherPct}%` }}
                      />
                    </div>
                    <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                      {otherComplete ? "Read recap" : "Donate"}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                    </span>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
          <Reveal delay={0.2}>
            <div className="mt-8">
              <BrandButton href="/donate" variant="outline" size="md">
                All campaigns
              </BrandButton>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-10">
        <Container size="wide">
          <Link
            href="/donate"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Back to all campaigns
          </Link>
        </Container>
      </section>
    </>
  );
}
