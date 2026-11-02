import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui-brand/container";
import { PageHeader } from "@/components/ui-brand/page-header";
import { SectionHeading } from "@/components/ui-brand/section-heading";
import { BrandButton } from "@/components/ui-brand/button";
import { BrandBadge } from "@/components/ui-brand/badge";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui-brand/reveal-stagger";
import { upcomingEvents } from "@/data/content";
import { formatDate } from "@/lib/utils";
import { CalendarDays, MapPin, ArrowRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Upcoming Events",
  description:
    "Upcoming Heroes For All events and activities — across Bangladesh and the wider network.",
};

const statusLabel: Record<string, string> = {
  open: "Open registration",
  closed: "Registration closed",
  invite: "Invite only",
};

export default function EventsPage() {
  return (
    <>
      <PageHeader
        variant="primary"
        eyebrow="Events"
        title="Upcoming Events & activities."
        description="The next events on the Heroes For All calendar — knowledge sessions, the next Camp Abilities, Paara Utshob, and more."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Events" },
        ]}
      />

      {/* Upcoming events */}
      <section className="section-spacing">
        <Container size="wide">
          <Reveal>
            <SectionHeading
              eyebrow="Upcoming"
              title="What's next."
              description="Register interest or join us at one of the events below. Where registration is open, the event is accepting participants."
            />
          </Reveal>
          <StaggerGroup
            className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            staggerChildren={0.12}
            as="ul"
          >
            {upcomingEvents.map((e, i) => (
              <StaggerItem
                key={`${e.title}-${i}`}
                as="li"
                className="card-hover flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 rounded-xl bg-primary text-primary-foreground px-3 py-1.5 flex-col items-start gap-0">
                    <span className="text-[10px] font-semibold uppercase tracking-wider opacity-80">
                      {new Date(e.date).toLocaleDateString("en-US", { month: "short" })}
                    </span>
                    <span className="font-heading text-lg font-bold leading-none">
                      {new Date(e.date).getDate()}
                    </span>
                  </span>
                  <BrandBadge variant={e.status === "open" ? "sage" : "outline"}>
                    <Clock className="h-3 w-3" aria-hidden />
                    {statusLabel[e.status] ?? e.status}
                  </BrandBadge>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-heading text-lg font-semibold text-primary leading-tight">
                    {e.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {e.description}
                  </p>
                </div>
                <div className="mt-auto flex flex-col gap-1.5 text-sm text-muted-foreground border-t border-border pt-4">
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-accent" aria-hidden />
                    {formatDate(e.date)}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-accent" aria-hidden />
                    {e.location}
                  </span>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent transition-colors"
                >
                  Register interest
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      {/* Past events */}
      <section className="section-spacing bg-secondary/40">
        <Container size="wide">
          <Reveal>
            <div className="rounded-2xl border border-dashed border-border bg-background p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex flex-col gap-3 max-w-2xl">
                <BrandBadge variant="outline">Looking back</BrandBadge>
                <h2 className="heading-section text-primary">
                  Past events.
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Past events are documented in the news section — recaps of Paara
                  Utshob, the Women's Career Carnival, COVID-19 relief, and prior editions
                  of Camp Abilities.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <BrandButton href="/news" variant="primary" size="lg">
                  Read past stories
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </BrandButton>
                <BrandButton href="/news/video-gallery" variant="outline" size="lg">
                  Video Gallery
                </BrandButton>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
