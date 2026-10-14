import axios from "axios";

declare module "axios" {
  export interface AxiosRequestConfig {
    skipAuthRedirect?: boolean;
  }
}

const AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

AxiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");

  if (token) {
    config.headers["x-access-token"] = token;
  }

  return config;
});

AxiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    const skipRedirect = error.config?.skipAuthRedirect;

    if ((status === 401 || status === 403) && !skipRedirect) {
      localStorage.removeItem("access_token");
      localStorage.removeItem("user");

      if (window.location.pathname !== "/signin") {
        window.location.replace("/signin");
      }
    }

    return Promise.reject(error);
  },
);

export default AxiosInstance;
