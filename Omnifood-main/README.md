# Omnifood

Omnifood landing page, styled with **Tailwind CSS only** (no Bootstrap, no custom CSS files, no inline styles).

## Run it

The compiled stylesheet `css/tailwind.css` is committed, so the site works by just opening `index.html`
(or serving the folder with any static server). No build step is needed to *view* the site.

## Change the styles

```bash
npm install          # installs Tailwind CSS 3.4
npm run watch        # rebuilds css/tailwind.css while you edit index.html
npm run build        # one-off minified build
```

- `tailwind.config.js` – design tokens from the original design system (colors, type scale, shadows, breakpoints).
- `src/input.css` – only the three `@tailwind` directives.
- `css/tailwind.css` – generated file, do not edit by hand.

### Breakpoints
The original was desktop-first, so the same breakpoints are used with Tailwind's `max-*` variants:
`max-2xl` ≤1344px · `max-xl` ≤1200px · `max-lg` ≤944px · `max-md` ≤704px · `max-sm` ≤544px.

### Root font size
The original shrank the root font size (62.5% → 56.25% → 50%) on smaller screens. `<html>` keeps the same
proportions (100% → 90% → 80%), so every rem-based Tailwind class scales exactly like the old CSS did.


## Mobile navigation

The mobile menu toggle is handled in `js/script.js`. It updates the `nav-open` state on the header and body so the Tailwind `group-[.nav-open]` variants work reliably, closes on Escape and navigation-link clicks, and resets when switching to desktop width.
