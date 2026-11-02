import type { Metadata } from "next";
import { Container } from "@/components/ui-brand/container";
import { PageHeader } from "@/components/ui-brand/page-header";
import { SectionHeading } from "@/components/ui-brand/section-heading";
import { BrandBadge } from "@/components/ui-brand/badge";
import { BrandImage } from "@/components/ui-brand/brand-image";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui-brand/reveal-stagger";
import { videoGallery } from "@/data/content";
import { Play, Clock, Youtube, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Video Gallery",
  description:
    "Videos from Heroes For All's programs, events, and partnerships.",
};

// Map each video title to a representative image already in /public/images.
const videoThumbnailByTitle: Record<string, string> = {
  "Camp Abilities Bangladesh — Recap": "/images/programs/camp-abilities.jpg",
  "Paara Utshob — A Neighborhood, Reimagined": "/images/hero/social-paara-utshab.jpg",
  "Heroes For All — Our Story": "/images/programs/building-mindset.jpg",
  "Women's Career Carnival — Highlights": "/images/programs/womens-career-carnival.jpg",
};

export default function VideoGalleryPage() {
  return (
    <>
      <PageHeader
        variant="primary"
        eyebrow="Stories"
        title="Watch the work in motion."
        description="Videos from Camp Abilities, Paara Utshob, the Women's Career Carnival, and the story of how Heroes For All began. Videos will be embedded from the original YouTube channel."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Stories", href: "/news" },
          { label: "Video Gallery" },
        ]}
      />

      {/* Note */}
      <section className="border-b border-border bg-background">
        <Container size="wide" className="py-5">
          <div className="flex items-start gap-3 rounded-2xl border border-dashed border-border bg-secondary/40 p-4">
            <Info className="h-5 w-5 text-accent shrink-0 mt-0.5" aria-hidden />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Videos will be embedded from the official Heroes For All YouTube channel
              once embed links are verified. The cards below link to placeholder pages
              while verification is in progress.
            </p>
          </div>
        </Container>
      </section>

      {/* Gallery */}
      <section className="section-spacing">
        <Container size="wide">
          <Reveal>
            <SectionHeading
              eyebrow="Gallery"
              title="Videos."
              description="Short films, recaps, and highlights from across Heroes For All's work."
            />
          </Reveal>
          <StaggerGroup
            className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-2"
            staggerChildren={0.1}
            as="ul"
          >
            {videoGallery.map((v) => {
              const thumbnail = videoThumbnailByTitle[v.title];
              return (
                <StaggerItem key={v.title} as="li">
                  <a
                    href="#"
                    aria-label="Video coming soon"
                    className="card-hover group flex h-full flex-col gap-4 rounded-2xl border border-border bg-card overflow-hidden"
                  >
                    <div className="relative">
                      {thumbnail ? (
                        <BrandImage
                          src={thumbnail}
                          alt={v.title}
                          aspect="video"
                        />
                      ) : null}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-black/40 backdrop-blur-md ring-1 ring-white/30 transition-transform group-hover:scale-110">
                          <Play className="h-6 w-6 fill-white text-white" aria-hidden />
                        </span>
                      </div>
                      <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-black/40 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur">
                        <Clock className="h-3 w-3" aria-hidden />
                        {v.duration}
                      </span>
                    </div>
                    <div className="flex flex-col gap-2 p-5">
                      <BrandBadge variant="accent">
                        <Youtube className="h-3.5 w-3.5" aria-hidden />
                        Video
                      </BrandBadge>
                      <h3 className="font-heading text-lg font-semibold text-primary leading-tight">
                        {v.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {v.description}
                      </p>
                      <span className="mt-auto text-xs text-muted-foreground italic">
                        Video coming soon
                      </span>
                    </div>
                  </a>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </Container>
      </section>
    </>
  );
}
