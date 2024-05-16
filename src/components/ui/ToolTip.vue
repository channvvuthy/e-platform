<template>
  <div class="rounded rounded-full flex items-center justify-center">
    <button
      :data-tooltip-target="id"
      data-tooltip-placement="bottom"
      data-tooltip-trigger="click"
      type="button"
      :class="btnClass"
    >
      <slot name="buttonContent"></slot>
    </button>

    <div :id="id" role="tooltip" :class="contentClass">
      <slot name="tooltipContent">tooltipContent</slot>
      <slot name="tooltipArrow">
        <div class="tooltip-arrow box-shadow" data-popper-arrow></div>
      </slot>
    </div>
  </div>
</template>

<script setup>
import { onMounted, defineProps } from "vue";
import { initFlowbite } from "flowbite";

onMounted(() => {
  initFlowbite();
});

defineProps({
  btnClass: {
    type: String,
    required: false
  },
  contentClass: {
    type: String,
    default: function() {
      return "opacity-0 tooltip";
    }
  },
  id: {
    type: String,
    required: false
  }
});
</script>
