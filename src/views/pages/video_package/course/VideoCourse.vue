<template>
    <div class="mt-5 bg-white rounded-2xl p-5">
        <h1 class="font-default-bold text-lg ml-2">Package Videos</h1>
        <div class="grid grid-cols-3 gap-8 mt-5 px-2">
            <div v-for="(video, index) in collections.list" :key="index">
                <div class="box-shadow rounded-2xl pb-5">
                    <div class="h-40 w-full bg-center bg-cover rounded-t-lg relative"
                        :style="{ backgroundImage: `url(${video.thumbnail})` }">
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
                    <div class="my-3 px-5">
                        <Line/>
                    </div>
                    <h1 class="px-5 text-red-500">Membership Only</h1>
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
import Line from '@components/ui/Line';

const store = useStore();

const collections = computed(() => store.state.collection.collections);
</script>