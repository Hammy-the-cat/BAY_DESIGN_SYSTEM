# BAYトレ — Design System

## Current Website (September 2026)

The live landing page is the root `index.html`, with styles in
`ui_kits/landing_page/site.css` and progressive interactions in
`ui_kits/landing_page/site.js`. Open the root HTML directly to preview; no build
step, React runtime, or CDN connection is required. The nested landing-page
entry redirects to the root and preserves the URL fragment.

The gym name is unchanged. The current logo is the owner-supplied image at
`assets/bay-monogram-logo.png`, preserved without image edits. The LP uses the
owner's actual studio/training photos and two supplied recordings as subdued
background media. The three AI-generated training photos have been removed.
Confirm prices, program details, credentials, and studio/contact
information with the owner before publishing.

The earlier JSX components, `styles.css`, tokens, and the design-system notes
below are retained as historical reference; they do not style the current LP.
Edit the three current website files above for future LP changes.

The separate `profile.html` page is linked only from the LP footer, keeping the
main booking flow unchanged. It uses `ui_kits/landing_page/profile.css`, the
owner-provided introduction, and the unedited `assets/bay-profile-background.png`.
Profile text represents the owner's supplied statements, not independently
verified claims.

Background media: `bay-studio-interior.png`, `bay-bodyweight-training.png`,
`bay-pullup-training.mp4` (172007 recording), and `bay-balance-training.mp4`
(171853 recording), all in `assets/`. Original files are preserved without
cropping or re-encoding. Videos play muted only while their section is visible,
with a pause button. Reduced-motion and data-saving preferences disable automatic
playback; the supplied photo remains as the poster. No video source is loaded
until playback is needed. The original recordings total approximately 28 MB.

