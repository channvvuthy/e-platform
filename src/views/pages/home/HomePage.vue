<template>
    <div class="p-5 flex">
        <StoryList />
        <div class="w-300">
            <h1 class="font-default-bold text-lg text-center">Recommended Course</h1>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, illo repellat. Dolore laborum
                eligendi, minima neque hic sed, facere eum unde commodi quibusdam voluptates fugit nemo aspernatur,
                doloremque voluptatibus nam.
            </div>
        </div>
    </div>
</template>

<script setup>
import StoryList from "./partials/StoryList.vue"
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

onMounted(() => {
    initFlowbite();
})
</script>