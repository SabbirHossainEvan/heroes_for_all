"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Heart, Pause, Play, Sparkles } from "lucide-react";
import { Container } from "@/components/ui-brand/container";

const slides = [
  {
    eyebrow: "Warriors of Change",
    title: <>Building a generation of conscious, purposeful <span className="text-accent">global citizens.</span></>,
    description:
      "Heroes For All supports children and youth to realize their fullest potential through education, civic engagement, and cross-cultural collaboration.",
    image: "/images/hero/social-building-mindset.jpg",
    alt: "Young people taking part in a Heroes For All mindset-building activity",
    imageLabel: "Building mindset",
  },
  {
    eyebrow: "Inclusive sports · Camp Abilities",
    title: <>Every young person deserves the chance to <span className="text-accent">thrive.</span></>,
    description:
      "Camp Abilities Bangladesh brings children with visual impairments together with trained student counselors for inclusive sports, confidence, and connection.",
    image: "/images/hero/social-camp-abilities.jpg",
    alt: "Participants at a Camp Abilities Bangladesh activity",
    imageLabel: "Camp Abilities Bangladesh",
  },
  {
    eyebrow: "Community · Paara Utshob",
    title: <>Stronger communities begin when we <span className="text-accent">come together.</span></>,
    description:
      "Through community programs and creative spaces, Heroes For All helps neighbors connect, share ideas, and take part in local life.",
    image: "/images/hero/social-paara-utshab.jpg",
    alt: "Community members gathered at a Paara Utshob neighborhood festival",
    imageLabel: "Paara Utshob",
  },
];

const AUTOPLAY_DELAY = 6500;

export function HeroSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const reduceMotion = useReducedMotion();
  const slide = slides[active];

  useEffect(() => {
    if (paused || hovered || focused || reduceMotion) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, AUTOPLAY_DELAY);
    return () => window.clearInterval(timer);
  }, [paused, hovered, focused, reduceMotion]);

  const changeSlide = (index: number) => {
    setActive((index + slides.length) % slides.length);
  };

  return (
    <section
      className="relative overflow-hidden bg-background"
      aria-label="Heroes For All highlights"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setFocused(false);
      }}
    >
      <div aria-hidden className="absolute -top-32 -right-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      <div aria-hidden className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-secondary blur-3xl" />

      <Container size="wide" className="relative py-12 md:py-20 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="flex min-h-[430px] max-w-xl flex-col justify-center md:min-h-[470px]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active}
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 36 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: -24 }}
                transition={{ duration: reduceMotion ? 0.15 : 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="eyebrow">
                  <Sparkles className="h-3.5 w-3.5" aria-hidden />
                  {slide.eyebrow}
                </span>
                <h1 className="heading-hero mt-6 text-primary">{slide.title}</h1>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                  {slide.description}
                </p>
                <div className="mt-7 flex flex-col gap-3 pt-1 sm:flex-row">
                  <Link
                    href="/donate"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-sm transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                  >
                    <Heart className="h-4 w-4" aria-hidden />
                    Donate Now
                  </Link>
                  <Link
                    href="/programs"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                  >
                    Explore Programs
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex items-center gap-3" aria-label="Slide controls">
              <button
                type="button"
                onClick={() => changeSlide(active - 1)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-primary transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label="Previous slide"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden />
              </button>
              <div className="flex items-center gap-2" role="group" aria-label="Choose a slide">
                {slides.map((item, index) => (
                  <button
                    key={item.image}
                    type="button"
                    onClick={() => changeSlide(index)}
                    aria-label={`Show slide ${index + 1}: ${item.imageLabel}`}
                    aria-current={index === active ? "true" : undefined}
                    className={`h-2.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${index === active ? "w-8 bg-accent" : "w-2.5 bg-primary/25 hover:bg-primary/50"}`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => changeSlide(active + 1)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-primary transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label="Next slide"
              >
                <ArrowRight className="h-4 w-4" aria-hidden />
              </button>
              <span className="ml-1 text-xs tabular-nums text-muted-foreground" aria-live="polite">
                {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
              </span>
              {!reduceMotion && (
                <button
                  type="button"
                  onClick={() => setPaused((value) => !value)}
                  className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  aria-label={paused ? "Play slides" : "Pause slides"}
                >
                  {paused ? <Play className="h-4 w-4" aria-hidden /> : <Pause className="h-4 w-4" aria-hidden />}
                </button>
              )}
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[5/4] overflow-hidden rounded-3xl bg-secondary shadow-xl ring-1 ring-black/5">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={slide.image}
                  className="absolute inset-0"
                  initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 48 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: -32 }}
                  transition={{ duration: reduceMotion ? 0.15 : 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    priority={active === 0}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-primary/65 via-transparent to-transparent" />
                  <p className="absolute bottom-5 left-5 rounded-full border border-white/25 bg-black/25 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
                    {slide.imageLabel}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="absolute -bottom-4 -left-2 max-w-[210px] rounded-2xl border border-border bg-card p-4 shadow-lg sm:-left-6">
              <p className="font-heading text-2xl font-bold text-primary">10,000+</p>
              <p className="mt-0.5 text-xs text-muted-foreground">youth projected to be reached by our next strategic phase</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
