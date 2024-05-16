<template>
    <div :class="boxStoryClass" :style="backgroundStyle(logo)">
        <!-- Profile picture -->
        <div class="absolute left-0 top-0 w-full h-full bg-cover bg-center" :style="backgroundStyle(auth.photo)"></div>
        <div class="absolute w-full h-full bg-gradient-to-t from-black opacity-50"></div>
        <div class="bg-primary h-10 w-10 rounded-full z-50 absolute right-4 bottom-4 flex items-center justify-center">
            <PlusIcon />
        </div>
    </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';
import { boxStoryClass } from './story_class';
import logo from '../../../../../assets/images/logo.png';
import PlusIcon from '@components/icons/commons/PlusIcon.vue';

const store = useStore();

const auth = computed(() => store.state.auth.info);

const backgroundStyle = (url) => {
    return { backgroundImage: `url(${url})` }
}
</script>