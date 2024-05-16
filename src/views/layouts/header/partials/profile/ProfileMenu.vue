<template>
  <div class="w-64 bg-white rounded-2xl relative box-shadow px-5 pb-2 border">
    <div class="triangle-shadow" style="position: absolute; top: -25px;z-index:-1"></div>
    <div class="z-50 triangle-no-shadow" style="position: absolute;top: -25px"></div>
    <ProfileMenuHeader />
    <Line />
    <ProfileMenuContent />
  </div>
</template>

<script setup>
import ProfileMenuHeader from "./partials/ProfileMenuHeader.vue";
import ProfileMenuContent from "./partials/ProfileMenuContent.vue";
import Line from "@components/ui/Line.vue";
</script>