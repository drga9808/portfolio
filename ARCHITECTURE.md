# Portfolio Architecture
_Last updated: 2026-03-02 — initial bootstrap_

## Stack
- **Framework**: Astro 5 + TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **Deployment**: GitHub Pages via GitHub Actions (on push to main)
- **Node**: v22+

## Request Flow
1. User visits site → Astro static build outputs to `/dist/`
2. GitHub Actions builds and deploys to GitHub Pages on every push to main
3. All content is data-driven: `config.ts` contains site structure
4. Components render from TypeScript interfaces defined in `config.ts`

## Key Files
| File | Role | Lines |
|------|------|-------|
| `src/data/config.ts` | Central data source — all content (about, projects, experience, certifications, skills, education, socials). Exports TypeScript interfaces + `config` object. | 150 |
| `src/layouts/BaseLayout.astro` | Root layout — head, nav, footer structure. Wraps all pages. | — |
| `src/pages/index.astro` | Single-page entry point. Imports config, renders sections. | — |
| `src/components/Nav.astro` | Navigation bar with social links + smooth scroll. | — |
| `src/components/Hero.astro` | Hero section — name, title, tagline, CTA. | — |
| `src/components/About.astro` | About section — paragraphs + optional avatar. | — |
| `src/components/Projects.astro` | Projects grid (featured + all). Links to live + GitHub. | — |
| `src/components/Experience.astro` | Timeline of roles with bullets. | — |
| `src/components/Certifications.astro` | Certifications list with issuer, date, verify URL. | — |
| `src/components/Skills.astro` | Skills grouped by category (Languages, Frontend, Backend, DevOps, Security). | — |
| `src/components/Education.astro` | Education entries (degree, school, year). | — |
| `src/components/Contact.astro` | Contact section with email + social links. | — |
| `src/components/SectionWrapper.astro` | Utility — wraps sections with consistent padding/layout. | — |
| `.github/workflows/deploy.yml` | GitHub Actions CI/CD — builds on push main, deploys to Pages. | 41 |
| `astro.config.mjs` | Astro config — Tailwind CSS v4 Vite plugin. | 11 |

## Extension Points

### Add a new data section
1. Extend `SiteConfig` interface in `config.ts` with new field
2. Add data to `config` object
3. Create component in `src/components/<Section>.astro`
4. Import and use in `src/pages/index.astro`

### Customize styles
- Tailwind classes in component templates
- Optional: add global CSS in `src/layouts/BaseLayout.astro`

## Conventions
- All content in `config.ts` — never hardcode in components
- Components accept no props; read from global config import
- Astro-only (no client-side JS by default)
- Social links in `config.socials` rendered across site
