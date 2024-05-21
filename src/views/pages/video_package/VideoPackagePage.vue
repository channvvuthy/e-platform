<template>
    <div class="p-5 w-full overflow-y-scroll" :style="{ height: `${windowHeight - 63}px` }">
        <Search />
        <div v-if="loading">
            <div>
                <div class="grid grid-cols-3 gap-5 mt-5">
                    <PackageLoading v-for="n in 12" :key="n" />
                </div>
            </div>
        </div>
        <div v-else class="mt-5 relative">
            <VideoCouse />
            <div :style="{ width: `${windowWidth - 300}px` }"
                class="fixed right-0 bottom-2 text-white h-11 z-50 cursor-pointer px-5">
                <div class="bg-primary w-full h-full flex items-center justify-center rounded-lg">Shop Now</div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { onMounted, computed, ref, onUnmounted } from 'vue';
import Search from './partials/filter/Search.vue';
import PackageLoading from './partials/loading/PackageLoading.vue'
import VideoCouse from "./course/VideoCourse.vue"


const store = useStore();
const route = useRoute();

const loading = computed(() => store.state.collection.loading);

onMounted(async () => {
    await store.dispatch('collection/fetchCollections', { id: route.params.id });
});


const windowHeight = ref(window.innerHeight);
const windowWidth = ref(window.innerWidth);

const updateHeight = () => {
    windowHeight.value = window.innerHeight;
    windowWidth.value = window.innerWidth;
};

onMounted(() => {
    window.addEventListener("resize", updateHeight);
});

onUnmounted(() => {
    window.removeEventListener("resize", updateHeight);
});

</script>