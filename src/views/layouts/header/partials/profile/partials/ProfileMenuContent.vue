<template>
  <div class="pt-5">
    <div v-for="item in menuItems" :key="item.name" class="flex items-center mb-5 cursor-pointer"
      @click="toPage(item.route)">
      <component :is="item.icon" :size="20" />
      <p class="text-xs ml-3">{{ item.name }}</p>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import ScanIcon from "@components/icons/commons/ScanIcon.vue";
import UserIcon from "@components/icons/commons/UserIcon.vue";
import LockIcon from "@components/icons/commons/LockIcon.vue";
import FriendIcon from "@components/icons/commons/FriendIcon.vue";
import CertificateIcon from "@components/icons/commons/CertificateIcon.vue";
import LanguageIcon from "@components/icons/commons/LanguageIcon.vue";
import LogoutIcon from "@components/icons/commons/LogoutIcon.vue";

const router = useRouter();

const menuItems = [
  { name: "My QR Code", route: "my-qr-code", icon: ScanIcon },
  { name: "Profile", route: "profile", icon: UserIcon },
  { name: "Change Password", route: "change-password", icon: LockIcon },
  { name: "Friend", route: "friend", icon: FriendIcon },
  { name: "Certificate", route: "certificate", icon: CertificateIcon },
  { name: "Language", route: "language", icon: LanguageIcon },
  { name: "Logout", route: "logout", icon: LogoutIcon }
];


const toPage = pageName => {
  const event = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    view: window
  });
  document.body.dispatchEvent(event);

  router.push(pageName);
}

</script>
