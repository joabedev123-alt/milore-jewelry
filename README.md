# Milóre Jewelry — Landing Page

Premium single-page landing for **Milóre Jewelry** (925 sterling silver, New Jersey, USA).

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Bootstrap Icons (SVG)
- `next/font` — Cormorant Garamond + Inter

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Central configuration

All editable content lives in:

```
src/config/site.ts
```

Update there:

- Brand name & logo path
- WhatsApp & Instagram (`social.instagram.handle` kept exactly as provided)
- Products, categories, images
- Policies (shipping, returns, privacy, terms)
- Reviews (empty = section hidden)
- SEO / canonical URL

## Before publishing

Materials still needed (do not invent):

1. **Official logo** — set `siteConfig.brand.logo` (path under `/public`)
2. **Brand photography** — replace DEMO Unsplash images (`isDemo: true`)
3. **Real product catalog** — names, descriptions, prices (only when confirmed)
4. **Approved policies** — shipping, returns, privacy, terms in `siteConfig.policies`
5. **Customer reviews** — add to `siteConfig.reviews` when available (section auto-hides if empty)
6. **Definitive domain** — update `seo.canonical` + `public/robots.txt` + `public/sitemap.xml`
7. **Favicon / OG image** — replace `/public/favicon.svg` and `/public/og-image.svg`

## Key behaviors

- Single-page anchors with sticky header and active section highlight
- Category filter syncs Collections → Jewelry showcase
- Product drawer with gallery + WhatsApp deep link per product
- Care tips modal; policy modals only when content is configured
- Reviews section hidden until real testimonials exist
- Shipping / Returns footer links unpublished until policies are set

## Scripts

| Command       | Description        |
|---------------|--------------------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Start production   |
| `npm run lint`  | ESLint             |
