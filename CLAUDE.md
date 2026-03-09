# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All commands must be run from `my-portfolio/`.

```bash
yarn dev        # Start dev server on http://localhost:3001
yarn build      # Production build
yarn start      # Start production server
yarn lint       # ESLint (next/core-web-vitals)
```

Tests use Jest + jsdom:
```bash
npx jest                        # Run all tests
npx jest path/to/file.test.js   # Run a single test file
```

## Architecture

Single-page portfolio with anchor-based navigation. The `pages/` directory uses Next.js Pages Router. Most content lives on the home route (`/`) and sub-pages are category-level project listings.

**Application shell** (`pages/_app.js`): Wraps every page with `VisibilityProvider` → `ThemeProvider` → `LayoutWrapper` → `Header` + `<main>`. The `appWithTranslation` HOC from `next-i18next` enables i18n.

**Key layers:**
- `components/layouts/` — `Header`, `Menu`, `Carousel`, `CarouselProject`
- `components/sections/` — Full-page sections: `Presentation`, `Projets`, `Competences`, `Formations`, `Experiences`, `Contact`
- `components/projects/` — Per-category project data files (`ReactProjects`, `JsVanillaProjects`, `HtmlCssProjects`, `ReactNativeProjects`, `TemplateProjects`). Data exported as both raw arrays and getter functions that take `t()` for translated fields.
- `components/ui/` — Reusable atoms: `Buttons`, `Cards`, `Map`, `ThemeSwitcher`, `LanguageSwitcher`, `fonts`
- `context/ThemeContext.js` — `ThemeProvider` / `useTheme` hook. Active theme class (`theme-light`, `theme-dark`, `theme-colorful`) is applied to `document.body`.
- `context/VisibilityContext.js` — `VisibilityProvider` / `useVisibility` hook. Controls conditional display of the "Expériences" nav item via `displayComponent`.
- `styles/` — CSS Modules (one `.module.css` per component). Global base styles in `globals.css`.

## Path Aliases

Configured in `jsconfig.json`:
```
@components/* → components/*
@styles/*     → styles/*
@context/*    → context/*
@lib/*        → lib/*
@public/*     → public/*
@/*           → ./*
```

## i18n

- Locales: `fr` (default) and `en`
- Translation files: `public/locales/{fr,en}/common.json` — single `common` namespace
- Pages that need translations must export `getStaticProps` with `serverSideTranslations(locale, ['common'])`
- Use `const { t } = useTranslation('common')` in components

## Contact Form

`components/sections/Contact.js` POSTs to an external backend:
```
https://my-portfolio-backend-sage.vercel.app/message
```

## Fonts

Defined in `components/ui/fonts.js`. `merriweather` is used on `<main>` (body text); `raleway` is used in the header and some sections. Apply via `className={font.className}`.
