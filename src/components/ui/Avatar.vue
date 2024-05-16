<template>
  <div class="rounded rounded-full bg-cover bg-center"
    :style="{ width: `${size}px`, height: `${size}px`, backgroundImage: `url(${defaultAvatar})` }">
    <div class="rounded rounded-full bg-cover bg-center"
      :style="{ width: `${size}px`, height: `${size}px`, backgroundImage: `url(${imgUrl})` }"></div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import defaultAvatar from "../../assets/images/logo.png";

defineProps({
  size: {
    type: Number,
    default: () => 50
  },
  imgUrl: String
});
</script>
