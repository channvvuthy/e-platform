<template>
    <div class="w-full max-h-full overflow-y-scroll" :style="{ height: `${windowHeight - 53}px` }">
        <div v-if="loading">Loading...</div>
        <div class="flex w-full" v-else>
            <VideoDes :course="videoDetail.course" :price="videoDetail.price" />
            <div class="w-300 py-5">

            </div>
        </div>
    </div>
</template>


<script setup>
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { computed, onMounted, ref, onUnmounted } from 'vue';
import VideoDes from './partials/VideoDes.vue';


const store = useStore();

const route = useRoute();
// const router = useRouter();
const loading = computed(() => store.state.videoDetail.loading);
const videoDetail = computed(() => store.state.videoDetail.videoDetail);

const windowHeight = ref(window.innerHeight);

const updateHeight = () => {
    windowHeight.value = window.innerHeight;
};

onUnmounted(() => {
    window.removeEventListener("resize", updateHeight);
});

onMounted(async () => {
    window.addEventListener("resize", updateHeight);
    await store.dispatch('videoDetail/fetchVideoDetail', { id: route.params.id });
});



</script>