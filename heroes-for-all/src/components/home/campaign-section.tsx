import Link from "next/link";
import { ArrowRight, Check, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui-brand/container";
import { SectionHeading } from "@/components/ui-brand/section-heading";
import { BrandButton } from "@/components/ui-brand/button";
import { BrandBadge } from "@/components/ui-brand/badge";
import { BrandImage } from "@/components/ui-brand/brand-image";
import { Reveal, StaggerGroup, StaggerItem, AnimatedProgress } from "@/components/ui-brand/reveal-stagger";
import { campaigns } from "@/data/content";
import { formatCurrency, cn } from "@/lib/utils";

export function CampaignSection() {
  const featured = campaigns.filter((c) => c.featured).slice(0, 3);

  return (
    <section className="section-spacing">
      <Container size="wide">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <SectionHeading
              eyebrow="Active Campaigns"
              title="Your giving, directed where it matters most."
              description="Each campaign is tied to a verified program or piece of infrastructure. You choose where your donation goes."
            />
            <BrandButton href="/donate" variant="ghost" size="md" className="self-start md:self-end shrink-0">
              All campaigns
              <ArrowRight className="h-4 w-4" aria-hidden />
            </BrandButton>
          </div>
        </Reveal>

        <StaggerGroup
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          staggerChildren={0.14}
          as="div"
        >
          {featured.map((c) => {
            const pct = Math.min(100, Math.round((c.raised / c.goal) * 100));
            const complete = pct >= 100;
            return (
              <StaggerItem key={c.slug} as="article">
                <div className="card-hover group flex flex-col rounded-3xl border border-border bg-card overflow-hidden h-full">
                  {c.image && (
                    <BrandImage
                      src={c.image}
                      alt={c.title}
                      aspect="wide"
                      className="rounded-t-3xl"
                    />
                  )}
                  <div className="p-6 md:p-7 flex flex-col gap-5 flex-1">
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

                    {/* Progress */}
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
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent transition-colors mt-2 group/link"
                    >
                      {complete ? "Read the recap" : "Donate to this campaign"}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5" aria-hidden />
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </Container>
    </section>
  );
}
