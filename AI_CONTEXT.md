# AI Context — Sivananda Yoga Vietnam (Next.js)

This document summarizes the project so another LLM or developer can onboard quickly. Copy or attach it when handing off context.

---

## 1. Project overview

- **Name:** Sivananda Yoga Vietnam (Next.js site)
- **Purpose:** Marketing and information site for Sivananda Yoga Resort and Training Center in Vietnam (Dalat, HCMC, Hanoi). Content includes yoga vacation, teacher training (TTC, Advanced TTC, SYHET, etc.), Ayurveda, locations, blog, FAQ, contact, donations, and community.
- **Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, Supabase (Postgres + Storage), Framer Motion, Lucide React, html-react-parser, Cheerio.

---

## 2. Repository structure

```
sivananda-yoga-nextjs/
├── app/                    # App Router routes
│   ├── layout.tsx          # Root layout (Geist fonts, metadata, site URL)
│   ├── globals.css         # Tailwind + minimal global styles
│   ├── page.tsx            # Home
│   ├── admin/              # Admin dashboard and CRUD (no auth in code)
│   │   ├── page.tsx        # Dashboard with links to modules
│   │   ├── blog/           # Blog CRUD → /admin/blog
│   │   ├── courses/        # Courses CRUD → /admin/courses
│   │   ├── faqs/           # FAQs CRUD → /admin/faqs
│   │   ├── testimonials/   # Testimonials CRUD → /admin/testimonials
│   │   └── pages/          # Page Builder (custom_pages) → /admin/pages
│   ├── p/[slug]/           # Dynamic custom pages from Page Builder → /p/:slug
│   ├── blog/               # Blog list + [slug] post
│   ├── syhet-courses/      # Course list + [slug] course detail
│   └── [many static routes]# Yoga vacation, TTC, Ayurveda, locations, etc.
├── components/             # Shared UI (Header, Footer, sections, carousels)
├── utils/
│   └── supabase.ts        # Supabase client (NEXT_PUBLIC_* env)
├── public/
├── scripts/               # generate-redirects, fetch-sitemap-urls, etc.
├── next.config.ts         # Redirects (legacy URLs), image remotePatterns
├── redirects-config.js    # Legacy WordPress → new paths
├── supabase-setup.sql     # blogs + storage
├── supabase-add-blog-slug.sql
├── supabase-add-youtube-link.sql
└── package.json
```

**Note:** Admin dashboard links use plural paths (e.g. `/admin/blogs`); actual routes are `/admin/blog`, `/admin/courses`, `/admin/faqs`, `/admin/testimonials`, `/admin/pages`. Fix hrefs if 404s occur.

---

## 3. Supabase

