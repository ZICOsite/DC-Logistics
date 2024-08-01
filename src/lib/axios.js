import api from "@/services/api";
import axios from "axios";
import { useAuthStore } from "@/stores/authStore";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    accept: "application/json",
  },
});

const axiosAuth = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    accept: "application/json",
  },
});

axiosAuth.interceptors.request.use(
  async (config) => {
    const authStore = useAuthStore();
    if (authStore.accessToken) {
      config.headers["Authorization"] = `Bearer ${authStore.accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosAuth.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const authStore = useAuthStore();
    if (error.response.status === 401) {
      const { data } = await api.refreshTokens(
        "token/refresh/",
        authStore.refreshToken
      );
      authStore.refreshTokens(data);
    }
  }
);

export default axiosAuth;
