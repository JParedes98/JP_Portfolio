<template>
<div>
    <!-- FLOATING BUTTON -->
    <button
        @click="show_message_box= !show_message_box"
        class="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full bg-theme-500 transition duration-150 hover:opacity-75">
        <div class="absolute z-10 top-0 left-0 w-full h-full rounded-full bg-theme-500 animate-ping"></div>

        <div class="relative z-20">
            <span class="text-3xl text-white text-center">
                <i class="fa-regular fa-comment"></i>
            </span>
        </div>
    </button>

    <div v-if="show_message_box" class="w-full md:max-w-[375px] fixed bottom-24 right-0.5 md:right-8 p-4">
        <div class="bg-white p-6 shadow-neutral-400 shadow-2xl rounded-3xl">
            <span @click="show_message_box= !show_message_box" class="absolute top-6 right-8 cursor-pointer hover:text-neutral-700">
                <i class="fa-solid fa-xmark"></i>
            </span>

            <p class="font-medium text-xl text-neutral-600 text-center">
                Hi 😁
            </p>

            <p class="mt-2 text-sm font-light text-neutral-500 text-center">
                I'm glad to see you here.

                <span class="block font-bold mt-2">
                    How can I help you?
                </span>
            </p>

            <div class="w-full mt-4">
                <textarea
                    class="block w-full h-32 px-5 py-3 mt-2 text-gray-500 placeholder-gray-400 bg-white border border-gray-200 rounded-3xl md:h-48 focus:border-theme-400 focus:ring-theme-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Type here..."></textarea>
            </div>

            <button class="w-full px-6 py-3 mt-6 text-sm font-bold tracking-wide text-white capitalize transition-colors duration-300 transform bg-theme-500 rounded-full hover:bg-theme-400 focus:outline-none focus:ring focus:ring-theme-300 focus:ring-opacity-50">
                Send Message
            </button>
        </div>
    </div>
</div>
</template>

<script>
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelectorAll('.hs-overlay').forEach((el) => HSOverlay.open(el));
    });
});

export default {
    data() {
        return {
            show_message_box: false,
        }
    }
}
</script>
