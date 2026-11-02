import Link from "next/link";
import { ArrowRight, Heart, Users2, Briefcase, GraduationCap } from "lucide-react";
import { Container } from "@/components/ui-brand/container";
import { BrandButton } from "@/components/ui-brand/button";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui-brand/reveal-stagger";

const pathways = [
  {
    icon: Users2,
    title: "Volunteer",
    description: "Give your time and skills to on-the-ground programs.",
    href: "/get-involved/volunteer",
  },
  {
    icon: GraduationCap,
    title: "Student Membership",
    description: "For youth aged 13–25 who want to be part of the movement.",
    href: "/get-involved/student-membership",
  },
  {
    icon: Briefcase,
    title: "Corporate Partnership",
    description: "Align your brand with measurable community impact.",
    href: "/get-involved/corporate-partnership",
  },
];

export function FinalCTA() {
  return (
    <section className="relative bg-primary text-primary-foreground overflow-hidden">
      {/* Decorative animated ambient blobs */}
      <div aria-hidden className="absolute inset-0 opacity-25">
        <div className="absolute -top-24 -right-12 h-72 w-72 rounded-full bg-accent/40 blur-3xl animate-soft-pulse" />
        <div className="absolute -bottom-32 -left-12 h-80 w-80 rounded-full bg-secondary/30 blur-3xl animate-soft-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      <Container size="wide" className="relative py-16 md:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[2fr_3fr] lg:gap-16 items-center">
          <Reveal direction="right">
            <div className="flex flex-col gap-5">
              <span className="eyebrow text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                Get Involved
              </span>
              <h2 className="heading-section text-primary-foreground">
                Find your place in the work.
              </h2>
              <p className="text-base md:text-lg text-primary-foreground/85 leading-relaxed">
                Heroes For All is built by young people, mentors, partners, and
                donors. Whatever you bring, there is a door open for you here.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <BrandButton href="/donate" variant="accent" size="lg">
                  <Heart className="h-4 w-4" aria-hidden />
                  Donate
                </BrandButton>
                <BrandButton
                  href="/get-involved"
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-primary-foreground hover:bg-white/10 hover:border-white/60"
                >
                  Explore pathways
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </BrandButton>
              </div>
            </div>
          </Reveal>

          <StaggerGroup
            className="grid gap-4 sm:grid-cols-3"
            staggerChildren={0.12}
            delay={0.15}
            as="div"
          >
            {pathways.map((p) => {
              const Icon = p.icon;
              return (
                <StaggerItem key={p.href} direction="up">
                  <Link
                    href={p.href}
                    className="group flex flex-col gap-4 rounded-2xl border border-white/15 bg-white/5 backdrop-blur p-5 hover:bg-white/10 hover:border-white/25 hover:-translate-y-1 transition-all duration-300 h-full"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="flex flex-col gap-2">
                      <h3 className="font-heading text-base font-semibold text-primary-foreground">
                        {p.title}
                      </h3>
                      <p className="text-sm text-primary-foreground/75 leading-relaxed">
                        {p.description}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-accent group-hover:text-white transition-colors mt-auto">
                      Get started
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
                    </span>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </Container>
    </section>
  );
}
