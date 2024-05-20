<template>
    <div class="p-5 w-full overflow-y-scroll" :style="{height: `${windowHeight - 63}px`}">
        <Search />
        <div v-if="loading">
            <div>
                <div class="grid grid-cols-3 gap-5 mt-5">
                    <PackageLoading v-for="n in 12" :key="n" />
                </div>
            </div>
        </div>
        <div v-else class="mt-5">
            <VideoCollection/>
        </div>
    </div>
</template>
<script setup>
import Search from './partials/filter/Search.vue';
import { useStore } from 'vuex';
import { computed, onMounted, ref, onUnmounted } from 'vue';
import PackageLoading from './partials/loading/PackageLoading.vue'
import VideoCollection from './partials/packages/VideoCollection.vue'

const store = useStore();
const loading = computed(() => store.state.video.loading);

onMounted(() => {
    store.dispatch('video/fetchVideos');
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