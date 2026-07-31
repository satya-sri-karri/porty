// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = localStorage.getItem("token");
    const u = localStorage.getItem("user");
    if (t && u) { setToken(t); setUser(JSON.parse(u)); }
    setLoading(false);
  }, []);
  const login = (t, u) => { setToken(t); setUser(u); localStorage.setItem("token", t); localStorage.setItem("user", JSON.stringify(u)); };
  const logout = () => { setToken(null); setUser(null); localStorage.removeItem("token"); localStorage.removeItem("user"); };
  return <AuthContext.Provider value={{ user, token, login, logout, loading, isLoggedIn: !!token }}>{children}</AuthContext.Provider>;
};
export const useAuth = () => useContext(AuthContext);
