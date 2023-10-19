import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../pages/LoginPage.vue";

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
  ],
});

export default router;
