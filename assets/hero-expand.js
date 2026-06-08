/* ============================================================
   SVERGOLD V3 — scroll-expand cinematic hero (native, robust)

   The hero is a TALL section with a position:sticky stage. We read the page's
   native scroll position to compute progress (--p, 0→1) as the section passes
   the viewport, which expands the ship clip, parts the teaser title and reveals
   the brand copy. There is NO scroll-lock and NO wheel/touch hijack, so the page
   always scrolls normally — works on mobile (momentum scroll) and desktop, and
   can never trap the user. Reduced-motion / no-JS fall back to a static,
   fully-expanded 100svh hero (handled in CSS via the absence of .hx-ready).
   ============================================================ */
(function () {
  "use strict";

  var hero = document.getElementById("hero");
  if (!hero || !hero.classList.contains("hero-x")) return;

  var reduce =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function setP(v) {
    v = v < 0 ? 0 : v > 1 ? 1 : v;
    hero.style.setProperty("--p", v.toFixed(4));
    hero.classList.toggle("hx-copy-on", v > 0.9);
  }

  // Reduced motion: static expanded hero, no scroll-driven animation.
  if (reduce) {
    hero.classList.add("hx-static");
    setP(1);
    return;
  }

  // Opt into the tall scroll-driven layout (CSS gives .hero-x.hx-ready its height).
  hero.classList.add("hx-ready");

  var ticking = false;
  function update() {
    ticking = false;
    var total = hero.offsetHeight - window.innerHeight;
    var top = hero.getBoundingClientRect().top;
    var p = total > 0 ? -top / total : 1;
    setP(p);
  }
  function onScroll() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  update();
})();
