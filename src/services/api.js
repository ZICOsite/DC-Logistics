import axiosAuth from "@/lib/axios";
import { axiosInstance } from "@/lib/axios";

const api = {
  getOrders(url) {
    return axiosAuth.get(url);
  },
  getOrderId(url) {
    return axiosAuth.get(url);
  },
  getUser(url) {
    return axiosAuth.get(url);
  },
  login(url, phone, password) {
    return axiosInstance.post(url, {
      p_num: phone,
      password: password,
    });
  },
  refreshTokens(url, refreshToken) {
    return axiosInstance.post(url, { refresh: refreshToken });
  },
  applications(url, name, phone) {
    return axiosInstance.post(url, {
      name: name,
      phone_number: phone,
    });
  },
  getCargo(url) {
    return axiosInstance.get(url);
  },
};

export default api;
