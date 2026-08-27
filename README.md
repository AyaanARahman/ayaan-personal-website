<div align="center">

# ayaanrahman.dev

**My personal site — a fast, accessible, fully themeable portfolio built on the Next.js App Router.**

[![Live](https://img.shields.io/badge/live-ayaanrahman.dev-ee6c4d?style=flat-square)](https://ayaanrahman.dev)
[![Next.js](https://img.shields.io/badge/Next.js-14-000000?style=flat-square&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind](https://img.shields.io/badge/Tailwind-v4_alpha-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Deployed on Vercel](https://img.shields.io/badge/deployed-Vercel-000000?style=flat-square&logo=vercel)](https://vercel.com)

[**View site**](https://ayaanrahman.dev) · [**Projects**](https://ayaanrahman.dev/projects) · [**Résumé**](https://ayaanrahman.dev/resume.pdf)

</div>

---

## About

I'm Ayaan Rahman, a Solution Engineer at Appian working across Linux, AWS, Kubernetes, and CI/CD. This repo is the source for my personal site: an About page aligned to my résumé, a projects showcase, and an MDX-powered blog.

Every page is statically prerendered. Total shared JS is **87.3 kB**, and the heaviest route adds under **300 B** on top of it.

```
Route (app)                    Size     First Load JS
┌ ○ /                          294 B         92.8 kB
├ ○ /projects                  141 B         87.5 kB
├ ○ /blog                      178 B         96.2 kB
├ ● /blog/[slug]               185 B          101 kB
└ ○ /sitemap.xml, /robots.txt, /rss, /og
+ First Load JS shared by all               87.3 kB
```

---

## Highlights

**A single source of truth for color.** Every color in the site is a CSS custom property declared once in `:root` and once in `.dark`. Components reference tokens — never raw hex — so the light and dark themes are structurally incapable of drifting apart. Adding a theme means adding one block of variables, not auditing every component.

```css
:root      { --bg: #f4f3ef; --text: #001524; --accent: #ee6c4d; /* … */ }
.dark      { --bg: #001018; --text: #edede9; --accent: #ff8163; /* … */ }
```

**Dark mode with no flash.** Theme is resolved by a blocking inline script in `<head>` before first paint, so a dark-mode visitor never sees a white flash on load. First-time visitors inherit their OS preference via `prefers-color-scheme`; after that the choice persists in `localStorage`.

**A navbar that doesn't reflow.** Hover states change color and background only — never font size — so the bar never shifts layout under the cursor. The active route is derived from `usePathname()` and marked with a `data-active` attribute rather than a conditional class string.

**Accessibility as a default, not a pass.** Visible `:focus-visible` rings on every interactive element, `aria-label`s on icon-only controls, semantic landmarks, and a full `prefers-reduced-motion` block that collapses every animation and transition.

**SEO handled at the framework level.** Typed `Metadata` exports, Open Graph and Twitter cards, a generated `sitemap.xml` and `robots.txt`, an RSS feed, and dynamic OG images rendered at the edge with `next/og`.

---

## Tech stack

| Layer | Choice | Why |
| --- | --- | --- |
| Framework | Next.js 14 (App Router) | RSC by default, file-based routing, first-class static generation |
| Language | TypeScript 5.3 | Typed metadata and component contracts |
| Styling | Tailwind CSS v4 alpha + CSS custom properties | Utilities for layout, tokens for theme |
| Content | MDX via `next-mdx-remote` | Blog posts as files, with React components inline |
| Typography | Geist Sans & Geist Mono | Self-hosted through `next/font`, zero layout shift |
| Syntax highlighting | `sugar-high` | ~1 kB, no runtime grammar loading |
| Analytics | Vercel Analytics + Speed Insights | Real-user Core Web Vitals |
| Hosting | Vercel | Zero-config CI/CD from `main` |

---

## Getting started

**Requirements:** Node.js 18.17+ (developed on 24.4.1) and npm.

```bash
git clone https://github.com/AyaanARahman/ayaan-personal-website.git
cd ayaan-personal-website
npm install
npm run dev
```

Open [localhost:3000](http://localhost:3000).

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production build to `.next/` |
| `npm start` | Serve the production build |

> [!IMPORTANT]
> `next dev` and `next build` share the same `.next/` directory and **will corrupt each other's output** if run concurrently — producing confusing `MODULE_NOT_FOUND` and `Cannot find module './vendor-chunks/…'` errors that look like code bugs but aren't. Stop the dev server before building. If you hit it: `rm -rf .next` and rebuild.

---

## Project structure

```
app/
├── layout.tsx              # Root layout, metadata, no-flash theme script
├── page.tsx                # About — bio, experience, toolkit, education
├── projects/page.tsx       # Project showcase (data-driven cards)
├── not-found.tsx           # Styled 404
├── global.css              # Design tokens + component classes
│
├── components/
│   ├── nav.tsx             # Sticky nav, active route, theme toggle
│   ├── footer.tsx          # Social links
│   ├── mdx.tsx             # MDX component overrides
│   └── posts.tsx           # Blog post listing
│
├── blog/
│   ├── page.tsx            # Post index
│   ├── [slug]/page.tsx     # Post renderer
│   ├── posts/*.mdx         # Content
│   └── utils.ts            # Frontmatter parsing, date formatting
│
├── og/route.tsx            # Dynamic OG image generation
├── rss/route.ts            # RSS feed
├── sitemap.ts              # sitemap.xml + canonical baseUrl
└── robots.ts               # robots.txt

public/                     # Résumé, transcript, images
```

Page content lives in typed arrays at the top of each page component (`experience`, `toolkit`, `projects`), so updating the site is editing data rather than editing JSX.

---

## Writing a post

Drop a `.mdx` file into `app/blog/posts/` with frontmatter:

```mdx
---
title: 'Your Post Title'
publishedAt: '2026-01-15'
summary: 'A one-line summary used for previews and metadata.'
---

Your content here. Standard MDX — components work inline.
```

`title`, `publishedAt`, and `summary` are required; `image` is optional. The slug is the filename, and routing, the index listing, the sitemap entry, and the RSS item are all generated from the filesystem. No registration step.

---

## Deployment

Pushes to `main` deploy automatically via Vercel.

> [!NOTE]
> This project standardizes on **npm**. Keep exactly one lockfile committed — `package-lock.json`. Vercel prefers pnpm whenever a `pnpm-lock.yaml` is present, so a stray second lockfile silently overrides your dependency versions at build time and can reintroduce vulnerabilities you already patched.

---

## License

MIT © Ayaan Rahman

---

<div align="center">

[LinkedIn](https://www.linkedin.com/in/ayaanrahman7972/) · [GitHub](https://github.com/AyaanARahman) · [Email](mailto:ayaanrah99@gmail.com)

</div>
