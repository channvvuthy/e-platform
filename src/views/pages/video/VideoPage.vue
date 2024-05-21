<template>
    <div class="p-5 w-full overflow-y-scroll" :style="{ height: `${windowHeight - 63}px` }" @scroll="handleScroll">
        <Search />
        <div v-if="loading">
            <div>
                <div class="grid grid-cols-3 gap-5 mt-5">
                    <PackageLoading v-for="n in 12" :key="n" />
                </div>
            </div>
        </div>
        <div v-else class="mt-5">
            <VideoCollection />
            <VideoCouse />
        </div>
    </div>
</template>
<script setup>
import Search from './partials/filter/Search.vue';
import { useStore } from 'vuex';
import { computed, onMounted, ref, onUnmounted } from 'vue';
import PackageLoading from './partials/loading/PackageLoading.vue'
import VideoCollection from './partials/packages/VideoCollection.vue'
import VideoCouse from "./course/VideoCourse.vue"

const store = useStore();
const loading = computed(() => store.state.video.loading);
const filters = computed(() => store.state.video.filters);
const p = ref(1);
const isNoMoreData = ref(false);

/**
 * Handles the scroll event and fetches more videos when reaching the bottom.
 *
 * @param {Event} event - The scroll event object.
 * @return {Promise<void>} A promise that resolves when the videos are fetched.
 */
const handleScroll = async (event) => {
    const isBottom = event.target.scrollTop + event.target.clientHeight >= event.target.scrollHeight;

    if (isBottom) {
        if (isNoMoreData.value)
            return;

        p.value++;
        await store.dispatch('video/fetchVideos', { p: p.value, ...filters.value })
            .then((data) => {
                if (!data.length) {
                    isNoMoreData.value = true;
                }
            });
    }
}


onMounted(async () => {
    await store.dispatch('video/fetchVideos');
});

const windowHeight = ref(window.innerHeight);

const updateHeight = () => {
    windowHeight.value = window.innerHeight;
};

onMounted(() => {
    window.addEventListener("resize", updateHeight);
});

onUnmounted(() => {
    window.removeEventListener("resize", updateHeight);
});

</script>