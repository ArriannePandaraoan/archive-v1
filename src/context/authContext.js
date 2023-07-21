import { createContext } from "react";
import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import Cookies from "universal-cookie";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const cookies = new Cookies();

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("access_token") || null),
    // JSON.parse(sessionStorage.getItem("user") || null)
    cookies.get("access_token" || null)
  );

  const login = async (inputs) => {
    const res = await axios.post(
      "http://localhost:8800/api/auth/login",
      inputs
    );

    setCurrentUser(res.data);
  };

  const logout = async () => {
    const res = await axios.post("http://localhost:8800/api/auth/logout");

    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("access_token", JSON.stringify(currentUser));
    // sessionStorage.setItem("user", JSON.stringify(currentUser));
    cookies.set("access_token", currentUser?.token);
  }, [currentUser, cookies]);

  // useMemo(() => cookies.set("user", currentUser), [cookies, currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
