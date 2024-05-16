<template>
    <div class="px-5 pt-5 w-full flex-1">
        <div class="bg-white rounded-t-2xl shadow w-full h-full block relative overflow-hidden z-50">
            <div class="absolute w-full h-full -z-10 left-0 top-0 opacity-20 bg-repeat bg-cover"
                :style="{ backgroundImage: `url(${bgHotChat})` }"></div>
            <!-- Header -->
            <HotChatHead />
            <div class="flex flex-col h-full">
                <div class="p-10 h-4/5">


                    <!-- <AudioPlayer audioId="audio"
                        :audioUrl="'https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3'"
                        time="10:00 AM" />

                    <AudioPlayer audioId="audio1"
                        :audioUrl="'https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3'"
                        time="10:00 AM" /> -->
                </div>
                <div class="px-10 bg-white py-5">
                    <div class="border rounded-full h-12 flex items-center px-2">
                        <div class="w-9 h-9 mr-4">
                            <div class="w-9 h-9 rounded-full bg-border flex items-center justify-center clear">
                                <AttachmentIcon :size="18" />
                            </div>
                        </div>
                        <input type="text" placeholder="Ask question"
                            class="focus:outline-none bg-transparent focus:ring-0 focus:ring-transparent ring-transparent border-none w-full text-sm" />
                        <div class="mr-4">
                            <EmojiIcon :size="35" fill="#818181" />
                        </div>

                        <VoiceRecord @onResult="onResult($event)" />
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script setup>
import bgHotChat from '../../../assets/images/bg_hot_chat.jpg';
import HotChatHead from './partials/HotChatHead.vue';
import VoiceRecord from './partials/VoiceRecord.vue';
import AttachmentIcon from '@components/icons/commons/AttachmentIcon.vue';
import EmojiIcon from '@components/icons/commons/EmojiIcon.vue';
import { deviceInfo } from '../../../utils/common.js';
// import AudioPlayer from "@components/ui/AudioPlayer.vue";

const onResult = async event => {
    const response = await fetch(event);
    const blob = await response.blob();
    console.log({ deviceInfo})
    console.log({ blob})


}


</script>
