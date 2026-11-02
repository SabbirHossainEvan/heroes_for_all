"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/ui-brand/container";
import { SectionHeading } from "@/components/ui-brand/section-heading";
import { Reveal } from "@/components/ui-brand/reveal-stagger";
import { faqItems } from "@/data/content";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function FaqClient() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return faqItems;
    return faqItems.filter(
      (i) =>
        i.question.toLowerCase().includes(q) ||
        i.answer.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <>
      <section className="border-b border-border bg-background">
        <Container size="wide" className="py-5">
          <div className="relative max-w-xl">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
              aria-hidden
            />
            <Input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search the FAQ…"
              className="pl-9"
              aria-label="Search the FAQ"
            />
          </div>
        </Container>
      </section>

      <section className="section-spacing">
        <Container size="narrow">
          <SectionHeading
            eyebrow="Frequently asked"
            title="Questions, answered."
            description={filtered.length === faqItems.length
              ? "Browse the most common questions about Heroes For All."
              : `Showing ${filtered.length} of ${faqItems.length} questions for "${query}".`}
          />

          {filtered.length === 0 ? (
            <div className="mt-10 rounded-2xl border border-dashed border-border bg-secondary/40 p-8 text-center">
              <p className="text-sm text-muted-foreground">
                No questions match your search. Try a different term, or{" "}
                <a
                  href="/contact"
                  className="text-primary font-medium link-underline"
                >
                  contact us directly
                </a>
                .
              </p>
            </div>
          ) : (
            <Reveal>
              <Accordion
                type="single"
                collapsible
                className="mt-10 w-full border-t border-border"
              >
                {filtered.map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="border-b border-border px-1"
                  >
                    <AccordionTrigger className="text-left font-heading text-base font-semibold text-primary hover:no-underline hover:text-accent transition-colors py-5">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          )}
        </Container>
      </section>
    </>
  );
}
