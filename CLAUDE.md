# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # dev server on localhost:3000
npm run build    # production build (also runs ESLint + type check)
npm run lint     # ESLint only
npx vercel --prod --yes   # manual production deploy (fallback when auto-deploy fails)
```

Build must be clean before deploying — `next build` runs lint and type-check automatically.

## Project

Website for **Arlete Klauck** — Psicóloga Clínica, Administradora, Escritora. Brand: **Permane'Ser**.

- **Stack**: Next.js 14 (App Router), TypeScript, Framer Motion, Tailwind (utility layer only — not used for styling)
- **Hosting**: Vercel (`permane-ser.vercel.app`), GitHub: `AGRyze-tech/permane-ser`
- **All routes are static** (no server components with data fetching): `○ /`, `/atendimento`, `/formacoes`, `/livros`, `/sobre`

## Styling architecture

**No Tailwind classes in JSX.** All styling is done via inline `style` props using CSS custom properties. Tailwind is present only for `@tailwind base/components/utilities` in `globals.css`.

### Design tokens (CSS variables in `globals.css`)

| Token | Light | Dark | Notes |
|---|---|---|---|
| `--bg` | `#FAF3EB` | `#14110D` | |
| `--bg-alt` | `#F0E4D4` | `#1C1812` | Alternating sections |
| `--bg-card` | `#FFFFFF` | `#221C15` | Card inner core |
| `--terracotta` | `#C9925E` | `#C9925E` | Accent — slightly lighter than standard |
| `--green` | `#1F3B2C` | `#1F3B2C` | Primary CTA color |
| `--text` | `#2A2118` | `#F3EBE0` | |
| `--text-muted` | `#8A7560` | `#A89380` | |
| `--border` | `#E3D3BE` | `#2E2618` | |

### Fonts

Loaded via `next/font/google` in `app/layout.tsx` — **only weight 400** is loaded for both fonts:
- `--font-fraunces` — Fraunces (serif, italic) — headings
- `--font-work-sans` — Work Sans (400, 500) — body/UI

**Do not use `fontWeight: 600` or `fontWeight: 700` on Fraunces** — only 400 is loaded. The browser will fake-bold it, which looks wrong.

### Themes

Theme is set via `data-theme` attribute on `<html>`. Persisted in `localStorage` under key `ps-theme`. Default on first visit: `light` (set by inline script in `<head>` before paint to avoid flash).

## Shared design module — `lib/motion.tsx`

Every page imports from here. Contains:

- `E` — cubic-bezier easing `[0.32, 0.72, 0, 1]`
- `eyebrow` — pill badge style object (used as `<span style={eyebrow}>`)
- `Dot` — terracotta dot component used inside eyebrows
- `sectionPad` — standard section padding style object
- `FadeIn` — scroll-reveal wrapper component (disables blur on mobile automatically)
- `waLink(msg)` — builds WhatsApp URL with pre-filled message
- `WA_BASE` — **TODO: replace `55` with Arlete's real phone number**

`FadeIn` detects mobile at module level (`isMobile` const) to skip `blur()` filter animations on mobile (performance).

## Component structure

- `components/Nav.tsx` — floating pill island nav, morphing hamburger, fullscreen overlay menu
- `components/Footer.tsx` — dark footer, social icons (Instagram + Linktree), newsletter input (not wired)
- `components/ThemeToggle.tsx` — sun/moon toggle button

## Card pattern (double-bezel)

All cards use a nested outer-shell + inner-core structure:
```tsx
{/* Outer shell */}
<div style={{ background: 'rgba(192,133,82,0.05)', border: '1px solid var(--border)', borderRadius: '2rem', padding: 6 }}>
  {/* Inner core */}
  <div style={{ background: 'var(--bg-card)', borderRadius: 'calc(2rem - 6px)', boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.85)', padding: '2.25rem' }}>
    {/* content */}
  </div>
</div>
```

Do not flatten this to a single div — the layered depth is intentional.

## CTA button pattern (button-in-button)

Primary CTAs always have a nested circular icon container flush-right:
```tsx
<a href="..." style={{ display:'inline-flex', alignItems:'center', gap:'0.375rem', padding:'0.5rem 0.5rem 0.5rem 1.75rem', borderRadius:9999, background:'var(--green)', color:'#fff' }}>
  Label text
  <span style={{ width:38, height:38, borderRadius:'50%', background:'rgba(255,255,255,0.18)', display:'inline-flex', alignItems:'center', justifyContent:'center' }}>→</span>
</a>
```

## Pending TODOs (content from Arlete)

These are placeholders waiting for real content — do not remove the `TODO` comments:

| Location | Placeholder | What's needed |
|---|---|---|
| `lib/motion.tsx:73` | `WA_BASE = 'https://wa.me/55'` | Real WhatsApp number |
| All pages | WhatsApp links use `waLink(...)` | Same — number in `WA_BASE` |
| `components/Nav.tsx` | Logo text `Permane'Ser` | Official logo image when ready |
| `app/page.tsx`, `app/atendimento/page.tsx`, `app/sobre/page.tsx` | SVG person placeholder in photo frames | Professional photos |
| `app/livros/page.tsx` | Book cover areas empty | Cover images |
| `app/livros/page.tsx` | `amazonLink` and `uiclapLink` on each livro | Direct product page URLs |
| `app/livros/page.tsx` | Biblioteca download buttons disabled | Real PDF file links |
| `components/Footer.tsx` | Newsletter form `onSubmit` is `e.preventDefault()` | Email service integration |
| `components/Footer.tsx` | `href="mailto:contato@permaneSer.com.br"` | Real email address |
| `app/atendimento/page.tsx` | `free: true` on programa 01 | Confirm which program is free |

## Apostrophes in JSX

The brand name contains an apostrophe. In JSX text nodes use `&apos;` or `{`'`}`. In `href`/`aria-label` attributes use the literal `'`. ESLint will error on unescaped `'` inside JSX text.

## Mobile performance rules

- `body::before` and `.grain-overlay::after` (SVG grain filters) are hidden on mobile via `@media (max-width: 767px)` in `globals.css` — do not re-add them to mobile
- `FadeIn` skips `filter: blur()` on mobile — keep this pattern for any new animations
- Photo containers use `.photo-hero-inner` class which caps `max-height: 300px` on mobile

## Responsive grid

Direction cards on the home page use `.dir-cards-grid` CSS class (defined in `globals.css`) — 1 column on mobile, 2 columns from 500px. Do not use inline `gridTemplateColumns` for this grid; the class is needed to override parent flex context.
