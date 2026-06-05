## Goal
Fix the flat/clinical feel of the current light theme by pushing typographic contrast to true charcoal, adding architectural floating shadows, letting the botanical imagery carry the color, and auditing every surface for readability. No layout or content changes.

## 1. Typography contrast (`src/styles.css` + `src/routes/index.tsx`)
- `--foreground`: bump from `oklch(0.20 0.005 270)` to a near-black `oklch(0.145 0.005 270)` (≈ #111111) so body, nav, and labels read as solid charcoal.
- `--muted-foreground`: tighten from `oklch(0.45 …)` to `oklch(0.32 0.008 270)` so secondary text and eyebrow labels stop washing out (kept above placeholder weight).
- `--border` / `--input`: raise alpha from `0.12 / 0.18` to `0.16 / 0.24` so hairlines around form fields, image frames, and dividers actually read.
- In `index.tsx`, raise serif heading weight from the current light tier to `font-medium` (or inline `font-weight: 500`) on the hero h1, section h2s, and project titles for an authoritative, sharp set. Keep tracking/leading untouched.
- Sweep `text-muted-foreground/70`, `text-foreground/60`, `opacity-70`, etc. on nav links, footer, captions, and form helper text — drop to `/85` minimum or remove the opacity entirely.

## 2. Architectural depth (shadows)
Rewrite `.shadow-gallery` in `src/styles.css` to a layered, high-spread, low-opacity stack so cards/forms/image frames feel like they're floating off the paper:

```
box-shadow:
  0 1px 2px oklch(0.145 0.005 270 / 0.04),
  0 8px 24px -12px oklch(0.145 0.005 270 / 0.06),
  0 32px 64px -32px oklch(0.145 0.005 270 / 0.05);
```

Add a stronger `.shadow-gallery-lg` variant for the hero image and contact form panel (deeper second layer, ~8% black, 80px spread). Apply `shadow-gallery-lg` to: hero image frame, contact form `<form>` panel. Keep `shadow-gallery` on project tiles and studio image.

## 3. Botanical heroes (imagery)
- Add a `.botanical-frame img` utility in `styles.css` with `filter: saturate(1.12) contrast(1.04);` so the project/hero photography reads as the only saturated surface against the white page. No filter on UI chrome.
- Apply the `botanical-frame` class to the hero image wrapper, all `src/assets/projects/*` tiles, and the studio portrait wrapper in `index.tsx`.
- Confirm asymmetric crop classes (`aspect-[4/5]`, `aspect-[3/4]`, offset translate utilities) remain — no layout change, just saturation/contrast + the new floating shadow.
- Hairline frame: wrap each image in a `ring-1 ring-foreground/8` so the saturated photo sits inside a crisp architectural edge on white.

## 4. Readability audit (`src/routes/index.tsx`)
Grep and correct, in this order:
- **Top utility bar / social icons** — strokes to `text-foreground` (true charcoal), hover `text-bronze`. Remove any `/60` `/70` opacity.
- **Nav links** — `text-foreground` solid, hover `text-bronze`, active state underlined hairline.
- **Buttons** — primary CTA: `bg-primary text-primary-foreground` (botanical green on near-white) confirmed; outline/ghost: `text-foreground border-foreground/20`, hover `text-bronze border-bronze/50`. Submit button label must be solid charcoal at rest, not muted.
- **Contact form inputs** — input text `text-foreground`, placeholder `text-muted-foreground` (new darker token), bottom hairline `border-foreground/20`, focus ring botanical green at 40% alpha (already wired via `--ring`).
- **Footer** — copy `text-foreground/85`, links `text-foreground` hover `text-bronze`, hairline top border `border-foreground/15`.
- **Captions / metadata under project tiles** — drop to the new tightened `text-muted-foreground` (no extra opacity).

## What is NOT changing
Layout, spacing scale, section order, copy, image crops, asymmetric grid, motion timing, SEO metadata, Netlify form attributes, palette hue (still gallery white + botanical green + bronze hover).

## Files touched
- `src/styles.css` — token contrast bumps, layered shadow utilities, botanical-frame utility.
- `src/routes/index.tsx` — heading weights, image wrapper classes, opacity/contrast sweep on nav/footer/form/buttons.

## Verification
Open preview at desktop + 634px mobile widths. Confirm: charcoal text reads true black against off-white; hero/form visibly float with soft halo; project photos pop with deeper green; no `/60`–`/70` faded text remains on nav, buttons, inputs, or footer; bronze hover still triggers on links and CTAs.