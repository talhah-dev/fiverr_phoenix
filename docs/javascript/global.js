const lenis = new Lenis({
  autoRaf: true,
});

AOS.init({
  once: true,
  duration: 900,
  easing: "ease-out-cubic",
});



const scrollToTopButton = document.getElementById("scroll-to-top");

const toggleFloatingActions = () => {
  const shouldShow = window.scrollY > 220;

  if (scrollToTopButton) {
    scrollToTopButton.classList.toggle("opacity-0", !shouldShow);
    scrollToTopButton.classList.toggle("translate-y-3", !shouldShow);
    scrollToTopButton.classList.toggle("pointer-events-none", !shouldShow);
  }
};

window.addEventListener("scroll", toggleFloatingActions, { passive: true });
toggleFloatingActions();

if (scrollToTopButton) {
  scrollToTopButton.addEventListener("click", () => {
    if (typeof lenis?.scrollTo === "function") {
      lenis.scrollTo(0, { immediate: false });
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}



