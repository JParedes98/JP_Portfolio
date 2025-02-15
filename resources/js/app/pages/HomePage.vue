<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';
import { ref } from 'vue';

const config = {
    height: 125,
    itemsToScroll: 1,
    snapAlign: 'start',
    breakpoints: {
        // 360px and up
        360: {
            itemsToShow: 2,
        },
        // 720 and up
        720: {
            itemsToShow: 3,
        },
        // 1024 and up
        1024: {
            itemsToShow: 4,
        },
        // 1280 and up
        1280: {
            itemsToShow: 5,
        },
    },
    // gap: 3,
    autoplay: 2000,
    wrapAround: true,
    pauseAutoplayOnHover: true,
};

const carouselRef = ref();
const currentSlide = ref(1);

const next = () => carouselRef.value.next();
const prev = () => carouselRef.value.prev();

</script>

<style>
.logo-style {
    width: 80px;
    height: 80px;
    //background-color: white;
    object-fit: contain;
    display: block;
    margin: 0 auto;
    border-radius: 8px;
}
</style>

<template>
    <!-- HERO -->
    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div class="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
            <div data-aos="fade-up-right" class="relative">
            <span class="badge badge-primary shadow-lg">
                💻&nbsp;Fullstack Developer
            </span>
                <h1 class="block text-3xl font-bold text-gray-700 sm:text-4xl lg:text-5xl lg:leading-tight">
                    I'm Jose <span class="text-theme-500">Paredes</span>
                </h1>
                <p class="mt-3 text-md text-gray-500">
                    Someone genuinely passionate about coding and problem-solving, I'm from Honduras.
                    <br class="mb-4">
                    I have <span class="text-theme-500">+6 Years</span> working as Remote Software Engineer. Currently I'm working at
                    <a class="text-theme-500 hover:text-theme-300" href="https://www.filecloud.com/"><i class="fa-solid fa-link"></i>FileCloud</a>, but...
                    <br class="mb-4">
                    <span class="text-theme-500">"Talk is cheap. Show me the code."</span> Linus Torvalds
                </p>
            </div>

            <div data-aos="fade-up-left" class="relative ms-4">
                <Gallery
                    :options="{
                        Carousel: {
                            infinite: false,
                        },
                    }">

                    <a data-fancybox="gallery" href="http://localhost/img/JoseParedes-Full.png" class="gallery-container">
                        <img class="gallery w-full rounded-2xl" src="/img/JoseParedes-Full.png" alt="">
                        <i class="fa fa-eye eye-icon cursor-pointer"></i>
                    </a>
                </Gallery>

                <div class="absolute bottom-0 start-0">
                    <svg class="w-2/3 ms-auto h-auto text-white" width="630" height="451" viewBox="0 0 630 451" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="531" y="352" width="99" height="99" fill="#eef6ff"/>
                        <rect x="140" y="352" width="106" height="99" fill="#eef6ff"/>
                        <rect x="482" y="402" width="64" height="49" fill="#eef6ff"/>
                        <rect x="433" y="402" width="63" height="49" fill="#eef6ff"/>
                        <rect x="384" y="352" width="49" height="50" fill="#eef6ff"/>
                        <rect x="531" y="328" width="50" height="50" fill="#eef6ff"/>
                        <rect x="99" y="303" width="49" height="58" fill="#eef6ff"/>
                        <rect x="99" y="352" width="49" height="50" fill="#eef6ff"/>
                        <rect x="99" y="392" width="49" height="59" fill="#eef6ff"/>
                        <rect x="44" y="402" width="66" height="49" fill="#eef6ff"/>
                        <rect x="234" y="402" width="62" height="49" fill="#eef6ff"/>
                        <rect x="334" y="303" width="50" height="49" fill="#eef6ff"/>
                        <rect x="581" width="49" height="49" fill="#eef6ff"/>
                        <rect x="581" width="49" height="64" fill="#eef6ff"/>
                        <rect x="482" y="123" width="49" height="49" fill="#eef6ff"/>
                        <rect x="507" y="124" width="49" height="24" fill="#eef6ff"/>
                        <rect x="531" y="49" width="99" height="99" fill="#eef6ff"/>
                    </svg>
                </div>
            </div>
        </div>
    </div>

    <!-- SKILLS SLIDER -->
    <div data-aos="fade-up" class="px-4 sm:px-6 lg:px-8 mt-6">
    <span class="badge badge-primary shadow-lg">
        My Skills 😉
    </span>
        <Carousel
            ref="carouselRef"
            v-model="currentSlide"
            v-bind="config"
            class="relative overflow-hidden before:absolute before:top-0 before:start-0 before:z-10 before:w-20 before:h-full before:bg-gradient-to-r before:from-theme-50 before:to-transparent after:absolute after:top-0 after:end-0 after:w-20 after:h-full after:bg-gradient-to-l after:from-theme-50 after:to-transparent">

            <Slide>
                <img src="/img/skills/vite.png" class="logo-style" alt="">
            </Slide>

            <Slide>
                <img src="/img/skills/vue.png" class="logo-style" alt="Vue.js">
            </Slide>

            <Slide>
                <img src="/img/skills/laravel.png" class="logo-style" alt="">
            </Slide>

            <Slide>
                <img src="/img/skills/mysql.png" class="logo-style" alt="MySQL">
            </Slide>

            <Slide>
                <img src="/img/skills/forge.png" class="logo-style" alt="">
            </Slide>

            <Slide>
                <img src="/img/skills/git.png" class="logo-style" alt="">
            </Slide>

            <Slide>
                <img src="/img/skills/tailwind.png" class="logo-style" alt="">
            </Slide>

            <Slide>
                <img src="/img/skills/prime_vue.png" class="logo-style" alt="">
            </Slide>

            <Slide>
                <img src="/img/skills/redis.png" class="logo-style" alt="">
            </Slide>

            <Slide>
                <img src="/img/skills/node.png" class="logo-style" alt="">
            </Slide>
        </Carousel>

        <div class="flex justify-end space-x-1 items-start">
            <button class="btn btn-primary btn-xs shadow-lg" @click="prev">
                <i class="fa-solid fa-chevron-left"></i>
            </button>

            <button class="btn btn-primary btn-xs shadow-lg" @click="next">
                <i class="fa-solid fa-chevron-right"></i>
            </button>
        </div>
    </div>

    <!-- FRONTEND -->
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:pt-14 mx-auto mt-12">
        <div class="grid gap-12">
            <div>
                <h2 data-aos="fade-up" class="text-3xl text-theme-500 font-bold lg:text-4xl">
                    Eyes Captivate 👀
                </h2>
                <span data-aos="fade-up" class="block font-bold text-gray-500">
                    Everything starts with a visual attraction.
                </span>
                <p data-aos="fade-up" class="mt-4 text-gray-500">
                    I craft seamless and captivating user interfaces that prioritize both form and function.
                    With a focus on delivering responsive, dynamic, and user-friendly applications.
                </p>

                <ul data-aos="fade-up" class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2 mt-4">
                    <li class="badge badge-primary text-xs lg:text-md mx-auto shadow-lg">
                        Vue Js
                    </li>
                    <li class="badge badge-neutral text-xs lg:text-md mx-auto shadow-lg">Router</li>
                    <li class="badge badge-neutral text-xs lg:text-md mx-auto shadow-lg">Vuex</li>
                    <li class="badge badge-neutral text-xs lg:text-md mx-auto shadow-lg">Vuelidate</li>
                    <li class="badge badge-neutral text-xs lg:text-md mx-auto shadow-lg">Prime Vue</li>
                    <li class="badge badge-neutral text-xs lg:text-md mx-auto shadow-lg">Bulma</li>
                    <li class="badge badge-neutral text-xs lg:text-md mx-auto shadow-lg">Alpine JS</li>
                    <li class="badge badge-neutral text-xs lg:text-md mx-auto shadow-lg">Node JS</li>
                </ul>
            </div>

            <div class="space-y-6 lg:space-y-10 mt-8">
                <div class="flex gap-x-5 sm:gap-x-8">
                    <span data-aos="fade-up" class="mt-2 text-2xl text-theme-500">
                        <i class="fa-solid fa-bolt-lightning"></i>
                    </span>

                    <div data-aos="fade-up" class="grow">
                        <h3 class="text-base sm:text-lg text-gray-500">
                            Of course, I also build <span class="text-theme-500 font-bold">REAL TIME APPS</span> 😁
                        </h3>
                        <p data-aos="fade-up" class="mt-1 text-gray-500">
                            I specialize in building real-time applications that deliver instant updates and seamless user interactions.
                            <strong>Using Laravel Echo alongside Soketi, Laravel reverb and/or services like Pusher.</strong>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- BACKEND -->
    <div data-aos="fade-up" class="bg-theme-300 rounded-3xl max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:pt-14 mx-auto mt-12 shadow-lg">
        <div class="grid gap-12">
            <div>
                <h2 data-aos="fade-up" class="text-3xl text-white font-bold lg:text-4xl">
                    Building The Backbone&nbsp;🧮
                </h2>
                <span data-aos="fade-up" class="block font-bold text-white">
                    A great product must have a solid structure.
                </span>
                <p data-aos="fade-up" class="mt-4 text-white">
                    Backend side I've setup and work on top of full featured PHP/Laravel environments starting from Sail + Docker local environment, implementing basic and intermediate Design Patterns, adding Unit, Feature and Browser Test, handling CI/CD with Github actions for automated testing and automated deployments with Laravel Forge.
                </p>

                <ul data-aos="fade-up" class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2 mt-4">
                    <li class="badge badge-white text-xs lg:text-md mx-auto shadow-lg">
                        Laravel
                    </li>
                    <li class="badge badge-white text-xs lg:text-md mx-auto shadow-lg">
                        MYSQL
                    </li>
                    <li class="badge badge-white text-xs lg:text-md mx-auto shadow-lg">
                        Forge
                    </li>
                    <li class="badge badge-white text-xs lg:text-md mx-auto shadow-lg">
                        Redis
                    </li>
                    <li class="badge badge-white text-xs lg:text-md mx-auto shadow-lg">
                        Git
                    </li>
                    <li class="badge badge-white text-xs lg:text-md mx-auto shadow-lg">
                        Reverb
                    </li>
                    <li class="badge badge-white text-xs lg:text-md mx-auto shadow-lg">
                        Unit Test
                    </li>
                    <li class="badge badge-white text-xs lg:text-md mx-auto shadow-lg">
                        E2E Test
                    </li>
                    <li class="badge badge-white text-xs lg:text-md mx-auto shadow-lg">
                        JWT
                    </li>
                    <li class="badge badge-white text-xs lg:text-md mx-auto shadow-lg">
                        Cashier
                    </li>
                    <li class="badge badge-white text-xs lg:text-md mx-auto shadow-lg">
                        ExpressJS
                    </li>
                </ul>
            </div>

            <div class="space-y-2">
                <div class="flex gap-x-5 sm:gap-x-8">
                    <span data-aos="fade-up" class="text-2xl text-white">
                        <i class="fa-solid fa-bolt-lightning"></i>
                    </span>

                    <p data-aos="fade-up" class="mt-1 text-white">
                        Performance optimized with Laravel Octane
                    </p>
                </div>

                <div class="flex gap-x-5 sm:gap-x-8">
                    <span data-aos="fade-up" class="text-2xl text-white">
                        <i class="fa-solid fa-bolt-lightning"></i>
                    </span>

                    <p data-aos="fade-up" class="mt-1 text-white">
                        Real time functionalities using Laravel Reverb, Pusher or Soketi.
                    </p>
                </div>

                <div class="flex gap-x-5 sm:gap-x-8">
                    <span data-aos="fade-up" class="text-2xl text-white">
                        <i class="fa-solid fa-bolt-lightning"></i>
                    </span>

                    <p data-aos="fade-up" class="mt-1 text-white">
                        Paid subscriptions managed with Laravel Cashier via Paddle and Stripe.
                    </p>
                </div>

                <div class="flex gap-x-5 sm:gap-x-8">
                    <span data-aos="fade-up" class="text-2xl text-white">
                        <i class="fa-solid fa-bolt-lightning"></i>
                    </span>

                    <p data-aos="fade-up" class="mt-1 text-white">
                        Authorization with Sanctum tokens, Policies, Gates, Middlewares, etc.
                    </p>
                </div>

                <div class="flex gap-x-5 sm:gap-x-8">
                    <span data-aos="fade-up" class="text-2xl text-white">
                        <i class="fa-solid fa-bolt-lightning"></i>
                    </span>

                    <p data-aos="fade-up" class="mt-1 text-white">
                        Jobs and Queues with Redis
                    </p>
                </div>

                <div class="flex gap-x-5 sm:gap-x-8">
                    <span data-aos="fade-up" class="text-2xl text-white">
                        <i class="fa-solid fa-bolt-lightning"></i>
                    </span>

                    <p data-aos="fade-up" class="mt-1 text-white">
                        Multiple register and login methods with socialite.
                    </p>
                </div>

                <div class="flex gap-x-5 sm:gap-x-8">
                    <span data-aos="fade-up" class="text-2xl text-white">
                        <i class="fa-solid fa-bolt-lightning"></i>
                    </span>

                    <p data-aos="fade-up" class="mt-1 text-white">
                        Setup Laravel Pulse and Telescope dashboards
                    </p>
                </div>
            </div>

        </div>
    </div>

    <!-- CALL TO ACTION -->
    <div data-aos="fade-up" class="border border-theme-500 p-8 rounded-3xl w-full mx-auto flex flex-col justify-between text-center md:px-10 lg:flex-row shadow-lg mt-12">
        <h3 class="py-2 text-3xl font-medium leading-tight title-font text-theme-500">
            😎&nbsp;Let's check samples!
        </h3>

        <button class="btn btn-primary inline-flex items-center rounded-2xl text-white">
            <span>
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </span>

            <router-link to="/projects" class="flex flex-col items-start ml-2 leading-none">
                <span class="mb-1 text-xs font-light">CLICK TO</span>
                <span class="font-semibold title-font">See My Projects</span>
            </router-link>
        </button>
    </div>
</template>
