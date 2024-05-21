<template>
  <div class="flex justify-between">
    <div
      v-for="menuItem in menuItems"
      :key="menuItem.pageName"
      class="cursor-pointer"
      @click="toPage(menuItem.pageName)"
    >
      <component
        :is="menuItem.icon"
        :fill="isRouteActive(menuItem.pageName) ? '#48cae4' : '#FFFFFF'"
      />
    </div>
  </div>
</template>

<script>
import HomeIcon from "@components/icons/menus/HomeIcon.vue";
import VideoIcon from "@components/icons/menus/VideoIcon.vue";
import LibraryIcon from "@components/icons/menus/LibraryIcon.vue";
import PartnerIcon from "@components/icons/menus/PartnerIcon.vue";
import MyZoomIcon from "@components/icons/menus/MyZoomIcon.vue";

export default {
  components: {
    HomeIcon,
    VideoIcon,
    LibraryIcon,
    PartnerIcon,
    MyZoomIcon
  },
  data() {
    return {
      menuItems: [
        { pageName: "/", icon: "HomeIcon" },
        { pageName: "/video", icon: "VideoIcon" },
        { pageName: "/library", icon: "LibraryIcon" },
        { pageName: "/partner", icon: "PartnerIcon" },
        { pageName: "/my-zoom", icon: "MyZoomIcon" }
      ]
    };
  },
  methods: {
    /**
     * A description of the entire function.
     *
     * @param {type} pageName - description of parameter
     * @return {type} description of return value
     */
    toPage(pageName) {
      this.$router.push(pageName);
    },

    /**
     * Checks if the current route matches the specified page name.
     *
     * @param {string} pageName - The name of the page to check against the current route.
     * @return {boolean} Returns true if the current route matches the specified page name, otherwise returns false.
     */
    isRouteActive(pageName) {
      return this.$route.path === pageName;
    }
  }
};
</script>