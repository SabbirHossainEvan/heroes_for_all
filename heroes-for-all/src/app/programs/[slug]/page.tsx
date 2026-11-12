import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui-brand/container";
import { PageHeader } from "@/components/ui-brand/page-header";
import { SectionHeading } from "@/components/ui-brand/section-heading";
import { BrandButton } from "@/components/ui-brand/button";
import { BrandBadge } from "@/components/ui-brand/badge";
import { BrandImage } from "@/components/ui-brand/brand-image";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui-brand/reveal-stagger";
import { programs } from "@/data/content";
import { ArrowRight, Check, Target, ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);
  if (!program) return { title: "Program not found" };
  return {
    title: program.title,
    description: program.excerpt,
  };
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);
  if (!program) notFound();

  const Icon = program.icon;
  const related = programs.filter((p) => p.slug !== program.slug).slice(0, 3);

  return (
    <>
      <PageHeader
        variant="primary"
        eyebrow={program.category}
        title={program.title}
        description={program.excerpt}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Programs", href: "/programs" },
          { label: program.title },
        ]}
      />

      {/* Hero banner */}
      {program.image && (
        <section className="pb-2 pt-4">
          <Container size="wide">
            <Reveal direction="up">
              <BrandImage
                src={program.image}
                alt={program.title}
                aspect="wide"
                className="rounded-3xl"
                priority
              />
            </Reveal>
          </Container>
        </section>
      )}

      {/* Body + sidebar */}
      <section className="section-spacing">
        <Container size="wide">
          <div className="grid gap-10 lg:grid-cols-[2fr_1fr] lg:gap-16 items-start">
            <Reveal direction="right">
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <BrandBadge variant="sage">{program.category}</BrandBadge>
                </div>
                <h2 className="heading-section text-primary">
                  About this program.
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {program.description}
                </p>
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.1}>
              <aside className="lg:sticky lg:top-24 flex flex-col gap-4 rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center gap-2 text-accent">
                  <Target className="h-5 w-5" aria-hidden />
                  <span className="label-small">Program objectives</span>
                </div>
                <ul className="flex flex-col gap-2.5 text-sm text-muted-foreground">
                  {program.objectives.map((o, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" aria-hidden />
                      <span className="leading-relaxed">{o}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-2 flex flex-col gap-2 border-t border-border pt-4">
                  <BrandButton href="/donate" variant="accent" size="md" className="w-full">
                    Support this work
                  </BrandButton>
                  <BrandButton href="/get-involved/volunteer" variant="outline" size="md" className="w-full">
                    Volunteer
                  </BrandButton>
                </div>
              </aside>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Program image gallery */}
      {program.gallery && program.gallery.length > 0 && (
        <section className="section-spacing">
          <Container size="wide">
            <Reveal>
              <SectionHeading
                eyebrow="In pictures"
                title="From the field."
                description="A photo gallery from this program's recent activities."
              />
            </Reveal>
            <StaggerGroup
              className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
              staggerChildren={0.08}
              as="div"
            >
              {program.gallery.map((src, i) => (
                <StaggerItem key={i} as="div">
                  <BrandImage
                    src={src}
                    alt={`${program.title} gallery image ${i + 1}`}
                    aspect="square"
                    className="rounded-2xl"
                  />
                </StaggerItem>
              ))}
            </StaggerGroup>
          </Container>
        </section>
      )}

      {/* Activities */}
      <section className="section-spacing bg-secondary/40">
        <Container size="wide">
          <Reveal>
            <SectionHeading
              eyebrow="What we do"
              title="Activities."
              description="The concrete work that happens under this program — across schools, neighborhoods, partner institutions, and volunteer networks."
            />
          </Reveal>
          <StaggerGroup
            className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
            staggerChildren={0.1}
            as="ol"
          >
            {program.activities.map((a, i) => (
              <StaggerItem
                key={i}
                as="li"
                className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 h-full"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-heading text-sm font-bold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm text-foreground leading-relaxed">{a}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      {/* Related programs */}
      <section className="section-spacing">
        <Container size="wide">
          <Reveal>
            <div className="flex flex-col gap-3 mb-8">
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                Continue exploring
              </span>
              <h2 className="heading-section text-primary">Related programs.</h2>
            </div>
          </Reveal>
          <StaggerGroup
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            staggerChildren={0.1}
            as="ul"
          >
            {related.map((p) => {
              const RelatedIcon = p.icon;
              return (
                <StaggerItem key={p.slug} as="li">
                  <Link
                    href={`/programs/${p.slug}`}
                    className="card-hover group flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-5"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary">
                        <RelatedIcon className="h-4 w-4" aria-hidden />
                      </div>
                      <BrandBadge variant="outline">{p.category}</BrandBadge>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="font-heading text-base font-semibold text-primary leading-tight">
                        {p.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                        {p.excerpt}
                      </p>
                    </div>
                    <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                      View program
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                    </span>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="section-spacing bg-primary text-primary-foreground">
        <Container size="wide" className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-col gap-3 max-w-xl">
            <h2 className="heading-section text-primary-foreground">
              Bring your time, your skills, or your giving to this program.
            </h2>
            <p className="text-base text-primary-foreground/85 leading-relaxed">
              Heroes For All's programs are powered by volunteers, mentors, and donors
              who choose to show up.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <BrandButton href="/donate" variant="accent" size="lg">
              Donate
            </BrandButton>
            <BrandButton
              href="/get-involved/volunteer"
              variant="outline"
              size="lg"
              className="border-white/30 text-primary-foreground hover:bg-white/10"
            >
              Volunteer
            </BrandButton>
          </div>
        </Container>
      </section>

      {/* Back to programs */}
      <section className="py-10">
        <Container size="wide">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Back to all programs
          </Link>
        </Container>
      </section>
    </>
  );
}
