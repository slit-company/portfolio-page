# Team Mint Recruit Design System

## 1. Atmosphere & Identity

This build keeps the original recruiting content and document-like reading rhythm. The header follows the provided reference screenshot: a flat 48px white bar, fixed logo block on the left, five evenly distributed navigation columns across the middle, and a compact more icon on the right.

## 2. Color

### Palette

| Role | Token | Light | Dark | Usage |
|------|-------|-------|------|-------|
| Surface/primary | --tm-surface | #FFFFFF | #111111 | Page background |
| Surface/header | --tm-header-surface | #FFFFFF | #111111 | Sticky flat header |
| Surface/nav active | --tm-nav-active-bg | rgba(55, 53, 47, 0.06) | rgba(255, 255, 255, 0.1) | Subtle nav hover fill |
| Surface/nav hover | --tm-nav-hover-bg | rgba(55, 53, 47, 0.06) | rgba(255, 255, 255, 0.1) | Passive nav hover |
| Surface/popover | --tm-nav-panel-bg | #FFFFFF | #111111 | Flat submenu strip |
| Surface/soft | --tm-soft | rgba(55, 53, 47, 0.06) | rgba(255, 255, 255, 0.08) | Notion callouts and muted blocks |
| Text/primary | --tm-text | rgb(55, 53, 47) | #F5F5F5 | Body, headings, navbar |
| Text/muted | --tm-muted | rgba(55, 53, 47, 0.65) | rgba(245, 245, 245, 0.72) | Breadcrumbs and secondary copy |
| Text/faint | --tm-faint | rgba(55, 53, 47, 0.45) | rgba(245, 245, 245, 0.48) | Table meta labels |
| Border/subtle | --tm-border | rgba(55, 53, 47, 0.13) | rgba(245, 245, 245, 0.18) | Notion dividers and tables |
| Accent/nav | --tm-nav-accent | rgb(102, 157, 253) | rgb(102, 157, 253) | Optional nav focus accent |
| Accent/mint | --tm-mint | rgb(154, 226, 196) | rgb(154, 226, 196) | Brand highlights and progress |

### Rules

- White remains the dominant page surface. Header depth comes from a single bottom divider, not blur or elevation.
- Navigation text stays black in the resting layout; accents are reserved for focus and subtle interaction details.
- Decorative gradients, orbs, and heavy card shadows are not part of this system.

## 3. Typography

### Scale

| Level | Size | Weight | Line Height | Tracking | Usage |
|-------|------|--------|-------------|----------|-------|
| Page title | 30px | 700 | 1.3 | 0 | Nav-linked page title |
| Notion H1 | 28px | 700 | 1.35 | 0 | Main Korean statement |
| Notion H2 | 24px | 700 | 1.4 | 0 | Section headers |
| Body | 14px | 400 | 1.65 | 0 | Paragraphs and tables |
| Body strong | 14px | 700 | 1.65 | 0 | Inline emphasis |
| Nav | 16px | 700 | 48px | 0 | Top navigation |
| Breadcrumb | 12px | 400 | 24px | 0 | Oopy title path |

### Font Stack

- Primary: var(--font-gothic-a1), system-ui, -apple-system, BlinkMacSystemFont, sans-serif
- Mono: var(--font-geist-mono), ui-monospace, SFMono-Regular, Menlo, monospace

### Rules

- Korean text uses `break-keep` for headings and natural wrapping for paragraphs.
- Letter spacing stays at `0`; the original page does not use tight display tracking.

## 4. Spacing & Layout

### Base Unit

All spacing derives from a base of 4px.

| Token | Value | Usage |
|-------|-------|-------|
| --tm-space-1 | 4px | Optical nudges |
| --tm-space-2 | 8px | Inline gaps |
| --tm-space-3 | 12px | Table rows and captions |
| --tm-space-4 | 16px | Breadcrumb/header interior |
| --tm-space-5 | 20px | Compact cards |
| --tm-space-6 | 24px | Mobile page margins |
| --tm-space-10 | 40px | Section separation |
| --tm-space-14 | 56px | Medium Notion block gap |
| --tm-space-20 | 80px | Home hero-to-heading gap |
| --tm-space-28 | 112px | Nav page top offset |

### Grid

- Max shell width: 1100px.
- Content column: 908px, centered inside the shell.
- Header height: 48px.
- Desktop content left edge at 266px on a 1440px viewport.
- Mobile content margin: 24px.

### Rules

- Fixed-format media uses explicit aspect ratios to prevent layout shift.
- Tables remain compact and divider-first, matching Notion/Oopy defaults.

## 5. Components

### Site Header

- Structure: sticky flat header, 188px logo block, five equal desktop nav columns, 48px more menu trigger, mobile drawer below 800px.
- Spacing: 48px height, no horizontal page padding on the header shell; logo image starts 12px from the viewport.
- States: resting nav text is black and bold; hover/focus remains quiet with no pill, no rounded rail, and no glass surface.
- Panel: child pages open in a flat white strip directly below the header, aligned to the active nav column.
- More menu: opens a compact flat white action list aligned to the right edge, using the same divider-first surface language as the header.
- Motion: opacity and translate only, 140-160ms standard easing.

### Notion Content Column

- Structure: breadcrumb, article, page title/statement, paragraphs, media, tables, callouts.
- Spacing: page title starts at roughly y=207px on desktop nav pages; home hero starts at y=99px.
- States: links underline on hover; cards lift subtly only where the original has cards.
- Accessibility: semantic headings, links, tables/lists, and alt text for meaningful images.

### Bottom CTA

- Structure: fixed black CTA bar on the home page/mobile view.
- Spacing: 48px height, 24px side inset on mobile, 908px centered on desktop home.
- States: hover remains black, focus ring visible.

## 6. Motion & Interaction

### Timing

| Type | Duration | Easing | Usage |
|------|----------|--------|-------|
| Micro | 120ms | ease-out | Button and link hover |
| Standard | 160ms | cubic-bezier(0.22, 1, 0.36, 1) | Navbar underline and dropdown |
| Reveal | 460ms | cubic-bezier(0.22, 1, 0.36, 1) | Subtle content entry |

### Rules

- Use Motion for navbar submenu and reveal interactions.
- Animate only `opacity` and `transform`.
- Respect reduced motion by rendering final states without animation.

## 7. Depth & Surface

### Strategy

Mixed, but restrained: dividers and tonal soft blocks dominate; the header itself remains flat.

| Level | Value | Usage |
|-------|-------|-------|
| Divider | 1px solid var(--tm-border) | Tables, horizontal rules |
| Soft block | var(--tm-soft) | Callouts and notices |
| Header divider | 1px solid rgba(55, 53, 47, 0.09) | Sticky navigation |
| Submenu divider | 1px solid rgba(55, 53, 47, 0.09) | Flat child menu strip |
