<template>
    <div>
    <div class="cursor-pointer" @click="fetchNotificationDetail(notification)">
        <SpaceHeight />
        <div class="flex">
            <div class="w-14 h-14">
                <div class="rounded-full h-14 w-14 flex items-center justify-center" style="background-color:#f8eed0;">
                    <BellFillIcon :size="30" />
                </div>
            </div>
            <div class="ml-5">
                <h1 class="text-sm text-ellipsis">{{ truncateString(notification.title, 40) }}</h1>
                <div class="text-xs text-gray-helper mt-2">{{ formatDateTime(notification.date) }}</div>
            </div>
        </div>
        <SpaceHeight />
        <Line />
    </div>
</div>
</template>
<script setup>
import { defineProps, ref } from 'vue';
import BellFillIcon from '@components/icons/commons/BellFillIcon.vue';
import Line from "@components/ui/Line";
import SpaceHeight from '@components/ui/SpaceHeight';
import { truncateString } from '../../../../../utils/common';
import { formatDateTime } from '../../../../../utils/date_format';

const isDetail = ref(false);

defineProps({
    notification: {
        type: Object,
        default: () => { }
    }
})

const fetchNotificationDetail = (notification) => {
    console.log(notification)
    const event = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
    });
    document.body.dispatchEvent(event);
}
</script>