<template>
    <div class="w-9 h-9 mr-4">
        <div class="w-9 h-9 rounded-full bg-border flex items-center justify-center cursor-pointer" @click="attacFile">
            <AttachmentIcon :size="18" />
            <input type="file" class="hidden" name="file" id="file" accept="image/*,.pdf" />
        </div>
    </div>
</template>
<script setup>
import AttachmentIcon from '@components/icons/commons/AttachmentIcon.vue';

const attacFile = () => {
    document.getElementById('file').click();
}
</script>