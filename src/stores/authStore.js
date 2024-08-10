import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    accessToken: localStorage.getItem("accessToken") || "",
    refreshToken: localStorage.getItem("refreshToken") || "",
    isStaff: localStorage.getItem("is_staff") || false,
    users: null,
  }),
  getters: {
    isAuthenticated(state) {
      return !!state.accessToken;
    },
    getTotalOrdersUserById(state) {
      return (userId) =>
        state.users
          .find((user) => user.id === userId)
          ?.orders?.reduce((acc, item) => (acc += item.price), 0);
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
      localStorage.removeItem("is_staff");
    },
    getStaff(user) {
      localStorage.setItem("is_staff", user.is_staff);
      this.isStaff = user.is_staff;
    },
    getUsers(users) {
      this.users = users;
    },
  },
});
