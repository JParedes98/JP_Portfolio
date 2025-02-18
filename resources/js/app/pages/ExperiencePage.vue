<template>
<div>
    <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 class="text-2xl text-theme-500 font-bold md:text-4xl md:leading-tight">
            My Journey
        </h2>
        <p class="mt-1 text-gray-500">
            A showcase of my journey as a Software Engineer, highlighting key roles, impactful projects,
            and the skills that define my expertise.
        </p>
    </div>

    <!-- FileCloud PHP Developer -->
    <div class="group relative flex gap-x-5">
        <!-- Icon -->
        <div class="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
            <div class="relative z-10 size-6 flex justify-center items-center">
                <img src="/img/experience/filecloud.png" class="shrink-0 size-6" alt="">
            </div>
        </div>

        <!-- Right Content -->
        <div class="grow pb-8 group-last:pb-0">
            <h3 class="mb-1 text-xs text-gray-600">
                2024 - Present
            </h3>

            <p class="font-semibold text-sm text-gray-800">
                Senior Backend (PHP) Developer
            </p>

            <p class="mt-1 text-sm text-gray-500">
                Developed and optimized enterprise file-sharing solutions, enhancing performance, security, and
                scalability. Focused on backend architecture, API development, and database optimization to
                deliver high-performance applications.
            </p>

            <ul class="list-disc ms-6 mt-8 space-y-4">
                <li class="ps-1 text-sm text-gray-500">
                    Created TOTP functionality for 2FA with e.g. Google Authenticator, Authy, etc.
                </li>
                <li class="ps-1 text-sm text-gray-500">
                    Enhanced network folder sharing over LAN, S3, and Azure, improving performance and accessibility.
                </li>
                <li class="ps-1 text-sm text-gray-500">
                    Adjusted and enhanced automated workflows, streamlining user operations and task automation.
                </li>
            </ul>
        </div>
    </div>

    <!-- FileCloud QA -->
    <div class="group relative flex gap-x-5">
        <!-- Icon -->
        <div class="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
            <div class="relative z-10 size-6 flex justify-center items-center">
                <img src="/img/experience/filecloud.png" class="shrink-0 size-6" alt="">
            </div>
        </div>

        <!-- Right Content -->
        <div class="grow pb-8 group-last:pb-0">
            <h3 class="mb-1 text-xs text-gray-600">
                2022 - 2023
            </h3>

            <p class="font-semibold text-sm text-theme-500">
                QA Engineer
            </p>

            <p class="mt-1 text-sm text-gray-600">
                Designed and implemented automated tests to ensure software quality and reliability. Developed test
                scripts in PHP for the FileCloud web app and in Python for FileCloud Desktop, enhancing test coverage
                and system stability.
            </p>

            <ul class="list-disc ms-6 mt-8 space-y-4">
                <li class="ps-1 text-sm text-gray-500">
                    Improved and maintained integration tests using Codeception.
                </li>
                <li class="ps-1 text-sm text-gray-500">
                    Developed automation scripts for stress testing using PHP.
                </li>
                <li class="ps-1 text-sm text-gray-500">
                    Automated integration tests in Python to ensure FileCloud Desktop quality.
                </li>
            </ul>

            <!-- Image Grid -->
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-6">
                <Gallery
                    class="group block relative overflow-hidden rounded-lg"
                    :options="{
                        Carousel: {
                            infinite: false,
                        },
                    }">

                    <a data-fancybox="gallery" :href="backend_url('/img/experience/filecloud_login.png')" class="gallery-container">
                        <img class="gallery w-full rounded-2xl" src="/img/experience/filecloud_login.png" alt="">
                        <i class="fa fa-eye eye-icon cursor-pointer"></i>
                    </a>
                </Gallery>

                <Gallery
                    class="group block relative overflow-hidden rounded-lg"
                    :options="{
                                Carousel: {
                                    infinite: false,
                                },
                            }">

                    <a data-fancybox="gallery" :href="backend_url('/img/experience/filecloud_home.png')" class="gallery-container">
                        <img class="gallery w-full rounded-2xl" src="/img/experience/filecloud_home.png" alt="">
                        <i class="fa fa-eye eye-icon cursor-pointer"></i>
                    </a>
                </Gallery>

                <Gallery
                    class="group block relative overflow-hidden rounded-lg"
                    :options="{
                                Carousel: {
                                    infinite: false,
                                },
                            }">

                    <a data-fancybox="gallery" :href="backend_url('/img/experience/filecloud_profile.png')" class="gallery-container">
                        <img class="gallery w-full rounded-2xl" src="/img/experience/filecloud_profile.png" alt="">
                        <i class="fa fa-eye eye-icon cursor-pointer"></i>
                    </a>
                </Gallery>

                <Gallery
                    class="group block relative overflow-hidden rounded-lg"
                    :options="{
                                Carousel: {
                                    infinite: false,
                                },
                            }">

                    <a data-fancybox="gallery" :href="backend_url('/img/experience/filecloud_admin.png')" class="gallery-container">
                        <img class="gallery w-full rounded-2xl" src="/img/experience/filecloud_admin.png" alt="">
                        <i class="fa fa-eye eye-icon cursor-pointer"></i>
                    </a>
                </Gallery>
            </div>
        </div>
    </div>

    <!-- Applaudo Studios -->
    <div class="group relative flex gap-x-5">
        <!-- Icon -->
        <div class="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
            <div class="relative z-10 size-6 flex justify-center items-center">
                <img src="/img/experience/applaudo.png" class="shrink-0 size-6" alt="">
            </div>
        </div>

        <!-- Right Content -->
        <div class="grow pb-8 group-last:pb-0">
            <h3 class="mb-1 text-xs text-gray-600">
                2021 - 2022
            </h3>

            <p class="font-semibold text-sm text-theme-500">
                Laravel (PHP) FullStack Developer at Applaudo Studios
            </p>

            <p class="mt-1 text-sm text-gray-500">
                Assigned to <strong>Lowers Risk Group (US Customer)</strong> under a staffing model, contributing to
                adding valuable features to Fuse Retail.
            </p>

            <ul class="list-disc ms-6 mt-8 space-y-4">
                <li class="ps-1 text-sm text-gray-500">
                    <strong>Fuse Retail</strong> is a recruitment-focused software designed to streamline the hiring process by enabling
                    appointment scheduling, exam management, and workflow automation. It enhances
                    efficiency by coordinating candidate evaluations, ensuring a seamless experience
                    for both recruiters and applicants.
                </li>
            </ul>

            <!-- Image Grid -->
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-6">
                <Gallery
                    class="group block relative overflow-hidden rounded-lg"
                    :options="{
                                Carousel: {
                                    infinite: false,
                                },
                            }">

                    <a data-fancybox="gallery" :href="backend_url('/img/experience/proforma.jpg')" class="gallery-container">
                        <img class="gallery w-full rounded-2xl" src="/img/experience/proforma.jpg" alt="">
                        <i class="fa fa-eye eye-icon cursor-pointer"></i>
                    </a>
                </Gallery>
            </div>

        </div>
    </div>

    <!-- HDF -->
    <div class="group relative flex gap-x-5">
        <!-- Icon -->
        <div class="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
            <div class="relative z-10 size-6 flex justify-center items-center">
                <img src="/img/experience/hdf.png" class="shrink-0 size-6" alt="">
            </div>
        </div>

        <!-- Right Content -->
        <div class="grow pb-8 group-last:pb-0">
            <h3 class="mb-1 text-xs text-gray-600">
                2019 - 2020
            </h3>

            <p class="font-semibold text-sm text-theme-500">
                Laravel (PHP) FullStack Developer at Happy Days & Freedom
            </p>

            <p class="mt-1 text-sm text-gray-500">
                Happy Days School & Freedom High School is a top educational institution focused on academic excellence
                and holistic development, offering various programs to help students thrive.
            </p>

            <ul class="list-disc ms-6 mt-8 space-y-4">
                <li class="ps-1 text-sm text-gray-500">
                    <a href="https://www.happydaysfreedom.com/portal" target="_blank" class="text-theme-500">
                        Crafted HDF Portal
                    </a> which is a comprehensive SPA built for parents, students, teachers, and
                    administrative staff, featuring modules for admissions, enrollment, and blog posts.
                    Integrated a "Parents Business Network" for company registrations, and developed
                    a technical support and ticketing system for general use within the institution.
                    This project was crafted using Laravel, MySQL, Vue.js, and additional
                    technologies like Bootstrap, PostMark, and FullCalendar.
                </li>
            </ul>

            <!-- Image Grid -->
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-6">
                <Gallery
                    class="group block relative overflow-hidden rounded-lg"
                    :options="{
                                Carousel: {
                                    infinite: false,
                                },
                            }">

                    <a data-fancybox="gallery" :href="backend_url('/img/experience/hdf_portal_login.jpg')" class="gallery-container">
                        <img class="gallery w-full rounded-2xl" src="/img/experience/hdf_portal_login.jpg" alt="">
                        <i class="fa fa-eye eye-icon cursor-pointer"></i>
                    </a>
                </Gallery>

                <Gallery
                    class="group block relative overflow-hidden rounded-lg"
                    :options="{
                                Carousel: {
                                    infinite: false,
                                },
                            }">

                    <a data-fancybox="gallery" :href="backend_url('/img/experience/hdf_portal_home.jpg')" class="gallery-container">
                        <img class="gallery w-full rounded-2xl" src="/img/experience/hdf_portal_home.jpg" alt="">
                        <i class="fa fa-eye eye-icon cursor-pointer"></i>
                    </a>
                </Gallery>
            </div>

            <ul class="list-disc ms-6 mt-8 space-y-4">
                <li class="ps-1 text-sm text-gray-500">
                    <a href="https://www.happydaysfreedom.com/" target="_blank" class="text-theme-500">
                        HDF Website
                    </a> Developed the public website for the
                    institution, utilizing Laravel, Blade templates, and MySQL to create a dynamic, user-friendly online presence at
                    <a class="text-theme-500 hover:text-theme-300" href="https://happydaysfreedom.com" target="_blank">
                        happydaysfreedom.com
                    </a>.
                </li>
            </ul>

            <!-- Image Grid -->
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-6">
                <Gallery
                    class="group block relative overflow-hidden rounded-lg"
                    :options="{
                                Carousel: {
                                    infinite: false,
                                },
                            }">

                    <a data-fancybox="gallery" :href="backend_url('/img/experience/hdf_website.jpg')" class="gallery-container">
                        <img class="gallery w-full rounded-2xl" src="/img/experience/hdf_website.jpg" alt="">
                        <i class="fa fa-eye eye-icon cursor-pointer"></i>
                    </a>
                </Gallery>

                <Gallery
                    class="group block relative overflow-hidden rounded-lg"
                    :options="{
                                Carousel: {
                                    infinite: false,
                                },
                            }">

                    <a data-fancybox="gallery" :href="backend_url('/img/experience/hdf_website_music.png')" class="gallery-container">
                        <img class="gallery w-full rounded-2xl" src="/img/experience/hdf_website_music.png" alt="">
                        <i class="fa fa-eye eye-icon cursor-pointer"></i>
                    </a>
                </Gallery>

                <Gallery
                    class="group block relative overflow-hidden rounded-lg"
                    :options="{
                                Carousel: {
                                    infinite: false,
                                },
                            }">

                    <a data-fancybox="gallery" :href="backend_url('/img/experience/hdf_website_misc.png')" class="gallery-container">
                        <img class="gallery w-full rounded-2xl" src="/img/experience/hdf_website_misc.png" alt="">
                        <i class="fa fa-eye eye-icon cursor-pointer"></i>
                    </a>
                </Gallery>
            </div>
        </div>
    </div>

    <!-- PixelPay -->
    <div class="group relative flex gap-x-5">
        <!-- Icon -->
        <div class="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
            <div class="relative z-10 size-6 flex justify-center items-center">
                <img src="/img/experience/pixelpay.jpg" class="shrink-0 size-6 rounded-full" alt="">
            </div>
        </div>

        <!-- Right Content -->
        <div class="grow pb-8 group-last:pb-0">
            <h3 class="mb-1 text-xs text-gray-600">
                2019 - 2019
            </h3>

            <p class="font-semibold text-sm text-theme-500">
                Laravel (PHP) FullStack Developer at PixelPay
            </p>

            <p class="mt-1 text-sm text-gray-500">
                <a href="https://pixelpay.app/" target="_blank" class="text-theme-500">PixelPay</a> is a Fintech
                oriented to facilitate payment solutions with credit and/or debit cards at the regional level, it is a
                leading company in the country and is growing really fast to a Central America market.
            </p>

            <ul class="list-disc ms-6 mt-8 space-y-4">
                <li class="ps-1 text-sm text-gray-500">
                    Contributed to the integration of payment solutions with major banks like BAC, PROMERICA,
                    and BANRURAL
                </li>

                <li class="ps-1 text-sm text-gray-500">
                    Developed key functionalities for the PixelPay web application built with Laravel, Blade, and MySQL.
                </li>
            </ul>

            <!-- Image Grid -->
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-6">
                <Gallery
                    class="group block relative overflow-hidden rounded-lg"
                    :options="{
                                Carousel: {
                                    infinite: false,
                                },
                            }">

                    <a data-fancybox="gallery" :href="backend_url('/img/experience/pixelpay_website.jpg')" class="gallery-container">
                        <img class="gallery w-full rounded-2xl" src="/img/experience/pixelpay_website.jpg" alt="">
                        <i class="fa fa-eye eye-icon cursor-pointer"></i>
                    </a>
                </Gallery>

                <Gallery
                    class="group block relative overflow-hidden rounded-lg"
                    :options="{
                                Carousel: {
                                    infinite: false,
                                },
                            }">

                    <a data-fancybox="gallery" :href="backend_url('/img/experience/pixelpay_login.jpg')" class="gallery-container">
                        <img class="gallery w-full rounded-2xl" src="/img/experience/pixelpay_login.jpg" alt="">
                        <i class="fa fa-eye eye-icon cursor-pointer"></i>
                    </a>
                </Gallery>
            </div>

        </div>
    </div>

    <!-- Newbie -->
    <div class="group relative flex gap-x-5">
        <!-- Icon -->
        <div class="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
            <div class="relative z-10 size-6 flex justify-center items-center">
                <span class="w-14 bg-theme-100 text-center text-theme-500 rounded-full">
                    <i class="fa-solid fa-user"></i>
                </span>
            </div>
        </div>

        <p class="font-semibold text-sm text-theme-500 pt-0.5">
            Newbie at home&nbsp;😁
        </p>
    </div>
</div>
</template>
<script setup>
</script>
