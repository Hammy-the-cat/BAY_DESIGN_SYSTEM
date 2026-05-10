---
name: bay-tore-design
description: Use this skill to generate well-branded interfaces and assets for BAYトレ (bay_traininggym) — a Japanese personal-training gym with an ocean / surf-inspired identity. Contains the brand's design guidelines, color and type tokens, ocean motifs, typography substitutions, and a landing-page UI kit. Use it for production work or for throwaway prototypes / mocks / decks.
user-invocable: true
---

# BAYトレ Design Skill

Read `README.md` first — it covers brand context, content fundamentals (voice, tone, casing, emoji rules), visual foundations (color, type, motion, shadows, layout, imagery), and iconography.

Then explore the rest of the folder:

- `colors_and_type.css` — design tokens (colors, type scale, spacing, radii, shadows, motion). Import this in any new artifact.
- `assets/` — logo wordmark + mark, wave-line, wave-stack motifs, and SVG photo placeholders.
- `preview/` — preview cards covering colors / type / spacing / components / brand.
- `ui_kits/landing_page/` — pixel-level recreation of the BAYトレ marketing LP. Components are in JSX; `index.html` is the live demo.

## When invoked

If the user invokes this skill without other guidance, ask them what they want to build (LP section, slide deck, social post, banner, etc.), ask a few follow-up questions about audience and tone, then act as an expert designer:

- For visual artifacts (slides, mocks, throwaway prototypes), copy assets out of this skill and create static HTML files for the user to view.
- For production code, read the rules here and apply them as an expert in the BAYトレ brand.

## Non-negotiables

- **Voice is calm, kinetic, and PT-grounded.** No diet-vocab, no exclamations, no "限界に挑戦" energy. Use `です/ます調`. Verbs: 整える / 動かす / 戻す / 流れる.
- **Color discipline.** Coral (`--coral-500`) appears once per screen, max — usually on the primary CTA. Backgrounds are `--sand-50`, never pure white.
- **Type pairing.** Display = Zen Kaku Gothic New (700/900). English accents = Bricolage Grotesque all-caps with `letter-spacing: 0.18em`. Body = Noto Sans JP at line-height 1.85.
- **Motion is water, not springs.** `cubic-bezier(0.22, 0.61, 0.36, 1)`, 280ms default. No bounce easings, no parallax-on-everything.
- **Iconography is Lucide** (substituted — see Caveats in README). Stroke 1.5px, rounded line-cap.
- **Imagery is cool, cinematic, and ocean-leaning.** No flexed-bicep gym shots.

## Caveats to surface to the user

When applying this skill, mention these so the user knows where to push back:

1. Logo, fonts, and exact color hexes are **proposals** — no source material was attached when this system was created.
2. Lucide is a **substitution** for an unprovided icon set.
3. All photography in the kit is **placeholder SVG**.
