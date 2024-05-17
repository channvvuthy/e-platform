<template>
    <button :type="type"
        class="bg-primary flex items-center text-center cursor-pointer rounded-lg w-full justify-center text-white text-lg font-semibold"
        :style="{ height: `${height}px` }">
        <div v-if="isLoading" class="flex">
            <RingLoading />
            &nbsp;
            &nbsp;
            <span>Processing...</span>
        </div>
        <div v-else>{{ btnTitle }}</div>
    </button>
</template>
<script setup>
import RingLoading from "@components/ui/RingLoading.vue";
import { defineProps } from 'vue';

defineProps({
    btnTitle: {
        type: String,
        default: () => 'Log In'
    },
    type: {
        type: String,
        default: () => 'submit'
    },
    height: {
        type: Number,
        default: () => 55
    },
    isLoading: {
        type: Boolean,
        default: () => false
    }
});
</script>