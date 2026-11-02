import Link from "next/link";
import { Container } from "@/components/ui-brand/container";
import { Logo } from "@/components/ui-brand/logo";
import { BrandButton } from "@/components/ui-brand/button";
import { PlaceholderImage } from "@/components/ui-brand/placeholder-image";
import { ArrowLeft, Compass, Heart, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center bg-primary text-primary-foreground relative overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-secondary/20 blur-3xl"
      />
      <Container size="wide" className="relative py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16 items-center">
          <div className="flex flex-col gap-6">
            <Logo variant="light" />
            <span className="eyebrow mt-2" style={{ color: "#E8754A" }}>
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
              Error 404
            </span>
            <h1 className="heading-hero text-primary-foreground">
              Page not found.
            </h1>
            <p className="text-base md:text-lg text-primary-foreground/85 leading-relaxed max-w-xl">
              The page you were looking for doesn't exist, may have moved, or is
              pending verification. From here, you can head back home, browse our
              programs, or support the work directly.
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              <BrandButton href="/" variant="accent" size="lg">
                <Home className="h-4 w-4" aria-hidden />
                Back home
              </BrandButton>
              <BrandButton
                href="/programs"
                variant="outline"
                size="lg"
                className="border-white/30 text-primary-foreground hover:bg-white/10"
              >
                <Compass className="h-4 w-4" aria-hidden />
                Browse programs
              </BrandButton>
              <BrandButton
                href="/donate"
                variant="ghost"
                size="lg"
                className="text-primary-foreground hover:bg-white/10"
              >
                <Heart className="h-4 w-4" aria-hidden />
                Donate
              </BrandButton>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors mt-2"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Or contact us about a broken link
            </Link>
          </div>

          <div className="hidden lg:block">
            <PlaceholderImage
              alt="Decorative brand gradient"
              variant="forest"
              aspect="tall"
              className="rounded-3xl"
              icon={<span className="font-heading text-7xl font-bold text-accent">404</span>}
            />
          </div>
        </div>
      </Container>
    </main>
  );
}
