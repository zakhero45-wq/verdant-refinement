## Goal
Flip the current dark emerald palette to a crisp, gallery-white luxury aesthetic while preserving the existing structure, typography hierarchy, imagery, and biophilic mood. No layout or content changes — color, contrast, and surface treatment only.

## Scope
- `src/styles.css` — rewrite token values (background, foreground, card, muted, border, input, primary, accent, ring, sidebar tokens, selection color, atmosphere/grain overlays).
- `src/routes/index.tsx` — audit any hardcoded color classes (e.g. `text-white`, `bg-black`, `bg-emerald-…`, `text-[oklch(...)]`, opacity overlays on hero, form field styles, footer) and replace with semantic tokens so nothing renders white-on-white.
- `src/routes/__root.tsx` — verify 404/error screens render correctly on light bg (already use tokens, just confirm).

## Palette
- `--background`: near-white `oklch(0.985 0.002 95)` (≈ #FAFAFA, warm)
- `--foreground`: deep charcoal `oklch(0.18 0.005 270)` (≈ #1A1A1A)
- `--card`: pure white `oklch(1 0 0)` with hairline border
- `--muted`: `oklch(0.955 0.004 95)`; `--muted-foreground`: `oklch(0.42 0.01 270)`
- `--border` / `--input`: charcoal at 10–14% alpha (hairlines)
- `--primary`: deep botanical green `oklch(0.38 0.07 150)` for primary CTA fill, with white foreground
- `--accent` (hover): muted bronze `oklch(0.55 0.08 60)` — used for link/button hover luminance
- `--ring`: botanical green at 40% alpha
- Selection: soft sage tint on charcoal text

## Surface & depth
- Replace heavy dark vignette in `.atmosphere` with an extremely faint warm-paper haze (top) + barely-there cool shade (bottom) so the page reads as gallery white, not flat.
- Keep `.grain-overlay` but drop opacity (~0.035) and switch `mix-blend-mode` to `multiply` so grain sits as paper texture, not a glow.
- Add a `shadow-gallery` utility (soft, low-spread, ~6% black) for cards, the contact form panel, and image frames to avoid a clinical look. Botanical project images remain full-bleed and untouched — they become the only saturated color on the page.

## Component behavior
- Buttons: primary = solid botanical green on white; hover shifts to muted bronze via background + subtle luminance, keeping the existing `ease-cinema` timing.
- Outline / ghost buttons and nav links: charcoal text, hairline border where applicable, hover swaps text color to bronze and underline-offset accent.
- Contact form: white card on off-white page, charcoal serif italic inputs, hairline bottom borders, focus ring in botanical green.
- Top utility bar / social icons: charcoal strokes, hover to bronze.
- Footer: off-white with charcoal text, hairline top border.

## Audit pass (readability)
Grep `src/routes/index.tsx` for: `text-white`, `text-neutral`, `text-stone`, `bg-black`, `bg-emerald`, `bg-neutral-9`, inline `oklch(`/`#fff`/`rgba(255`, `border-white`, `placeholder:text-white`, hero gradient overlays. Each occurrence either swapped to semantic token (`text-foreground`, `bg-background`, `border-border`, `bg-card`, `text-muted-foreground`) or, for hero image overlays, retuned so text on top of imagery uses a white-on-image scrim where needed for legibility — confirm no white text lands on white surface.

## What is NOT changing
- Layout, spacing, typography scale, serif/sans pairing, image crops, asymmetric grid, motion timing, copy, SEO metadata, Netlify form attributes.

## Verification
After edits: open preview at desktop and mobile widths, scroll the full page, and inspect hero, project grid, studio section, contact form, footer, and 404 — confirm contrast, hover states (bronze), and that no element disappears against the new white background.
