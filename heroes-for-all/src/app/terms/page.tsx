import type { Metadata } from "next";
import { Container } from "@/components/ui-brand/container";
import { PageHeader } from "@/components/ui-brand/page-header";
import { BrandButton } from "@/components/ui-brand/button";
import { Reveal } from "@/components/ui-brand/reveal-stagger";
import { contactInfo } from "@/data/navigation";
import { FileText, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms and conditions that govern your use of the Heroes For All website.",
};

const sections = [
  {
    title: "Acceptance of Terms",
    body: [
      "By accessing and using this website, you accept and agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use the site.",
      "Heroes For All may update these terms from time to time. Continued use of the site after changes are posted constitutes acceptance of the updated terms.",
    ],
  },
  {
    title: "Use of Website",
    body: [
      "You agree to use this website for lawful purposes only. You will not use the site in any way that could damage, disable, or impair the site, or interfere with any other party's use of the site.",
      "You will not attempt to gain unauthorized access to any part of the site, its systems, or the data it processes.",
    ],
  },
  {
    title: "Intellectual Property",
    body: [
      "All content on this site — including text, graphics, logos, images, and software — is the property of Heroes For All or its content contributors and is protected by applicable intellectual property laws.",
      "You may share, reproduce, or adapt content from this site for non-commercial, educational, or awareness purposes with attribution to Heroes For All. For any other use, please contact us for permission.",
    ],
  },
  {
    title: "Donations",
    body: [
      "Donations made through this site are processed by a third-party payment provider. Heroes For All is described in its founding documents as a non-profitable, non-political, and charitable organization. For specific tax-deductibility confirmation, please contact us directly.",
      "Donations are directed to the campaign or program selected at the time of giving. Where a campaign has reached its goal, additional gifts may be redirected to the broader work of the organization.",
      "Heroes For All publishes annual reports summarizing its programs, partnerships, and finances for transparency.",
    ],
  },
  {
    title: "Limitation of Liability",
    body: [
      "This website is provided on an as-is and as-available basis. Heroes For All does not warrant that the site will be uninterrupted, error-free, or free of harmful components.",
      "To the fullest extent permitted by law, Heroes For All will not be liable for any direct, indirect, incidental, or consequential damages arising from your use of, or inability to use, this site.",
    ],
  },
  {
    title: "Governing Law",
    body: [
      "These terms are governed by the laws of the jurisdictions in which Heroes For All is registered and operates. Any disputes arising from these terms or your use of the site will be handled in accordance with those laws.",
      "For specific legal or governance questions, please contact us directly.",
    ],
  },
  {
    title: "Changes to Terms",
    body: [
      "Heroes For All may revise these Terms & Conditions at any time. The most current version will always be posted on this page, with the last-updated date shown above.",
      "We encourage you to review this page periodically to stay informed of any updates.",
    ],
  },
  {
    title: "Contact",
    body: [
      `For questions about these Terms & Conditions, contact Heroes For All at ${contactInfo.email} or by mail at ${contactInfo.address}.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHeader
        variant="default"
        eyebrow="Legal"
        title="Terms & Conditions."
        description="The terms that govern your use of the Heroes For All website."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Terms & Conditions" },
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
                <FileText className="h-5 w-5 text-accent shrink-0 mt-0.5" aria-hidden />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Please read these terms carefully before using the Heroes For All
                  website. By using the site, you agree to be bound by them.
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
                <span className="label-small">Questions about these terms?</span>
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
