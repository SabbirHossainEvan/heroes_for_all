"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Heart, ArrowRight } from "lucide-react";
import { mainNav, ctaNav } from "@/data/navigation";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui-brand/logo";
import { BrandButton } from "@/components/ui-brand/button";
import { Container } from "@/components/ui-brand/container";

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close mobile nav on route change.
  // We synchronize local UI state (the mobile drawer) with an external
  // system (the Next.js router) — the documented use case for an effect.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Detect scroll for subtle shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    pathname === href || pathname?.startsWith(href + "/");

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-border/60 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85 shadow-sm"
          : "bg-background",
      )}
    >
      <Container size="wide">
        <div className="flex h-[72px] md:h-20 items-center justify-between gap-4">
          <Logo />

          {/* Desktop nav */}
          <nav
            aria-label="Primary"
            className="hidden lg:flex items-center gap-1"
          >
            {mainNav.map((group) => (
              <div key={group.label} className="group relative">
                <Link
                  href={group.href}
                  className={cn(
                    "inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                    isActive(group.href)
                      ? "text-primary bg-secondary/60"
                      : "text-foreground/80 hover:text-primary hover:bg-secondary/40",
                  )}
                >
                  {group.label}
                  {group.children && (
                    <ChevronDown
                      className="h-3.5 w-3.5 opacity-60 transition-transform duration-200 group-hover:rotate-180"
                      aria-hidden
                    />
                  )}
                </Link>
                {group.children && (
                  <div
                    className="invisible absolute left-0 top-full pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100"
                    style={{ transform: "translateY(4px)" }}
                  >
                    <div
                      role="menu"
                      className="w-[320px] rounded-2xl border border-border bg-card p-2 shadow-lg"
                    >
                      {group.children.map((leaf) => (
                        <Link
                          key={leaf.href}
                          href={leaf.href}
                          role="menuitem"
                          className={cn(
                            "block rounded-xl px-4 py-2.5 transition-colors",
                            isActive(leaf.href)
                              ? "bg-secondary text-primary"
                              : "hover:bg-secondary/60 hover:text-primary",
                          )}
                        >
                          <div className="text-sm font-semibold">
                            {leaf.label}
                          </div>
                          {leaf.description && (
                            <div className="mt-0.5 text-xs text-muted-foreground">
                              {leaf.description}
                            </div>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right cluster */}
          <div className="flex items-center gap-2">
            <BrandButton
              href={ctaNav.href}
              variant="accent"
              size="md"
              className="hidden sm:inline-flex"
            >
              <Heart className="h-4 w-4" aria-hidden />
              {ctaNav.label}
            </BrandButton>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-primary hover:bg-secondary/60 transition-colors"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile drawer */}
      <div
        className={cn(
          "lg:hidden fixed inset-x-0 top-[72px] bottom-0 z-40 bg-background transition-all duration-300",
          mobileOpen ? "visible opacity-100" : "invisible opacity-0",
        )}
        aria-hidden={!mobileOpen}
      >
        <Container className="py-6 h-full overflow-y-auto scroll-area-brand">
          <div className="flex flex-col gap-6">
            <nav aria-label="Mobile primary" className="flex flex-col gap-4">
              {mainNav.map((group) => (
                <details
                  key={group.label}
                  className="group border-b border-border pb-3"
                >
                  <summary
                    className={cn(
                      "flex cursor-pointer list-none items-center justify-between py-1.5 text-base font-semibold",
                      isActive(group.href)
                        ? "text-primary"
                        : "text-foreground",
                    )}
                  >
                    {group.label}
                    {group.children && (
                      <ChevronDown
                        className="h-4 w-4 opacity-60 transition-transform group-open:rotate-180"
                        aria-hidden
                      />
                    )}
                  </summary>
                  {group.children && (
                    <div className="mt-2 flex flex-col gap-1">
                      {group.children.map((leaf) => (
                        <Link
                          key={leaf.href}
                          href={leaf.href}
                          className={cn(
                            "rounded-lg px-3 py-2 text-sm transition-colors",
                            isActive(leaf.href)
                              ? "bg-secondary/60 text-primary font-medium"
                              : "text-muted-foreground hover:text-primary hover:bg-secondary/40",
                          )}
                        >
                          {leaf.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </details>
              ))}
            </nav>
            <BrandButton
              href={ctaNav.href}
              variant="accent"
              size="lg"
              className="w-full"
            >
              <Heart className="h-4 w-4" aria-hidden />
              {ctaNav.label} Now
              <ArrowRight className="h-4 w-4" aria-hidden />
            </BrandButton>
          </div>
        </Container>
      </div>
    </header>
  );
}
