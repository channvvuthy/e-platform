<template>
  <ToolTip
    btn-class="bg-white h-43 w-43 rounded-full flex items-center justify-center"
    id="notification"
  >
    <template #buttonContent>
      <BellIcon />
    </template>
  </ToolTip>
</template>
  
  <script setup>
import ToolTip from "@components/ui/ToolTip.vue";
import BellIcon from "@components/icons/commons/BellIcon.vue";
</script>