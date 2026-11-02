import type { Metadata } from "next";
import { Container } from "@/components/ui-brand/container";
import { PageHeader } from "@/components/ui-brand/page-header";
import { SectionHeading } from "@/components/ui-brand/section-heading";
import { BrandButton } from "@/components/ui-brand/button";
import { BrandBadge } from "@/components/ui-brand/badge";
import { Reveal } from "@/components/ui-brand/reveal-stagger";
import { contactInfo, socialLinks } from "@/data/navigation";
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Heroes For All — by email, phone, or mail, or through the contact form.",
};

const socials = [
  { label: "Facebook", href: socialLinks.facebook, icon: Facebook },
  { label: "Instagram", href: socialLinks.instagram, icon: Instagram },
  { label: "YouTube", href: socialLinks.youtube, icon: Youtube },
  { label: "LinkedIn", href: socialLinks.linkedin, icon: Linkedin },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        variant="primary"
        eyebrow="Contact"
        title="Get in touch."
        description="Reach Heroes For All by email, phone, or mail — or through the form below. A member of the executive body will respond."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />

      <section className="section-spacing">
        <Container size="wide">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16 items-start">
            {/* Contact details */}
            <Reveal direction="left">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <BrandBadge variant="accent">Direct</BrandBadge>
                  <SectionHeading
                    eyebrow="Reach us"
                    title="The basics."
                    description="Three ways to reach us directly, plus the social channels where the work is documented."
                  />
                </div>

                <ul className="flex flex-col gap-3">
                  <li>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="card-hover flex items-start gap-4 rounded-2xl border border-border bg-card p-5 hover:border-primary"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                        <Mail className="h-5 w-5" aria-hidden />
                      </span>
                      <span className="flex flex-col gap-1">
                        <span className="label-small text-muted-foreground">Email</span>
                        <span className="font-heading text-base font-semibold text-primary">
                          {contactInfo.email}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`tel:${contactInfo.phone.replace(/[^+\d]/g, "")}`}
                      className="card-hover flex items-start gap-4 rounded-2xl border border-border bg-card p-5 hover:border-primary"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                        <Phone className="h-5 w-5" aria-hidden />
                      </span>
                      <span className="flex flex-col gap-1">
                        <span className="label-small text-muted-foreground">Phone</span>
                        <span className="font-heading text-base font-semibold text-primary">
                          {contactInfo.phone}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                      <MapPin className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="flex flex-col gap-1">
                      <span className="label-small text-muted-foreground">Mailing address</span>
                      <span className="font-heading text-base font-semibold text-primary">
                        {contactInfo.address}
                      </span>
                    </span>
                  </li>
                </ul>

                <div className="flex flex-col gap-3">
                  <span className="label-small text-muted-foreground">Follow the work</span>
                  <div className="flex flex-wrap gap-2">
                    {socials.map((s) => {
                      const Icon = s.icon;
                      return (
                        <a
                          key={s.label}
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="card-hover inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:border-primary hover:bg-primary/5 transition-colors"
                        >
                          <Icon className="h-4 w-4" aria-hidden />
                          {s.label}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Form */}
            <Reveal direction="right" delay={0.1}>
              <div className="rounded-3xl border border-border bg-card p-6 md:p-8">
                <SectionHeading
                  eyebrow="Send a message"
                  title="Write to us."
                  description="Fill in the form and a member of the team will respond within 5 business days."
                />
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-secondary/40">
        <Container size="wide">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 rounded-3xl bg-card border border-border p-8 md:p-12">
            <div className="flex flex-col gap-3 max-w-xl">
              <h2 className="heading-section text-primary">
                Prefer to read first?
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                The FAQ answers the most common questions about Heroes For All,
                student membership, partnerships, and donations.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <BrandButton href="/faq" variant="primary" size="lg">
                Read the FAQ
              </BrandButton>
              <BrandButton href="/about/annual-reports" variant="outline" size="lg">
                Annual Reports
              </BrandButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
