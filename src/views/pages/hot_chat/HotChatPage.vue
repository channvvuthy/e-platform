<template>
    <div class="px-5 pt-5 w-full flex-1">
        <div class="bg-white rounded-t-2xl shadow w-full h-full block relative overflow-hidden z-50">
            <div class="absolute w-full h-full -z-10 left-0 top-0 opacity-20 bg-repeat bg-cover"
                :style="{ backgroundImage: `url(${bgHotChat})` }"></div>
            <!-- Header -->
            <HotChatHead />
            <div class="flex flex-col h-full">
                <PreviewImage v-if="isImagePreview" @close="closeImagePreview" />
                <PreviewPDF v-if="isPdfPreview" @close="closePdfPreview" />

                <div class="p-10 h-4/5"></div>
                <div class="px-10 bg-white py-5 relative">
                    <div class="border rounded-full h-12 flex items-center px-2">
                        <Attachment />

                        <!-- Typing message -->
                        <input type="text" placeholder="Ask question"
                            class="focus:outline-none bg-transparent focus:ring-0 focus:ring-transparent ring-transparent border-none w-full text-sm" />

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
import Attachment from './partials/Attachment.vue';
import PreviewImage from './partials/PreviewImage.vue';
import PreviewPDF from './partials/PreviewPDF.vue';
import VoiceRecord from './partials/VoiceRecord.vue';
import { getBlobDuration, blobToFile } from '../../../utils/common';
import { onMounted, ref } from 'vue';

const isImagePreview = ref(false);
const isPdfPreview = ref(false);

const deviceInfo = ref({
    id: '',
    name: '',
    osType: '',
    osPlatform: '',
    osRelease: ''
});

// import AudioPlayer from "@components/ui/AudioPlayer.vue";

const onResult = async event => {
    const response = await fetch(event);
    const blob = await response.blob();
    const duration = await getBlobDuration(blob);
    const newBlob = blobToFile(blob, 'test')
    // console.log({ deviceInfo})
    console.log({ blob, duration, newBlob })
}

const closeImagePreview = () => isImagePreview.value = false;
const closePdfPreview = () => isPdfPreview.value = false;

onMounted(async () => {
    deviceInfo.value = await window.electron.getDeviceInfo();
});

</script>
