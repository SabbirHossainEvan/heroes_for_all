"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Heart,
  Pause,
  Play,
  Sparkles,
} from "lucide-react";

const slides = [
  {
    eyebrow: "Warriors of Change",
    title: (
      <>
        Building a generation of conscious, purposeful{" "}
        <span className="text-accent">global citizens.</span>
      </>
    ),
    description:
      "Heroes For All supports children and youth to realize their fullest potential through education, civic engagement, and cross-cultural collaboration.",
    image: "/images/hero/social-building-mindset.jpg",
    imageAlt: "Young people taking part in a Heroes For All mindset-building activity",
    imagePosition: "center 42%",
    imageLabel: "Purpose starts with possibility",
  },
  {
    eyebrow: "Inclusive sports — Camp Abilities",
    title: (
      <>
        Every young person deserves the chance to{" "}
        <span className="text-accent">thrive.</span>
      </>
    ),
    description:
      "Camp Abilities Bangladesh brings children with visual impairments together with trained student counselors for inclusive sports, confidence, and connection.",
    image: "/images/programs/source/camp-abilities-bangladesh/gallery_camp-abilities-3.jpg",
    imageAlt: "A Camp Abilities Bangladesh participant running during an inclusive sports activity",
    imagePosition: "center 42%",
    imageLabel: "Camp Abilities Bangladesh",
  },
  {
    eyebrow: "Community — Paara Utshob",
    title: (
      <>
        Stronger communities begin when we{" "}
        <span className="text-accent">come together.</span>
      </>
    ),
    description:
      "Through community programs and creative spaces, Heroes For All helps neighbors connect, share ideas, and take part in local life.",
    image: "/images/hero/social-paara-utshab.jpg",
    imageAlt: "Community members gathered at a Paara Utshob neighborhood festival",
    imagePosition: "center 48%",
    imageLabel: "Paara Utshob",
  },
];

slides.push({
  eyebrow: "Community — Paara Utshob",
  title: <>Paara Utshob is back.</>,
  description: "Stay tuned for details.",
  image: "/Untitled-1.png",
  imageAlt: "Paara Utshob is back. Stay tuned for details.",
  imagePosition: "center",
  imageLabel: "Paara Utshob is back",
});

const AUTOPLAY_DELAY = 7000;

export function HeroSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [focused, setFocused] = useState(false);
  const reduceMotion = useReducedMotion();
  const slide = slides[active];
  const isBanner = slide.image === "/Untitled-1.png";

  useEffect(() => {
    if (paused || focused) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, AUTOPLAY_DELAY);

    return () => window.clearInterval(timer);
  }, [paused, focused]);

  const changeSlide = (index: number) => {
    setActive((index + slides.length) % slides.length);
  };

  return (
    <section
      className={`relative isolate flex w-full overflow-hidden ${isBanner ? "min-h-[260px] bg-[#fff9e8] text-primary sm:min-h-[380px] md:min-h-[560px]" : "min-h-[680px] bg-primary text-white md:min-h-[720px]"}`}
      role="region"
      aria-roledescription="carousel"
      aria-label="Heroes For All highlights"
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setFocused(false);
        }
      }}
    >
      {/* Full-bleed slide backgrounds */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <AnimatePresence initial={false}>
          <motion.div
            key={slide.image}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: reduceMotion || isBanner ? 1 : 1.035 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0.15 : 0.85, ease: "easeOut" }}
          >
            <Image
              src={slide.image}
              alt=""
              fill
              priority={active === 0}
              sizes="100vw"
              className={isBanner ? "object-contain" : "object-cover"}
              style={{ objectPosition: slide.imagePosition }}
            />
          </motion.div>
        </AnimatePresence>
        {!isBanner && <>
          <div className="absolute inset-0 bg-primary/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#102F28]/95 via-[#102F28]/75 to-[#102F28]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#102F28]/75 via-transparent to-[#102F28]/10" />
        </>}
      </div>

      {!isBanner && <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-center px-5 pb-36 pt-20 sm:px-8 md:pb-40 lg:px-12">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active}
              initial={{ opacity: 0, x: reduceMotion ? 0 : 28 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: reduceMotion ? 0 : -18 }}
              transition={{ duration: reduceMotion ? 0.12 : 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-sm backdrop-blur-md sm:text-sm">
                <Sparkles className="h-4 w-4 text-accent" aria-hidden="true" />
                {slide.eyebrow}
              </span>

              <h1 className="mt-7 max-w-3xl font-heading text-4xl font-bold leading-[1.04] tracking-[-0.035em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
                {slide.title}
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg md:text-xl">
                {slide.description}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/donate"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/15 transition-all hover:-translate-y-0.5 hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                >
                  <Heart className="h-4 w-4" aria-hidden="true" />
                  Donate Now
                </Link>
                <Link
                  href="/programs"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/50 bg-white/10 px-6 py-3 text-sm font-semibold text-white shadow-sm backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                >
                  Explore Programs
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>}

      {!isBanner && <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#102F28]/80 to-transparent" />}

      <div className="absolute inset-x-0 bottom-0">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-5 pb-6 sm:px-8 sm:pb-8 lg:flex-row lg:items-end lg:justify-between lg:px-12">
          <div className={`flex items-center gap-3 ${isBanner ? "rounded-full bg-primary/90 px-3 py-2 text-white shadow-lg" : ""}`} role="group" aria-label="Slide controls">
            <button
              type="button"
              onClick={() => changeSlide(active - 1)}
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/35 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Previous slide"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            </button>

            <div className="flex items-center gap-2" role="group" aria-label="Choose a slide">
              {slides.map((item, index) => (
                <button
                  key={item.imageLabel}
                  type="button"
                  onClick={() => changeSlide(index)}
                  aria-label={`Show slide ${index + 1}: ${item.imageLabel}`}
                  aria-current={index === active ? "true" : undefined}
                  className={`h-2.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary ${
                    index === active
                      ? "w-9 bg-accent"
                      : "w-2.5 bg-white/60 hover:bg-white"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => changeSlide(active + 1)}
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/35 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Next slide"
            >
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>

            <span className="min-w-[4.5rem] text-sm font-medium tabular-nums text-white/85" aria-live="polite">
              {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </span>

            {!reduceMotion && (
              <button
                type="button"
                onClick={() => setPaused((value) => !value)}
                aria-label={paused ? "Play slides" : "Pause slides"}
                aria-pressed={paused}
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white/90 transition-colors hover:bg-white/15 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                {paused ? (
                  <Play className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <Pause className="h-4 w-4" aria-hidden="true" />
                )}
              </button>
            )}
          </div>

          <p className={`hidden text-sm font-medium lg:block ${isBanner ? "text-primary" : "text-white/80"}`}>
            {slide.imageLabel}
          </p>
        </div>
      </div>
    </section>
  );
}
