// Mobile menu toggle
(function () {
  var nav = document.querySelector('.site-nav');
  var btn = document.querySelector('.nav-toggle');
  if (!nav || !btn) return;
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();

var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Homepage hero: parallax background photo
(function () {
  var hero = document.querySelector('.home-hero');
  if (!hero || reduceMotion) return;
  var ticking = false;
  function update() {
    var rect = hero.getBoundingClientRect();
    if (rect.bottom > 0 && rect.top < window.innerHeight) {
      // Photo moves at ~40% of scroll speed, so it drifts behind the content
      hero.style.setProperty('--parallax', (-rect.top * 0.4).toFixed(1) + 'px');
    }
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
  }, { passive: true });
  update();
})();

// Homepage logo: draw the face line by line
(function () {
  var img = document.querySelector('.brand-mark__face');
  if (!img || reduceMotion || !window.fetch) return;
  fetch(img.getAttribute('src'))
    .then(function (r) { return r.ok ? r.text() : Promise.reject(); })
    .then(function (text) {
      var doc = new DOMParser().parseFromString(text, 'image/svg+xml');
      var svg = doc.documentElement;
      if (!svg || svg.nodeName.toLowerCase() !== 'svg') return;
      svg.removeAttribute('width');
      svg.removeAttribute('height');
      svg.removeAttribute('style');
      svg.setAttribute('class', 'brand-mark__face face-draw');
      svg.setAttribute('aria-hidden', 'true');
      img.replaceWith(svg);
      var paths = svg.querySelectorAll('path');
      var n = paths.length || 1;
      paths.forEach(function (p, i) {
        p.style.removeProperty('fill'); // inline fill would show the face before it's drawn
        p.removeAttribute('fill');
        var len = Math.ceil(p.getTotalLength ? p.getTotalLength() : 4000);
        p.style.setProperty('--len', len);
        // Stagger the strokes slightly so the face appears to be drawn in sequence
        p.style.setProperty('--delay', (0.3 + (i / n) * 1.2).toFixed(2) + 's');
      });
    })
    .catch(function () { /* keep the static image */ });
})();
