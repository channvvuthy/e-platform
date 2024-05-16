<template>
  <div class="flex items-center py-3 cursor-pointer">
    <div class="flex-1">
      <Avatar :size="43" :imgUrl="authInfo.photo" />
    </div>
    <SpaceWidth />
    <p>{{ authInfo.first_name }}&nbsp;{{ authInfo.last_name }}</p>
  </div>
</template>

<script setup>
import Avatar from "@components/ui/Avatar.vue";
import SpaceWidth from "@components/ui/SpaceWidth.vue";
import { useStore } from "vuex";
import { computed } from "vue";
const store = useStore();

const authInfo = computed(() => store.state.auth.info);

</script>