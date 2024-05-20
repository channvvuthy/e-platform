<template>
    <vue-horizontal v-if="videos.package && videos.package.length">
        <section v-for="collection, index in videos.package" :key="index">
            <div class="bg-white rounded-3xl h-48 mr-5 bg-center bg-cover w-80 relative"
                :style="{ backgroundImage: `url(${collection.thumbnail})` }">
                <div class="bg-gradient-to-t from-black opacity-50 w-full h-full top-0 left-0 rounded-3xl"></div>
                <div
                    class="h-10 w-full px-4 bg-white rounded-full absolute left-0 bottom-0 bg-opacity-90 flex items-center justify-between">
                    <div class="flex">
                        <div>{{ collection.total_item }} courses</div>
                        <div class="ml-3 text-red-500">${{ collection.price.year }}</div>
                    </div>
                    <div class="bg-primary text-sm text-white rounded-full py-1 px-3 cursor-pointer">Add to Cart</div>
                </div>
            </div>
        </section>
    </vue-horizontal>
</template>
<script>
import { computed } from 'vue';
import VueHorizontal from 'vue-horizontal';
import { useStore } from 'vuex';

export default {
    components: { VueHorizontal },
    setup() {
        const store = useStore();
        const videos = computed(() => store.state.video.videos);
        const loading = computed(() => store.state.video.loading);

        return {
            videos,
            loading
        }
    }
}
</script>