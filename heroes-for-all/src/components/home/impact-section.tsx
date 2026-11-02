import { Container } from "@/components/ui-brand/container";
import { SectionHeading } from "@/components/ui-brand/section-heading";
import { Reveal, StaggerGroup, StaggerItem, AnimatedCounter } from "@/components/ui-brand/reveal-stagger";
import { impactStats, impactDisclaimer } from "@/data/content";

export function ImpactSection() {
  return (
    <section className="bg-primary text-primary-foreground py-16 md:py-20 lg:py-24">
      <Container size="wide">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16 items-start">
          <Reveal direction="right">
            <div className="flex flex-col gap-4">
              <span className="eyebrow text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                Projected Targets
              </span>
              <h2 className="heading-section text-primary-foreground">
                The scale we are building toward.
              </h2>
              <p className="text-sm text-primary-foreground/80 leading-relaxed">
                These are the targets we have set for our next strategic phase —
                the scope of impact our community of volunteers, partners, and
                donors makes possible.
              </p>
            </div>
          </Reveal>

          <StaggerGroup
            className="grid grid-cols-2 gap-px bg-white/10 rounded-2xl overflow-hidden"
            staggerChildren={0.15}
            as="div"
          >
            {impactStats.map((stat) => (
              <StaggerItem
                key={stat.label}
                className="bg-primary p-6 md:p-8 flex flex-col gap-1"
                direction="scale"
              >
                <div className="flex items-baseline gap-1">
                  <AnimatedCounter
                    value={stat.value}
                    className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary-foreground"
                  />
                  {stat.suffix && (
                    <span className="text-accent text-2xl md:text-3xl font-bold">
                      {stat.suffix}
                    </span>
                  )}
                </div>
                <p className="text-sm text-primary-foreground/75 mt-1">
                  {stat.label}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>

        <Reveal delay={0.3}>
          <p className="mt-8 text-xs text-primary-foreground/55 max-w-2xl">
            {impactDisclaimer}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
