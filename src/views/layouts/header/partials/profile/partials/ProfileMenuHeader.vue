<template>
  <div class="flex items-center py-3 cursor-pointer">
    <Avatar
      :size="43"
      imgUrl="https://images.pexels.com/photos/21365393/pexels-photo-21365393/free-photo-of-a-woman-sitting-on-a-couch-with-a-cat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    />
    <SpaceWidth />
    <p>John N. Hentz</p>
  </div>
</template>
<script setup>
import Avatar from "@components/ui/Avatar.vue";
import SpaceWidth from "@components/ui/SpaceWidth.vue";
</script>