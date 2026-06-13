const blackNavbar = document.getElementById("blackNavbar");

if (blackNavbar) {
    blackNavbar.innerHTML = `
    <div class="fixed top-0 left-0 w-full z-[9999] px-3 py-3 sm:px-5 lg:px-8">
      <header class="mx-auto w-full max-w-7xl bg-[#121212] rounded-[24px] ">
        <div class="flex items-center justify-between px-5 py-4 lg:px-8">
          
          <div class="flex items-center">
            <img 
              src="./docs/assets/logo-white.svg" 
              alt="Logo"
              class="h-10 w-auto object-contain"
            />
          </div>

          <nav class="hidden xl:flex items-center gap-12 absolute left-1/2 -translate-x-1/2">
            <button class="text-[#F1EFE8] font-medium transition duration-300 ">
              Projects
            </button>

            <button class="text-[#F1EFE8] font-medium transition duration-300 ">
              News & Blogs
            </button>

            <button class="text-[#F1EFE8] font-medium transition duration-300 ">
              About Us
            </button>
          </nav>

          <div class="flex items-center gap-2 sm:gap-3">

            <div id="language-wrapper" class="group relative">
              <button
                id="language-toggle"
                type="button"
                class="flex h-11 w-11 items-center justify-center rounded-xl border  text-white transition duration-300 hover:bg-white/10"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span class="text-[12px] font-medium tracking-wide">EN</span>
              </button>

              <div
                id="language-menu"
                class="invisible pointer-events-none absolute right-0 top-full z-50 translate-y-2 opacity-0 transition-all duration-300 group-hover:visible group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100"
              >
                <div class="mt-2 overflow-hidden rounded-xl min-w-[40px]">
                  <button class="w-full px-4 py-3 text-center text-xs font-medium text-[#000]/80 transition bg-white hover:text-white">
                    AZ
                  </button>
                </div>
              </div>
            </div>

            <div class="hidden xl:flex items-center gap-2">
              <button
                class="rounded-full bg-[#d9d6cf] px-7 py-3 text-sm font-medium text-black transition duration-300 hover:bg-white"
              >
                Contact Us
              </button>

              <button
                class=""
              >
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="40" rx="20" fill="#121212"/>
                    <path d="M16 24L24 16" stroke="#F1EFE8" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M17.5 16H24V22.5" stroke="#F1EFE8" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

              </button>
            </div>

            <button
              id="nav-toggle"
              type="button"
              class="flex h-11 w-11 items-center justify-center text-white transition duration-300 hover:bg-white/10 xl:hidden"
              aria-label="Toggle Navigation"
              aria-expanded="false"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 5H17"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M3 10H17"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M3 15H17"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </button>

          </div>
        </div>
      </header>
    </div>

    <div
      id="mobile-nav"
      class="fixed inset-0 z-[99999] hidden xl:hidden"
    >
      <div
        id="mobile-drawer"
        class="absolute inset-0 bg-black/95 backdrop-blur-2xl opacity-0 transition-opacity duration-300"
      >
        <div class="flex items-center justify-between px-6 py-6 border-b border-white/10">
          
          <img
            src="./docs/assets/logo-white.svg"
            alt="Logo"
            class="h-10 w-auto"
          />

          <button
            id="mobile-close"
            type="button"
            class="flex h-10 w-10 items-center justify-center  text-white transition hover:bg-white/10"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 6L18 18"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M18 6L6 18"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </button>
        </div>

        <div class="flex flex-col px-6 pt-12 gap-8">
          
          <button class="text-left text-[38px] font-semibold tracking-tight text-white transition hover:opacity-70">
            Projects
          </button>

          <button class="text-left text-[38px] font-semibold tracking-tight text-white transition hover:opacity-70">
            News & Blogs
          </button>

          <button class="text-left text-[38px] font-semibold tracking-tight text-white transition hover:opacity-70">
            About Us
          </button>

          <div class="flex items-center gap-2 pt-6">
            <button
              class="rounded-full bg-[#d9d6cf] px-8 py-3 text-sm font-medium text-black transition duration-300 hover:bg-white"
            >
              Contact Us
            </button>

            <button
              class="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition duration-300 hover:bg-white hover:text-black"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 12L12 2"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                />
                <path
                  d="M5 2H12V9"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
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

    const isMobileLayout = () =>
        window.matchMedia("(max-width: 1279px)").matches;

    const openLanguageMenu = () => {
        if (!languageToggle || !languageMenu) return;

        languageMenu.classList.remove(
            "invisible",
            "opacity-0",
            "pointer-events-none",
            "translate-y-2"
        );

        languageMenu.classList.add(
            "visible",
            "opacity-100",
            "pointer-events-auto",
            "translate-y-0"
        );

        languageToggle.setAttribute("aria-expanded", "true");
    };

    const closeLanguageMenu = () => {
        if (!languageToggle || !languageMenu) return;

        languageMenu.classList.add(
            "invisible",
            "opacity-0",
            "pointer-events-none",
            "translate-y-2"
        );

        languageMenu.classList.remove(
            "visible",
            "opacity-100",
            "pointer-events-auto",
            "translate-y-0"
        );

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

    if (navToggle) {
        navToggle.addEventListener("click", () => {
            mobileNav.dataset.open === "true"
                ? closeMobileNav()
                : openMobileNav();
        });
    }

    if (mobileClose) {
        mobileClose.addEventListener("click", closeMobileNav);
    }

    if (languageToggle) {
        languageToggle.addEventListener("click", () => {
            if (!isMobileLayout() || !languageMenu) return;

            const isOpen =
                languageToggle.getAttribute("aria-expanded") === "true";

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