# Interactive Design Showcase

A single-page exploration of five distinct web design approaches — built with
plain HTML, CSS and JavaScript, with no frameworks or build tools.

**[Live Demo →](#)** *(add your GitHub Pages link here once deployed)*

---

## 🎯 Purpose

This project explores multiple web design approaches including classic
corporate design, brutalism, product-focused storytelling, retro aesthetics
and animated advertising experiences. The goal was to demonstrate UI/UX
thinking, frontend development skills and motion design techniques using
HTML, CSS and JavaScript — and, just as importantly, to show *why* each style
exists and when it should be used.

It was built as a portfolio piece for:
- Vocational teacher (kutseõpetaja) candidacy in web/graphic design programs
- Frontend developer job interviews

Rather than building "just another website," the goal was to demonstrate
design thinking across multiple visual languages within a single, cohesive
experience.

## 🧭 What's inside

One page, five design directions:

| Section | Style | What it demonstrates |
|---|---|---|
| **Classic** | Corporate / consulting | Grid systems, typography, whitespace |
| **Brutalist** | Digital art festival | Bold type, high contrast, intentional rule-breaking |
| **Product** | AI speaker landing page | Scroll-driven storytelling, sticky visuals |
| **Retro** | 90s game console | Scanlines, glitch effects, pixel typography |
| **Motion Ads** | 5 ad concepts | Five distinct hover-driven motion languages |

Supporting mechanics: scroll progress indicator, theme switcher, active-nav
highlighting, custom cursor follower, and scroll-triggered reveals via the
Intersection Observer API.

## 🛠️ Built with

- **HTML5** — semantic structure
- **CSS3** — custom properties (design tokens), CSS Grid, `clip-path`,
  `mix-blend-mode`, keyframe animations — no preprocessor, no framework
- **Vanilla JavaScript (ES6+)** — Intersection Observer, `requestAnimationFrame`,
  no libraries

No build step. No dependencies. Open `index.html` and it works.

## 📂 Project structure

```
interactive-design-showcase/
├── index.html
├── css/
│   ├── main.css        → design tokens, reset, hero, theme variants
│   ├── classic.css      → Classic Design section
│   ├── brutalist.css    → Brutalist Design section
│   ├── product.css      → Product Landing section
│   ├── retro.css         → Retro Design section
│   └── ads.css           → Motion Ads Gallery
├── js/
│   ├── main.js           → scroll progress, theme switcher, active nav
│   └── animations.js     → fade-ins, cursor follower, product scroll-stage
├── assets/
│   ├── images/
│   └── videos/
└── README.md
```

## 🎨 Design decisions worth noting

- **Design tokens, not hardcoded values** — every color, font and spacing
  value lives in CSS custom properties in `main.css`. The theme switcher works
  by simply reassigning those variables on `<body>`.
- **Each section gets its own motion language** — fade-ins for Classic,
  rotation/inversion for Brutalist, sticky scroll-scaling for Product,
  stepped glitch animation for Retro, five distinct hover treatments for the
  ad gallery. Motion was treated as part of the design, not decoration on top.
- **`prefers-reduced-motion` respected** throughout — animations are skipped
  for users who request reduced motion.
- **One page, not five** — deliberately. The project is one cohesive
  demonstration rather than five separate destinations, and the scroll
  progress bar / smooth navigation only make sense as a single continuous
  experience.

## 🚀 Running locally

No build tools required.

```bash
git clone https://github.com/yourusername/interactive-design-showcase.git
cd interactive-design-showcase
```

Open `index.html` directly in a browser, or serve it locally (recommended,
avoids any file:// quirks):

```bash
# Using VS Code: install the "Live Server" extension and click "Go Live"
# Or, with Python installed:
python3 -m http.server
```

Then visit `http://localhost:8000`.

## 📌 What this project demonstrates

- ✅ HTML5 semantic structure
- ✅ CSS3 (Grid, custom properties, animations, blend modes)
- ✅ Vanilla JavaScript (Intersection Observer, scroll mechanics)
- ✅ UI/UX design thinking across multiple visual languages
- ✅ Motion design fundamentals
- ✅ Accessibility awareness (`prefers-reduced-motion`, semantic markup)
- ✅ Project documentation and structure

## 👤 Author

**[Marily Valkijainen]**
[marily77@gmail.com] · [LinkedIn] · [Portfolio site]

---

*Built as part of a design portfolio. Feedback welcome.*