<template>
  <div :style="{width: `${width}px`}"></div>
</template>
  <script>
export default {
  props: {
    width: {
      type: Number,
      default: () => {
        return 10;
      }
    }
  }
};
</script>