import type { Metadata } from "next";
import { Container } from "@/components/ui-brand/container";
import { PageHeader } from "@/components/ui-brand/page-header";
import { SectionHeading } from "@/components/ui-brand/section-heading";
import { BrandButton } from "@/components/ui-brand/button";
import { BrandBadge } from "@/components/ui-brand/badge";
import { Reveal } from "@/components/ui-brand/reveal-stagger";
import { partners, type Partner } from "@/data/content";
import { ArrowRight, Building2, GraduationCap, Newspaper, HandHeart } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Partners",
  description:
    "The sponsors, programmatic partners, academic institutions, and media organizations that work alongside Heroes For All.",
};

const categoryConfig: Record<
  Partner["category"],
  { icon: typeof Building2; description: string }
> = {
  Sponsor: {
    icon: Building2,
    description:
      "Corporations and brands whose financial support underwrites our programs and events.",
  },
  Programmatic: {
    icon: HandHeart,
    description:
      "Organizations we deliver programs with — co-designing, co-funding, and co-evaluating the work.",
  },
  Academic: {
    icon: GraduationCap,
    description:
      "Universities and academic institutions that host, mentor, and study our work.",
  },
  Media: {
    icon: Newspaper,
    description:
      "Media partners that help our stories reach a wider audience across Bangladesh and beyond.",
  },
};

const order: Partner["category"][] = ["Sponsor", "Programmatic", "Academic", "Media"];

export default function OurPartnersPage() {
  return (
    <>
      <PageHeader
        variant="primary"
        eyebrow="About Us"
        title="We do not do this alone."
        description="Heroes For All works alongside a network of sponsors, programmatic partners, academic institutions, and media organizations. Each partner brings something the work needs."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about/our-story" },
          { label: "Our Partners" },
        ]}
      />

      {/* Intro */}
      <section className="section-spacing">
        <Container size="wide">
          <Reveal>
            <div className="max-w-3xl flex flex-col gap-5">
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                Partnership
              </span>
              <h2 className="heading-section text-primary">
                A network that makes the work possible.
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                The partners below have supported Heroes For All across programs, campaigns,
                events, and academic exchange. They are listed here in the same four
                categories used on the original site.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Categories */}
      {order.map((cat, idx) => {
        const Icon = categoryConfig[cat].icon;
        const items = partners.filter((p) => p.category === cat);
        const onSage = idx % 2 === 1;
        return (
          <Reveal key={cat} delay={idx * 0.08}>
            <section
              className={`section-spacing ${onSage ? "bg-secondary/40" : ""}`}
            >
              <Container size="wide">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  <BrandBadge variant="accent">
                    <Icon className="h-3.5 w-3.5" aria-hidden />
                    {cat} Partners
                  </BrandBadge>
                  <h2 className="heading-section text-primary">{cat} partners.</h2>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                    {categoryConfig[cat].description}
                  </p>
                </div>

                <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {items.map((p) => (
                    <li
                      key={p.name}
                      className="card-hover flex h-full flex-col justify-between gap-3 rounded-2xl border border-border bg-card p-5"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary">
                        <Icon className="h-5 w-5" aria-hidden />
                      </div>
                      <h3 className="font-heading text-base font-semibold text-primary leading-tight">
                        {p.name}
                      </h3>
                    </li>
                  ))}
                </ul>
              </div>
              </Container>
            </section>
          </Reveal>
        );
      })}

      {/* Partnership invitation */}
      <section className="section-spacing">
        <Container size="wide">
          <div className="rounded-3xl bg-primary text-primary-foreground p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex flex-col gap-3 max-w-xl">
              <BrandBadge variant="white">Become a partner</BrandBadge>
              <h2 className="heading-section text-primary-foreground">
                Bring your organization into the work.
              </h2>
              <p className="text-base text-primary-foreground/85 leading-relaxed">
                Heroes For All partners with corporations, academic institutions, media
                organizations, and programmatic partners. If your organization is aligned
                with our mission, we would like to hear from you.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <BrandButton href="/get-involved/corporate-partnership" variant="accent" size="lg">
                Corporate Partnership
                <ArrowRight className="h-4 w-4" aria-hidden />
              </BrandButton>
              <BrandButton
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white/30 text-primary-foreground hover:bg-white/10"
              >
                Contact Us
              </BrandButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
