<template>
    <div class="mt-5 bg-white rounded-2xl p-5">
        <h1 class="font-default-bold text-lg ml-2">Video List</h1>
        <div class="grid grid-cols-3 gap-8 mt-5 px-2">
            <div v-for="(video, index) in videos.list" :key="index">
                <div class="box-shadow rounded-2xl pb-5">
                    <div class="h-40 w-full bg-center bg-cover rounded-t-lg relative cursor-pointer"
                        :style="{ backgroundImage: `url(${video.thumbnail})` }" @click="toDetail(video)">
                        <!-- Default profile -->
                        <div class="bg-white shadow h-16 w-16 rounded absolute left-5 -bottom-5 bg-center bg-cover z-10"
                            :style="{ backgroundImage: `url(${Logo})` }">
                        </div>

                        <!-- Teacher profile -->
                        <div class="h-16 w-16 rounded absolute left-5 -bottom-5 bg-center bg-cover z-20"
                            :style="{ backgroundImage: `url(${video.teacher.photo})` }">
                        </div>
                    </div>

                    <!-- title -->
                    <div class="mt-10 ml-5 text-sm">{{ truncateString(video.title, 40) }}</div>
                    <VideoFeature :features="video" />
                    <div class="px-5 mt-5">
                        <div class="bg-secondary rounded-full h-10 flex items-center px-5 text-sm justify-between">
                            <div class="flex items-center">
                                <del>${{ video.price.highlight }}</del>
                                <p class="text-red-500 ml-3">${{ video.price.year }}</p>
                            </div>
                            <div class="bg-primary text-sm text-white rounded-full py-1 px-3 cursor-pointer">Add to Cart
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import Logo from '../../../../assets/images/logo.png';
import VideoFeature from './partials/VideoFeature.vue'
import { truncateString } from '../../../../utils/common';
import { useRouter } from 'vue-router';

const router = useRouter();

const store = useStore();

const videos = computed(() => store.state.video.videos);

/**
 * Navigates to the video detail page with the provided detail ID and empty package ID.
 *
 * @param {Object} detail - The detail object containing the detail ID.
 * @return {void} This function does not return anything.
 */
const toDetail = (detail) => {
    router.push({ name: 'video-detail', params: { id: detail._id, package_id: null } })
}
</script>