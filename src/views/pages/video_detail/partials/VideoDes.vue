<template>
    <div class="flex-1 py-5 pl-5 pr-10">
        <div class="flex cursor-pointer" @click="goBack">
            <BackIcon fill="#26729B" />
            <div class="font-default-bold text-sm mb-5 text-primary ml-2">Back to Previous Page</div>
        </div>
        <div class="relative">
            <img :src="course.thumbnail" class="rounded-t-lg m-auto object-cover w-full"
                v-if="course && course.thumbnail">
            <div class="absolute left-0 top-0 w-full h-full flex items-end justify-center">
                <div @click="toPlaylist(course._id)"
                    class="bg-primary h-10 w-96 rounded-full text-white flex items-center justify-center cursor-pointer absolute -bottom-5">
                    <DesktopIcon fill="#FFF" />
                    <p class="ml-2">Video</p>
                </div>
            </div>
        </div>
        <div class="bg-white p-10 rounded-b-lg" v-if="course && course.title">
            <h1>{{ course.title }}</h1>
            <div class="my-5 text-sm text-gray-helper flex items-center justify-between">
                <p>Price: ${{ price.year }}</p>
                <div class="flex items-center">
                    <VisibleIcon fill="#818181" />
                    <p class="ml-1">{{ numberOfView(course.view) }} Views</p>
                    <div class="ml-5 cursor-pointer">
                        <HeartIcon :size="20" />
                    </div>
                </div>
            </div>
            <div class="border-b border-t border-border py-5">
                <div class="w-1/2">
                    <VideoFeature :features="course" :append-class="''" />
                </div>
            </div>

            <!-- Graph report -->
            <div class="flix items-center justify-center mt-5" style="height:145px;">
                <WatchReport title="Watch Video" :watchedVideo="course.report_watch.watch"
                    :totalVideo="course.report_watch.total" :percentage="course.report_watch.percentage" />
            </div>
        </div>

    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import DesktopIcon from '@components/icons/commons/DesktopIcon.vue';
import VisibleIcon from '@components/icons/commons/VisibleIcon.vue';
import HeartIcon from '@components/icons/commons/HeartIcon.vue';
import VideoFeature from '../../video/course/partials/VideoFeature.vue';
import { formatToK } from '../../../../utils/common';
import WatchReport from './WatchReport.vue';
import BackIcon from '@components/icons/commons/BackIcon.vue';
import { useRouter } from 'vue-router';
const router = useRouter();


defineProps({
    course: {
        type: Object,
        default: () => { }
    },
    price: {
        type: Object,
        default: () => { }
    }
});

const numberOfView = (number) => {
    return formatToK(number);
}

const toPlaylist = (courseId) => {
    router.push({ name: 'video-playlist', params: { courseId } })
}

const goBack = () => {
    router.go(-1);
}
</script>
