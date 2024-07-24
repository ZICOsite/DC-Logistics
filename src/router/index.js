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
      path: "/orders",
      name: "orders",
      component: () => import("@/pages/Orders.vue"),
      meta: {
        auth: true,
      },
    },
    {
      path: "/order/:id-:status",
      name: "order-info",
      component: () => import("@/pages/OrderId.vue"),
      meta: {
        auth: true,
      },
    },
    {
      path: "/personal-user/",
      name: "personal-user",
      component: () => import("@/pages/PersonalUserPage.vue"),
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
