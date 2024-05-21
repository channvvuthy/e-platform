<template>
    <div class="p-5 w-full overflow-y-scroll" :style="{ height: `${windowHeight - 63}px` }" @scroll="handleScroll"
        ref="scrolltop">
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

        <!-- Scroll to top -->
        <div class="fixed right-5 bottom-5 rounded-full flex flex-col items-center justify-center cursor-pointer"
            v-if="isScrollTop" @click="toTop">
            <div class="bg-red-500 rounded-full w-10 h-10 flex items-center justify-center">
                <ArrowUpIcon fill="#FFF" />
            </div>
            <p class="text-sm uppercase font-default-bold text-red-500 mt-2">Scroll to Top</p>
        </div>
    </div>
</template>

<script setup>
import Search from './partials/filter/Search.vue';
import { useStore } from 'vuex';
import { computed, onMounted, ref, onUnmounted } from 'vue';
import PackageLoading from './partials/loading/PackageLoading.vue';
import VideoCollection from './partials/packages/VideoCollection.vue';
import VideoCouse from "./course/VideoCourse.vue";
import ArrowUpIcon from "@components/icons/commons/ArrowUpIcon.vue";

const store = useStore();
const loading = computed(() => store.state.video.loading);
const filters = computed(() => store.state.video.filters);
const p = ref(1);
const isNoMoreData = ref(false);
const isScrollTop = ref(false);
const scrolltop = ref(null);

const toTop = () => {
    scrolltop.value.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

const handleScrollToTop = (scrollHeight) => {
    isScrollTop.value = scrollHeight > windowHeight.value;
};

const handleScroll = async (event) => {
    const isBottom = event.target.scrollTop + event.target.clientHeight >= event.target.scrollHeight;

    handleScrollToTop(event.target.scrollTop);

    if (isBottom && !isNoMoreData.value) {
        p.value++;
        await store.dispatch('video/fetchVideos', { p: p.value, ...filters.value })
            .then((data) => {
                if (!data.length) {
                    isNoMoreData.value = true;
                }
            });
    }
};

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
