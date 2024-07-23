import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
// import { useAuthStore } from "@/stores/authStores";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/user",
      name: "user",
      component: () => import("@/pages/UserPage.vue"),
      meta: {
        auth: true,
      },
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   const authStore = useAuthStore();

//   if (to.meta.auth && !authStore.user.accessToken) {
//     next("/");
//   } else {
//     next();
//   }
// });

export default router;
