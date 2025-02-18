<template>
    <!-- NOC NOC -->
    <div class="flex flex-col space-y-24">
        <section>
            <div class="max-w-6xl px-6 py-10 mx-auto">
                <p class="text-xl font-medium text-theme-500 ">noc noc</p>

                <h1 class="mt-2 text-2xl font-semibold text-gray-500 capitalize lg:text-3xl dark:text-white">
                    Software For Restaurants!
                </h1>

                <main class="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
                    <div class="absolute w-full bg-theme-500 -z-10 md:h-96 rounded-2xl"></div>

                    <div class="w-full p-6 bg-theme-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                        <img
                            v-if="noc_noc_slide === 1"
                            class="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl"
                            src="/img/projects/1.png"
                            alt="" />

                        <img
                            v-if="noc_noc_slide === 2"
                            class="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl"
                            src="/img/projects/2.png"
                            alt="" />

                        <img
                            v-if="noc_noc_slide === 3"
                            class="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl"
                            src="/img/projects/3.png"
                            alt="" />

                        <div class="mt-2 md:mx-6">
                            <div>
                                <p v-if="noc_noc_slide === 1" class="text-xl font-medium tracking-tight text-white">
                                    Menu Digitalization
                                </p>

                                <p v-if="noc_noc_slide === 2" class="text-xl font-medium tracking-tight text-white">
                                    Real Time Orders
                                </p>

                                <p v-if="noc_noc_slide === 3" class="text-xl font-medium tracking-tight text-white">
                                    Seamless Billing
                                </p>
                            </div>

                            <p v-if="noc_noc_slide === 1" class="mt-4 text-lg leading-relaxed text-white md:text-xl">
                                Transform traditional menus into a digital experience accessible via QR codes.
                                Restaurants can fully customize the menu by adding categories, items, side dishes, colors,
                                photos and much more.
                            </p>

                            <p v-if="noc_noc_slide === 2" class="mt-4 text-lg leading-relaxed text-white md:text-xl">
                                Optimize restaurant operations by enabling customers to place orders directly from their
                                devices. Orders are instantly processed and sent to the orders monitor in kitchen,
                                reducing wait times and minimizing errors.
                            </p>

                            <p v-if="noc_noc_slide === 3" class="mt-4 text-lg leading-relaxed text-white md:text-xl">
                                Simplifies billing process by allowing restaurants to generate invoices
                                instantly, split bills among customers, and send receipts via email. With additional
                                features like real-time transaction tracking, it enhances efficiency.
                            </p>

                            <div class="flex items-center justify-between mt-6 md:justify-start">
                                <button @click="noc_noc_prev_slide" :disabled="noc_noc_slide === 1" title="left arrow" class="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 hover:bg-theme-400 disabled:opacity-25">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>

                                <button @click="noc_noc_next_slide" :disabled="noc_noc_slide === 3" title="right arrow" class="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 md:mx-6 hover:bg-theme-400 disabled:opacity-25">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </section>

        <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
            <Gallery
                :options="{
                Carousel: {
                    infinite: false,
                },
            }">

                <a data-fancybox="gallery" :href="backend_url('/img/projects/noc_noc_website.png')" class="gallery-container">
                    <img class="gallery w-full size-60 object-cover rounded-2xl" src="/img/projects/noc_noc_website.png" alt="">
                    <i class="fa fa-eye eye-icon cursor-pointer"></i>
                </a>
            </Gallery>

            <Gallery
                :options="{
                Carousel: {
                    infinite: false,
                },
            }">

                <a data-fancybox="gallery" :href="backend_url('/img/projects/noc_noc_menu.webp')" class="gallery-container">
                    <img class="gallery w-full size-60 object-cover rounded-2xl" src="/img/projects/noc_noc_menu.webp" alt="">
                    <i class="fa fa-eye eye-icon cursor-pointer"></i>
                </a>
            </Gallery>

            <Gallery
                :options="{
                Carousel: {
                    infinite: false,
                },
            }">

                <a data-fancybox="gallery" :href="backend_url('/img/projects/noc_noc_control_panel.png')" class="gallery-container">
                    <img class="gallery w-full size-60 object-cover rounded-2xl" src="/img/projects/noc_noc_control_panel.png" alt="">
                    <i class="fa fa-eye eye-icon cursor-pointer"></i>
                </a>
            </Gallery>
        </div>

        <div data-aos="fade-up" class="border border-theme-500 p-8 rounded-3xl w-full mx-auto flex flex-col justify-between text-center md:px-10 lg:flex-row shadow-lg mt-12">
            <h3 class="py-2 text-3xl font-medium leading-tight title-font text-theme-500">
                🤭&nbsp;Try it yourself!
            </h3>

            <button class="btn btn-primary inline-flex items-center rounded-2xl text-white">
                <span>
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </span>

                <a target="_blank" href="https://nocnoc.app" class="flex flex-col items-start ml-2 leading-none">
                    <span class="mb-1 text-xs font-light">CLICK TO</span>
                    <span class="font-semibold title-font">See noc noc</span>
                </a>
            </button>
        </div>
    </div>

    <!-- BPV -->
    <div class="flex flex-col space-y-24 mt-24">
        <section>
            <div class="max-w-6xl px-6 py-10 mx-auto">
                <p class="text-xl font-medium text-theme-500 ">BPV MusicWorks</p>

                <h1 class="mt-2 text-2xl font-semibold text-gray-500 capitalize lg:text-3xl dark:text-white">
                    Remote Raspberry PI Video Player
                </h1>

                <main class="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
                    <div class="absolute w-full bg-theme-500 -z-10 md:h-96 rounded-2xl"></div>

                    <div class="w-full p-6 bg-theme-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                        <img
                            class="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl"
                            src="/img/projects/bpv.png"
                            alt="" />

                        <div class="mt-2 md:mx-6">
                            <div>
                                <p class="text-xl font-medium tracking-tight text-white">
                                    BPV MusicWorks
                                </p>
                            </div>

                            <p v-if="bpv_slide === 1" class="mt-4 text-md leading-relaxed text-white md:text-xl">
                                A remote management software for Raspberry Pi Video Players. It
                                enables seamless control over devices and media, making it ideal for digital
                                signage and automated content scheduling.
                            </p>

                            <ul v-if="bpv_slide === 2" class="mt-4 text-md leading-relaxed text-white md:text-xl list-disc">
                                <li>Customer & Device Management</li>
                                <li>Media Management</li>
                                <li>Device Control</li>
                                <li>Playlist Scheduling</li>
                                <li>Flexible Layouts</li>
                            </ul>

                            <div class="flex items-center justify-between mt-6 md:justify-start">
                                <button @click="bpv_prev_slide" :disabled="bpv_slide === 1" title="left arrow" class="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 hover:bg-theme-400 disabled:opacity-25">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>

                                <button @click="bpv_next_slide" :disabled="bpv_slide === 2" title="right arrow" class="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 md:mx-6 hover:bg-theme-400 disabled:opacity-25">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </section>

        <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
            <Gallery
                :options="{
                Carousel: {
                    infinite: false,
                },
            }">

                <a data-fancybox="gallery" :href="backend_url('/img/projects/bpv_media.png')" class="gallery-container">
                    <img class="gallery w-full size-60 object-cover rounded-2xl" src="/img/projects/bpv_media.png" alt="">
                    <i class="fa fa-eye eye-icon cursor-pointer"></i>
                </a>
            </Gallery>

            <Gallery
                :options="{
                Carousel: {
                    infinite: false,
                },
            }">

                <a data-fancybox="gallery" :href="backend_url('/img/projects/bpv_device_storage.png')" class="gallery-container">
                    <img class="gallery w-full size-60 object-cover rounded-2xl" src="/img/projects/bpv_device_storage.png" alt="">
                    <i class="fa fa-eye eye-icon cursor-pointer"></i>
                </a>
            </Gallery>

            <Gallery
                :options="{
                Carousel: {
                    infinite: false,
                },
            }">

                <a data-fancybox="gallery" :href="backend_url('/img/projects/bpv_device_terminal.png')" class="gallery-container">
                    <img class="gallery w-full size-60 object-cover rounded-2xl" src="/img/projects/bpv_device_terminal.png" alt="">
                    <i class="fa fa-eye eye-icon cursor-pointer"></i>
                </a>
            </Gallery>
        </div>

        <!-- CALL TO ACTION -->
        <div data-aos="fade-up" class="border border-theme-500 p-8 rounded-3xl w-full mx-auto flex flex-col justify-between text-center md:px-10 lg:flex-row shadow-lg mt-12">
            <h3 class="py-2 text-3xl font-medium leading-tight title-font text-theme-500">
                🤭&nbsp;Try it yourself!
            </h3>

            <button class="btn btn-primary inline-flex items-center rounded-2xl text-white">
            <span>
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </span>

                <a target="_blank" href="https://bpv.musicworks.on.ca/" class="flex flex-col items-start ml-2 leading-none">
                    <span class="mb-1 text-xs font-light">CLICK TO</span>
                    <span class="font-semibold title-font">See BPV</span>
                </a>
            </button>
        </div>

    </div>
</template>
<script>
export default {
    name: 'ProjectsPage',
    data() {
        return {
            noc_noc_slide: 1,
            bpv_slide: 1
        }
    },
    methods: {
        noc_noc_next_slide() {
            this.noc_noc_slide++
        },
        noc_noc_prev_slide() {
            this.noc_noc_slide--
        },
        bpv_next_slide() {
            this.bpv_slide++
        },
        bpv_prev_slide() {
            this.bpv_slide--
        },
    }
}
</script>
