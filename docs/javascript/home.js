// slider 1
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".hero-slide");
  const pipsContainer = document.getElementById("hero-pips");
  const prevBtn = document.getElementById("hero-prev");
  const nextBtn = document.getElementById("hero-next");
  let current = 0;
  let autoplayTimer;

  const buildPips = () => {
    slides.forEach((_, i) => {
      const pip = document.createElement("span");
      pip.classList.add("hero-pip");
      if (i === 0) pip.classList.add("active");
      pip.addEventListener("click", () => goTo(i));
      pipsContainer.appendChild(pip);
    });
  };

  const updatePips = (index) => {
    pipsContainer.querySelectorAll(".hero-pip").forEach((pip, i) => {
      pip.classList.toggle("active", i === index);
    });
  };

  const goTo = (index) => {
    slides[current].classList.remove("active");
    current = (index + slides.length) % slides.length;
    slides[current].classList.add("active");
    updatePips(current);
    resetAutoplay();
  };

  const resetAutoplay = () => {
    clearInterval(autoplayTimer);
    autoplayTimer = setInterval(() => goTo(current + 1), 5000);
  };

  slides[0].classList.add("active");
  buildPips();

  prevBtn.addEventListener("click", () => goTo(current - 1));
  nextBtn.addEventListener("click", () => goTo(current + 1));

  resetAutoplay();
});



// slider 2
document.addEventListener("DOMContentLoaded", () => {
  const newsSwiper = new Swiper(".news-swiper", {
    loop: false,
    speed: 500,
    slidesPerView: "auto",
    spaceBetween: 20,
    grabCursor: true,
    on: {
      progress(swiper, progress) {
        const bar = document.getElementById("news-progress-bar");
        if (bar) bar.style.width = (progress * 100) + "%";
      },
      init(swiper) {
        const bar = document.getElementById("news-progress-bar");
        if (bar) bar.style.width = "0%";
      },
    },
  });

  document.getElementById("news-prev").addEventListener("click", () => newsSwiper.slidePrev());
  document.getElementById("news-next").addEventListener("click", () => newsSwiper.slideNext());
});