<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
  >
    <path
      :stroke="fill"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M27 5H5a2 2 0 00-2 2v14a2 2 0 002 2h22a2 2 0 002-2V7a2 2 0 00-2-2zM11 27h10m-7 0h4l-.5-4h-3l-.5 4z"
    />
  </svg>
</template>
    <script>
export default {
  props: {
    fill: {
      type: String,
      default: "#65676B"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
</script>