import axios from "axios";

// Normalize API URL for production and development
let rawBase = import.meta.env.VITE_API_URL;

if (!rawBase) {
  rawBase = import.meta.env.PROD
    ? "https://careerpilot-backend-l02p.onrender.com/api"
    : "http://localhost:5000/api";
}

// Strip any trailing slashes
rawBase = rawBase.replace(/\/+$/, "");

// Ensure it points to the /api namespace
if (!rawBase.endsWith("/api")) {
  rawBase = `${rawBase}/api`;
}

const api = axios.create({
  baseURL: rawBase,
});

// Automatically attach JWT token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
