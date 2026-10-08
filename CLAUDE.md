@AGENTS.md

# AIM Overseas Consultants — Execution Plan

This file documents the complete plan for rebranding this Next.js codebase from **SKC Overseas Consultants** to **AIM Overseas Consultants**. The three-phase plan is designed to be executed sequentially. No structural or business logic changes are in scope.

> **Design Reference:** See `DESIGN.md` for full color palette, CSS variable specs, and per-component branding tables.

---

## Scope & Constraints

- ✅ **In scope:** Color palette, brand name text, logo references, contact details, image filenames, SEO metadata
- ❌ **Out of scope:** Component structure, routing, animation logic, layout grid, Tailwind utility classes (except color tokens), TypeScript types, API calls

---

## Phase 1 — Color Palette & CSS Tokens

**File:** `app/globals.css`

**Goal:** Swap the green color scheme for the crimson/rose-gold palette derived from `aim_logo.png`.

### Steps

1. **Replace `:root` variables** — change all `--primary`, `--accent`, `--secondary`, `--foreground`, `--bg-soft` values as specified in `DESIGN.md`.
2. **Update `::selection`** — background `#8B1A2A`, color `#FFFFFF`.
3. **Update scrollbar styles** — thumb `#8B1A2A`, track `#FDF5F6`.
4. **Update `.premium-shadow`** — use crimson rgba shadow.

**Expected result:** All Tailwind color utilities (`bg-primary`, `text-accent`, `bg-secondary`, etc.) automatically render in the new crimson/rose-gold palette across the entire site with zero component-level CSS changes.

---

## Phase 2 — Text & Branding Content

**Goal:** Replace all `SKC` brand name references with `AIM` and update contact/SEO information.

### 2.1 `app/layout.tsx`
- Title: `"AIM Overseas Consultants | Global Education & Career Consultancy"`
- Description: Updated to reference AIM
- `applicationName`: `"AIM Overseas Consultants"`
- All `icons` paths: `/aim_logo.png`
- OpenGraph `siteName`: `"AIM Overseas Consultants"`

### 2.2 `components/Navbar.tsx`
- Logo `src`: `/aim_logo.png`
- Logo `alt`: `"AIM Overseas Consultants Logo"`
- Brand name: `AIM` (large) + `Overseas Consultants` (small caps below)
- Mobile menu brand: `AIM GLOBAL`
- Mobile menu footer: `© 2026 AIM`

### 2.3 `components/Hero.tsx`
- Hero quote in right panel: Replace `"SKC Overseas Consultants"` → `"AIM Overseas Consultants"`

### 2.4 `app/page.tsx`
- Trust section body: `"With SKC..."` → `"With AIM..."`
- Alumni network description: `"SKC alumni..."` → `"AIM alumni..."`
- CTA paragraph: `"...who chose SKC..."` → `"...who chose AIM..."`

### 2.5 `app/about/page.tsx`
- Story section body: All `"SKC"` → `"AIM"`
- CEO quote attribution: `"— CEO, AIM Overseas Consultants"`
- Team card footer label: `"AIM Executive"`

### 2.6 `components/Footer.tsx`
- Logo: `aim_logo.png`
- Brand name: `"AIM Overseas Consultants"`
- Tagline: `"Dream. Plan. Achieve. Succeed."`
- About blurb: Updated AIM-specific copy
- Contact details: *(Provide real AIM address, phone, email, social links)*
- Copyright: `"© AIM Overseas Consultants"`

### 2.7 `app/services/page.tsx`
- Scan for any `SKC` references and replace with `AIM`

---

## Phase 3 — Image Replacement

**Goal:** Replace all SKC-branded or placeholder images with AIM-branded equivalents. Images are sourced/generated separately and dropped into `public/`.

**Prerequisites:** All images must be placed in `public/` before running the code changes below.

### Image Replacement Map

