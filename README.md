# MediMaster — Healthcare Management Platform

Marketing and product website for MediMaster, built with Next.js 14 App Router.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                    # App Router pages (routes only — keep thin)
│   ├── layout.js           # Root layout: Navbar, Footer, SmoothScroll
│   ├── page.js             # Home
│   ├── about/, blog/, contact/, support/
│   ├── services/           # IT & digital service pages
│   ├── products/           # Product listing + nested product routes
│   └── [product-slug]/     # Legacy top-level product routes (redirect over time)
├── components/
│   ├── layout/             # Footer, SmoothScroll, MobileBottomNav
│   ├── navbar/             # Modular navigation (desktop, mobile, dropdowns, hooks)
│   ├── pages/              # Feature-specific UI grouped by domain
│   │   ├── home/sections/  # Home page sections
│   │   ├── services/       # Service page sections
│   │   └── [product]/      # Product page sections
│   ├── shared/             # Cross-page reusable components
│   └── ui/                 # Design-system primitives (Button, SectionHeader)
├── lib/
│   ├── fonts.js            # next/font setup (Inter, Outfit, Syne, Barlow)
│   ├── cn.js               # className merge helper
│   ├── site.js             # Site metadata & contact constants
│   ├── constants.js        # Navigation links
│   ├── products.js         # Product catalog data
│   ├── colors.js           # Design tokens
│   └── typography.js       # Typography tokens
└── __tests__/              # Jest tests
```

## Conventions

- **Routes stay thin** — compose sections from `components/pages/`
- **Shared chrome in layout** — Navbar, Footer, and MobileBottomNav live in `app/layout.js`
- **Design tokens** — use `tailwind.config.js` + `lib/typography.js`; prefer Tailwind classes over hex
- **Imports** — use `@/` alias (configured in `jsconfig.json`)

## Design System

| Layer | Source | Usage |
|-------|--------|--------|
| Colors & shadows | `tailwind.config.js` | `bg-teal-500`, `text-navy-950`, `shadow-glowTeal` |
| Typography presets | `lib/typography.js` | `HEADING.h2`, `BODY.small`, `TEXT_COLOR.secondary` |
| UI primitives | `components/ui/` | `SectionHeader`, `Button`, `DarkFeatureSection`, `TrialRequestSection`, `EyebrowMarker` |
| Section data | `lib/home-sections.js`, `lib/trial-sections.js` | Config for home feature blocks and trial forms |
| Global utilities | `globals.css` `@layer components` | `text-gradient-brand`, `badge-eyebrow`, `btn-primary`, `card-surface` |
| Fonts | `lib/fonts.js` + `layout.js` | `next/font/google` — no Google CSS `@import` |
| Inline/JS colors | `lib/colors.js` | SVG, GSAP, `style={{}}` only |

**Pattern:** section title → `<SectionHeader eyebrow="" title="" highlight="" />`; CTA → `<Button href="" variant="secondary" />`; body copy → `BODY.small` + `TEXT_COLOR.secondary`.

## Naming Conventions

| Layer | Convention | Example |
|-------|------------|---------|
| Routes (`src/app/`) | kebab-case folders matching URL | `/products/patient-management-system` |
| Page components (`components/pages/`) | folder mirrors route slug | `patient-management-system/` |
| React components | PascalCase files | `PatientHero.jsx`, `HMSOrbit.jsx` |
| Shared utilities (`lib/`) | camelCase files | `site.js`, `constants.js` |
| Route entry files | `page.js`, `layout.js` | not `.jsx` |

Product component folders use the **full route slug** (e.g. `medical-billing-system/`, not `medical-billing/`).
Orbit/visual components are named `*Orbit.jsx` (e.g. `PharmacyOrbit`, `HMSOrbit`).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run lint` | ESLint |
| `npm run test` | Jest |

## Configuration (root-level only)

Next.js tooling expects config at the project root — do **not** move these into a `config/` folder.

| File | Required? | Purpose |
|------|-----------|---------|
| `package.json` | Yes | Dependencies and npm scripts |
| `next.config.js` | Yes | Next.js build, redirects, images |
| `tailwind.config.js` | Yes | Design tokens and Tailwind content paths |
| `postcss.config.js` | Yes | Tailwind + Autoprefixer pipeline |
| `jsconfig.json` | Yes | `@/` import alias |
| `jest.config.js` + `jest.setup.js` | Yes | Tests (used by CI) |
| `.eslintrc.json` | Yes | Lint rules (`next/core-web-vitals` + Prettier) |
| `.prettierrc.json` + `.prettierignore` | Yes | Code formatting |
| `.lintstagedrc.json` | Yes | Pre-commit lint/format (scoped to `src/`) |
| `.editorconfig` | Recommended | Consistent indentation across editors |
| `.husky/pre-commit` | Yes | Runs lint-staged on commit |
| `.github/workflows/ci.yml` | Yes | CI: lint, format, test, build |
| `.env.example` | Recommended | Documents env vars (copy to `.env.local`) |
| `.gitignore` | Yes | Git ignore rules |
| `next-env.d.ts` | Auto | Next.js types — do not edit |

**Not config (app data):** `src/lib/site.js`, `constants.js`, `colors.js` — these are runtime code, not tooling config.

**Do not add:** duplicate lint-staged files, one-off migration scripts in `scripts/` after migrations are done, or a second ESLint/Prettier config elsewhere.
