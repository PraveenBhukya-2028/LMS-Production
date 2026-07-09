import api from "./api";

const authService = {

  login: async (loginData) => {
    const response = await api.post("/auth/login", loginData);
    return response.data;
  },

  register: async (registerData) => {
    const response = await api.post("/auth/register", registerData);
    return response.data;
  },

};

export default authService;