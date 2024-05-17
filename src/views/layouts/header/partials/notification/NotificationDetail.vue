<template>
    <div>
        <Modal title="Notification Detail" @close="close">
            <div class="overflow-y-scroll rounded-b-2xl" style="max-height: 600px;">
                <img :src="notification.content.photo" class="max-w-full">
                <div class="ml-5 my-5">
                    <h1 class="text-sm text-ellipsis">{{ notification.title }}</h1>
                    <div class="text-xs text-gray-helper mt-2">{{ formatDateTime(notification.date) }}</div>
                    <div class="mt-3" v-html="linkifiedText(notification.content.text)"></div>
                </div>
            </div>

        </Modal>
    </div>
</template>

<script setup>
import Modal from "@components/ui/Modal.vue";
import { defineEmits, defineProps } from "vue";
import { formatDateTime } from '../../../../../utils/date_format';
import { linkifiedText } from '../../../../../utils/common';

const emit = defineEmits(['close']);

const close = () => {
    emit('close');
}

defineProps({
    notification: {
        type: Object,
        default: () => { }
    }
});
</script>