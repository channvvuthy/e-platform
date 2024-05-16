<template>
  <div>
    <div style="width: 17px;" class="line"></div>
    <SpaceHeight :height="5" />
    <div style="width: 12px;" class="line"></div>
    <SpaceHeight :height="5" />
    <div style="width: 7px;" class="line"></div>
  </div>
</template>
<script setup>
import SpaceHeight from "@components/ui/SpaceHeight.vue";
</script>
<style scoped>
.line {
  height: 3px;
  background-color: #65676b;
}
</style>