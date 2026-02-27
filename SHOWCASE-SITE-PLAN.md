# Showcase Website Plan — Web & App Development Services

**Goal:** A high-impact, 3D + animated site to show clients you build websites and apps.

---

## 1. Tech Stack (recommended)

| Layer | Choice | Why |
|-------|--------|-----|
| **Framework** | Next.js 14 (App Router) | SEO, fast loads, easy deployment |
| **3D** | React Three Fiber + Drei | React-friendly Three.js, helpers for scenes/cameras/controls |
| **Animations** | Framer Motion | Scroll-triggered, page transitions, micro-interactions |
| **Styling** | Tailwind CSS | Fast styling, dark/light theming |
| **Fonts** | Variable font (e.g. Geist, Satoshi) or Google Fonts | Modern typography |

---

## 2. Design direction options (pick one to start)

- **A — Immersive hero**  
  Full-viewport 3D scene (floating shapes, gradient orb, or abstract mesh). Scroll reveals “We build websites & apps” and CTA. Feels like Apple / Stripe hero.

- **B — Scroll-driven story**  
  Sections with 3D objects that react to scroll (parallax, scale, rotate). Each section = one benefit (Web, App, Design, Speed). Strong narrative.

- **C — Product-style**  
  Clean layout with 3D “product” mockups (browser window, phone frame) and subtle motion. Less heavy 3D, more polish and trust.

- **D — Brutal / bold**  
  Big type, strong contrast, 3D used sparingly (e.g. one hero object or cursor-follow element). Very memorable.

You can mix later (e.g. A for hero + B for one section).

---

## 3. Core pages/sections

1. **Hero** — 3D scene + headline + primary CTA  
2. **What we do** — Web + App + Design (with icons or small 3D elements)  
3. **How we work** — Short process (Discover → Design → Build → Launch)  
4. **Work / Projects** — 2–3 case studies or “coming soon” placeholders with hover/scroll animations  
5. **Contact / CTA** — Form or “Get in touch” with a final 3D or motion moment  

Optional: **About** (short), **Services** (expand “what we do”).

---

## 4. Animations & transitions

| Where | What |
|-------|------|
| **Page load** | Hero text + CTA fade/slide up; 3D scene fades in or camera eases in |
| **Scroll** | Section titles and cards animate in (e.g. Framer Motion `whileInView`) |
| **Hero 3D** | Slow rotation or float; optional mouse-parallax on camera or object |
| **Hover** | Buttons scale/shimmer; cards lift + shadow; nav underline animation |
| **Page transition** | If multi-page: brief fade or slide (Framer Motion `AnimatePresence`) |
| **Scroll progress** | Thin progress bar or subtle background change |

---

## 5. 3D elements (pick 2–3 to start)

- **Hero:**  
  - Gradient sphere / blob (no heavy model)  
  - Or: low-poly grid/plane that bends with scroll  
  - Or: abstract floating shapes (boxes, torus) with soft shadows  

- **Section accents:**  
  - Small 3D icons (browser window, phone, code bracket)  
  - Or: wireframe device that rotates on scroll into view  

- **Cursor / follow:**  
  - Optional: small 3D object or glow that follows mouse in hero (subtle).  

Keep first version **light** (one main 3D scene + simple shapes) so it runs well on all devices.

---

## 6. Visual style

- **Palette:** Dark base (e.g. `#0a0a0a`) + one accent (e.g. electric blue or green). Or light base + dark accent.  
- **Typography:** One strong display font for headings, one clean font for body.  
- **Spacing:** Generous padding and section spacing so 3D and motion don’t feel cramped.  

---

## 7. Build order (MVP)

1. Next.js + Tailwind + Framer Motion setup  
2. Layout + nav + footer  
3. Hero with **one** 3D element (e.g. R3F sphere or blob) + headline + CTA  
4. Two sections (“What we do”, “Contact”) with scroll animations  
5. Polish: hover states, page transition, optional scroll progress  
6. Add more 3D or a second 3D section once the above feels good  

---

## 8. Inspiration references

- **Awwwards — 3D:** [awwwards.com/websites/3d](https://www.awwwards.com/websites/3d) for 3D site-of-the-day style.  
- **Three.js examples:** [threejs.org/examples](https://threejs.org/examples) for animation/keyframes, materials, performance.  
- **Apple / Stripe / Linear:** Hero sections and scroll-driven narrative.  

---

## Next step

Tell me which **design direction** (A/B/C/D or mix) and **3D idea** (e.g. “gradient orb in hero”) you like. I’ll outline the exact components and then we can implement the hero first.
