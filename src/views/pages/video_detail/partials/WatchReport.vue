<template>
    <div class="progressVideoDetail flex items-center justify-center w-full">
        <div>
            <div class="barOverflowVideoDetail">
                <div class="reportDetail" :style="{ transform: `rotate(${45 + (Math.round(percentage) * 1.8)}deg)` }">
                </div>
            </div>
            <div class="absolute w-full left-0 top-0 h-full flex flex-col justify-end items-center">
                <div class="text-xl">
                    <span>{{ title }}</span>
                </div>
                <div class="font-bold text-3xl mt-2">
                    {{ watchedVideo }} / {{ totalVideo }}
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { defineProps } from 'vue';
defineProps({
    title: {
        type: String,
        default: () => 'Title'
    },
    totalVideo: {
        type: Number,
        default: () => 0
    },
    watchedVideo: {
        type: Number,
        default: () => 0,
    },
    percentage: {
        type: Number,
        default: () => 0,
    }
})
</script>
<style>
.progressVideoDetail {
    position: relative;
    margin: 4px;
    float: left;
    text-align: center;
}

.barOverflowVideoDetail {
    position: relative;
    width: 290px;
    height: 145px;
    margin-bottom: -14px;
    overflow: hidden;
}

.reportDetail {
    position: absolute;
    top: 0;
    left: 0;
    width: 290px;
    height: 290px;
    border-radius: 50%;
    box-sizing: border-box;
    border: 15px solid #c9c9c9;
    border-bottom-color: #055174;
    border-right-color: #055174;
}
</style>