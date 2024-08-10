import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import { useAuthStore } from "@/stores/authStore";
import api from "@/services/api";

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
        requiresAuth: true,
      },
    },
    {
      path: "/order/:id-:status",
      name: "order-info",
      component: () => import("@/pages/OrderId.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/personal-user",
      name: "personal-user",
      component: () => import("@/pages/PersonalUserPage.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("@/pages/AdminPage.vue"),
      beforeEnter(to, from) {
        const authStore = useAuthStore();
        const getUser = async () => {
          try {
            const { data } = await api.getUser("users/user_me/");
            authStore.getStaff(data.user)
          } catch (error) {
            console.error(error.detail);
          }
        };

        getUser();

        if (!authStore.isStaff) {
          return {
            name: "home",
            params: { pathMatch: to.path.split("/").slice(1) },
            query: to.query,
            hash: to.hash,
          };
        }
      },
    },
    // {
    //   path: "/:pathMatch(.*)*",
    //   name: "NotFound",
    //   component: () => import("@/pages/NotFoundPage.vue"),
    // },
  ],
});

// Проверка токенов и защита маршрутов
router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    try {
      // Попробуем обновить токены только если они истекли
      if (!authStore.accessToken) {
        const { data } = await api.refreshTokens(
          "token/refresh/",
          authStore.refreshToken
        );
        authStore.refreshTokens(data);
      }
      if (authStore.isAuthenticated) {
        next();
      } else {
        next("/");
      }
    } catch (error) {
      console.error("Failed to refresh tokens during route navigation:", error);
      next("/");
    }
  } else {
    next();
  }
});

export default router;
