<template>
    <div class="absolute w-full h-full top-0 left-0 flex items-center justify-center">
        <div class="bg-white rounded-lg shadow h-96 w-96 relative flex flex-col justify-between">
            <div class="absolute -right-3 -top-3 bg-primary rounded-full h-7 w-7 flex items-center justify-center cursor-pointer"
                @click="close">
                <CloseIcon fill="#FFF" />
            </div>
            <div class="font-semibold text-center py-3 border-b border-border">Preview Image</div>
            <div class="h-64 flex items-center justify-center">
                <img :src="imgUrl" style="max-width: 100%;max-height:100%;">
            </div>
            <div class="border-t border-border flex items-center px-5 h-14">
                <input type="text" placeholder="Add caption..."
                    class="focus:outline-none bg-transparent focus:ring-0 focus:ring-transparent ring-transparent border-none w-full flex-1" />
                <div class="cursor-pointer">
                    <SendIcon fill="#26729B" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import CloseIcon from "@components/icons/commons/CloseIcon.vue";
import SendIcon from "@components/icons/commons/SendIcon.vue";
import Logo from '../../../../assets/images/logo.png'
import { defineEmits, defineProps } from 'vue';

const emit = defineEmits(['close']);

defineProps({
    imgUrl: {
        type: String,
        default: () => Logo
    }
});

const close = () => {
    emit('close')
}
</script>