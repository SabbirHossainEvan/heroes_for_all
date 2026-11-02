import type { Metadata } from "next";
import { Container } from "@/components/ui-brand/container";
import { PageHeader } from "@/components/ui-brand/page-header";
import { BrandButton } from "@/components/ui-brand/button";
import { ArrowRight } from "lucide-react";
import { FaqClient } from "./faq-client";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Heroes For All — programs, partnerships, donations, and how to get involved.",
};

export default function FaqPage() {
  return (
    <>
      <PageHeader
        variant="primary"
        eyebrow="Resources"
        title="Frequently asked questions."
        description="The most common questions about Heroes For All, its programs, partnerships, and donations. Can't find your answer? Use the contact form."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "FAQ" },
        ]}
      />

      <FaqClient />

      {/* CTA */}
      <section className="section-spacing bg-secondary/40">
        <Container size="wide">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 rounded-3xl bg-card border border-border p-8 md:p-12">
            <div className="flex flex-col gap-3 max-w-xl">
              <h2 className="heading-section text-primary">
                Still have a question?
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                If you can't find the answer here, reach out and a member of the team
                will respond.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <BrandButton href="/contact" variant="primary" size="lg">
                Contact Us
                <ArrowRight className="h-4 w-4" aria-hidden />
              </BrandButton>
              <BrandButton href="/get-involved" variant="outline" size="lg">
                Get Involved
              </BrandButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
