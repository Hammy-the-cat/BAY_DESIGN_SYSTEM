# BAYトレ — Landing Page UI Kit

A hi-fi recreation of the BAYトレ marketing landing page, built directly from the brand brief and the design tokens in `../../colors_and_type.css`.

> **Note**: No production codebase, Figma file, or screenshots were provided for this brand. This kit is **derived from the written brief and the visual foundations in the root README**, not lifted from existing source. If you have an existing site, share it and we'll re-derive components against it.

## Files

- `index.html` — full landing-page recreation, top-to-bottom. Open this to see the kit.
- `Header.jsx` — sticky header that opacifies past the hero.
- `Hero.jsx` — full-bleed hero with the brand tagline and primary CTA.
- `Method.jsx` — "PT考案" three-step explainer.
- `Programs.jsx` — program cards (パーソナル / アスリート / オンライン / 7日リセット).
- `Studios.jsx` — store-availability tiles for 日南 / 都城.
- `Trainer.jsx` — trainer profile band.
- `CTABand.jsx` — DM-booking call-to-action.
- `Footer.jsx` — operational links + Instagram.

## Components covered (cosmetic recreations)

Buttons (primary/ghost/solid/link), status pills, category tags, eyebrow labels, cards (method/program/online), location tiles, form inputs, footer columns, sticky-nav backdrop blur, wave-line section dividers.

## Interaction

The page is mostly static, but two interactive bits demonstrate behavior:

- Header opacifies with `backdrop-filter` once scroll passes the hero.
- Programs toggle: clicking a tab switches the highlighted program card.

## Caveats

- All photography is `assets/photo-placeholder.svg` / `assets/hero-placeholder.svg`. Drop in real ocean / training photos.
- Trainer photo + name are placeholders. Replace with the owner's real bio.
- Instagram handle in the footer is a placeholder.
