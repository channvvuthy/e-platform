<template>
    <svg :fill="fill" :width="size" :height="size" viewBox="0 0 24 24" id="check" data-name="Flat Color"
        xmlns="http://www.w3.org/2000/svg" class="icon flat-color">
        <path id="primary"
            d="M10,18a1,1,0,0,1-.71-.29l-5-5a1,1,0,0,1,1.42-1.42L10,15.59l8.29-8.3a1,1,0,1,1,1.42,1.42l-9,9A1,1,0,0,1,10,18Z"
           s/>
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