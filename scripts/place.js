// place.js - small utility to fill year + last modified and color temp
(function () {
  // year + lastModified
  var y = document.getElementById('year');
  var lm = document.getElementById('lastModified');
  if (y) y.textContent = new Date().getFullYear();
  if (lm) lm.textContent = document.lastModified || '—';

  // temperature visual cue (hot => red, cool => blue)
  var tempEl = document.getElementById('temp');
  if (tempEl) {
    var v = Number(tempEl.getAttribute('data-value') || tempEl.textContent || 0);
    tempEl.style.fontWeight = '700';
    tempEl.style.padding = '2px 6px';
    tempEl.style.borderRadius = '6px';
    if (v >= 30) {
      tempEl.style.background = 'rgba(193,18,31,0.12)';
      tempEl.style.color = '#b71c1c';
    } else if (v >= 20) {
      tempEl.style.background = 'rgba(42,157,143,0.08)';
      tempEl.style.color = '#1b6a5d';
    } else {
      tempEl.style.background = 'rgba(41,105,176,0.08)';
      tempEl.style.color = '#1b4f7a';
    }
  }

  // Bonus: small accessibility improvement - focus outline for keyboard users
  document.body.addEventListener('keydown', function (e) {
    if (e.key === 'Tab') document.documentElement.classList.add('show-focus');
  });
})();
