// Mobile nav toggle
document.addEventListener("click", (e) => {
  const t = e.target.closest("[data-nav-toggle]");
  if (t) {
    document.querySelector(".nav-links")?.classList.toggle("open");
  }
});

// Count-up for stats
(function () {
  const els = document.querySelectorAll("[data-count-to]");
  els.forEach((el) => {
    const to = parseInt(el.getAttribute("data-count-to"), 10) || 0;
    let n = 0;
    const step = Math.max(1, Math.round(to / 120));
    const tick = () => {
      n += step;
      if (n >= to) {
        el.textContent = to.toLocaleString("fr-FR");
      } else {
        el.textContent = n.toLocaleString("fr-FR");
        requestAnimationFrame(tick);
      }
    };
    tick();
  });
})();
