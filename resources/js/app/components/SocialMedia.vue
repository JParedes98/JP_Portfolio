<template>
    <aside class="flex shrink-0 grow-0 justify-around gap-4 bg-white/50 p-1 shadow-lg backdrop-blur-lg fixed top-2/4 -translate-y-2/3 left-0 min-h-[auto] min-w-[64px] flex-col rounded-r-2xl border">
        <button
            @click="go_to_url('https://www.linkedin.com/in/joseparedes98/')"
            class="flex aspect-square min-h-[24px] w-14 flex-col items-center justify-center gap-1 rounded-xl p-0.5 transition-all duration-150 text-neutral-500 hover:bg-theme-50 hover:text-theme-500">

            <span class="w-5 h-5 text-center">
                <i class="fa-brands fa-linkedin-in"></i>
            </span>

            <small class="text-center text-xs font-medium">
                Linkedin
            </small>
        </button>

        <button
            @click="go_to_url('https://github.com/JParedes98')"
            class="flex aspect-square min-h-[24px] w-14 flex-col items-center justify-center gap-1 rounded-xl p-0.5 transition-all duration-150 text-neutral-500 hover:bg-theme-50 hover:text-theme-500">

            <span class="w-5 h-5 text-center">
                <i class="fa-brands fa-github"></i>
            </span>

            <small class="text-center text-xs font-medium">
                Github
            </small>
        </button>
    </aside>
</template>

<script>
export default {
    name: "SocialMedia"
};
</script>
