<template>
    <div>Processing...</div>
</template>
<script setup>
import { useStore } from 'vuex';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const store = useStore();

onMounted(() => {
    store.dispatch('auth/logout').then(() => {
        router.push('/');
    });
});

</script>