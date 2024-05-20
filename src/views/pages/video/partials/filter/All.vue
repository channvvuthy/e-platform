<template>
    <div class="flex items-center border-border pb-3 cursor-pointer border-b">
        <div class="w-43 h-43 rounded-full flex items-center justify-center mr-4 bg-primary">
            <CheckIcon fill="#FFF"/>
        </div>
        <div class="flex-1 text-sm">All</div>
        <div class="h-5 rounded-full w-5 border border-gray-helper flex items-center justify-center">
            <slot></slot>
        </div>
    </div>
</template>
<script setup>
import CheckIcon from '@components/icons/commons/CheckIcon.vue'
 
</script>