<template>
    <svg version="1.1" id="Icons" :width="size" :height="size" :fill="fill" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve">

        <polyline class="st0" points="25,11 27,13 25,15 " />
        <polyline class="st0" points="7,11 5,13 7,15 " />
        <path class="st0"
            d="M29,23H3c-1.1,0-2-0.9-2-2V5c0-1.1,0.9-2,2-2h26c1.1,0,2,0.9,2,2v16C31,22.1,30.1,23,29,23z" />
        <circle class="st0" cx="16" cy="28" r="1" />
        <circle class="st0" cx="10" cy="28" r="1" />
        <circle class="st0" cx="22" cy="28" r="1" />
    </svg>
</template>
<script>
export default {
    props: {
        fill: {
            type: String,
            default: '#ffffff'
        },
        size: {
            type: Number,
            default: 24,
        }
    }
}
</script>