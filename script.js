(() => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const root = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");

  const saved = localStorage.getItem("theme");
  if (saved === "light") root.setAttribute("data-theme", "light");
  else root.removeAttribute("data-theme"); // default dark

  themeToggle?.addEventListener("click", () => {
    const isLight = root.getAttribute("data-theme") === "light";
    if (isLight) {
      root.removeAttribute("data-theme");
      localStorage.setItem("theme", "dark");
    } else {
      root.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  });

  navToggle?.addEventListener("click", () => {
    const open = navMenu?.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  navMenu?.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      navMenu.classList.remove("open");
      navToggle?.setAttribute("aria-expanded", "false");
    });
  });

  const els = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) e.target.classList.add("is-visible");
      }
    },
    { threshold: 0.12 }
  );
  els.forEach((el) => io.observe(el));

  const fabTop = document.getElementById("fabTop");

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  document.querySelectorAll('a[href="#top"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      scrollToTop();
      history.replaceState(null, "", "#top");
    });
  });

  fabTop?.addEventListener("click", scrollToTop);

  function onScroll() {
    if (!fabTop) return;
    if (window.scrollY > 500) fabTop.classList.add("show");
    else fabTop.classList.remove("show");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
