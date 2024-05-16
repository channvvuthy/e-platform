<template>
  <ToolTip btn-class="bg-white h-43 w-43 rounded-full flex items-center justify-center" id="chat">
    <template #buttonContent>
      <ChatIcon />
    </template>
  </ToolTip>
</template>
  
  <script setup>
import ToolTip from "@components/ui/ToolTip.vue";
import ChatIcon from "@components/icons/commons/ChatIcon.vue";
</script>