<template>
    <div class="w-full">
        <div class="bg-white  rounded-full flex items-center h-12 px-5">
            <SearchIcon />
            <input type="text" placeholder="Search..."
                class="ml-3 w-full bg-transparent focus:ring-0 focus:ring-transparent ring-transparent border-none"
                v-model="s" @keyup.enter="filterVideos(filter_id)" />

            <div class="flex items-center bg-secondary p-1.5 rounded-full px-5 cursor-pointer" v-if="filter_id != ''"
                @click="clearFilter">
                <div class="mr-2">Clear</div>
                <FilterIcon />
            </div>

            <ToolTip id="filter" v-if="filter_id == ''">
                <template #buttonContent>
                    <div class="flex items-center bg-secondary p-1.5 rounded-full px-5">
                        <div class="mr-2">Filter</div>
                        <FilterIcon />
                    </div>
                </template>

                <template #tooltipContent>
                    <div class="px-10 py-2">
                        <div class="grid grid-cols-3 bg-white gap-5 px-5 pt-5 rounded-lg overflow-y-scroll shadow"
                            style="max-height: 500px;">
                            <!-- loop of filter -->
                            <div v-for="(filter, index) in videos.filter" :key="index">
                                <div class="flex items-center border-border pb-3 cursor-pointer"
                                    :class="(index < videos.filter.length - 1) ? 'border-b' : ''"
                                    @click="filterVideos(filter._id)">
                                    <div class="w-43 h-43 rounded-full bg-cover bg-center mr-4"
                                        :style="{ backgroundImage: `url(${filter.icon})` }">
                                    </div>
                                    <div class="flex-1 text-sm">{{ filter.name }}</div>
                                    <div
                                        class="h-5 rounded-full w-5 border border-gray-helper flex items-center justify-center">
                                        <div class="rounded-full h-3 w-3 bg-primary" v-if="filter_id == filter._id">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- end of loop -->
                        </div>
                    </div>
                </template>

            </ToolTip>
        </div>
    </div>
</template>
<script setup>
import ToolTip from '@components/ui/ToolTip.vue';
import SearchIcon from '@components/icons/commons/SearchIcon.vue';
import FilterIcon from '@components/icons/commons/FilterIcon.vue';
import { useStore } from 'vuex';
import { computed, ref } from 'vue';
import { dispatchEventClick } from '../../../../../utils/common'

const store = useStore();
const filter_id = ref('');
const s = ref('');
const videos = computed(() => store.state.video.videos);

/**
 * Filters videos based on the provided filter ID and search term.
 *
 * @param {string} filterId - The ID of the filter to apply.
 * @return {Promise<void>} - A promise that resolves when the filtering is complete.
 */
const filterVideos = async (filterId) => {
    filter_id.value = filterId;
    await store.dispatch('video/filterVideos', { filter_id: filterId, s: s.value });
    dispatchEventClick();
}

/**
 * Clears the filter by setting the filter ID to an empty string and dispatches the 'video/filterVideos' action with the updated filter ID and search term.
 *
 * @return {Promise<void>} A promise that resolves when the filter is cleared.
 */
const clearFilter = async () => {
    filter_id.value = '';
    await store.dispatch('video/filterVideos', { filter_id, s: s.value });
}
</script>
