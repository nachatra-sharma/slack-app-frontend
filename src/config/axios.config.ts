import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

AxiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      return config;
    }
    config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

AxiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    const hadToken = Boolean(error.config?.headers?.Authorization);

    if (status === 401 && hadToken) {
      localStorage.removeItem("access_token");
      if (window.location.pathname !== "/signin") {
        window.location.href = "/signin";
      }
    }
    return Promise.reject(error);
  },
);

export default AxiosInstance;
