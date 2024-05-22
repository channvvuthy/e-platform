import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../views/pages/user/login/LoginPage.vue';
import RegisterPage from "../views/pages/user/register/RegisterPage";
import HomePage from "../views/pages/home/HomePage";
import HotChatPage from "../views/pages/hot_chat/HotChatPage";
import LogoutPage from "../views/pages/user/logout/LogoutPage";
import ForgetPasswordPage from "../views/pages/user/forget_password/ForgetPasswordPage";
import ChangePasswordPage from "../views/pages/user/change_password/ChangePasswordPage";
import VideoPage from "../views/pages/video/VideoPage";
import LibraryPage from '../views/pages/library/LibraryPage.vue';
import VideoPackagePage from '../views/pages/video_package/VideoPackagePage.vue';
import VideoDetailPage from '../views/pages/video_detail/VideoDetailPage.vue';

const routes = [
  { path: '/', name: 'home', component: HomePage, meta: { requiresAuth: true } },
  { path: '/login', name: 'login', component: LoginPage },
  { path: '/signup', name: 'signup', component: RegisterPage },
  { path: '/logout', name: 'logout', component: LogoutPage, meta: { requiresAuth: true } },
  { path: '/hot-chat', name: 'hot-chat', component: HotChatPage },
  { path: '/friend', name: 'friend', component: HotChatPage },
  { path: '/video', name: 'video', component: VideoPage },
  { path: '/video/package/:id', name: 'video-package', component: VideoPackagePage },
  { path: '/video/detail/:id/:package_id?', name: 'video-detail', component: VideoDetailPage },
  { path: '/library', name: 'library', component: LibraryPage },
  { path: '/forget-password', name: 'forget-password', component: ForgetPasswordPage },
  { path: '/change-password', name: 'change-password', component: ChangePasswordPage },
];


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


router.beforeEach((to, from, next) => {
  if (!to.meta.requiresAuth) return next();

  const token = localStorage.getItem('xtoken');

  if (!token) {
    return next({ name: 'login' });
  }

  next();
});

export default router
