import Link from "next/link";
import { ArrowRight, Sparkles, Heart } from "lucide-react";
import { Container } from "@/components/ui-brand/container";
import { BrandButton } from "@/components/ui-brand/button";
import { BrandImage } from "@/components/ui-brand/brand-image";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui-brand/reveal-stagger";
import { heroQuotes } from "@/data/content";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* subtle decorative shape, animated */}
      <div
        aria-hidden
        className="absolute -top-32 -right-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl animate-pulse"
        style={{ animationDuration: "6s" }}
      />
      <div
        aria-hidden
        className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-secondary blur-3xl"
      />

      <Container size="wide" className="relative py-12 md:py-20 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Text column */}
          <StaggerGroup
            className="flex flex-col gap-6 max-w-xl"
            staggerChildren={0.12}
            delay={0.05}
            as="div"
          >
            <StaggerItem>
              <span className="eyebrow">
                <Sparkles className="h-3.5 w-3.5" aria-hidden />
                Warriors of Change
              </span>
            </StaggerItem>
            <StaggerItem>
              <h1 className="heading-hero text-primary">
                Building a generation of conscious, purposeful{" "}
                <span className="text-accent">global citizens.</span>
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Heroes For All is a youth-focused nonprofit working across
                Bangladesh and beyond. We help young people realize their fullest
                potential through education, community engagement, and
                cross-cultural collaboration.
              </p>
            </StaggerItem>

            <StaggerItem>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <BrandButton href="/donate" variant="accent" size="lg">
                  <Heart className="h-4 w-4" aria-hidden />
                  Donate Now
                </BrandButton>
                <BrandButton href="/programs" variant="outline" size="lg">
                  Explore Programs
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </BrandButton>
              </div>
            </StaggerItem>

            {/* Mission quote */}
            <StaggerItem>
              <figure className="mt-4 border-l-2 border-accent/60 pl-4">
                <blockquote className="text-sm md:text-base text-foreground/80 italic leading-relaxed">
                  {heroQuotes[0]}
                </blockquote>
              </figure>
            </StaggerItem>
          </StaggerGroup>

          {/* Image column */}
          <Reveal direction="left" duration={0.8} delay={0.2} className="relative">
            <div className="relative grid grid-cols-6 grid-rows-6 gap-3 aspect-[5/5] sm:aspect-[6/5]">
              <BrandImage
                src="/images/hero/social-camp-abilities.jpg"
                alt="Youth volunteers at a Heroes For All community event in Bangladesh"
                priority
                aspect="auto"
                className="col-span-4 row-span-4 rounded-3xl"
              />
              <BrandImage
                src="/images/hero/social-paara-utshab.jpg"
                alt="Students gathered around a knowledge session"
                aspect="auto"
                className="col-span-2 row-span-3 rounded-3xl"
              />
              <BrandImage
                src="/images/hero/social-shafat-memorial-school.jpg"
                alt="A neighborhood festival reclaiming public space"
                aspect="auto"
                className="col-span-2 row-span-3 rounded-3xl"
              />
              <BrandImage
                src="/images/hero/social-building-mindset.jpg"
                alt="Children at Camp Abilities Bangladesh"
                aspect="auto"
                className="col-span-4 row-span-2 rounded-3xl"
              />
            </div>

            {/* Floating stat — gentle bob */}
            <div
              className="absolute -bottom-4 -left-2 sm:-left-6 bg-card border border-border rounded-2xl p-4 shadow-md max-w-[200px] animate-float"
            >
              <p className="text-2xl font-bold text-primary font-heading">10,000+</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                youth projected to be reached by our next strategic phase
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
