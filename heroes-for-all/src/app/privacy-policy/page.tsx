import type { Metadata } from "next";
import { Container } from "@/components/ui-brand/container";
import { PageHeader } from "@/components/ui-brand/page-header";
import { BrandButton } from "@/components/ui-brand/button";
import { Reveal } from "@/components/ui-brand/reveal-stagger";
import { contactInfo } from "@/data/navigation";
import { ShieldCheck, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Heroes For All collects, uses, and protects personal information.",
};

const sections = [
  {
    title: "Information We Collect",
    body: [
      "Heroes For All collects information that you provide directly to us through forms on this site — including your name, email address, age, organization, and any message content you submit. We also collect technical information about your visit, such as the pages you view, the time of your visit, and the browser or device you use.",
      "When you make a donation, additional information may be collected by the third-party payment processor used to complete the transaction. Heroes For All does not store full payment card details on its own systems.",
    ],
  },
  {
    title: "How We Use Information",
    body: [
      "We use the information you provide to respond to your inquiries, to process volunteer and membership applications, to communicate about programs and campaigns you have expressed interest in, and to maintain the records required to operate a registered nonprofit organization.",
      "We will not sell or rent your personal information to third parties. We will share information only where required by law, or with service providers who help us operate the site and process forms — under appropriate contractual safeguards.",
    ],
  },
  {
    title: "Cookies",
    body: [
      "This site uses minimal cookies to support basic functionality — such as remembering your theme preference or preserving form state during a session. We do not use cookies for cross-site advertising or third-party tracking.",
      "You can disable cookies in your browser settings. Some site features may not function as intended if cookies are disabled.",
    ],
  },
  {
    title: "Third-Party Services",
    body: [
      "Heroes For All may use third-party services to operate the site and deliver its programs — for example, a payment processor for donations, an email service for newsletters, and a video platform for the video gallery. These services have their own privacy policies, and we encourage you to review them.",
      "Where a donation is made through a third-party platform such as GlobalGiving, the platform's own reporting and privacy terms apply to that transaction.",
    ],
  },
  {
    title: "Data Security",
    body: [
      "Heroes For All takes reasonable technical and organizational measures to protect the information collected through this site. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
      "Access to personal information is limited to members of the executive body and authorized volunteers who require it to perform their roles.",
    ],
  },
  {
    title: "Your Rights",
    body: [
      "You may request access to, correction of, or deletion of the personal information you have provided to Heroes For All. You may also unsubscribe from communications at any time using the link included in each message.",
      "To exercise any of these rights, contact us at the email or postal address listed below.",
    ],
  },
  {
    title: "Contact Us",
    body: [
      `For privacy questions or requests, contact Heroes For All at ${contactInfo.email} or by mail at ${contactInfo.address}.`,
      "A member of the executive body will respond to your request within a reasonable timeframe.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        variant="default"
        eyebrow="Legal"
        title="Privacy Policy."
        description="How Heroes For All collects, uses, and protects the personal information you share with us."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
      >
        <p className="text-sm text-muted-foreground mt-2">
          Last updated: October 2026
        </p>
      </PageHeader>

      <section className="section-spacing">
        <Container size="narrow">
          <div className="flex flex-col gap-10 max-w-3xl mx-auto w-full">
            <Reveal>
              <div className="flex items-start gap-3 rounded-2xl border border-border bg-secondary/40 p-5">
                <ShieldCheck className="h-5 w-5 text-accent shrink-0 mt-0.5" aria-hidden />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  This policy describes how Heroes For All handles personal information
                  collected through this website. It does not cover activity on
                  third-party platforms used for specific programs or donations.
                </p>
              </div>
            </Reveal>

            {sections.map((s, i) => (
              <section key={i} className="flex flex-col gap-4">
                <h2 className="font-heading text-2xl font-bold text-primary">
                  {i + 1}. {s.title}
                </h2>
                {s.body.map((para, j) => (
                  <p
                    key={j}
                    className="text-base text-muted-foreground leading-relaxed"
                  >
                    {para}
                  </p>
                ))}
              </section>
            ))}

            <div className="rounded-2xl border border-border bg-card p-6 flex flex-col gap-3 mt-6">
              <div className="flex items-center gap-2 text-accent">
                <Mail className="h-4 w-4" aria-hidden />
                <span className="label-small">Questions about this policy?</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Contact us at{" "}
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-primary font-medium link-underline"
                >
                  {contactInfo.email}
                </a>
                .
              </p>
              <div className="mt-2">
                <BrandButton href="/contact" variant="outline" size="md">
                  Contact page
                </BrandButton>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
