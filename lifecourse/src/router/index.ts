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
      path: "/feed",
      name: "feed",

      component: () => import("../pages/FeedPage.vue"),
    },
    {
      path: "/profile",
      name: "profile",

      component: () => import("../pages/ProfilePage.vue"),
    },
    {
      path: "/main",
      name: "main",

      component: () => import("../pages/MainPage.vue"),
    },
    {
      path: "/rating",
      name: "rating",

      component: () => import("../pages/RatingPage.vue"),
    },
    {
      path: "/vacancies",
      name: "vacancies",

      component: () => import("../pages/VacanciesPage.vue"),
    },
    {
      path: "/vac",
      name: "vac",

      component: () => import("../pages/VacPage.vue"),
    },
  ],
});

export default router;
