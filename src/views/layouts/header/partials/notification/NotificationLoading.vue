<template>
    <div class="my-5">
        <div class="flex items-center">
            <div>
                <div class="w-12 h-12 rounded-full bg-gray-helper bg-opacity-50"></div>
            </div>
            <SpaceWidth :width="20" />
            <div class="w-full">
                <div class="h-3 w-full bg-gray-helper bg-opacity-50"></div>
                <SpaceHeight />
                <div class="h-3 w-1/2 bg-gray-helper bg-opacity-50"></div>
            </div>
        </div>
    </div>
</template>
<script setup>
import SpaceWidth from '@components/ui/SpaceWidth.vue';
import SpaceHeight from '@components/ui/SpaceHeight.vue';
</script>