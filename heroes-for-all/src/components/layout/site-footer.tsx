import Link from "next/link";
import { Facebook, Instagram, Youtube, Linkedin, Mail, Phone, MapPin, Heart, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui-brand/container";
import { Logo } from "@/components/ui-brand/logo";
import { footerNav, legalNav, contactInfo, socialLinks } from "@/data/navigation";

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-primary text-primary-foreground">
      <Container size="wide" className="py-14 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-6 lg:gap-8">
          {/* Brand block */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <Logo variant="light" className="w-full justify-center" />
            <p className="text-sm leading-relaxed text-primary-foreground/80 max-w-sm">
              A youth-focused nonprofit building conscious, purposeful, and
              engaged global citizens through education, community engagement,
              and cross-cultural collaboration.
            </p>
            <ul className="flex flex-col gap-2 text-sm text-primary-foreground/85">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-accent shrink-0" aria-hidden />
                <span>{contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent shrink-0" aria-hidden />
                <a href={`tel:${contactInfo.phone.replace(/[^\d+]/g, "")}`} className="hover:text-white transition-colors">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent shrink-0" aria-hidden />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
                  {contactInfo.email}
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-3 pt-2">
              <SocialIcon href={socialLinks.facebook} label="Facebook"><Facebook className="h-4 w-4" /></SocialIcon>
              <SocialIcon href={socialLinks.instagram} label="Instagram"><Instagram className="h-4 w-4" /></SocialIcon>
              <SocialIcon href={socialLinks.youtube} label="YouTube"><Youtube className="h-4 w-4" /></SocialIcon>
              <SocialIcon href={socialLinks.linkedin} label="LinkedIn"><Linkedin className="h-4 w-4" /></SocialIcon>
            </div>
          </div>

          {/* Link columns */}
          {footerNav.map((col) => (
            <div key={col.label} className="flex flex-col gap-3">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/60">
                {col.label}
              </h3>
              <ul className="flex flex-col gap-2">
                {col.children?.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-primary-foreground/85 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Donation strip */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3 text-sm text-primary-foreground/85">
            <Heart className="h-4 w-4 text-accent" aria-hidden />
            <span>Your support makes our work possible.</span>
          </div>
          <Link
            href="/donate"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-white transition-colors"
          >
            Become a monthly giver
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <Container size="wide" className="py-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-primary-foreground/60">{contactInfo.copyright}</p>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-primary-foreground/70">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </footer>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-primary-foreground/85 hover:bg-accent hover:border-accent hover:text-white transition-all"
    >
      {children}
    </a>
  );
}
