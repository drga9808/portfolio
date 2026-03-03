# Code Reviewer Memory — portfolio

## Project Overview
- Astro 5 + Tailwind CSS v4 + TypeScript strict portfolio site
- Single-page layout: all sections on index.astro, section IDs drive in-page nav
- Data lives entirely in `src/data/config.ts` — one export `config: SiteConfig`
- No backend, no API calls, no user input forms

## Stack Notes
- Tailwind v4: uses `@import "tailwindcss"` + `@theme {}` block in global.css (NOT tailwind.config.js)
- Custom colors defined in @theme: bg, surface, border, text, muted, accent, accent-light
- `bg-bg/80` opacity syntax works via Tailwind v4's CSS variable approach
- SectionWrapper.astro is the reusable layout shell for all content sections

## Known Patterns
- Each content component imports config directly (no prop-drilling)
- Nav scroll-spy uses IntersectionObserver with rootMargin "-20% 0px -70% 0px"
- Mobile menu managed with vanilla JS in <script> block inside Nav.astro
- Timeline pattern (Experience, Education) uses absolute-positioned dot + border-l-2 trick

## Issues Found (first review 2026-03-02)
- Nav: `aria-expanded` missing on hamburger button — screen reader can't report open/closed state
- Nav: mobile menu has no `aria-hidden` toggling — AT will read hidden menu content
- BaseLayout: favicon points to `/favicon.svg` but only `favicon.ico` exists in public/
- BaseLayout: missing `og:image` meta — social unfurls will be imageless
- Nav: `data-nav-link` active state uses `classList.replace` which silently no-ops if class absent
- Hero: external social links have no `aria-label` — only icon text visible, no sr context
- config.ts: `siteUrl` and placeholder values are template data, not a code issue