| Component / Page         | Current `src`             | New `src`                 |
|--------------------------|---------------------------|---------------------------|
| `Navbar.tsx`             | `/SKCOC_logo.png`         | `/aim_logo.png` ✅ Ready  |
| `Footer.tsx`             | `/SKCOC_logo.png`         | `/aim_logo.png` ✅ Ready  |
| `Hero.tsx` (background)  | `/SKCOC_hero.png`         | `/aim_hero_bg.png`        |
| `Hero.tsx` (right panel) | `/hero_front.png`         | `/aim_hero_front.png`     |
| `page.tsx` (trust)       | `/trust_section.png`      | `/aim_trust.png`          |
| `about/page.tsx` (bg)    | `/SKCOC_hero.png`         | `/aim_hero_bg.png`        |
| `about/page.tsx` (team)  | `/team.png`               | `/aim_team.png`           |
| `page.tsx` (services)    | `/service_visa.jpg`       | `/aim_service_visa.jpg`   |
| `page.tsx` (services)    | `/service_univ.jpg`       | `/aim_service_univ.jpg`   |
| `page.tsx` (services)    | `/service_career.jpg`     | `/aim_service_career.jpg` |
| `Testimonials.tsx`       | `/student_1.png`–`_6.png` | `/aim_student_1.png`–`_6.png` |
| `layout.tsx` (favicon)   | `/SKCOC_tab_icon_rounded.png` | `/aim_logo.png` ✅ Ready |

### Image Guidelines for AIM Overseas
- **Hero background:** Professional, world map / travel / airplane motif with deep crimson/maroon tone overlay
- **Hero front panel:** Young student or professional confidently looking forward; warm, aspirational
- **Trust section:** Consultant with student, document review scene, professional office setting
- **Team photo:** Professional group photo or individual headshots with AIM branding context
- **Service cards:** Clean lifestyle shots — passport/visa doc, university campus, career/job interview
- **Student testimonials:** Diverse student portraits (6 photos), warm and confident expressions

---

## Execution Order (Recommended)

```
Phase 1 → Phase 2 → Phase 3
```

1. Run Phase 1 first — this visually unblocks the new color scheme immediately with zero risk
2. Run Phase 2 after — text-only changes, fully safe
3. Run Phase 3 last — depends on real image assets being available

---

## Verification Checklist

After each phase, verify:

- [ ] `npm run dev` runs without errors
- [ ] No TypeScript compilation errors
- [ ] No broken image 404s in the browser network tab
- [ ] Color scheme matches `aim_logo.png` palette on all pages
- [ ] All "SKC" text has been removed from visible UI
- [ ] All image slots are filled (no broken image icons)
- [ ] SEO metadata (title, description, OG tags) reflects AIM branding
- [ ] Favicon in browser tab shows AIM logo

---

## Contact Details Needed from Client

The following real information must be provided by the AIM Overseas Consultants team before Phase 2.6 can be finalized:

- [ ] Office address
- [ ] WhatsApp / phone number
- [ ] Business email
- [ ] Facebook page URL
- [ ] Instagram / LinkedIn URLs (optional)

---

## Phase 4 — Structural & Motion Overhaul

**Goal:** Provide an overall update to the website's structure (Home, Contact, Hero), generate custom imagery, and change the animation style.

### 4.1 Asset Generation & Implementation
- Generated premium placeholder images via AI for `Hero` (bg/front), `Trust`, `Team`, and `Services` (visa, univ).
- Sourced high-quality realistic Unsplash photography for the `Career` service and all 6 `Testimonials` to maintain a professional, aspirational look.

### 4.2 Hero Structure Update
- Replaced the standard 2-column layout with an immersive, full-screen overlapping floating card layout.
- Added bouncy `spring` animations for a dynamic, highly interactive first impression.

### 4.3 Home Page Reordering & Motion
- Reordered the Home page sections for better immediate impact: Hero → Stats → Dynamic Services Overview → Success Stories → Trust Section → Cinematic CTA.
- Updated scroll-linked animations (`useScroll`, `useTransform`) to have aggressive scaling and parallax effects with `spring` physics instead of linear easing.

### 4.4 Contact Page Redesign
- Shifted from a traditional 2-column layout to a modern card-based layout where the contact info and assessment form sit side-by-side above a full-width embedded Google Map.
- Implemented cascading entrance animations (`staggerChildren`) and `spring` transitions on hover/view.

### 4.5 Testimonials Refresh
- Updated all 6 student names and testimonials to reflect a global, diverse student base praising "AIM Overseas Consultants".
- Replaced cartoonish avatars with realistic Unsplash portraits.
- Enhanced the masonry grid with a 3D parallax scroll effect and `spring` physics.
