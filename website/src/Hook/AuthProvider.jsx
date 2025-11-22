import { createContext, useEffect, useState, useCallback, useMemo } from "react";
import axios from "axios";
export const AuthContext = createContext();
const API = "https://api.escuelajs.co/api/v1";
export function AuthProvider({ children }) {
  const [accessToken, setAccessToken] = useState(() => localStorage.getItem("accessToken"));
  const [refreshToken, setRefreshToken] = useState(() => localStorage.getItem("refreshToken"));
  const [user, setUser] = useState(null);
  const signup = async (username, email, password, avatar) => {
    const res = await fetch(`${API}/users/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: username, email, password, avatar }),
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`Signup failed: ${res.status} - ${err}`);
    }
    const data = await res.json();
    return data;
  };

  const login = async (email, password) => {
    const res = await fetch(`${API}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (!res.ok) {
      console.error("Login failed:", res.status);
      throw new Error("Login failed");
    }

    const data = await res.json();
    const at = data.access_token;
    const rt = data.refresh_token;
    setUser(data);
    setAccessToken(at);
    setRefreshToken(rt);
    localStorage.setItem("accessToken", at);
    localStorage.setItem("refreshToken", rt);

    const profileRes = await fetch(`${API}/auth/profile`, {
      headers: { Authorization: `Bearer ${at}` },
    });
    if (profileRes.ok) {
      setUser(profileRes.json());
    } else {
      console.error("Profile fetch failed:", profileRes.status);
    }
  };
  const update=async(username,email,password,id)=>{
    const res= await fetch(`${API}/users/${id}`,{
        method:"PUT",
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify({name:username,email,password}),
      })
      if(!res.ok){
        const err=console.log(res.status);
        throw new Error(err);
      }
      const data=await res.json();
      console.log("✅ User updated:", data);
      setUser(data)
      return data;
  }
  const logout = useCallback(() => {
    setAccessToken(null);
    setRefreshToken(null);
    setUser(null);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  }, []);

  const refreshTokenFn = useCallback(async () => {
    if (!refreshToken) return false;
    try {
      const res = await fetch(`${API}/auth/refresh-token`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refreshToken }),
      });
      if (!res.ok) {
        logout();
        return false;
      }
      const body = await res.json();
      const newAt = body.access_token;
      setAccessToken(newAt);
      localStorage.setItem("accessToken", newAt);
      return true;
    } catch (e) {
      console.error("Refresh token failed", e);
      logout();
      return false;
    }
  }, [refreshToken, logout]);

  const axiosInstance = useMemo(() => {
    const instance = axios.create({
      baseURL: API,
      headers: {
        Authorization: accessToken ? `Bearer ${accessToken}` : "",
      },
    });

    instance.interceptors.response.use(
      (res) => res,
      async (err) => {
        const original = err.config;
        if (err.response?.status === 401 && !original._retry) {
          original._retry = true;
          const success = await refreshTokenFn();
          if (success) {
            original.headers.Authorization = `Bearer ${localStorage.getItem("accessToken")}`;
            return instance(original);
          }
        }
        return Promise.reject(err);
      }
    );

    return instance;
  }, [accessToken, refreshTokenFn]);

  useEffect(() => {
    if (!accessToken) return;
    (async () => {
      try {
        const res = await fetch(`${API}/auth/profile`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        if (res.ok) setUser(await res.json());
      } catch (e) {
        console.error("Profile load failed:", e);
      }
    })();
  }, [accessToken]);

  return (
    <AuthContext.Provider value={{ user, login, logout, signup,update, axiosInstance }}>
      {children}
    </AuthContext.Provider>
  );
}
