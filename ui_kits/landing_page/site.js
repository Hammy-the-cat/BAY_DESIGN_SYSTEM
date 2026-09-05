"use strict";

document.documentElement.classList.add("js");

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector("#mobile-menu");
const desktopViewport = window.matchMedia("(min-width: 851px)");

function setMenuOpen(open) {
  mobileMenu.hidden = !open;
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "メニューを閉じる" : "メニューを開く");
}

menuToggle.addEventListener("click", () => setMenuOpen(mobileMenu.hidden));
mobileMenu.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenuOpen(false);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !mobileMenu.hidden) {
    setMenuOpen(false);
    menuToggle.focus();
  }
});
desktopViewport.addEventListener("change", () => setMenuOpen(false));

const selectedPlan = document.querySelector("#selected-plan");
document.querySelectorAll("[data-plan]").forEach((link) => {
  link.addEventListener("click", () => {
    selectedPlan.textContent = `ご相談コース：${link.dataset.plan}`;
  });
});

function setupScrollReveal() {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (reducedMotion.matches || !("IntersectionObserver" in window)) return;

  const targets = document.querySelectorAll([
    ".about-layout > div", ".principles > div", ".section-heading > *",
    ".method-item", ".plan-row", ".support-layout > *", ".studio-item",
    ".flow-grid > li", ".faq-layout > div", ".booking-layout > div",
  ].join(","));
  const pending = new Set();

  function reveal(element, immediate = false) {
    if (!pending.delete(element)) return;
    if (immediate) element.classList.remove("scroll-reveal");
    element.classList.remove("reveal-pending");
    observer.unobserve(element);
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) reveal(entry.target);
    });
  }, { rootMargin: "0px 0px -32px 0px", threshold: 0 });

  // Keep initially visible content untouched, including restored anchor positions.
  targets.forEach((element) => {
    if (element.getBoundingClientRect().top < window.innerHeight - 32) return;
    const siblings = [...element.parentElement.children];
    const delay = Math.min(siblings.indexOf(element), 2) * 80;
    element.style.setProperty("--reveal-delay", `${delay}ms`);
    observer.observe(element);
    pending.add(element);
    element.classList.add("scroll-reveal", "reveal-pending");
  });

  document.addEventListener("focusin", (event) => {
    const element = event.target.closest(".reveal-pending");
    if (element) reveal(element, true);
  });
  reducedMotion.addEventListener("change", (event) => {
    if (!event.matches) return;
    pending.forEach((element) => reveal(element, true));
    observer.disconnect();
  });
}

setupScrollReveal();

function setupBackgroundVideos() {
  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const connection = navigator.connection;
  const controllers = [];

  document.querySelectorAll("video[data-src]").forEach((video) => {
    const button = document.querySelector(`[data-video="${video.id}"]`);
    let visible = false;
    let userIntent = null;
    let failed = false;
    video.muted = true;
    button.hidden = false;

    function shouldPlay() {
      const allowed = userIntent ?? (!motion.matches && !connection?.saveData);
      return visible && !document.hidden && !failed && allowed;
    }

    function updateButton() {
      const playing = !video.paused;
      const label = playing ? "背景動画を一時停止" : "背景動画を再生";
      button.setAttribute("aria-label", label);
      button.setAttribute("aria-pressed", String(playing));
      button.title = label;
      button.firstElementChild.textContent = playing ? "Ⅱ" : "▶";
    }

    function sync() {
      if (!shouldPlay()) {
        video.pause();
        return;
      }
      // Attach the source only when playback is wanted, not at page load.
      if (!video.hasAttribute("src")) video.src = video.dataset.src;
      if (!video.paused) return;
      video.play().then(() => {
        if (!shouldPlay()) video.pause();
      }).catch(updateButton);
    }

    button.addEventListener("click", () => {
      userIntent = video.paused;
      sync();
    });
    video.addEventListener("play", updateButton);
    video.addEventListener("pause", updateButton);
    video.addEventListener("error", () => {
      failed = true;
      video.pause();
      video.removeAttribute("src");
      video.load();
      button.hidden = true;
    });

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        sync();
      });
      observer.observe(video.parentElement);
    } else {
      visible = true;
      userIntent = false;
    }
    controllers.push(() => {
      if (motion.matches || connection?.saveData) userIntent = false;
      sync();
    });
    document.addEventListener("visibilitychange", sync);
  });

  motion.addEventListener("change", () => controllers.forEach((sync) => sync()));
  connection?.addEventListener("change", () => controllers.forEach((sync) => sync()));
}

setupBackgroundVideos();
