<template>
  <div class="w-96 flex item-center justify-start pl-5">
    <ToolTip
      btnClass="bg-white w-103 h-43 rounded-full flex items-center justify-between"
      id="profile"
    >
      <template #buttonContent>
        <Avatar
          :size="43"
          imgUrl="https://images.pexels.com/photos/21365393/pexels-photo-21365393/free-photo-of-a-woman-sitting-on-a-couch-with-a-cat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        <NavIcon />
        <SpaceWidth :width="1" />
      </template>

      <template #tooltipContent>
        <ProfileMenu />
      </template>
    </ToolTip>
  </div>
</template>

<script setup>
import ToolTip from "@components/ui/ToolTip.vue";
import Avatar from "@components/ui/Avatar.vue";
import NavIcon from "@components/icons/commons/NavIcon.vue";
import SpaceWidth from "@components/ui/SpaceWidth.vue";
import ProfileMenu from "./partials/profile/ProfileMenu.vue";
</script>

<style>
.visible {
  display: block !important;
}
.invisible {
  display: block !important;
}
</style>