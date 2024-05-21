<template>
    <div class="flex rounded-2xl shadow h-40 p-10 flex items-center justify-cener"
        style="background-color:#f9fafc">
        <div class="h-24 w-24 bg-loading rounded-lg flex items-center justify-center">
            <PhotoIcon fill="#a0a1a1" :size="40" />
        </div>
        <div class="flex-1 ml-3">
            <div class="bg-loading h-5 w-4/5 rounded"></div>
            <div class="bg-loading h-3 mt-3 w-full"></div>
            <div class="bg-loading h-3 w-full mt-3"></div>
            <div class="bg-loading h-3 w-full mt-3"></div>
        </div>
    </div>
</template>
<script setup>
import PhotoIcon from '@components/icons/commons/PhotoIcon.vue';
</script>