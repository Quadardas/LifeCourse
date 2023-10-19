import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",

      component: () => import("../pages/LoginPage.vue"),
    },
    {
      path: "/main",
      name: "main",

      component: () => import("../pages/MainPage.vue"),
    },
    {
      path: "/profile",
      name: "profile",

      component: () => import("../pages/ProfilePage.vue"),
    },
  ],
});

export default router;
