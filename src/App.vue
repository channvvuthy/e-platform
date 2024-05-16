<template>
  <div>
    <router-view v-if="isNoMasterLayout" />
    <MasterLayout v-else />
  </div>
</template>

<script setup>
import MasterLayout from "./views/layouts/MasterLayout.vue";
import { useRoute } from "vue-router";
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

const route = useRoute();
const store = useStore();

const isNoMasterLayout = computed(() => {
  const noMasterLayoutRoutes = ["login", "signup", "forgot-password"];
  return noMasterLayoutRoutes.includes(route.name);
});

onMounted(() => {
  store.dispatch('auth/setAuthInfo');
})
</script>
