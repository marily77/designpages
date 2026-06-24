/* ===================================================================
   INTERACTIVE DESIGN SHOWCASE — js/animations.js
   Handles: scroll-triggered reveals (Intersection Observer)
            cursor follower (desktop pointer only)
   Keep this file focused purely on "things appearing / moving" —
   navigation, theme switching and scroll progress live in main.js.
   =================================================================== */

(function () {
  'use strict';

  /* ---------------------------------------------------------------
     1. SCROLL-TRIGGERED FADE-INS
     Any element with class .fade-in gets .is-visible added once
     it enters the viewport. Works for Classic now; Product's
     scroll-stage and other sections can reuse the same class later.
     --------------------------------------------------------------- */
  function initFadeIns() {
    const targets = document.querySelectorAll('.fade-in');
    if (!targets.length) return;

    // Respect users who prefer less motion: show everything immediately.
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      targets.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Reveal once, then stop watching — keeps things cheap.
            obs.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -10% 0px', // trigger slightly before fully in view
        threshold: 0.15,
      }
    );

    targets.forEach((el) => observer.observe(el));
  }

  /* ---------------------------------------------------------------
     2. CURSOR FOLLOWER
     Only enabled on devices with a real mouse (pointer: fine),
     so it never gets in the way on touch devices.
     --------------------------------------------------------------- */
  function initCursorFollower() {
    const cursor = document.getElementById('cursor-follower');
    if (!cursor) return;

    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!hasFinePointer) return;

    cursor.style.display = 'block';

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    const ease = 0.18; // lower = lazier follow, higher = snappier

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function loop() {
      cursorX += (mouseX - cursorX) * ease;
      cursorY += (mouseY - cursorY) * ease;
      cursor.style.left = cursorX + 'px';
      cursor.style.top = cursorY + 'px';
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);

    // Grow the dot over interactive elements for a bit of feedback.
    const interactiveSelectors = 'a, button, .ad-card, .service-card';
    document.querySelectorAll(interactiveSelectors).forEach((el) => {
      el.addEventListener('mouseenter', () => {
        cursor.style.width = '36px';
        cursor.style.height = '36px';
      });
      el.addEventListener('mouseleave', () => {
        cursor.style.width = '18px';
        cursor.style.height = '18px';
      });
    });
  }

  /* ---------------------------------------------------------------
     INIT
     --------------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', () => {
    initFadeIns();
    initCursorFollower();
  });
})();