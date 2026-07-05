# Adhen Portfolio Design Signature

This file defines the visual language for the portfolio. Use it before adding any new section, asset, component, or animation so the site stays consistent instead of drifting into generic template design.

## Design Position

The portfolio should feel like a polished AI product-builder identity: technical, calm, precise, and human. The signature is a mix of blue cinematic hero lighting, pale aqua product surfaces, clean white engineering sections, orange project accents, colorful achievement cards, and a black pixel footer.

Avoid making it feel like an AI-generated landing page. The site should not use vague feature cards, decorative filler metrics, random gradients, generic dashboard screenshots, or mismatched icon styles.

## Core Principles

- Resume-first visuals: visuals must support Adhen's actual work in AI, APIs, dashboards, data, learning products, and communities.
- Code-native text: headings, buttons, project copy, links, and labels remain real HTML text. Images are for art, tile skins, and complex decorative frames.
- Fewer stronger moments: each section gets one clear visual idea. Do not add many small decorative widgets.
- Consistent geometry: hero frame, bento cards, isometric tiles, project cards, achievement cards, and footer blocks all use crisp rectangular geometry with restrained radius.
- High contrast where it matters: black/white CTAs, bright hero title, orange project accents, and readable card body text.

## Palette

- Ink: `#080d16`, `#111827`, `#17202b`
- Muted text: `#526070`, `#6b7280`, `#8ea0af`
- Hero blue: `#2c9fff`, `#0065b9`, `#020714`
- Aqua section: `#d7f6fb`, `#eef9fd`, `#cafff9`
- Project orange: `#ff7b20`, `#ea681d`, `#ffd39c`
- Achievement cyan: `#20c2eb`
- Achievement coral: `#f25f55`
- Achievement mint: `#24aa82`
- Footer: true black `#000` and true white `#fff`

Do not replace white sections with beige, cream, warm gray, or a heavy purple-blue gradient. White means white in this design.

## Typography

- Main interface: Space Grotesk / Geist, geometric and readable.
- Hero display: Audiowide for the future-tech identity. Use sparingly.
- About heading only: Pacifico script with layered blue/white shadow.
- Achievement headings: Georgia serif is allowed only in the testimonial/achievement section.
- Button text: compact, bold, deliberate. Never rely on browser default button text.

Rules:
- No negative letter spacing.
- No viewport-width-only font scaling.
- Long labels must wrap or resize gracefully.
- Do not add extra hero eyebrow labels unless the current section already uses one.

## Section Recipes

### Hero

- Full-width framed panel with thick black border and rounded corners.
- Blue-to-black vertical gradient with dotted technical texture.
- Supplied portrait remains the human center of the composition.
- Hero title uses Audiowide, bright white, and should sit with the portrait rather than hide it.
- Primary CTA is a white pill. Secondary contact link stays understated.

### About

- Pale aqua background with subtle dot field.
- Large script `about me` heading is the section signature.
- Bento cards use frosted white surfaces with resume-based content and soft technical art.
- Bento cards use a restrained blue/cyan glowing border on hover/focus. The glow should feel like interface feedback, not a neon decoration.
- Tags are small, blue, and useful. Avoid fake stats.

### Stack / Tools

- White section with strong left text block and isometric workflow composition on the right.
- Tiles are individual DOM/image elements, not one flattened screenshot.
- The grid/tile system should feel like product infrastructure, not a random icon collage.
- Primary CTA is black. Secondary action is text plus chevron, not a second heavy button.

### Projects

- Three project cards only.
- Project visuals must be project-specific and code-native:
  - Distributed File System: nodes, transfer, health.
  - VentureLens: search, chart, metrics.
  - NeuroLearn AI: learning path, sensory/adaptive cues.
- Orange is the project-system accent. Do not use unrelated SaaS screenshots or generic encryption panels.

### Achievements

- Use the supplied cyan, coral, and mint card skins.
- Text remains real HTML layered over the card skins.
- Keep labels compact so the card art can breathe.
- Carousel buttons are small square controls; the black active button is the stronger action.

### Footer

- Black pixel-grid band with white form/social blocks.
- Email must remain visible as `adhentom@gmail.com`.
- Contact text can use a code-native encrypted reveal, but it must resolve into readable real text and remain accessible.
- The footer mode toggle affects only the footer treatment; do not introduce a full unrelated theme system.
- Social boxes link to LinkedIn and GitHub.
- Pixel graphics should stay crisp, not blurred.

## Motion

- Motion is subtle and structural: reveal on scroll, tile float, card hover lift.
- No excessive bouncing, spinning, parallax chaos, or motion that makes text harder to read.
- `prefers-reduced-motion` must keep content visible and usable.
- Content must be visible by default. Animation states may enhance entry, but they must never make full-page captures, slow devices, or no-JavaScript sessions look empty.

## Responsive Contract

- Every primary control must remain visible at mobile widths. Do not hide nav links behind horizontal scrolling.
- Desktop grid spans must be reset explicitly on tablet/mobile so cards never create implicit narrow columns.
- Long labels, emails, project names, and credential text must wrap inside their own containers instead of relying on clipping.
- The portrait, hero title, and CTA must all appear in the first mobile hero composition without overlap.
- Tool tiles stay as individual elements; on smaller screens the composition can compress, but no tile should be pushed offscreen.
- Project and achievement cards collapse to one column before text gets cramped.
- Test at least `1440`, `1024`, `768`, `430`, `390`, and `360` pixel viewport widths before calling a design pass complete.

## Anti-AI Checklist

Before shipping any visual change, check:

- Does every image or diagram relate to Adhen's actual resume content?
- Are any screenshots or labels generic, fake, or unrelated to the project?
- Is every repeated element using the same spacing, radius, shadow, and type treatment?
- Is the page using too many decorative cards or random glows?
- Are all links and controls real, not inert?
- Does mobile preserve the hero, portrait, CTA, and card readability without horizontal overflow?
- Does the site still feel like the same blue/aqua/orange/pixel portfolio?

## Implementation Rules

- Keep content in `src/app/portfolio-content.ts`.
- Keep section composition in `src/app/page.tsx`.
- Keep visual rules in `src/app/pro-ui.css`.
- Add new design assets under `public/assets/portfolio/` with stable descriptive names.
- Use `next/image` for normal raster assets. Use plain `img` only when `next/image` cannot reliably render the supplied cutout or pixel asset.
- Run `npm run lint`, `npm run build`, and a rendered browser check before final delivery.
