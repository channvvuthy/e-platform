<template>
  <div :style="{height: `${height}px`}"></div>
</template>
<script>
export default {
  props: {
    height: {
      default: () => {
        return 10;
      }
    }
  }
};
</script>