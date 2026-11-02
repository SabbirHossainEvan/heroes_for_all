import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui-brand/container";
import { PageHeader } from "@/components/ui-brand/page-header";
import { BrandButton } from "@/components/ui-brand/button";
import { BrandBadge } from "@/components/ui-brand/badge";
import { BrandImage } from "@/components/ui-brand/brand-image";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui-brand/reveal-stagger";
import { newsArticles } from "@/data/content";
import { formatDate } from "@/lib/utils";
import { ArrowRight, ArrowLeft, CalendarDays } from "lucide-react";

export function generateStaticParams() {
  return newsArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = newsArticles.find((a) => a.slug === slug);
  if (!article) return { title: "Article not found" };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = newsArticles.find((a) => a.slug === slug);
  if (!article) notFound();

  const more = newsArticles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <PageHeader
        variant="primary"
        eyebrow={article.category}
        title={article.title}
        description={article.excerpt}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Stories", href: "/news" },
          { label: article.category },
        ]}
      />

      {/* Hero banner */}
      {article.image && (
        <section className="pb-2 pt-4">
          <Container size="wide">
            <Reveal direction="up">
              <BrandImage
                src={article.image}
                alt={article.title}
                aspect="wide"
                className="rounded-3xl"
                priority
              />
            </Reveal>
          </Container>
        </section>
      )}

      <section className="section-spacing">
        <Container size="wide">
          <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:gap-16 items-start">
            {/* Article body */}
            <Reveal direction="up">
              <article className="flex flex-col gap-6">
                <div className="flex flex-wrap items-center gap-3 border-b border-border pb-5">
                  <BrandBadge variant="accent">{article.category}</BrandBadge>
                  <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                    <CalendarDays className="h-4 w-4" aria-hidden />
                    {formatDate(article.date)}
                  </span>
                </div>

                <div className="flex flex-col gap-5 max-w-[720px] mx-auto w-full">
                  {article.body.map((para, i) => (
                    <p
                      key={i}
                      className={
                        i === 0
                          ? "text-lg md:text-xl text-foreground leading-relaxed font-medium"
                          : "text-base md:text-lg text-muted-foreground leading-relaxed"
                      }
                    >
                      {para}
                    </p>
                  ))}
                </div>

                <div className="mt-6 flex flex-col gap-4 border-t border-border pt-6 max-w-[720px] mx-auto w-full">
                  <p className="text-sm text-muted-foreground">
                    Share this story with someone who needs to read it.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <BrandButton href="/get-involved" variant="primary" size="md">
                      Get Involved
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </BrandButton>
                    <BrandButton href="/news" variant="outline" size="md">
                      All stories
                    </BrandButton>
                  </div>
                </div>
              </article>
            </Reveal>

            {/* Sidebar */}
            <aside className="flex flex-col gap-4 lg:sticky lg:top-24">
              <div className="rounded-2xl border border-border bg-card p-5 flex flex-col gap-4">
                <Reveal>
                  <span className="eyebrow">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                    More stories
                  </span>
                </Reveal>
                <StaggerGroup as="ul" className="flex flex-col gap-4" staggerChildren={0.08}>
                  {more.map((a) => (
                    <StaggerItem key={a.slug} as="li" className="border-b border-border last:border-b-0 pb-4 last:pb-0">
                      <Link
                        href={`/news/${a.slug}`}
                        className="group flex flex-col gap-2"
                      >
                        <BrandBadge variant="outline">{a.category}</BrandBadge>
                        <h3 className="font-heading text-sm font-semibold text-primary leading-snug group-hover:text-accent transition-colors">
                          {a.title}
                        </h3>
                        <span className="text-xs text-muted-foreground">
                          {formatDate(a.date)}
                        </span>
                      </Link>
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="py-10">
        <Container size="wide">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Back to all stories
          </Link>
        </Container>
      </section>
    </>
  );
}
