import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    accessToken: localStorage.getItem("accessToken") || "",
    refreshToken: localStorage.getItem("refreshToken") || "",
  }),
  getters: {
    isAuthenticated(state) {
      return !!state.accessToken;
    },
  },
  actions: {
    login(accessToken, refreshToken) {
      this.setTokens(accessToken, refreshToken);
    },
    refreshTokens(data) {
      const { access, refresh } = data;
      this.setTokens(access, refresh);
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
    logout() {
      this.clearTokens();
    },
  },
});
