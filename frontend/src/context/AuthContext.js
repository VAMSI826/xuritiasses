import React, { createContext, useState } from "react";
import api from "../utils/api"; 
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(null);
  const [user, setUser] = useState(null);

  const loginUser = async (email, password) => {
    try {
      const response = await api.post("/login", { username: email, password });
      setAuthTokens(response.data.token);
      setUser(response.data.user);
      localStorage.setItem("authTokens", JSON.stringify(response.data.token));
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const registerUser = async (email, username, password, password2) => {
    try {
      const response = await api.post("/signup", {
        username,
        password,
        confirmpassword: password2,
      });
      setAuthTokens(response.data.token);
      setUser(response.data.user);
      localStorage.setItem("authTokens", JSON.stringify(response.data.token));
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  return (
    <AuthContext.Provider value={{ loginUser, registerUser, authTokens, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
