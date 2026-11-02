# Known Limitations & Pending Integrations

This document records what is **not yet wired up** in the current build, why, and what would be needed to complete it. It exists so the next engineer can pick up exactly where this build stops.

## 1. Payment processing for donations

**Status**: Frontend form only. No real payment is processed.

**What exists**:
- `/donate` page with preset amount buttons ($25/$50/$100/$250/$500), custom amount input, one-time/monthly toggle, and a "Donate $X" submit button.
- `/donate/[slug]` campaign-specific donation pages that mirror the same form, scoped to a single campaign.
- On submit, the form shows an inline "Thank you" success state. No HTTP request is made.

**What's needed to complete**:
1. Choose a payment provider (Stripe / PayPal / GlobalGiving — the original site mentions GlobalGiving).
2. Implement a Next.js Route Handler (`src/app/api/donate/route.ts`) or Server Action that creates a Checkout Session on the backend.
3. **Never** expose API keys in client-side code. Use `process.env.STRIPE_SECRET_KEY` server-side.
4. Redirect to the provider's hosted checkout (recommended for PCI compliance) or use Stripe Elements with `@stripe/stripe-js`.
5. Handle webhook events for recurring donations, refunds, and failed payments.
6. Replace the inline success state in `src/app/donate/donation-form.tsx` with the actual provider response.

**Estimated effort**: 1–3 days depending on the provider and whether recurring donations + receipts are in scope.

## 2. Form submissions (contact, membership, mentorship, corporate, volunteer)

**Status**: Frontend forms with react-hook-form + zod validation. On submit, they show inline success state. No email is sent.

**Files affected**:
- `src/app/contact/contact-form.tsx`
- `src/app/get-involved/student-membership/membership-form.tsx`
- `src/app/get-involved/peer-mentorship/mentorship-form.tsx`
- `src/app/get-involved/corporate-partnership/corporate-form.tsx`
- `src/app/get-involved/volunteer/volunteer-form.tsx`

**What's needed to complete**:
1. Choose an email service (Resend, SendGrid, Postmark, AWS SES).
2. Add a Route Handler (`src/app/api/<form-name>/route.ts`) or Server Action.
3. Validate the request body server-side with the same zod schema.
4. Send the email to `info@heroesforall.org` and optionally an autoresponder to the submitter.
5. Add spam protection: rate limiting, honeypot field, or reCAPTCHA.
6. Replace the inline success state with the API response.

**Estimated effort**: 1 day for all five forms once an email service is chosen.

## 3. Real photography

**Status**: All imagery uses the `PlaceholderImage` component (CSS gradients with subtle texture and optional icon/label).

**What's needed to complete**:
1. Source authentic photos from the organization (community events, camp attendees, volunteers, partners).
2. Replace `PlaceholderImage` instances with `next/image` `<Image>` components referencing photos in `public/images/`.
3. Set proper `width`/`height` or use `fill` with `aspect-ratio` parent.
4. Add descriptive `alt` text for accessibility.
5. Optimize images (Sharp is already installed; `next/image` handles resize/format conversion).

**Files to update**: hero section, programs section, stories section, all program detail pages, all news detail pages, video gallery.

**Estimated effort**: 0.5–2 days depending on photo availability.

## 4. Board member bios

**Status**: `/about/board-members` shows 6 placeholder cards (Chair, Vice Chair, Secretary, Treasurer, Director × 2). Bios are flagged "Pending verification".

**What's needed**: Confirm board member names, roles, and bios with the organization. Replace the placeholder array in `src/app/about/board-members/page.tsx` with verified data (and add portraits via `next/image`).

## 5. Annual report PDFs

**Status**: `/about/annual-reports` lists three reports (2022, 2023, 2024) with verified summaries, but the download links point to `#` and are disabled.

**What's needed**: Source the actual PDF documents from the original WordPress site or the organization's records. Upload to `public/reports/` and update the `documentUrl` field in `src/data/content.ts`. Set `available: true` once a PDF is in place.

## 6. Video gallery embeds

**Status**: `/news/video-gallery` shows four video cards with thumbnails, titles, durations, and descriptions. Each card is a link with `aria-label="Video coming soon"`.

**What's needed**: Confirm the organization's YouTube channel URL. Replace the `<Link href="#">` in each card with a modal player or an outbound link to the specific video on YouTube.

## 7. News article filtering

**Status**: `/news` has category filter chips at the top (Camp Abilities, Community Engagement, Covid-19 Relief, Environment). They link to `/news?category=...` but the page does not actually filter the list based on the query parameter.

**What's needed**: Add `useSearchParams` to the news page (it must become a client component or use a child client component), filter `newsArticles` by category, and re-render the grid. Estimated effort: 30 minutes.

## 8. CMS / content management

**Status**: All content lives in TypeScript data files (`src/data/navigation.ts`, `src/data/content.ts`). Editing content requires a code change and deploy.

**What's needed** (only if non-technical staff need to edit content):
1. Add a headless CMS (Sanity, Contentful, Payload, or WordPress headless).
2. Replace the static data files with API fetches.
3. Add ISR (`revalidate: 60`) or on-demand revalidation webhooks.

**Estimated effort**: 2–4 days for a basic Sanity or Payload integration.

## 9. Authentication / member portal

**Status**: Not built. Student membership and peer mentorship are open-interest forms, not authenticated portals.

**What's needed** (only if a member portal is in scope): NextAuth.js is already in `package.json`. Add providers, a session wrapper, protected routes, and a member dashboard. Estimated effort: 3–5 days.

## 10. Internationalization

**Status**: English only. The organization operates in Bangladesh and the US, so a Bengali locale may be desirable long-term.

**What's needed**: `next-intl` is already installed. Add Bengali translation files, locale routing, and a language switcher. Estimated effort: 2–4 days for full translation.

## 11. Analytics

**Status**: No analytics installed.

**What's needed**: Add Google Analytics, Plausible, or Vercel Analytics. Plausible is the most privacy-respecting option for a nonprofit. Estimated effort: 30 minutes.

## 12. Performance audit

**Status**: Lighthouse not yet run on the production build.

**What's needed**: Run `bun run build && bun run start`, then Lighthouse against `localhost:3000`. Verify LCP, CLS, INP. Optimize font loading (currently `display: swap`), add `priority` to LCP hero image, lazy-load below-the-fold images. Estimated effort: 1–2 hours.

---

## Things explicitly NOT included (and why)

- **Database**: not needed for a content site. Prisma is installed but unused.
- **Authentication**: not needed for the public site. NextAuth is installed but unused.
- **WebSocket**: not needed. The demo in `examples/websocket/` is unrelated to this site.
- **Z.ai SDK features (chat, image generation, etc.)**: not relevant to a nonprofit informational site.

These can be added if the scope expands (member portal, live chat, AI-assisted content generation) but are not required for the current rebuild.
