<template>
    <div :style="{ width: `${(windowWidth - 600)}px` }" class="px-10 pt-5">
        <div v-if="isLoading">Loading...</div>
        <div v-else class="relative">
            <div class="absolute z-50 -right-4 top-0 h-full flex items-center cursor-pointer">
                <div class="rounded-full h-11 w-11 bg-secondary flex items-center justify-center box-shadow">
                    <NextIcon />
                </div>
            </div>
            <vue-horizontal v-if="stories && stories.length">
                <section v-for="(story, index) in stories" :key="story._id">
                    <div v-if="index == 0" class="flex">
                        <CurrentUser />
                        <div class="mx-5">
                            <UserStory :story="story" />
                        </div>
                    </div>
                    <div v-else class="flex" :class="index < (stories.length - 1) ? 'mr-5' : ''">
                        <UserStory :story="story" />
                    </div>
                </section>
            </vue-horizontal>
        </div>

    </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import VueHorizontal from 'vue-horizontal';
import { useStore } from 'vuex';
import UserStory from './UserStory.vue';
import CurrentUser from './CurrentUser.vue'
import NextIcon from "@components/icons/commons/NextIcon.vue";



export default {
    components: { VueHorizontal, UserStory, CurrentUser, NextIcon },
    setup() {
        const store = useStore();

        const windowWidth = ref(window.innerWidth);

        const updateWindowWidth = () => {
            windowWidth.value = window.innerWidth;
        };
        const isLoading = computed(() => store.state.story.loading);
        const stories = ref([]);



        onMounted(() => {
            window.addEventListener('resize', updateWindowWidth);
            store.dispatch('story/getStories')
                .then((res) => {
                    stories.value = res;
                })
                .catch(() => {
                });
        });

        onBeforeUnmount(() => {
            window.removeEventListener('resize', updateWindowWidth);
        });

        return {
            isLoading,
            windowWidth,
            stories,
        };
    }
}
</script>
