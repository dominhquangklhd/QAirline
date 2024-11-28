import http from "../utils/http";

export const registerAccount = (body) => http.post("/auth/register", body);
export const login = (data) => {
  http.post("/auth/login", data);
};

// export const logout = () => http.post("/auth/logout");
