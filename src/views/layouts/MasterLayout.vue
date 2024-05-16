<template>
  <div class="bg-secondary shadow-lg font-default">
    <MainMenu />
    <div class="flex">
      <Sidebar />
      <router-view />
    </div>
  </div>

</template>
<script setup>
import MainMenu from "./header/MainMenu.vue";
import Sidebar from "./sidebar/Sidebar.vue";
</script>