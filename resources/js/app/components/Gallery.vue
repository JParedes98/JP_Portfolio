<template>
    <div ref="container">
        <slot></slot>
    </div>
</template>

<script>
import { Fancybox } from "@fancyapps/ui";

export default {
    props: {
        options: Object,
    },
    mounted() {
        Fancybox.bind(this.$refs.container, '[data-fancybox]', {
            ...(this.options || {}),
        });
    },
    updated() {
        Fancybox.unbind(this.$refs.container);
        Fancybox.close();

        Fancybox.bind(this.$refs.container, '[data-fancybox]', {
            ...(this.options || {}),
        });
    },
    unmounted() {
        Fancybox.destroy();
    },
};
</script>
