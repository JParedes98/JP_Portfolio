import axios from 'axios';
import AOS from 'aos'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
AOS.init();

import { createApp } from 'vue'
import router from '@app/router'
import store from '@app/store'
import Mixins from '@app/mixins'
import Gallery from "./app/components/Gallery.vue";

const app = createApp({})
    app.use(router)
    app.use(store)
    app.use(Toast);
    app.mixin(Mixins)
    app.component('Gallery', Gallery)

app.mount('#app')
