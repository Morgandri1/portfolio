# Handoff: Morgan Metz — Personal Site (3a, 3b) + Resume (1f)

## Overview
Personal homepage for Morgan Metz, software engineer (blockchain / systems / security). Two final homepage layouts were chosen — **3a Rail** and **3b Single column** — plus a one-page printable resume, **1f Ledger**. Direction: dark, small type, lots of room, no imagery, no hero, no case studies.

## About the Design Files
The HTML files in this bundle are **design references** — static prototypes showing intended look and copy, not production code. Recreate them in the target codebase's existing stack (React/Next, Astro, etc.) using its patterns. If no codebase exists yet, a static site (Astro or Next static export) is the recommended fit: the content is fixed, there is no state, and the pages should be fast and plain.

## Fidelity
**High-fidelity.** Colors, type sizes, spacing and copy are final. Recreate pixel-accurately. Desktop mocks are drawn at 1280px wide; mobile mocks at 390px wide (iPhone 14/15 class).

---

## Screen: Homepage — 3a Rail (`site-3a-rail.html`)

**Layout**
- Page: background `#0e0e0e`, text `#d6d6d2`, font `'Helvetica Neue', Helvetica, Arial, sans-serif`, 15px / 1.6.
- CSS grid, `grid-template-columns: 232px minmax(0, 1fr)`, min-height 100vh.
- **Left rail** (232px): padding `60px 40px 48px`; right border `1px solid rgba(255,255,255,.07)`; flex column, gap 56px. Should be sticky (`position: sticky; top: 0; height: 100vh`) in production.
  - Name block (gap 2px): "Morgan Metz" (`#d6d6d2`) / "Software engineer" (`#8b8b87`).
  - Nav, 13px, flex column gap 12px: About (active, `#d6d6d2`), Work, Open source, Contact (`#8b8b87`, hover `#d6d6d2`). Anchor-links to sections on the same page.
  - Bottom (margin-top: auto), 13px, gap 6px: GitHub.
- **Main column**: padding `60px 96px 48px`, max-width 760px, flex column gap 48px.

**Sections (main column)**
1. **Intro** (gap 18px)
   - 17px: "I build systems that hold up when it matters: distributed infrastructure, smart contracts securing $30M+, and the security around them. Most of it is open source."
   - 15px `#8b8b87`: "I'm 18. I got here by taking things apart — CTFs at 14 (highest Cyberstart America score in Virginia), then contracts, then whole platforms. Rust and TypeScript, mostly."
2. **Section header pattern** (Work / Open source / Contact): 13px `#8b8b87`, `padding-bottom: 10px`, `border-bottom: 1px solid rgba(255,255,255,.07)`. Section rows gap 11px.
3. **Work** — rows are grid `150px 1fr auto`, gap 16px. Company (`#d6d6d2`) · role (`#8b8b87`) · dates (`#8b8b87`, right):
   - Avo · Software Engineer · 2026 – Present
   - Hydex · Software Engineer · 2025 – 2026
   - CargoLabs · Software Engineer, contract · 2024
   - Stakit Systems · Software Engineer, contract · 2023 – 2024
   - DegenDevs · Contractor · 2022 – 2025
4. **Open source** — grid `150px 1fr`, gap 16px:
   - Upstream (`#8b8b87`): Zed, Solders, interactions.py, Fusion Core Finance
   - Own (`#8b8b87`): Nebula — NFT marketplace on CosmWasm / SandwichRelay — MEV research fork of the Jito relayer / ObjScript — JSON DSL for portable agent scripts (one per line)
5. **Contact** — flex row, gap 24px, wraps:
   - Email `morgan.metz@eyekon.xyz`: `#d6d6d2`, underline, `text-underline-offset: 3px`, decoration color `#4a4a47` → `#d6d6d2` on hover.
   - GitHub, LinkedIn, Resume: `#8b8b87`, no underline, hover `#d6d6d2`.

## Screen: Homepage — 3b Single column (`site-3b-single-column.html`)

**Layout**
- Same background, text color, font, 15px / 1.6.
- Page padding `150px 0 72px`; content column **560px** centered; flex column gap 28px; column fills height so the footer links sit at the bottom (`margin-top: auto`).

**Content (top to bottom)**
1. "Hi, I'm Morgan."
2. "I build systems that hold up when it matters: distributed infrastructure, smart contracts securing $30M+, and the security around them. Most of it is on GitHub." — "GitHub" is an inline link: `#d6d6d2`, underline offset 3px, decoration `#4a4a47` → `#d6d6d2` on hover.
3. `#8b8b87`: "I'm 18. I got here by taking things apart — CTFs at 14, then contracts, then whole platforms. Rust and TypeScript, mostly."
4. Work list (margin-top 28px, gap 11px) — same rows and grid as 3a (no header).
5. Open source row (margin-top 12px): grid `150px 1fr`; "Open source" `#8b8b87` · "Zed, Solders, interactions.py, Fusion Core Finance".
6. Footer links (margin-top auto), gap 24px, `#8b8b87` → hover `#d6d6d2`: Email · GitHub · LinkedIn · Resume.

## Screen: Homepage — 3a Rail, mobile (`site-3a-rail-mobile.html`)

