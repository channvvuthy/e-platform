<template>
  <div class="rounded rounded-full flex items-center justify-center">

    <!-- Button of tooltip -->
    <button :id="`${id}dropdown`" :data-dropdown-toggle="id" :class="btnClass" data-dropdown-trigger="click"
      type="button">
      <slot name="buttonContent"></slot>
    </button>

    <!-- Content of tooltip -->
    <div :id="id" class="z-10 hidden">
      <ul :aria-labelledby="`${id}dropdown`">
        <slot name="tooltipContent"></slot>
      </ul>
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
    default: function () {
      return "opacity-0 tooltip";
    }
  },
  id: {
    type: String,
    required: false
  }
});
</script>
