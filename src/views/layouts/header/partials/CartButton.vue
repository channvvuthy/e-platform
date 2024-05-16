<template>
  <ToolTip btn-class="bg-white h-43 w-43 rounded-full flex items-center justify-center" id="cart">
    <template #buttonContent>
      <CartIcon />
    </template>
    <template #tooltipContent>
      <div @click="()=> alert(2)">content</div>
    </template>
  </ToolTip>
</template>

<script setup>
import ToolTip from "@components/ui/ToolTip.vue";
import CartIcon from "@components/icons/commons/CartIcon.vue";
</script>