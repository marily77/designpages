/* ===================================================================
   INTERACTIVE DESIGN SHOWCASE — js/main.js
   Handles: scroll progress bar, theme switcher, active-nav highlighting.
   Scroll-triggered reveals & cursor live in animations.js — keep
   this file focused on "site mechanics", not visual reveals.
   =================================================================== */

(function () {
  'use strict';

  /* ---------------------------------------------------------------
     1. SCROLL PROGRESS BAR
     Fills #scroll-progress width based on how far down the page
     the user has scrolled.
     --------------------------------------------------------------- */
  function initScrollProgress() {
    const bar = document.getElementById('scroll-progress');
    if (!bar) return;

    function update() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = progress + '%';
    }

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
  }

  /* ---------------------------------------------------------------
     2. THEME SWITCHER
     Cycles the whole page through accent palettes by toggling a
     class on <body>. Each theme's colors are defined in main.css
     as CSS variable overrides — see bottom of this file's comment.
     --------------------------------------------------------------- */
  const THEMES = ['theme-default', 'theme-brutalist', 'theme-retro'];
  const THEME_LABELS = {
    'theme-default': 'Classic',
    'theme-brutalist': 'Brutalist',
    'theme-retro': 'Retro',
  };

  function initThemeSwitcher() {
    const button = document.getElementById('theme-switcher');
    if (!button) return;

    let currentIndex = 0;

    function applyTheme(index) {
      THEMES.forEach((t) => document.body.classList.remove(t));
      const theme = THEMES[index];
      if (theme !== 'theme-default') {
        document.body.classList.add(theme);
      }
      button.textContent = THEME_LABELS[theme];
    }

    button.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % THEMES.length;
      applyTheme(currentIndex);
    });

    applyTheme(currentIndex);
  }

  /* ---------------------------------------------------------------
     3. ACTIVE NAV HIGHLIGHTING
     Highlights the nav link matching the section currently in view.
     --------------------------------------------------------------- */
  function initActiveNav() {
    const sections = document.querySelectorAll('.project-section, #hero');
    const navLinks = document.querySelectorAll('.nav-links a');
    if (!sections.length || !navLinks.length) return;

    const linkMap = new Map();
    navLinks.forEach((link) => {
      const id = link.getAttribute('href').replace('#', '');
      linkMap.set(id, link);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const link = linkMap.get(entry.target.id);
          if (!link) return;
          if (entry.isIntersecting) {
            navLinks.forEach((l) => l.classList.remove('active'));
            link.classList.add('active');
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px' } // "active" zone = middle of viewport
    );

    sections.forEach((section) => observer.observe(section));
  }

  /* ---------------------------------------------------------------
     INIT
     --------------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', () => {
    initScrollProgress();
    initThemeSwitcher();
    initActiveNav();
  });
})();