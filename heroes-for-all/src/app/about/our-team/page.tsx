import type { Metadata } from "next";
import { Container } from "@/components/ui-brand/container";
import { PageHeader } from "@/components/ui-brand/page-header";
import { SectionHeading } from "@/components/ui-brand/section-heading";
import { BrandAvatar } from "@/components/ui-brand/brand-image";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui-brand/reveal-stagger";
import { teamMembers } from "@/data/content";
import { Facebook, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import { getInitials } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the people behind Heroes For All and the executive team that runs the organization day to day.",
};

export default function OurTeamPage() {
  const founder = teamMembers.find((member) => member.category === "leadership");
  const executives = teamMembers.filter((member) => member.category === "executive");

  return (
    <>
      <PageHeader
        variant="primary"
        eyebrow="About Us"
        title="The people behind the work."
        description="Meet the dedicated people who guide Heroes For All and bring its programs to life."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about/our-story" },
          { label: "Our Team" },
        ]}
      />

      {founder && (
        <section className="section-spacing">
          <Container size="wide">
            <Reveal>
              <article className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
                <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                  <div className="relative min-h-[320px] bg-secondary sm:min-h-[420px]">
                    {founder.image ? (
                      <BrandAvatar
                        src={founder.image}
                        alt={founder.name}
                        className="absolute inset-0 h-full w-full"
                        priority
                        fit="contain"
                      />
                    ) : (
                      <div className="flex h-full min-h-[320px] items-center justify-center bg-gradient-to-br from-primary to-primary-dark">
                        <span className="font-heading text-6xl font-bold text-accent">
                          {getInitials(founder.name)}
                        </span>
                      </div>
                    )}
                    <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary shadow-sm">
                      Founder &amp; President
                    </span>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-5 p-6 text-center sm:p-10 lg:p-12">
                    <p className="eyebrow">Leadership</p>
                    <div className="space-y-2">
                      <h2 className="font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                        {founder.name}
                      </h2>
                      <p className="text-base font-medium text-accent">{founder.role}</p>
                    </div>
                    {founder.bio && (
                      <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
                        {founder.bio}
                      </p>
                    )}
                    <div className="flex w-full flex-col items-center gap-4">
                      {founder.email && (
                        <a
                          href={`mailto:${founder.email}`}
                          className="inline-flex min-w-0 items-center justify-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                        >
                          <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                          <span className="break-all">{founder.email}</span>
                        </a>
                      )}
                      <MemberSocialIcons memberName={founder.name} />
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          </Container>
        </section>
      )}

      <section className="section-spacing bg-secondary/40">
        <Container size="wide">
          <Reveal>
            <SectionHeading
              eyebrow="Executive Body"
              title="The team that runs the work."
              description="A dedicated team bringing together operations, finance, communications, technology, and community affairs."
            />
          </Reveal>
          <StaggerGroup
            className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            staggerChildren={0.06}
            as="ul"
          >
            {executives.map((member) => (
              <StaggerItem key={member.name} as="li" className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg">
                  <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                    {member.image ? (
                      <BrandAvatar
                        src={member.image}
                        alt={member.name}
                        className="absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-[1.03]"
                        fit="contain"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary to-primary-dark">
                        <span className="font-heading text-4xl font-bold text-accent">
                          {getInitials(member.name)}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col items-center p-5 text-center">
                    <div className="min-h-[72px] w-full">
                      <h3 className="font-heading text-lg font-semibold leading-snug text-primary">
                        {member.name}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-accent">{member.role}</p>
                    </div>
                    <div className="mt-4 flex w-full flex-1 flex-col items-center justify-end gap-3 border-t border-border pt-3">
                      {member.email ? (
                        <a
                          href={`mailto:${member.email}`}
                          className="inline-flex min-w-0 items-center justify-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                        >
                          <Mail className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                          <span className="break-all">{member.email}</span>
                        </a>
                      ) : <div className="h-5" />}
                      <MemberSocialIcons memberName={member.name} />
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <p className="mt-6 text-center text-xs text-muted-foreground">
            Social profile links will be added soon.
          </p>
        </Container>
      </section>
    </>
  );
}

function MemberSocialIcons({ memberName }: { memberName: string }) {
  const icons = [
    { label: "Facebook", Icon: Facebook },
    { label: "Twitter", Icon: Twitter },
    { label: "LinkedIn", Icon: Linkedin },
    { label: "Instagram", Icon: Instagram },
  ];

  return (
    <div role="group" aria-label={`${memberName} social media`} className="flex w-full items-center justify-center gap-2">
      {icons.map(({ label, Icon }) => (
        <span
          key={label}
          role="img"
          aria-label={`${label} profile link coming soon`}
          title={`${label} link coming soon`}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-muted-foreground"
        >
          <Icon className="h-4 w-4" aria-hidden="true" />
        </span>
      ))}
    </div>
  );
}
