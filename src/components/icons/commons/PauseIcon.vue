<template>
    <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 4H5v16h5V4zm9 0h-5v16h5V4z" :fill="fill" />
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