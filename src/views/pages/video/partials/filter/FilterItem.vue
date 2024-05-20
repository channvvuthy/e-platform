<template>
    <div class="flex items-center border-border pb-3 cursor-pointer"
        :class="(index < videos.filter.length - 1) ? 'border-b' : ''" @click="filterVideos(filter._id)">
        <div class="w-43 h-43 rounded-full bg-cover bg-center mr-4" :style="{ backgroundImage: `url(${filter.icon})` }">
        </div>
        <div class="flex-1 text-sm">{{ filter.name }}</div>
        <div class="h-5 rounded-full w-5 border border-gray-helper flex items-center justify-center">
            <div class="rounded-full h-3 w-3 bg-primary" v-if="filter_id == filter._id">
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
    filter: {
        type: Object,
        default: () => {

        }
    }
});
</script>