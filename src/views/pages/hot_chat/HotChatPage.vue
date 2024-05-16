<template>
    <div class="px-5 pt-5 w-full flex-1">
        <div class="bg-white rounded-t-2xl shadow w-full h-full block relative overflow-hidden z-50">
            <div class="absolute w-full h-full -z-10 left-0 top-0 opacity-20 bg-repeat bg-cover"
                :style="{ backgroundImage: `url(${bgHotChat})` }"></div>
            <!-- Header -->
            <HotChatHead />
            <div class="p-10">
                <AudioPlayer audioId="audio"
                    :audioUrl="'https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3'"
                    time="10:00 AM" />

                <AudioPlayer audioId="audio1"
                    :audioUrl="'https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3'"
                    time="10:00 AM" />
            </div>

        </div>
    </div>
</template>
<script setup>
import bgHotChat from '../../../assets/images/bg_hot_chat.jpg';
import HotChatHead from './partials/HotChatHead.vue';
import AudioPlayer from "@components/ui/AudioPlayer.vue";

</script>
