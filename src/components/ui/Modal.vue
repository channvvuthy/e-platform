<template>
    <div class="fixed w-full h-full top-0 left-0 bg-black z-50 bg-opacity-40 flex items-center justify-center ">
        <div class="bg-white w-2/5 bg-white rounded-2xl shadow min-h-40 relative">
            <div class="absolute -right-3 -top-3 bg-primary rounded-full h-7 w-7 flex items-center justify-center cursor-pointer"
                @click="close">
                <CloseIcon fill="#FFF" />
            </div>
            <div class="py-3">
                <h1 class="font-semibold text-center">{{ title }}</h1>
            </div>
            <Line />
            <slot></slot>
        </div>
    </div>
</template>
<script setup>
import Line from "@components/ui/Line";
import CloseIcon from "@components/icons/commons/CloseIcon.vue";
import { defineEmits, defineProps } from 'vue';

const emit = defineEmits(['close']);

defineProps({
    title: {
        type: String,
        default: () => 'Modal Title'
    }
})


const close = () => {
    emit('close');
}
</script>