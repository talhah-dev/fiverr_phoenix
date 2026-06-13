const footer = document.getElementById("footer");

if (footer) {
  footer.innerHTML = `
       <footer class="bg-[#121212] text-white">
        <div class="max-w-[1480px] mx-auto px-6 lg:px-10 py-14">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-center">

                <div>
                    <img src="/docs/assets/logo-white.svg" class="md:h-[94px] h-[51px]" alt="">
                </div>

                <div class="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-10">

                    <div class="md:space-y-8 flex lg:flex-col gap-5 flex-row order-1 md:order-2">
                        <div>
                            <p class="text-xs uppercase tracking-wider text-[#F1EFE8] mb-2">
                                Phone
                            </p>

                            <a href="tel:+994555555555" class="text-[#868581] md:text-base text-sm">
                                +994 55 555 55 55
                            </a>
                        </div>

                        <div>
                            <p class="text-xs uppercase tracking-wider text-[#F1EFE8] mb-2">
                                Email Address
                            </p>

                            <a href="mailto:info@phoenixanda.com" class="text-[#868581] md:text-base text-sm">
                                info@phoenixanda
                            </a>
                        </div>
                    </div>

                    <div class="space-y-8 flex lg:flex-col gap-5 flex-row order-2 md:order-1">
                        <div>
                            <p class="text-xs uppercase tracking-wider text-[#F1EFE8] mb-2">
                                Location
                            </p>

                            <p class="text-[#868581] md:text-base text-sm leading-relaxed">
                                Albert Aqarunov, 3, Baku, Azerbaijan
                            </p>
                        </div>

                        <div>
                            <p class="text-xs uppercase tracking-wider text-[#F1EFE8] mb-2">
                                Working Hours
                            </p>

                            <p class="text-[#868581] md:text-base text-sm leading-relaxed">
                                Mon–Fri 09:00–18:00 | Sat–Sun 10:00–17:00
                            </p>
                        </div>
                    </div>

                </div>

                <div class="flex lg:justify-end gap-3 ">
                    <a href="#">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.625" y="0.625" width="38.75" height="38.75" rx="19.375" stroke="#F1EFE8"
                                stroke-width="1.25" />
                            <path
                                d="M20 22.8125C21.5533 22.8125 22.8125 21.5533 22.8125 20C22.8125 18.4467 21.5533 17.1875 20 17.1875C18.4467 17.1875 17.1875 18.4467 17.1875 20C17.1875 21.5533 18.4467 22.8125 20 22.8125Z"
                                stroke="#F1EFE8" stroke-width="1.17187" stroke-miterlimit="10" />
                            <path
                                d="M23.0938 13.5312H16.9062C15.0423 13.5312 13.5312 15.0423 13.5312 16.9062V23.0938C13.5312 24.9577 15.0423 26.4688 16.9062 26.4688H23.0938C24.9577 26.4688 26.4688 24.9577 26.4688 23.0938V16.9062C26.4688 15.0423 24.9577 13.5312 23.0938 13.5312Z"
                                stroke="#F1EFE8" stroke-width="1.17187" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path
                                d="M23.6562 17.1875C24.1222 17.1875 24.5 16.8097 24.5 16.3438C24.5 15.8778 24.1222 15.5 23.6562 15.5C23.1903 15.5 22.8125 15.8778 22.8125 16.3438C22.8125 16.8097 23.1903 17.1875 23.6562 17.1875Z"
                                fill="#F1EFE8" />
                        </svg>

                    </a>

                    <a href="#">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.625" y="0.625" width="38.75" height="38.75" rx="19.375" stroke="#F1EFE8"
                                stroke-width="1.25" />
                            <path
                                d="M20 26.75C23.7279 26.75 26.75 23.7279 26.75 20C26.75 16.2721 23.7279 13.25 20 13.25C16.2721 13.25 13.25 16.2721 13.25 20C13.25 23.7279 16.2721 26.75 20 26.75Z"
                                stroke="#F1EFE8" stroke-width="1.17187" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path
                                d="M22.8125 17.1875H21.6875C21.4656 17.1866 21.2458 17.2296 21.0406 17.3141C20.8355 17.3985 20.6491 17.5228 20.4922 17.6797C20.3353 17.8366 20.211 18.023 20.1266 18.2281C20.0421 18.4333 19.9991 18.6531 20 18.875V26.75"
                                stroke="#F1EFE8" stroke-width="1.17187" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M17.75 21.125H22.25" stroke="#F1EFE8" stroke-width="1.17187" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>

                    </a>
                    <a href="#">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.625" y="0.625" width="38.75" height="38.75" rx="19.375" stroke="#F1EFE8"
                                stroke-width="1.25" />
                            <g clip-path="url(#clip0_337_548)">
                                <path d="M17 19.25V23" stroke="#F1EFE8" stroke-width="1.17" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path d="M17 17V17.0075" stroke="#F1EFE8" stroke-width="1.17" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path d="M20 23V19.25" stroke="#F1EFE8" stroke-width="1.17" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path
                                    d="M23 23V20.75C23 20.3522 22.842 19.9706 22.5607 19.6893C22.2794 19.408 21.8978 19.25 21.5 19.25C21.1022 19.25 20.7206 19.408 20.4393 19.6893C20.158 19.9706 20 20.3522 20 20.75"
                                    stroke="#F1EFE8" stroke-width="1.17" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path
                                    d="M13.25 16.25C13.25 15.4544 13.5661 14.6913 14.1287 14.1287C14.6913 13.5661 15.4544 13.25 16.25 13.25H23.75C24.5456 13.25 25.3087 13.5661 25.8713 14.1287C26.4339 14.6913 26.75 15.4544 26.75 16.25V23.75C26.75 24.5456 26.4339 25.3087 25.8713 25.8713C25.3087 26.4339 24.5456 26.75 23.75 26.75H16.25C15.4544 26.75 14.6913 26.4339 14.1287 25.8713C13.5661 25.3087 13.25 24.5456 13.25 23.75V16.25Z"
                                    stroke="#F1EFE8" stroke-width="1.17" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_337_548">
                                    <rect width="18" height="18" fill="white" transform="translate(11 11)" />
                                </clipPath>
                            </defs>
                        </svg>

                    </a>
                    <a href="#">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.625" y="0.625" width="38.75" height="38.75" rx="19.375" stroke="#F1EFE8"
                                stroke-width="1.25" />
                            <path d="M22.25 20L18.875 17.75V22.25L22.25 20Z" stroke="#F1EFE8" stroke-width="1.17"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M12.6875 20C12.6875 22.0953 12.9055 23.3188 13.0672 23.9516C13.1118 24.1233 13.1961 24.2821 13.3133 24.4152C13.4306 24.5483 13.5775 24.652 13.7422 24.718C16.0977 25.618 20 25.5969 20 25.5969C20 25.5969 23.9023 25.618 26.2578 24.718C26.4225 24.652 26.5694 24.5483 26.6867 24.4152C26.8039 24.2821 26.8882 24.1233 26.9328 23.9516C27.0945 23.3188 27.3125 22.0953 27.3125 20C27.3125 17.9047 27.0945 16.6813 26.9328 16.0484C26.8882 15.8767 26.8039 15.7179 26.6867 15.5848C26.5694 15.4517 26.4225 15.348 26.2578 15.282C23.9023 14.382 20 14.4031 20 14.4031C20 14.4031 16.0977 14.382 13.7422 15.282C13.5775 15.348 13.4306 15.4517 13.3133 15.5848C13.1961 15.7179 13.1118 15.8767 13.0672 16.0484C12.9055 16.6813 12.6875 17.9047 12.6875 20Z"
                                stroke="#F1EFE8" stroke-width="1.17" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>

            <div class="border-t border-white/15 mt-12 pt-8">
                <p class="text-[#868581] text-sm">
                    All rights reserved ©Phoenix&A
                </p>
            </div>
        </div>
    </footer>
  `;
}
