# Heroes For All — Next.js Website

A complete, modern rebuild of [heroesforall.org](https://heroesforall.org/) using **Next.js 16 (App Router)**, **TypeScript 5**, **Tailwind CSS 4**, and the shadcn/ui component library. Premium nonprofit editorial design with a custom brand palette (Deep Forest Green, Warm Ivory, Warm Coral, Sage Green, Charcoal).

## Quick start

```bash
# Install dependencies
bun install

# Start the dev server (Next.js 16, port 3000)
bun run dev

# Lint
bun run lint

# Production build (uses standalone output)
bun run build
bun run start
```

The dev server runs on http://localhost:3000 automatically.

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript 5 (strict) |
| Styling | Tailwind CSS 4 |
| Components | shadcn/ui (New York) + custom brand components |
| Icons | lucide-react |
| Forms | react-hook-form + zod resolver |
| Animations | framer-motion (subtle section reveals, dropdown transitions) |
| SEO | Next.js Metadata API + sitemap.ts + robots.ts |
| Fonts | Manrope (headings) + Inter (body) via `next/font/google` |

## Brand design system

Defined in `src/app/globals.css` as CSS variables and mapped into Tailwind theme tokens.

| Token | Hex | Usage |
|---|---|---|
| `--color-brand-primary` | `#173F35` | Deep Forest Green — headings, primary buttons, footer |
| `--color-brand-primary-dark` | `#102F28` | Hover state for primary |
| `--color-brand-background` | `#F8F5EE` | Warm Ivory — main page background |
| `--color-brand-accent` | `#E8754A` | Warm Coral — CTAs, highlights |
| `--color-brand-sage` | `#E6EDE5` | Sage Green — secondary backgrounds |
| `--color-brand-charcoal` | `#252B28` | Body text |
| `--color-brand-white` | `#FFFFFF` | Cards, forms, contrast |
| `--color-brand-muted` | `#66716B` | Muted text |
| `--color-brand-border` | `#E4E5DF` | Borders |

Typography utilities: `.heading-hero`, `.heading-page`, `.heading-section`, `.heading-card`, `.body-base`, `.body-lg`, `.eyebrow`, `.label-small`.

Layout utilities: `.container-brand` (max-w-1280), `.container-wide` (max-w-1440), `.section-spacing` (py-16 md:py-24 lg:py-28).

## Project structure

```
src/
  app/
    layout.tsx                  # Root layout with SiteHeader + SiteFooter
    page.tsx                   # Homepage
    globals.css                # Design tokens + base styles
    not-found.tsx              # Custom 404
    sitemap.ts                 # XML sitemap
    robots.ts                  # robots.txt
    about/
      our-story/page.tsx
      strategic-direction/page.tsx
      our-team/page.tsx
      board-members/page.tsx
      our-partners/page.tsx
      annual-reports/page.tsx
    programs/
      page.tsx                 # Programs listing
      [slug]/page.tsx          # Program detail (generateStaticParams)
    news/
      page.tsx                 # News listing
      [slug]/page.tsx          # Article detail
      press-releases/page.tsx
      video-gallery/page.tsx
    get-involved/
      page.tsx                 # Landing
      student-membership/page.tsx  + membership-form.tsx
      peer-mentorship/page.tsx     + mentorship-form.tsx
      corporate-partnership/page.tsx + corporate-form.tsx
      volunteer/page.tsx           + volunteer-form.tsx
    donate/
      page.tsx                 # Donate landing + DonationForm client component
      [slug]/page.tsx          # Campaign-specific donation
    contact/page.tsx           + contact-form.tsx
    faq/page.tsx               + faq-client.tsx (accordion + search)
    events/page.tsx
    privacy-policy/page.tsx
    terms/page.tsx

  components/
    layout/
      site-header.tsx          # Sticky header + desktop dropdown nav + mobile drawer
      site-footer.tsx          # 4-column footer with contact + social + legal
    ui-brand/                  # Custom brand components
      container.tsx
      section-heading.tsx
      button.tsx               # BrandButton (variants: primary, accent, outline, ghost, subtle)
      badge.tsx                # BrandBadge (variants: sage, accent, outline, primary, white)
      breadcrumbs.tsx
      page-header.tsx          # Inner page hero with breadcrumbs
      logo.tsx                 # SVG wordmark + shield emblem
      placeholder-image.tsx    # CSS-gradient placeholders for photos
    ui/                        # shadcn/ui components (Card, Form, Accordion, etc.)
    home/
      hero-section.tsx
      impact-section.tsx
      campaign-section.tsx
      programs-section.tsx
      stories-section.tsx
      partners-section.tsx
      final-cta.tsx

  data/
    navigation.ts             # Main nav, footer nav, contact info, social links
    content.ts                # Mission, vision, founding story, programs, team,
                              # campaigns, news, partners, FAQ, events, etc.

  lib/
    utils.ts                  # cn(), formatCurrency, formatDate, getInitials
    db.ts                     # Prisma client (unused in current build, available)
```

## Route migration checklist

Every discoverable page from the original WordPress site has been accounted for.

| Original (WordPress) | New (Next.js) | Status |
|---|---|---|
| `/` (home) | `/` | Rebuilt — hero, impact, campaigns, programs, stories, partners, final CTA |
| `/about-us/our-story` | `/about/our-story` | Rebuilt — founding story, timeline, mission, vision |
| `/about-us/strategic-direction` | `/about/strategic-direction` | Rebuilt — mission, 9 objectives, 7 outcomes |
| `/about-us/our-team` | `/about/our-team` | Rebuilt — founder bio + 13 executives |
| `/about-us/board-members` | `/about/board-members` | Rebuilt with placeholder cards — bios pending verification |
| `/about-us/our-partners` | `/about/our-partners` | Rebuilt — all 15 partners grouped by category |
| `/about-us/annual-reports` | `/about/annual-reports` | Rebuilt — 3 report cards, links pending verification |
| `/programs/` (404 on original) | `/programs` | Rebuilt — full listing of all 11 programs |
| `/programs/camp-abilities-bangladesh` | `/programs/camp-abilities-bangladesh` | Rebuilt — full detail page |
| `/programs/knowledge-sessions` | `/programs/knowledge-sessions` | Rebuilt |
| `/programs/school-project` | `/programs/school-project` | Rebuilt |
| `/programs/paara-utshob` | `/programs/paara-utshob` | Rebuilt |
| `/programs/photo-palooza` | `/programs/photo-palooza` | Rebuilt |
| `/programs/cross-cultural-programs` | `/programs/cross-cultural-programs` | Rebuilt |
| `/programs/covid-19-relief` | `/programs/covid-19-relief` | Rebuilt |
| `/programs/tree-plantation` | `/programs/tree-plantation` | Rebuilt |
| `/programs/eid-gift-distribution` | `/programs/eid-gift-distribution` | Rebuilt |
| `/programs/rise-to-independence` | `/programs/rise-to-independence` | Rebuilt |
| `/programs/womens-career-carnival` | `/programs/womens-career-carnival` | Rebuilt |
| `/news-and-resources/press-releases` | `/news/press-releases` | Rebuilt |
| `/news-and-resources/news` | `/news` | Rebuilt — listing + 6 article detail pages |
| `/news-and-resources/video-gallery` | `/news/video-gallery` | Rebuilt — video cards (embeds pending YouTube channel) |
| `/get-involved/student-membership` | `/get-involved/student-membership` | Rebuilt — interest form |
| `/get-involved/peer-mentorship` | `/get-involved/peer-mentorship` | Rebuilt — mentor/mentee form |
| `/get-involved/corporate-partnership` | `/get-involved/corporate-partnership` | Rebuilt — 3 tiers + form |
| `/get-involved/volunteer` | `/get-involved/volunteer` | Rebuilt — 4 roles + form |
| `/upcoming-events` | `/events` | Rebuilt — 3 upcoming events |
| `/contact-us` | `/contact` | Rebuilt — contact details + form |
| `/faq` | `/faq` | Rebuilt — 8 Q&A in searchable accordion |
| `/privacy-policy` (quick link) | `/privacy-policy` | Rebuilt — full policy text |
| `/terms-and-conditions` (quick link) | `/terms` | Rebuilt — full terms text |
| `/contribute` | `/donate` | Rebuilt — campaigns, presets, one-time/monthly |
| (campaign pages) | `/donate/[slug]` | Rebuilt — 3 campaign-specific donation pages |
| (404) | `/not-found` | Custom 404 with brand logo and nav links |

**Total: 33 pages** (10 static About/Programs + 11 program detail + 6 news detail + 4 Get Involved + Donate landing + 3 campaign + Contact + FAQ + Events + Privacy + Terms + Not Found + Home).

## Forms

All forms are **frontend-only** in this build. They use `react-hook-form` + `zod` validation and show inline success state on submit. **No backend, no email, no payment processing is wired up.**

To make a form functional, you need to:

1. Add a Next.js Route Handler (`src/app/api/<form>/route.ts`) or Server Action.
2. Connect to an email service (Resend, SendGrid, Postmark).
3. For donation forms, integrate a real payment provider (Stripe, PayPal, GlobalGiving). **Never expose payment secrets in client-side code.**
4. Replace the inline success state with the API response.

See `KNOWN-LIMITATIONS.md` for the full list of pending integrations.

## SEO

- **Metadata API**: every page exports `metadata` (static) or `generateMetadata` (dynamic).
- **Title template**: `"%s | Heroes For All"`.
- **Open Graph + Twitter Card**: configured in `layout.tsx` with `/og-image.svg`.
- **Sitemap**: `src/app/sitemap.ts` generates `/sitemap.xml` covering all 33 routes.
- **Robots**: `src/app/robots.ts` allows all crawling and points to the sitemap.
- **Canonical URLs**: configured via `metadataBase` in `layout.tsx`.
- **Structured data**: heading hierarchy is clean (single `<h1>` per page, logical `<h2>/<h3>`).

## Accessibility

- Semantic HTML (`<main>`, `<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`).
- Logical heading hierarchy.
- Keyboard-operable navigation (desktop dropdown + mobile drawer).
- Visible focus indicators (Tailwind `focus-visible:outline-ring`).
- Accessible form labels (shadcn `Form` + `FormLabel`).
- ARIA attributes on interactive components (accordion, dropdowns, mobile menu).
- `prefers-reduced-motion` honored via `motion-reduce` utility and CSS media query.
- All decorative SVGs marked `aria-hidden`.

## Browser-tested

Verified with agent-browser:

- Homepage renders cleanly (no console errors, no hydration mismatches).
- Donate form: preset amount selection updates the submit button label; submit shows "Thank you." success state.
- FAQ accordion: clicking a question expands it (`aria-expanded` toggles, region appears).
- Contact form: full validation, submit shows success message.
- 404 page renders on invalid routes.
- All 33 routes return HTTP 200 (or 404 for invalid slugs).

## Known limitations

See `KNOWN-LIMITATIONS.md` for the full list. Key items:

- **No payment integration**: donation form is frontend-only.
- **No email backend**: contact/membership/volunteer forms show client-side success only.
- **No real photos**: all imagery uses CSS-gradient placeholders. Replace with real photos via `next/image`.
- **Board member bios**: placeholder cards pending verification.
- **Annual report PDFs**: link targets pending verification from the original site.
- **Video gallery**: links to YouTube channel pending channel URL confirmation.
- **News filter chips**: visual only (no client-side filtering).

## License

Content © Heroes For All — Warriors of Change. Source code structure is provided for the organization's use.
