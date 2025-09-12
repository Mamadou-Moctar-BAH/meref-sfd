// Mobile nav toggle
document.addEventListener("click", (e) => {
  const t = e.target.closest("[data-nav-toggle]");
  if (t) {
    document.querySelector(".nav-links")?.classList.toggle("open");
  }
});