- **Client:** `@/utils/supabase` — createClient with `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
- **Storage:** Bucket `blog-images` (public) used for blog images and Page Builder uploads.

### Tables (inferred from code)

| Table           | Purpose | Key columns (representative) |
|----------------|---------|------------------------------|
| **blogs**      | Blog posts | id, title, slug, category, header_image, content_1, middle_image, content_2, footer_image, author_*, is_published, youtube_link, created_at |
| **custom_pages** | Page Builder pages | id, slug, title, description, hero_image, parent_page, components (JSONB), is_published, created_at |
| **courses**    | TTC/SYHET/course events | id, title, slug, image_url, description, category[], languages[], date_display, location, price_display, registration_link, start_date, end_date, venue_*, organizer_*, pricing, course_type, is_active, … |
| **faqs**      | FAQ items | id, question, answer, category, sort_order, is_active |
| **testimonials** | Student/testimonial quotes | id, name, title, description, sort_order, is_active |

- **custom_pages.parent_page** controls header placement: exact strings — `"Yoga Vacation"`, `"Teacher Training"`, `"Ayurveda"`, `"About Us"`, `"Contact Us"`, `"FAQ"`. Header fetches published custom pages and injects them into the matching dropdown.
- **custom_pages.components** is an array of objects: `{ id, type, ... }`. Types include: `UpcomingEvents`, `StudentFeedback`, `ContactSection`, `MoreInformation`, `AccommodationCost`, `CourseCurriculum`, `SeniorTeachers`, `AshramGallery`, `BenefitsTTC`, `YogaInsights`, `KarmaYogaTabs`, `CustomTwoColumn` (with title, description, image_url).

---

## 4. Main public routes (non-exhaustive)

- `/` — Home
- `/yoga-vacation`, `/accommodations`, `/our-venues`, `/4-paths-of-yoga`, `/5-points-of-yoga`, `/during-your-stay`, `/guest-information`
- `/yoga-teacher-training-course`, `/advanced-yoga-teacher-training-course`, `/sadhana-intensive`, `/vedanta-silence-meditation`, `/specialty-courses`
- `/sivananda-yoga-health-educator-training`, `/syhet-practicuum`, `/syhet-courses`, `/syhet-courses/[slug]`
- `/100-foundation-ayurveda`, `/detoxification`
- `/about`, `/our-teachers`, `/Mission-Vision`, `/da-lat-ashram-health-house`, `/ho-chi-minh-center`, `/hanoi-center`, `/sivananda-yoga-dalat-center`
- `/blog`, `/blog/[slug]`
- `/contact`, `/frequently-asked-questions`, `/donation`, `/community`
- `/privacy-policy`, `/misconduct-policy`
- `/p/[slug]` — Dynamic pages from Page Builder (custom_pages by slug)

---

## 5. Admin routes

- `/admin` — Dashboard (cards linking to modules)
- `/admin/blog` — Blog CRUD; images to `blog-images`
- `/admin/courses` — Courses CRUD; images to `blog-images`
- `/admin/faqs` — FAQs CRUD
- `/admin/testimonials` — Testimonials CRUD
- `/admin/pages` — Page Builder: create/edit custom pages (slug, title, description, hero_image, parent_page, is_published, components array); uploads to `blog-images`

There is no authentication middleware in the codebase; protect these routes in production (e.g. Supabase Auth or middleware).

---

## 6. Key components and patterns

- **Header** (`components/Header.tsx`): Client component. Fetches `custom_pages` where `is_published = true`, filters by `parent_page`, injects links into dropdowns (Yoga Vacation, Teacher Training, Ayurveda, About Us, Contact Us, FAQ). Logo from Supabase URL constant. Desktop mega-menus + mobile overlay.
- **Footer** (`components/Footer.tsx`): Location, contact, social links, policy links. Different layout for mobile (solid green) vs desktop.
- **Dynamic page** (`app/p/[slug]/page.tsx`): Loads one `custom_pages` row by `slug`; renders hero then maps `pageData.components` to components (UpcomingEvents, ContactSection, CustomTwoColumn, etc.). Uses `ContactSection`, `MoreInformation`, etc.
- **Page Builder** (`app/admin/pages/page.tsx`): Form for slug, title, description, hero_image, parent_page, is_published; add/order/remove components by type; `CustomTwoColumn` has title, description, image_url. Save = upsert to `custom_pages`; images uploaded to `blog-images`.

---

## 7. Design and branding

- **Colors:** Primary green `#0B3B24`, accent orange `#ED7D4D`, light green `#4F6F1F`, cream background `#FDFCF8`, light green tint `#E5F5C8`.
- **Fonts:** Geist Sans + Geist Mono (layout.tsx); body fallback Arial/Helvetica in globals.css.
- **Styling:** Tailwind 4; no dark mode (explicit white background). Common classes: `text-[#0B3B24]`, `text-[#ED7D4D]`, `bg-[#FDFCF8]`, gradient bar `from-[#0B3B24] via-[#4F6F1F] to-[#ED7D4D]`.

---

## 8. Conventions

- **Data fetching:** Client-side with `supabase` from `@/utils/supabase` in `useEffect` (e.g. Header, dynamic page, admin lists). No server-side Supabase in this summary.
- **Images:** Next.js `Image`; allowed hosts in `next.config.ts`: sivanandayogavietnam.org, sivanandavn2.wpengine.com, images.unsplash.com, two Supabase hostnames.
- **Links:** Next.js `Link` for in-app; external links use `target="_blank"` and `rel="noopener noreferrer"`.
- **SEO:** Root `metadata` and `metadataBase` in `app/layout.tsx`; canonical and alternates defined there. Legacy URLs handled by `redirects-config.js` and `next.config.ts` redirects.

---

## 9. Environment variables

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

No `.env.example` in repo; add one if you want to document these.

---

## 10. Scripts (package.json)

- `npm run dev` — Next dev server
- `npm run build` — Next build
- `npm run start` — Next start
- `npm run lint` — ESLint

Other scripts in `scripts/`: e.g. `generate-redirects.js`, `fetch-sitemap-urls.js`, `extract-seo-content.js` (see `scripts/` for usage).

---

## 11. Quick reference for common tasks

- **Add a new dropdown to the header:** Ensure `parent_page` in `custom_pages` matches the dropdown key; Header already filters by parent and injects links.
- **Add a new Page Builder component type:** (1) Add component in `app/p/[slug]/page.tsx` switch. (2) Add option and rendering in `app/admin/pages/page.tsx` (AVAILABLE_COMPONENTS and form).
- **New public page:** Add `app/your-route/page.tsx`; use `Header` + `Footer` and same color/typography tokens.
- **New Supabase table:** Create table and policies in Supabase; add client calls in the relevant `app/` or `components/` file.

Use this file to bring another LLM or developer up to speed on structure, data, and conventions.