Applies below ~900px. Same colors, font, 15px / 1.6 body, same copy as desktop.

- **Top bar** (replaces the rail): padding `24px 24px 14px`, bottom border `1px solid rgba(255,255,255,.07)`, flex column gap 14px.
  - Row 1 (space-between, baseline): name block "Morgan Metz" / "Software engineer" (`#8b8b87`) left; GitHub (13px, `#8b8b87`) right.
  - Row 2: nav, 13px, flex row gap 20px, wraps — About (active `#d6d6d2`), Work, Open source, Contact. Optionally sticky at top.
- **Main**: padding `36px 24px 40px`, flex column gap 40px.
  - Intro: gap 16px; first paragraph 17px, second `#8b8b87`.
  - Section headers: same pattern as desktop (13px muted, 10px padding-bottom, hairline). Rows gap 12px.
  - **Work rows stack**: line 1 = company (left) + dates (`#8b8b87`, right, space-between, gap 12px); line 2 = role (`#8b8b87`).
  - Open source: label (`#8b8b87`) above value instead of side-by-side (Upstream, Own).
  - Contact: email (underlined style) on its own line, then GitHub · LinkedIn · Resume (gap 20px, wraps).

## Screen: Homepage — 3b Single column, mobile (`site-3b-single-column-mobile.html`)

Applies below ~640px.

- Page padding `72px 24px 40px`; column 100% wide, flex column gap 24px, fills height.
- Same three intro paragraphs as desktop.
- Work list: margin-top 20px, gap 12px, **stacked rows** (company + dates on line 1, role on line 2), same as 3a mobile.
- Open source: margin-top 8px; label "Open source" (`#8b8b87`) above "Zed, Solders, interactions.py, Fusion Core Finance".
- Footer links: margin-top auto, padding-top 32px, gap 20px, wraps — Email · GitHub · LinkedIn · Resume.

## Screen: Resume — 1f Ledger (`resume-1f-ledger.html`)

One-page, US Letter (816 × 1056 px at 96dpi), light, meant for print. **All contact links are printed as plain text URLs** (they stay clickable in the PDF).

**Layout**
- Sheet background `#f5f5f3`, text `#1b1c20`, muted `#70747c`. Font `'IBM Plex Mono'` (Google Fonts, 400/500), 11.5px / 1.5. Padding `36px 56px`.
- **Header** (flex, space-between, padding-bottom 14px): "MORGAN METZ" (uppercase, letter-spacing .06em) left; right, gap 16px, `#70747c`: `morgan.metz@eyekon.xyz` · `(434) 260-9485` · `github.com/morgandri1` · `linkedin.com/in/morgandri1`.
- **Every row** is grid `140px 1fr`, gap 16px.
- **Section label rows** (Profile, Experience, Projects, Skills): top border `1px solid #1b1c20` (solid ink); label `#70747c`, uppercase, letter-spacing .06em, 10.5px. Sections after the first get margin-top 4px.
- **Entry rows** inside a section: top border `1px solid rgba(0,0,0,.12)`; padding 5px (experience) / 6px (projects, misc).
- Experience entry: left = dates (`#70747c`); right = **Company** (500) + " · Role" (`#70747c`), then bullets as `-` (muted) + text, gap 10px.
- Projects: left = project name (500), right = description.

**Copy** — see `resume-1f-ledger.html`; it is the exact final text (Profile, 5 jobs with bullets, 3 projects, Open source, Skills, Awards).

---

## Interactions & Behavior
- Hover: muted links go `#8b8b87` → `#d6d6d2`; underlined links change decoration color `#4a4a47` → `#d6d6d2`. No transition specified; a 120ms color transition is fine.
- 3a nav: in-page anchors; highlight the active section (`#d6d6d2`) on scroll (IntersectionObserver).
- "Resume" link → the resume PDF (export of 1f) or a `/resume` route rendering 1f.
- LinkedIn: `https://linkedin.com/in/morgandri1`. No X/Twitter link for now.
- **Responsive:** 3a switches to the mobile layout below ~900px, 3b below ~640px (see mobile screens above). Between 640px and the desktop widths, keep the desktop layout with reduced side padding (24–48px).

## State Management
None. Static content.

## Design Tokens
- Site bg `#0e0e0e` · text `#d6d6d2` · muted `#8b8b87` · underline `#4a4a47` · hairline `rgba(255,255,255,.07)`
- Resume bg `#f5f5f3` · ink `#1b1c20` · muted `#70747c` · hairline `rgba(0,0,0,.12)`
- Type: Helvetica Neue (site) 13 / 15 / 17px; IBM Plex Mono (resume) 10.5 / 11.5px; weights 400 / 500
- Spacing used: 2, 6, 10, 11, 12, 16, 18, 24, 28, 48, 56px
- No radii, no shadows.

## Assets
None — no images or icons. Fonts: system Helvetica Neue; IBM Plex Mono from Google Fonts.

## Files
- `site-3a-rail.html` — homepage, rail layout
- `site-3b-single-column.html` — homepage, single column
- `site-3a-rail-mobile.html` — 3a at 390px
- `site-3b-single-column-mobile.html` — 3b at 390px
- `resume-1f-ledger.html` + `doc-page.js` — printable one-page resume (doc-page.js is only the preview/print shell)
