import type { Metadata } from "next";
import { Container } from "@/components/ui-brand/container";
import { PageHeader } from "@/components/ui-brand/page-header";
import { SectionHeading } from "@/components/ui-brand/section-heading";
import { BrandBadge } from "@/components/ui-brand/badge";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui-brand/reveal-stagger";
import sourceVideoGallery from "@/data/source-video-gallery.json";

export const metadata: Metadata = {
  title: "Video Gallery",
  description:
    "Videos from Heroes For All's programs, events, and partnerships.",
};

export default function VideoGalleryPage() {
  return (
    <>
      <PageHeader
        variant="primary"
        eyebrow="Stories"
        title="Watch the work in motion."
        description="Videos from Heroes For All's programs, community events, and media coverage."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Stories", href: "/news" },
          { label: "Video Gallery" },
        ]}
      />

      <section className="section-spacing">
        <Container size="wide">
          <Reveal>
            <SectionHeading
              eyebrow="Gallery"
              title="Videos."
              description="Short films, event coverage, and stories from across Heroes For All's work."
            />
          </Reveal>
          <StaggerGroup
            className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-2"
            staggerChildren={0.1}
            as="ul"
          >
            {sourceVideoGallery.map((video) => (
              <StaggerItem key={video.video} as="li">
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card">
                  <video
                    className="aspect-video w-full bg-black object-contain"
                    src={video.video}
                    controls
                    preload="metadata"
                    poster={video.poster}
                    playsInline
                  >
                    Your browser does not support embedded video.
                  </video>
                  <div className="flex flex-col gap-2 p-5">
                    <BrandBadge variant="accent">Heroes For All video</BrandBadge>
                    <h3 className="font-heading text-lg font-semibold leading-tight text-primary">
                      {video.title}
                    </h3>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>
    </>
  );
}