Structure references: [RIZAP](https://www.rizap.jp/) and
[THE PERSONAL GYM](https://the-personal-gym.com/). No third-party copy or imagery
is used in the remake.

> **海を整えるように、身体を整える。**
> Ocean-inspired training, designed by physical therapists.

---

## Brand Context

**BAYトレ (bay_traininggym)** is a Japanese personal-training gym based in Miyazaki Prefecture, with two studios (Nichinan / 日南店 — currently full, and Miyakonojo / 都城店 — accepting trial bookings via DM). The training method is developed by **physical therapists (理学療法士)** and focuses on correcting **posture × movement (姿勢×動作)** to build the user's "ideal body" without injury.

The owner is an avid **surfer**, and the brand carries that energy throughout: clean, salt-air, water-blue, sunlit, never gritty or aggressive in the way most gym brands are. BAYトレ is closer to a coastal wellness studio than a hardcore weight room — it sells **alignment and ease of movement**, not intimidation.

### Products / surfaces

1. **Landing page (LP)** — primary surface. Sells the BAY method, lists location availability, funnels trial bookings into Instagram DMs, and promotes the **7-day body reset (7日ボディリセット)** entry program.
2. **Online program (BAYトレ オンライン)** — remote / digital extension of the in-person training.
3. **Athlete development track (アスリート育成)** — sub-program inside the LP for sports athletes.

### Audience

- 20–45 year-olds in southern Kyushu (Miyazaki area) wanting to fix posture, recover from injury, or train for their sport.
- People who would feel out of place in a typical chain gym — wellness-leaning, design-aware.
- Athletes looking for PT-grade conditioning.

### Source materials provided

- **Brand description** (in chat): tagline, locations, services, owner's background.
- **Owner direction**: ocean / surf-inspired, clean and refreshing (さわやか).
- **No codebase, Figma, or visual assets were attached** — this system is composed from the description. Logo, color values, and typography are **proposals** to be reviewed; see *Caveats* at the bottom.

---

## Index

| File | Purpose |
|---|---|
| `README.md` | This file — brand context, content & visual foundations, iconography. |
| `colors_and_type.css` | All design tokens — colors, type scale, spacing, radii, shadows. |
| `SKILL.md` | Agent-Skill manifest so this folder works as a Claude Code skill. |
| `fonts/` | (Empty — Google Fonts loaded by URL; see *Typography*.) |
| `assets/` | Logo wordmark, wave mark, motif SVGs, placeholder photography slots. |
| `preview/` | Design-system preview cards (registered to the Design System tab). |
| `ui_kits/landing_page/` | Hi-fi LP recreation — `index.html` + JSX components. |

---

## Content Fundamentals

The voice is **calm, confident, and a little poetic** — never shouty. It mirrors how the owner would describe surfing: a thing you do *with* your body, not *to* it.

### Language & casing
- **Primary language: Japanese.** English is used as accent / display layer only ("BAY", "RESET", section labels). Never translate the body copy to English unless the user asks.
- Japanese body copy uses **です/ます調** (polite form), not casual です抜き or aggressive 命令形.
- English accents are usually **all-caps** and tracked out (`letter-spacing: 0.18em`), used like a graphic element, not a sentence.

### Tone
- **First-person stance**: the gym speaks as "私たち" / "BAYトレ". The user is "あなた" sparingly — usually copy is impersonal/aspirational ("理想の身体へ") rather than directly addressing.
- **Verbs over adjectives**: "整える / 動かす / 戻す / 流れる" — physical, kinetic verbs.
- **Avoid**: 痩せる, 限界, 追い込む, 結果にコミット — the dieting/intensity vocabulary common in Japanese gym ads. BAYトレ is the opposite of that.

### Examples (real / lifted from the brief)

| Line | Why it works |
|---|---|
| 理学療法士考案のトレーニングで、姿勢×動作を整え、理想の身体に。 | Lead with credentials → method → outcome. No exclamation. |
| 7日ボディリセット、体験受付中。 | Short. Two beats. Date-able. |
| 日南店：満員 / 都城店：体験予約はDMから✉️ | Status-as-copy. Treats availability like surf conditions. |

### Emoji
- **Used sparingly** in operational copy (📍 for locations, ✉️ for DM, 🏋️‍♀️/🌿 for category tags) — these come straight from the brief.
- **Never** in headlines or hero copy.
- In UI, prefer the brand's icon set over emoji.

### Microcopy patterns
- CTA primary: **体験を予約する** / **DMで予約**
- CTA secondary: **コースを見る** / **詳しく**
- Section labels (English, all-caps): `METHOD` / `PROGRAM` / `STUDIO` / `ONLINE` / `TRAINER`
- Status pills: `満員 / SOLD OUT`, `受付中 / OPEN`, `残りわずか / FEW LEFT`

---

## Visual Foundations

The system is built on three motifs, all drawn from the ocean:

1. **Horizon** — long horizontal type, generous letter-spacing on English, full-bleed photo bands.
2. **Tide** — soft gradient washes from `--ocean-100` to white, used as section backgrounds; never bright or saturated gradients.
3. **Foam** — rounded, soft shapes; high-radius cards (20–28px); subtle inner highlights, never hard shadows.

### Color

Three families, ocean-grounded:

- **Ocean (primary)** — `--ocean-100` foam → `--ocean-500` sea → `--ocean-900` deep. Used for headlines, CTAs, dividers, link text.
- **Sand (neutral)** — `--sand-50` paper → `--sand-900` driftwood. All backgrounds and body type live here. *Never* pure white or pure black.
- **Sunrise (accent)** — `--coral-500`. Used **once per screen, max** — typically on the primary CTA or a single status pill. Restraint is the rule.

Semantic tokens (`--success`, `--warning`, `--danger`) are tuned to feel like the same coastline at different moments of day, not the standard green/yellow/red traffic-light set.

### Type

| Role | Font | Use |
|---|---|---|
| Display (JP) | **Zen Kaku Gothic New** 700/900 | Hero kanji, big numerics |
| Display (EN accent) | **Bricolage Grotesque** 600/700 | All-caps section labels, English accents |
| Body | **Noto Sans JP** 400/500/700 | Paragraphs, UI |
| Mono | **JetBrains Mono** 400/500 | Times, dates, prices |

All from Google Fonts — see *Caveats*. Type scale is tight at the top (display only goes to 80px on web) and generous in body — body line-height is 1.85 for Japanese readability.

### Spacing

8-pt baseline. Scale: `4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128`. Section paddings on the LP are 96–128 vertical, 24 horizontal on mobile. **Generous** white space — air and salt-air should feel adjacent.

### Backgrounds

- Default page: `--sand-50` (warm off-white), never `#FFFFFF`.
- Section accent: linear-gradient top→bottom from `--ocean-100` to `--sand-50` ("tide wash"), or a flipped version for a sunrise feel.
- Hero: full-bleed ocean / surf photography (placeholder slots in this kit), with a 30% deep-ocean overlay so headline type stays legible.
- **No** repeating patterns, no noise textures, no hand-drawn doodles. The only graphic motif is a single thin wave-line (see `assets/wave-line.svg`).

### Borders & corners

- Hairline borders: `1px solid var(--ocean-100)` on cards.
- Radii: `--radius-sm 8px / --radius 16px / --radius-lg 24px / --radius-pill 999px`. **Default radius is 16px**; cards use 24px; pills/tags use 999px. No sharp corners except on full-bleed bands.

### Shadows

Soft and salt-aired. Two layers only:

- `--shadow-sm`: `0 1px 2px rgba(11,42,62,0.04), 0 2px 8px rgba(11,42,62,0.04)` — resting cards.
- `--shadow-lg`: `0 8px 24px rgba(11,42,62,0.08), 0 24px 48px -12px rgba(11,42,62,0.10)` — overlays, hover-lifted CTAs.

No inner shadows. No colored shadows.

### Hover & press states

- **Hover** (links): underline emerges from below using `text-decoration-color` transition, 200ms.
- **Hover** (buttons): translate-Y(-1px) + shadow steps from sm→lg, background darkens 6% (mix with `--ocean-900` 6%).
- **Press**: translate-Y(0) + scale(0.98), 80ms ease-out.
- **Focus**: 2px outline `--ocean-500` with 2px offset — visible, never removed.

### Animation

Calm, never bouncy. The brand is water, not springs.

- Default easing: `cubic-bezier(0.22, 0.61, 0.36, 1)` (a slow-out wave).
- Default duration: 280ms for UI, 600–800ms for hero entrances.
- **No** spring/bounce easings. **No** parallax-on-everything. A single subtle fade-up + fade-in is the entrance vocabulary.
- Decorative: a slow wave-line SVG that draws on `<svg> stroke-dashoffset` over 1.4s when scrolled into view. That's it.

### Imagery

- Cool, not warm. Slight blue cast on photography (`filter: saturate(1.05) hue-rotate(-3deg)`).
- Subjects: ocean horizons, surfboards on sand, training in motion (back-lit, mid-action), never posed flexed-bicep gym shots.
- Aspect: prefer 3:2 or 16:9 cinematic landscape. Portraits cropped tight, never full-body posed.
- Grain: optional, very subtle (`opacity: 0.03` overlay).

### Layout rules

- Max content width: 1200px. Hero may be full-bleed.
- Sticky header is **transparent over hero** with a backdrop-blur, then opacifies (`--sand-50/95`) once scrolled past hero.
- Mobile breakpoint: 768. Mobile is the **primary** target — most users land from Instagram.
- Cards never sit on pure white; they sit on `--sand-50` with a `--ocean-100` hairline.

### Transparency & blur

- `backdrop-filter: blur(12px)` on the sticky header and any modal backdrop.
- Hero overlays: `rgba(11, 42, 62, 0.32)` — never solid black.

---

## Iconography

BAYトレ has no provided icon set. The system uses:

- **Lucide** (CDN, `lucide@latest`) as the primary icon font. Stroke-based, 1.5px weight, rounded line-cap — these match the soft / salt-air feeling of the brand. Used at 20px in body and 24–28px in UI chrome.
- **Custom marks**: a single wave-line SVG (`assets/wave-line.svg`) and a wordmark / mark pair (`assets/logo-wordmark.svg`, `assets/logo-mark.svg`) — these are the only bespoke marks.
- **Emoji**: only the operational ones from the brief (📍 ✉️ 🏋️‍♀️ 🌿). Not for decoration.
- **Unicode glyphs**: the JIS bracket pairs 「 」are used as quote marks in JP copy. `→` (U+2192) is used in CTAs ("詳しく →").

> **Substitution flag**: Lucide is a substitution because no icon system was provided. If you have brand-specific icons (or want a different set — e.g. Phosphor Duotone), swap `assets/icons/` and update the `<link>` in `colors_and_type.css`.

---

## Caveats — please review

These are **proposals** because the brief did not include source material. Please confirm or correct:

1. **Logo** — `assets/logo-wordmark.svg` is a wordmark I designed (BAY in display + トレ in JP gothic + a wave underline). If you have an existing logo, drop it in and I'll re-derive the type and color from it.
2. **Fonts** — *Zen Kaku Gothic New, Bricolage Grotesque, Noto Sans JP, JetBrains Mono* are all Google-Fonts substitutions. Tell me if the brand has licensed display fonts (e.g. AXIS Std, FOT-Tsukushi, Klim, etc.) and I'll swap.
3. **Color values** — The ocean / sand / sunrise palette is derived from the surf direction, but exact hex values are my proposal. If the owner's surfboard / shop signage / Instagram grid has specific hues, share a photo and I'll reconcile.
4. **Photography** — `assets/` contains placeholder slots only. Real ocean / training photography would be needed for a production LP.
5. **Iconography** — Lucide substitution as noted above.

---

*— BAYトレ Design System, v0.1*
