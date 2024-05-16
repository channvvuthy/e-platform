<template>
    <svg :width="size" :height="size" viewBox="0 0 24 24" id="plus" data-name="Flat Line"
        xmlns="http://www.w3.org/2000/svg" class="icon flat-line">
        <path id="primary" d="M5,12H19M12,5V19" :style="{ fill: fill, stroke: fill }"
            style="stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;" />
    </svg>
</template>

<script>
export default {
    props: {
        fill: {
            type: String,
            default: "#FFFFFF"
        },
        size: {
            type: Number,
            default: 24
        }
    }
};
</script>