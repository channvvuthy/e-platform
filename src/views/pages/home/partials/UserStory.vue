<template>
    <div :class="boxStoryClass" :style="backgroundStyle(logo)">
        <!-- User story -->
        <div class="absolute left-0 top-0 w-full h-full bg-cover bg-center" :style="backgroundStyle(story.photo.url)">
        </div>
        <!-- User profile -->
        <div :class="userProfileClass" :style="backgroundStyle(story.user.photo)"></div>
        <!-- User name -->
        <div class="absolute w-full h-full bg-gradient-to-t from-black opacity-50"></div>
        <div class="pb-2 absolute text-white">
            <p class="text-sm px-2">{{ story.user.name }}</p>
        </div>
    </div>
</template>
<script setup>
import { defineProps } from 'vue';
import { boxStoryClass, userProfileClass } from './story/story_class';
// import logo from '../../../../../../assets/images/logo.png';

const backgroundStyle = (url) => {
    return { backgroundImage: `url(${url})` }
}

defineProps({
    story: {
        type: Object,
        default: () => { }
    }
})

</script>