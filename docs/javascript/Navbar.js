const navbar = document.getElementById("navbar");

if (navbar) {
  const pathname = window.location.pathname.replace(/\/+$/, "");
  const isHomePage =
    pathname === "" ||
    pathname === "/" ||
    pathname.endsWith("/index.html") ||
    pathname.endsWith("index.html");
  const headerClasses = isHomePage
    ? "bg-white/30 backdrop-blur-xl supports-[backdrop-filter]:bg-white/30"
    : "bg-[#f0ece3]";
  const borderClasses = isHomePage ? "border-[#f1efe8]" : "border-[#DDDBD5]";
  const dropdownClasses = isHomePage
    ? "bg-white/95 backdrop-blur-xl"
    : "bg-[#f0ece3]";
  const dropdownBorderClasses = isHomePage ? "border-slate-200" : "border-[#DDDBD5]";

  navbar.innerHTML = `
    <div class="fixed w-full top-0 z-[9999] flex justify-center px-2 py-2 sm:px-4 sm:py-4 lg:px-6">
      <header class="w-full max-w-7xl rounded-2xl ${headerClasses} py-3">
        <div class="mx-auto flex items-center justify-between gap-4 px-5 py-2.5 sm:px-8 lg:px-10">
          <a href="./index.html" class="flex shrink-0 items-center gap-3">
            <img src="./docs/assets/logo.svg" alt="Phoenix & A" class="h-10 w-auto sm:h-12" />
          </a>

          <nav class="hidden items-center gap-8 xl:flex flex-1 justify-center">
            <a href="./projects.html" class=" font-medium text-[#1a1a1a]/85 transition hover:text-[#1a1a1a]">Projects</a>
            <a href="./news-and-blogs.html" class=" font-medium text-[#1a1a1a]/85 transition hover:text-[#1a1a1a]">News & Blogs</a>
            <a href="./about-us.html" class=" font-medium text-[#1a1a1a]/85 transition hover:text-[#1a1a1a]">About Us</a>
          </nav>

          <div class="flex items-center md:gap-3 gap-1">
            <div id="language-wrapper" class="group relative">
              <button
                id="language-toggle"
                type="button"
                class="flex flex-col  items-center justify-center rounded-lg md:border ${borderClasses} px-2 py-2.5 min-w-[38px] cursor-pointer"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span class="md:text-sm border-b md:border-b-0 leading-tight text-[#1a1a1a]">EN</span>
              </button>
              <div
                id="language-menu"
                class="invisible pointer-events-none absolute left-0 top-full z-50 translate-y-1 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100"
              >
                <div class="overflow-hidden rounded-xl border ${dropdownBorderClasses} ${dropdownClasses} min-w-[50px]">
                  <button class="block w-full px-2 py-2.5 text-[11px] font-semibold text-slate-700 transition hover:bg-slate-50 text-center">AZ</button>
                </div>
              </div>
            </div>

            <div class="hidden xl:flex items-center gap-1">
              <a href="./contact.html" class="rounded-full bg-[#dddbd5] px-7 py-2.5 text-black transition duration-300 hover:bg-[#c8c6c0]">
                Contact Us
              </a>
              <div class="w-9 h-9 rounded-full bg-black flex items-center justify-center shrink-0">
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="2" y1="12" x2="12" y2="2"/>
                  <polyline points="5,2 12,2 12,9"/>
                </svg>
              </div>
            </div>


          <button
            id="nav-toggle"
            type="button"
            class="inline-flex h-9 w-9 items-center justify-center text-[#1a1a1a] transition hover:bg-white/80 xl:hidden"
            aria-label="Toggle navigation"
            aria-expanded="false"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 4L19 4" stroke="#3A3A39" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M1 10L19 10" stroke="#3A3A39" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M1 16L19 16" stroke="#3A3A39" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </button>
          </div>
        </div>
      </header>
    </div>

    <div
      id="mobile-nav"
      class="fixed inset-0 z-[99999] hidden xl:hidden"
      style="top:0;left:0;right:0;bottom:0;width:100vw;height:100vh;"
    >
      <div
        id="mobile-drawer"
        class="absolute inset-0 flex flex-col bg-black opacity-0 transition-opacity duration-300 ease-out"
        style="width:100%;height:100vh;"
      >
        <div class="flex items-center justify-between px-6 py-6">
          <img src="./docs/assets/logo-white.svg" alt="Logo" class="h-[39px] w-auto" />
          <button
            id="mobile-close"
            type="button"
            class="inline-flex h-9 w-9 items-center justify-center text-[#f1efe8] transition hover:opacity-70"
            aria-label="Close navigation"
          >
            <i class="fa-solid fa-xmark text-xl"></i>
          </button>
        </div>

        <div class="flex flex-1 flex-col justify-start px-6 pt-8 gap-2">
          <a href="./projects.html" class="text-[32px] font-bold uppercase tracking-tight text-white leading-tight transition hover:opacity-70">Projects</a>
          <a href="./news-and-blogs.html" class="text-[32px] font-bold uppercase tracking-tight text-white leading-tight transition hover:opacity-70">News&Blogs</a>
          <a href="./about-us.html" class="text-[32px] font-bold uppercase tracking-tight text-white leading-tight transition hover:opacity-70">About Us</a>
        

        <div class="flex items-center mt-5 gap-1">
              <a href="./contact.html" class="rounded-full bg-[#dddbd5] px-8 py-2.5 text-black transition duration-300 hover:bg-[#c8c6c0]">
                Contact Us
              </a>
              <div class="w-9 h-9 rounded-full border border-[#f1efe8] bg-black flex items-center justify-center shrink-0">
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="2" y1="12" x2="12" y2="2"/>
                  <polyline points="5,2 12,2 12,9"/>
                </svg>
              </div>
            </div>
</div>
      </div>
    </div>
  `;

  const navToggle = document.getElementById("nav-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  const mobileDrawer = document.getElementById("mobile-drawer");
  const mobileClose = document.getElementById("mobile-close");
  const languageWrapper = document.getElementById("language-wrapper");
  const languageToggle = document.getElementById("language-toggle");
  const languageMenu = document.getElementById("language-menu");

  const isMobileLayout = () => window.matchMedia("(max-width: 1279px)").matches;

  const openLanguageMenu = () => {
    if (!languageToggle || !languageMenu) return;
    languageMenu.classList.remove("invisible", "opacity-0", "pointer-events-none", "translate-y-1");
    languageMenu.classList.add("visible", "opacity-100", "pointer-events-auto", "translate-y-0");
    languageToggle.setAttribute("aria-expanded", "true");
  };

  const closeLanguageMenu = () => {
    if (!languageToggle || !languageMenu) return;
    languageMenu.classList.add("invisible", "opacity-0", "pointer-events-none", "translate-y-1");
    languageMenu.classList.remove("visible", "opacity-100", "pointer-events-auto", "translate-y-0");
    languageToggle.setAttribute("aria-expanded", "false");
  };

  const openMobileNav = () => {
    if (!mobileNav || !mobileDrawer || !navToggle) return;
    mobileNav.classList.remove("hidden");
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        mobileDrawer.style.opacity = "1";
      });
    });
    mobileNav.dataset.open = "true";
    navToggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  };

  const closeMobileNav = () => {
    if (!mobileNav || !mobileDrawer || !navToggle) return;
    mobileDrawer.style.opacity = "0";
    mobileNav.dataset.open = "false";
    navToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
    setTimeout(() => {
      if (mobileNav.dataset.open === "false") {
        mobileNav.classList.add("hidden");
      }
    }, 300);
  };

  if (navToggle) navToggle.addEventListener("click", () => {
    mobileNav.dataset.open === "true" ? closeMobileNav() : openMobileNav();
  });

  if (mobileClose) mobileClose.addEventListener("click", closeMobileNav);

  if (mobileNav) {
    mobileNav.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", closeMobileNav);
    });
  }

  if (languageToggle) {
    languageToggle.addEventListener("click", () => {
      if (!isMobileLayout() || !languageMenu) return;
      const isOpen = languageToggle.getAttribute("aria-expanded") === "true";
      isOpen ? closeLanguageMenu() : openLanguageMenu();
    });
  }

  if (languageWrapper) {
    languageWrapper.addEventListener("mouseleave", () => {
      if (!isMobileLayout()) return;
      closeLanguageMenu();
    });
  }

  document.addEventListener("click", (event) => {
    if (!isMobileLayout() || !languageWrapper || !languageMenu) return;
    if (languageWrapper.contains(event.target)) return;
    closeLanguageMenu();
  });

  window.addEventListener("resize", () => {
    if (!isMobileLayout()) {
      closeLanguageMenu();
    }
  });
}
