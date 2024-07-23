import { axiosAuth } from "@/lib/axios";
import { useAuthStore } from "@/stores/authStores";

const useAxiosAuth = () => {
  const authStore = useAuthStore();

  axiosAuth.interceptors.request.use((config) => {
    if (authStore.user.accessToken) {
      config.headers["Authorization"] = `Bearer ${authStore.user.accessToken}`;
    }

    return config;
  }, (error) => {
    return Promise.reject(error);
  });

  return axiosAuth;
};

export default useAxiosAuth;