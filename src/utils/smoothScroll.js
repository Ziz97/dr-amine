const NAV_OFFSET_PX = 88;
const SCROLL_DURATION_MS = 900;

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;
}

export function smoothScrollTo(hash, duration = SCROLL_DURATION_MS) {
  const id = hash.replace(/^#/, "");
  if (!id) return;

  const target = document.getElementById(id);
  if (!target) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    target.scrollIntoView();
    return;
  }

  const startY = window.scrollY;
  const targetY = target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET_PX;
  const distance = targetY - startY;
  const startTime = performance.now();

  function step(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY + distance * easeInOutCubic(progress));
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

export function handleSmoothScrollClick(event) {
  const anchor = event.target.closest('a[href^="#"]');
  if (!anchor) return;

  const hash = anchor.getAttribute("href");
  if (!hash || hash === "#" || !document.getElementById(hash.slice(1))) return;

  event.preventDefault();
  smoothScrollTo(hash);
}
