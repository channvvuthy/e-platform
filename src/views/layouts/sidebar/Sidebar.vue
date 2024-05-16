<template>
  <div class="w-300 bg-white shadow-lg px-5 overflow-y-scroll flex-none" :style="{ height: `${windowHeight - 55}px` }">
    <SidebarMenuItem />
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import SidebarMenuItem from "./partials/SidebarMenuItem.vue";

const windowHeight = ref(window.innerHeight);

const updateHeight = () => {
  windowHeight.value = window.innerHeight;
};

onMounted(() => {
  window.addEventListener("resize", updateHeight);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateHeight);
});
</script>