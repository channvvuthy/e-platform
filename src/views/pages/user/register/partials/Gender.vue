<template>
    <div class="flex items-center">
        <input type="hidden" name="gender" v-model="gener"> 

        <div class="flex items-center cursor-pointer" @click="setGener('male')">
            <div class="h-7 w-7 rounded-full border-border border-2 flex items-center justify-center">
                <div class="w-4 h-4 bg-primary rounded-full" v-if="gener === 'male'"></div>
            </div>
            <p class="pl-5">Male</p>
        </div>

        <div class="flex items-center cursor-pointer pl-10" @click="setGener('female')">
            <div class="h-7 w-7 rounded-full border-border border-2 flex items-center justify-center">
                <div class="w-4 h-4 bg-primary rounded-full" v-if="gener === 'female'"></div> 
            </div>
            <p class="pl-5">Female</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
const gener = ref('female');

const setGener = (sex) => {
    gener.value = sex;
}

</script>
