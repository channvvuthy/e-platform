<template>
  <div>
    <ToolTip btn-class="bg-white h-43 w-43 rounded-full flex items-center justify-center" id="notification">
      <template #buttonContent>
        <BellIcon />
      </template>
      <template #tooltipContent>
        <div class="mt-5">
          <div class="w-96 bg-white rounded-2xl relative box-shadow px-5 pb-2 border mr-10">
            <div class="triangle-shadow" style="position: absolute; top: -25px;z-index:-1;right:30px;"></div>
            <div class="z-50 triangle-no-shadow" style="position: absolute;top: -25px;right:30px;"></div>
            <NotificationHeader />
            <NotificationLoading v-if="loading && !notifications.length" />
            <div v-else class="max-h-96 overflow-y-scroll" @scroll="handleScroll($event)">
              <div v-if="notifications && notifications.length">
                <div v-for="(notification, index) in notifications" :key="index">
                  <NotificationContent :notification="notification" />
                </div>
              </div>
              <div v-else class="py-5">
                <h1 class="font-semibold text-center">There are no notifications to display</h1>
              </div>
              <NotificationLoading v-if="loading && notifications.length" />
            </div>
          </div>
        </div>
      </template>
    </ToolTip>
  </div>
</template>

<script setup>
import ToolTip from "@components/ui/ToolTip.vue";
import BellIcon from "@components/icons/commons/BellIcon.vue";
import NotificationHeader from './notification/NotificationHeader.vue';
import NotificationLoading from './notification/NotificationLoading.vue';
import NotificationContent from './notification/NotificationContent.vue';
import { useStore } from "vuex";
import { computed, onMounted, ref } from "vue";

const store = useStore();
const p = ref(1);
const isNoMoreData = ref(false);

const loading = computed(() => store.state.notification.loading);
const notifications = computed(() => store.state.notification.notifications);


onMounted(async () => {
  await store.dispatch('notification/fetchNotifications', { p: p.value });
})

/**
 * Handle the scroll event to fetch more notifications when reaching the bottom.
 *
 * @param {Event} event - The scroll event object.
 * @return {void} No return value.
 */
const handleScroll = async (event) => {
  const isBottom = event.target.scrollTop + event.target.clientHeight >= event.target.scrollHeight;

  if (isBottom) {
    if (isNoMoreData.value)
      return;

    p.value++;
    await store.dispatch('notification/fetchNotifications', { p: p.value })
      .then((data) => {
        if (!data.length) {
          isNoMoreData.value = true;
        }
      });
  }
}
</script>
<style>
.block {
  z-index: 50 !important;
}
</style>