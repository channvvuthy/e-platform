<template>
    <div class="flex items-center border border-border rounded-lg px-4" :style="{ height: `${height}px` }">
        <slot name="prefix-icon"></slot>
        <input :type="type" :placeholder="placeholder" :name="name"
            class="focus:outline-none bg-transparent focus:ring-0 focus:ring-transparent ring-transparent border-none w-full" />
        <slot name="suffix-icon"></slot>

    </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
    name: {
        type: String,
        default: () => 'name'
    },
    placeholder: {
        type: String,
        default: () => ''
    },
    type: {
        type: String,
        default: () => 'text'
    },
    height: {
        type: Number,
        default: () => 60
    }
});
</script>
