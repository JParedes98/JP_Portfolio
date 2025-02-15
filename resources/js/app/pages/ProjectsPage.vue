<template>
    <div class="flex flex-col space-y-24">
        <NocNoc/>

        <NocNoc/>

        <NocNoc/>
    </div>
</template>
<script>
import NocNoc from "./Projects/NocNoc.vue";
export default {
    name: 'ProjectsPage',
    components: {
        NocNoc
    }
}
</script>
