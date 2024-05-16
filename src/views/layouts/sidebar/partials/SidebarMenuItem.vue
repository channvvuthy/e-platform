<template>
  <div class="pt-5">
    <div v-for="menu in menuItems" :key="menu.title" class="mb-8">
      <h3 class="text-base font-default-bold mb-4 text-primary clear-both">{{ menu.title }}</h3>
      <div v-for="item in menu.items" :key="item.name" class="clear-both flex items-center mb-5 cursor-pointer"
        @click="toPage(item.route)">
        <component :is="item.icon" :size="20" />
        <p class="text-xs ml-3">{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import CourseIcon from "@components/icons/commons/CourseIcon.vue";
import DesktopIcon from "@components/icons/commons/DesktopIcon.vue";
import LibraryIcon from "@components/icons/commons/LibraryIcon.vue";
import GalleryIcon from "@components/icons/commons/GalleryIcon.vue";
import FavoriteIcon from "@components/icons/commons/FavoriteIcon.vue";
import CameraIcon from "@components/icons/commons/CameraIcon.vue";
import FolderIcon from "@components/icons/commons/FolderIcon.vue";
import ReportIcon from "@components/icons/commons/ReportIcon.vue";
import WatchIcon from "@components/icons/commons/WatchIcon.vue";
import ReadBookIcon from "@components/icons/commons/ReadBookIcon.vue";
import UsersIcon from "@components/icons/commons/UsersIcon.vue";
import HotChatIcon from "@components/icons/commons/HotChatIcon.vue";
import TermIcon from "@components/icons/commons/TermIcon.vue";
import QuestionIcon from "@components/icons/commons/QuestionIcon.vue";
import AboutIcon from "@components/icons/commons/AboutIcon.vue";

const router = useRouter();

const menuItems = [
  {
    title: "Study & Sharing",
    items: [
      { name: "My Course", route: "my-qr-code", icon: CourseIcon },
      { name: "My Zoom", route: "profile", icon: DesktopIcon },
      { name: "My  Library", route: "change-password", icon: LibraryIcon },
      { name: "Gallery", route: "friend", icon: GalleryIcon },
      { name: "Favorite", route: "certificate", icon: FavoriteIcon },
      { name: "Post", route: "language", icon: CameraIcon },
      { name: "Document", route: "logout", icon: FolderIcon }
    ]
  },
  {
    title: "Report",
    items: [
      { name: "Summary", route: "my-qr-code", icon: ReportIcon },
      { name: "Watch Video", route: "profile", icon: WatchIcon },
      { name: "Read Book", route: "change-password", icon: ReadBookIcon },
      { name: "Relative", route: "friend", icon: UsersIcon }
    ]
  },
  {
    title: "E-School Cambodia",
    items: [
      { name: "Hot Chat", route: "hot-chat", icon: HotChatIcon },
      { name: "Policy", route: "profile", icon: TermIcon },
      { name: "Help", route: "help", icon: QuestionIcon },
      { name: "About", route: "about", icon: AboutIcon }
    ]
  }
];

const toPage = pageName => {
  router.push(pageName);
};
</script>