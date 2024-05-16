<template>
  <div
    class="rounded rounded-full"
    :style="{width: `${size}px`, height: `${size}px`, backgroundImage: `url(${imgUrl})`, backgroundSize: 'cover'}"
  ></div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  size: {
    type: Number,
    default: () => 50
  },
  imgUrl: String
});
</script>