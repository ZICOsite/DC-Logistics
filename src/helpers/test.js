import { reactive, ref, computed } from "vue";
import { pinia } from "./pinia";
import axios from "axios";
import router from "./router"; // Предполагается, что у вас есть Vue Router

const authStore = pinia.defineStore("auth", {
  state: () => ({
    accessToken: localStorage.getItem("accessToken") || "",
    refreshToken: localStorage.getItem("refreshToken") || "",
    user: null,
    error: null,
    isLoading: false,
  }),
  actions: {
    async login(email, password) {
      this.isLoading = true;
      try {
        const response = await axios.post("/api/login", { email, password });
        const { accessToken, refreshToken, user } = response.data;
        this.setTokens(accessToken, refreshToken);
        this.user = user;
      } catch (error) {
        this.error = error.response?.data?.message || "An error occurred";
      } finally {
        this.isLoading = false;
      }
    },
    async refreshTokens() {
      try {
        const response = await axios.post("/api/refresh", {
          refreshToken: this.refreshToken,
        });
        const { accessToken, refreshToken } = response.data;
        this.setTokens(accessToken, refreshToken);
      } catch (error) {
        console.error("Failed to refresh tokens:", error);
        this.logout(); // Log the user out if refresh token fails
      }
    },
    logout() {
      this.clearTokens();
      this.user = null;
      router.push("/login");
    },
    setTokens(accessToken, refreshToken) {
      this.accessToken = accessToken;
      this.refreshToken = refreshToken;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
    },
    clearTokens() {
      this.accessToken = "";
      this.refreshToken = "";
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    },
    async fetchUser() {
      if (!this.accessToken) return;
      try {
        const response = await axios.get("/api/user", {
          headers: { Authorization: `Bearer ${this.accessToken}` },
        });
        this.user = response.data;
      } catch (error) {
        console.error("Failed to fetch user:", error);
        this.logout();
      }
    },
  },
  getters: {
    isAuthenticated() {
      return !!this.accessToken;
    },
  },
});

// Проверка токенов и защита маршрутов
router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    try {
      // Попробуем обновить токены только если они истекли
      if (!authStore.accessToken) {
        await authStore.refreshTokens();
      }
      if (authStore.isAuthenticated) {
        next();
      } else {
        next("/login");
      }
    } catch (error) {
      console.error("Failed to refresh tokens during route navigation:", error);
      next("/login");
    }
  } else {
    next();
  }
});

// const state = reactive({
//   accessToken: localStorage.getItem("accessToken") || "",
//   refreshToken: localStorage.getItem("refreshToken") || "",
//   user: null,
//   error: null,
//   isLoading: false,
// });

// export function useAuth() {
//   const login = async (email, password) => {
//     state.isLoading = true;
//     try {
//       const response = await axios.post("/api/login", { email, password });
//       const { accessToken, refreshToken, user } = response.data;
//       state.accessToken = accessToken;
//       state.refreshToken = refreshToken;
//       state.user = user;
//       localStorage.setItem("accessToken", accessToken);
//       localStorage.setItem("refreshToken", refreshToken);
//     } catch (error) {
//       state.error = error.response.data.message || "An error occurred";
//     } finally {
//       state.isLoading = false;
//     }
//   };

//   const refreshTokens = async () => {
//     try {
//       const response = await axios.post("/api/refresh", {
//         refreshToken: state.refreshToken,
//       });
//       const { accessToken, refreshToken } = response.data;
//       state.accessToken = accessToken;
//       localStorage.setItem("accessToken", accessToken);
//       if (refreshToken) {
//         state.refreshToken = refreshToken;
//         localStorage.setItem("refreshToken", refreshToken);
//       }
//     } catch (error) {
//       console.error("Failed to refresh tokens:", error);
//       logout(); // Log the user out if refresh token fails
//     }
//   };

//   const logout = () => {
//     state.accessToken = "";
//     state.refreshToken = "";
//     state.user = null;
//     localStorage.removeItem("accessToken");
//     localStorage.removeItem("refreshToken");
//     router.push("/login"); // Redirect to login page after logout
//   };

//   const isAuthenticated = computed(() => !!state.accessToken);

//   return {
//     state,
//     login,
//     refreshTokens,
//     logout,
//     isAuthenticated,
//   };
// }
