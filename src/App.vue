<template>
  <div>
    <!-- Notification detail popup -->
    <NotificationDetail v-if="isNotificaton" :notification="notification" @close="close" />
    <router-view v-if="isNoMasterLayout" />
    <MasterLayout v-else />
  </div>
</template>

<script setup>
import MasterLayout from "./views/layouts/MasterLayout.vue";
import { useRoute } from "vue-router";
import { computed, onMounted, watch, ref } from 'vue';
import { useStore } from 'vuex';
import NotificationDetail from "./views/layouts/header/partials/notification/NotificationDetail.vue";

const route = useRoute();
const store = useStore();
const isNotificaton = ref(false);

const isNoMasterLayout = computed(() => {
  const noMasterLayoutRoutes = ["login", "signup", "forget-password", "change-password"];
  return noMasterLayoutRoutes.includes(route.name);
});

const notification = computed(() => store.state.notification.notification);
const close = () => {
  isNotificaton.value = false;
}

onMounted(() => {
  store.dispatch('auth/setAuthInfo');
});

watch(notification, (newValue) => {
  if (newValue !== null) {
    isNotificaton.value = true;
  }
});

</script>
