<template>
  <div class="w-96 flex item-center justify-end pr-5">
    <CartButton />
    <SpaceWidth :width="12" />
    <NotificationButton />
    <SpaceWidth :width="12" />
    <ChatButton />
  </div>
</template>
  
  <script setup>
import CartButton from "./partials/CartButton.vue";
import ChatButton from "./partials/ChatButton.vue";
import NotificationButton from "./partials/NotificationButton.vue";
import SpaceWidth from "@components/ui/SpaceWidth.vue";
</script>