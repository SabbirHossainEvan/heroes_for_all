import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Container } from "@/components/ui-brand/container";
import { SectionHeading } from "@/components/ui-brand/section-heading";
import { BrandBadge } from "@/components/ui-brand/badge";
import { BrandImage } from "@/components/ui-brand/brand-image";
import { PlaceholderImage } from "@/components/ui-brand/placeholder-image";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui-brand/reveal-stagger";
import { newsArticles } from "@/data/content";
import { formatDate } from "@/lib/utils";

export function StoriesSection() {
  const [featured, ...rest] = newsArticles.slice(0, 4);
  return (
    <section className="section-spacing">
      <Container size="wide">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <SectionHeading
              eyebrow="Stories & News"
              title="The work, in their words."
              description="Field reports, recaps, and press from across Heroes For All's programs."
            />
            <Link
              href="/news"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent transition-colors self-start md:self-end"
            >
              All stories
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Featured story */}
          {featured && (
            <Reveal direction="scale" duration={0.7}>
              <Link
                href={`/news/${featured.slug}`}
                className="card-hover group relative flex flex-col rounded-3xl border border-border bg-card overflow-hidden h-full"
              >
                {featured.image ? (
                  <BrandImage
                    src={featured.image}
                    alt={featured.title}
                    aspect="wide"
                    className="rounded-none"
                    priority={false}
                  />
                ) : (
                  <PlaceholderImage
                    alt={featured.title}
                    variant="forest"
                    aspect="wide"
                    className="rounded-none transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                <div className="p-6 md:p-8 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <BrandBadge variant="accent">{featured.category}</BrandBadge>
                    <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" aria-hidden />
                      {formatDate(featured.date)}
                    </span>
                  </div>
                  <h3 className="heading-card text-primary text-2xl">
                    {featured.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed line-clamp-3">
                    {featured.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                    Read story
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                  </span>
                </div>
              </Link>
            </Reveal>
          )}

          {/* Side list */}
          <StaggerGroup className="flex flex-col gap-3" staggerChildren={0.1} as="div">
            {rest.map((a) => (
              <StaggerItem key={a.slug} as="div" direction="left">
                <Link
                  href={`/news/${a.slug}`}
                  className="card-hover group flex gap-4 rounded-2xl border border-border bg-card p-4 md:p-5 h-full"
                >
                  {a.image ? (
                    <BrandImage
                      src={a.image}
                      alt={a.title}
                      aspect="square"
                      className="w-20 h-20 md:w-24 md:h-24 rounded-xl shrink-0"
                    />
                  ) : (
                    <PlaceholderImage
                      alt={a.title}
                      variant="sage"
                      aspect="square"
                      className="w-20 h-20 md:w-24 md:h-24 rounded-xl shrink-0 transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                  <div className="flex flex-col gap-2 min-w-0">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="font-semibold text-accent uppercase tracking-wider">
                        {a.category}
                      </span>
                      <span aria-hidden>·</span>
                      <span>{formatDate(a.date)}</span>
                    </div>
                    <h4 className="font-heading text-base md:text-lg font-semibold text-primary leading-snug line-clamp-2 group-hover:text-accent transition-colors">
                      {a.title}
                    </h4>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {a.excerpt}
                    </p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </Container>
    </section>
  );
}
