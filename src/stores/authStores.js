import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: {
      accessToken: null,
    },
  }),
  actions: {
    setUser(token) {
      this.user.accessToken = token;
    },
  },
  // persist: true,
});
