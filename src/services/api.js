import axios from "axios";
import getCookieByName from "../utlis/getCookie";

// ============================= axios part start
const api = axios.create({
    baseURL: `http://localhost:8000/api/v1`,
    headers: {
        "Content-Type": "application/json",
    },
});

api.interceptors.request.use((config) => {
    const token =  getCookieByName("token");
    if (token) {
        config.headers.Authorization = token;
    }
    return config;
}, (err) => {
    return Promise.reject(err);
})
//======================= Auth services
export const authServices = {
    loginUser: async (userData) => {
        const res = await api.post("/auth/login", userData);
        if (res.data.accessToken) {
            document.cookie = `token=${res.data.accessToken}`;
            localStorage.setItem("loggedUser", JSON.stringify(res.data.user));
        }
        return res.data;
    },
};

export const categoryServices = {
    createCategory: async (data) => {
        const res = await api.post("/product/createcategory", data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return res.data;
    },
    categoryList: async (slug) => {
        const res = await api.get(`/product/categories`);
        return res.data;
    },
   
  
};
