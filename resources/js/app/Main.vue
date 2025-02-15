<template>
<div>
    <social-media class="hidden lg:block"></social-media>

    <Navbar></Navbar>

    <div class="w-full max-w-5xl mx-auto pt-[85px]">
        <router-view></router-view>
    </div>

    <Footer></Footer>

    <ContactFloatingButton></ContactFloatingButton>
</div>
</template>
<script>
import SocialMedia from "./components/SocialMedia.vue";
import Navbar from "./components/Navbar.vue";

import Footer from "./components/Footer.vue";
import ContactFloatingButton from "./components/ContactFloatingButton.vue";

export default {
    components: {
        SocialMedia,
        Navbar,
        Footer,
        ContactFloatingButton
    }
}
</script>
