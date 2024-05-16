<template>
  <div class="bg-primary h-55 flex items-center justify-between">
    <LeftMenu />
    <div class="flex-1">
      <MenuItem />
    </div>
    <RightMenu />
  </div>
</template>
<script>
import MenuItem from "./partials/MenuItem.vue";
import RightMenu from "./RightMenu.vue"; 
import LeftMenu from "./LeftMenu.vue";
export default {
  components: {
    MenuItem,
    RightMenu, 
    LeftMenu
  }
};
</script>