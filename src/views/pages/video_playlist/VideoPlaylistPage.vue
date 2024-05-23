<template>
    <div class="p-5 w-full">
        <div class="flex">
            <div class="flex-1 mr-5 border">
                dfnsdijn
                <img :src="poster" alt="">
                <video controls :poster="poster" class="w-full">
                    <source :src="defaultVideo" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
            <div class="w-350 bg-red-200 h-full">
                <div class="flex items-center justify-between">
                    <div>Video</div>
                    <div>Document</div>
                    <div>Quiz</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useStore } from 'vuex';
import { computed, ref, onMounted, reactive } from 'vue';
import { getLastIndex } from '../../../utils/common';
import poster from '../../../assets/images/poster.png';

const store = useStore();
const videoUrls = ref([]);
const lastWatch = reactive({
    mark: 0,
    order: 0,
    percentage: 0
});
const defaultVideo = ref('');

const videoDetail = computed(() => store.state.videoDetail.videoDetail);

onMounted(() => {
    const lastWatchData = videoDetail.value.course?.last_watch || lastWatch;
    Object.assign(lastWatch, lastWatchData);

    videoUrls.value = videoDetail.value.list[lastWatch.order]?.video || [];

    const indexVideoToPlay = getLastIndex(videoUrls.value);

    if (indexVideoToPlay !== -1) {
        defaultVideo.value = videoUrls.value[indexVideoToPlay].url;
    }
});


</script>